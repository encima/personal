$(document).ready(function() {
    $('.page p').hide(); 
  $('.page').click(function() {
    id = $(this).attr('id');
    $(this).toggleClass('active');
    $('.active').css('min-height', '600px');
    $('.page p').hide();
    if(!$('#' + id + 'p').is(":visible") && $(this).hasClass('active')) $('#' + id + ' p').show();
    $('.active').css('min-height', '600px');
    $('.active:not(#' + id + ')').removeClass('active');
    $('.page:not(.active)').css('min-height', '50px');
    // $('#' + id).css('height', '200px');
  });
});

function toggleDivs(toShow) {

}
