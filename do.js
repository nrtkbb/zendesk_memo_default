var zendesk_location = '';
setTimeout(triggerNote, 1500);
function triggerNote() {
    if (location.href != zendesk_location)
    {
        zendesk_location = location.href;
        $('.ember-view.workspace:visible .private_note').trigger('click');
    }
    setTimeout(triggerNote, 100);
}
