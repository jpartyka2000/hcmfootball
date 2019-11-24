from django.contrib.auth import authenticate, login, logout
from django.core.files.storage import FileSystemStorage
from django.shortcuts import render
from django.views.decorators.csrf import ensure_csrf_cookie
from django.http import HttpResponse
from django.utils import timezone
from django.http import HttpResponse, HttpResponseRedirect
from django.db.models import Max
from collections import OrderedDict
from django.views.decorators.csrf import csrf_exempt

from testapp.models import HcmFbDraftPicks, HcmFbOwnerList, HcmFbPlayerList

import psycopg2
import datetime

@csrf_exempt
def post_draft_pick(request):

    pick_dict_map_str = request.POST["pick_dict_map"]
    pick_dict = json.loads(pick_dict_map_str)

    draft_year = int(request.POST["year_select_value"])

    round_num = int(pick_dict.keys()[0].split("_")[1])

    #Get latest primary key value from DB
    starting_pk_id=-1
    try:
        starting_pk_id = int(HcmFbDraftPicks.objects.using("default").latest('hcm_fb_draft_picks_id').hcm_fb_draft_picks_id) + 1
    except Exception:
        starting_pk_id=1

    itemcount = 0

    for key, player_str in pick_dict.iteritems():
        key_list = key.split("_")
        pick_num = int(key_list[2])
        owner = key_list[3]

        #player_str will consist of player name and position
        player_str_list = player_str.split(",")
        player_name = player_str_list[0]

        #initial capital the first and last name, in case it was not entered onto the draft board in that way
        name_parts_list = player_name.split()
        first_name_str = name_parts_list[0].capitalize()
        last_name_str = name_parts_list[1].capitalize()
        player_name = first_name_str + ' ' + last_name_str

        if len(player_str_list) > 1:
            position = player_str_list[1]
            position = position.upper()
        else:
            position = None

        #insert row into draft picks table
        try:
            HcmFbDraftPicks.objects.using("default").create(hcm_fb_draft_picks_id=(starting_pk_id + itemcount), round=round_num, pick_num=pick_num, player=player_name, position=position, owner=owner, year=draft_year)
        except Exception:
            return HttpResponse(json.dumps([starting_pk_id, itemcount, pick_num, owner, player_name, position, round_num]))

        try:
            HcmFbPlayerList.objects.using("default").filter(year=draft_year, player_name=player_name).update(player_selected='Y')
        except Exception:
            return HttpResponse(json.dumps([starting_pk_id, itemcount, pick_num, owner, player_name, position, round_num]))

        itemcount += 1

    #reload page
    return HttpResponse(0)


@csrf_exempt
def index(request):
    context = {}

    username = request.session['user_name']
    now = datetime.datetime.now()

    if 'year_select' in request.POST:
        draft_year = int(request.POST['year_select'])
    else:
        draft_year = now.year

    #players have to be represented as a dictionary in order to allow search capability to work
    #player name + position_str + team_str is the key, player_selected_str is the value
    player_dict = OrderedDict()

    try:
        player_query_obj = HcmFbPlayerList.objects.using("default").filter(year=draft_year).order_by('rank')
    except Exception:
        pass

    for one_player_row in player_query_obj:

        player_name_str = one_player_row.player_name
        position_str = one_player_row.position
        team_str = one_player_row.team
        player_selected_str = one_player_row.player_selected

        player_key_str = player_name_str + " " + position_str + " " + team_str
        player_value_str =  player_selected_str
        player_dict[player_key_str] = player_value_str

    try:
        owner_query_obj = HcmFbOwnerList.objects.using("default").filter(year=draft_year).order_by('draft_order')
    except Exception:
        pass

    number_of_owners = len(owner_query_obj)

    welcome_message = 'The ' + str(draft_year) + ' HCM Football League Draft'

    owners_dict = {}

    for rowidx, row in enumerate(owner_query_obj):
        this_owner_name_str = row.owner_name
        this_team_name_str = row.team_name

        owners_dict[rowidx + 1] = [this_owner_name_str, this_team_name_str]

    rounds_html_str = ''

    for round_num in range(1, 16):
        if round_num % 2 == 0:
            order_list = range(number_of_owners, 0, -1)
        else:
            order_list = range(1, number_of_owners + 1)

        rounds_html_str += "<br><br><a id='#anchor_round_" + str(round_num) + "' name='#round_" + str(round_num) + "'></a>"
        rounds_html_str += "<div style='padding-top: 5px; padding-bottom: 25px; font-size: 24px; text-align: left;'>" + "Round " + str(round_num) + "</div><br>"

        #we will generate the draft round tables here
        rounds_html_str += "<table id='parent_table' border='1'><tr><td style='padding:20px;'>"

        rounds_html_str += "<table id='table_round_" + str(round_num) + "' border='0'>"

        if username == "jpartyka":
            rounds_html_str += "<tr><td>"
            rounds_html_str += "<input id='submit_round_" + str(round_num) + "' class='submit_picks_button' type='button' value='Submit Draft Picks' /><br><br>"
            rounds_html_str += "</td></tr>"

        field_picknum = -1
        for picknum in order_list:

            if round_num % 2 == 0:
                field_picknum = 15 - picknum
            else:
                field_picknum = picknum

            rounds_html_str += "<tr>"

            rounds_html_str += "<td style='padding: 20px;'><img title='" + owners_dict[picknum][1] + "' src='/static/images/" + str(draft_year) + "/" + owners_dict[picknum][0] + "_logo.png'><br><span style='font-size:20px;'>" + owners_dict[picknum][1] + "</span></td>"

            #if the pick has already been made for this field, then get the player selected and do not
            #show the text field
            field_str = ""
            try:
                pick_field_obj = HcmFbDraftPicks.objects.using("default").filter(round=round_num, pick_num=field_picknum, year=draft_year)
                field_str = pick_field_obj[0].player + "," + pick_field_obj[0].position
            except Exception:

                if pick_field_obj:
                    if pick_field_obj[0].player:
                        field_str += pick_field_obj[0].player

                    if pick_field_obj[0].position and field_str:
                        field_str += "," + pick_field_obj[0].position

            if field_str != "":
                rounds_html_str += "<td>" + field_str + "</td>"
            else:
                rounds_html_str += "<td><input id='round_" + str(round_num) + "_" + str(field_picknum) + "_" + owners_dict[picknum][0] + "' class='pick_field' type='text' value='' /></td>"

            rounds_html_str += "</tr>"

        rounds_html_str += "</table>"
        rounds_html_str += "<br />"
        rounds_html_str += "<br />"

        if username == "jpartyka":
            rounds_html_str += "<input id='submit_round_" + str(round_num) + "' class='submit_picks_button' type='button' value='Submit Draft Picks' /><br><br>"


        rounds_html_str += "<a href='#top'>Back to Top</a>"
        rounds_html_str += "<br />"
        rounds_html_str += "<br />"
        rounds_html_str += "<br />"
        rounds_html_str += "</td></tr></table>"

    context['user_name'] = username
    #context['user_id'] = 1
    context['rounds_html'] = rounds_html_str
    context['welcome_message'] = welcome_message
    context['draft_year'] = draft_year
    context['year_list'] = range(2018, now.year + 1)
    context['player_dict'] = player_dict
    return render(request, 'index.html', context)


@csrf_exempt
def test_index(request):
    context = {}

    return render(request, 'test_index.html', context)