$(function(){
    $('.js-popup-link').click(function(e){
        e.preventDefault()
        $('#termination_popup').dialog({modal: true}).dialog('open').load(this.href)
        $('#profile_popup').dialog({modal: true}).dialog('open').load(this.href)
        $('#location_popup').dialog({modal: true}).dialog('open').load(this.href)
    })
})

