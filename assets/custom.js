$(document).ready(function(){
  $(".block-footer-link_list").click(function(){
    $(this).toggleClass('active')
    $(this).find('.footer-block__details-content').slideToggle();
  });
});  