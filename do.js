var zendesk_location = '';
var zendesk_comment_num = -1;
setTimeout(triggerNote, 1500);
function triggerNote() {
    var new_num = $('.ember-view.workspace:visible .ember-view.audits')
        .children().length;
    if (location.href != zendesk_location ||
        new_num != zendesk_comment_num)
    {
        zendesk_location = location.href;
        zendesk_comment_num = new_num;
        $('.ember-view.workspace:visible .private_note').trigger('click');
    }
    setTimeout(triggerNote, 100);
}
