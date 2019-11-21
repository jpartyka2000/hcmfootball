from __future__ import unicode_literals

from django.db import models
from datetime import datetime
from django.utils import timezone

class HcmFbDraftPicks(models.Model):
    hcm_fb_draft_picks_id = models.IntegerField(primary_key=True)
    round = models.IntegerField()
    pick_num = models.IntegerField()
    player = models.TextField()
    position = models.CharField(max_length=10)
    owner = models.TextField()
    year = models.IntegerField()

    class Meta:
        managed = True
        db_table = 'hcm_fb_draft_picks'

class HcmFbOwnerList(models.Model):
    hcm_fb_owner_list_id = models.IntegerField(primary_key=True)
    owner_name = models.CharField(max_length=40)
    team_name = models.TextField()
    year = models.IntegerField()
    draft_order = models.IntegerField()

    class Meta:
       managed = True
       db_table = 'hcm_fb_owner_list'


class HcmFbPlayerList(models.Model):
     hcm_fb_player_list_id = models.IntegerField(primary_key=True)
     player_name = models.TextField()
     position = models.CharField(max_length=5)
     rank = models.IntegerField()
     team = models.CharField(max_length=5)
     player_selected = models.CharField(max_length=1)
     year = models.IntegerField()

     class Meta:
        managed = True
        db_table = 'hcm_fb_player_list'