$(document).ready(function() {

  $('#li-about').click(function() {
    $('#about-wrapper').addClass('visible');
    $('#contact-wrapper').removeClass('visible');
    $('.content-wrapper').hide();
    $('.cross-btn span').addClass('rotate');
    $('.project-item').removeClass('visible');
  });

  $('.cross-btn.about').click(function() {
    $('#about-wrapper').removeClass('visible');
    $('.content-wrapper').show(); 
  });

  $('.cross-btn').click(function() {
    $('.cross-btn span').removeClass('rotate');
  });

  $('#li-projects').click(function() {
    $('.content-wrapper').show();
    $('#about-wrapper').removeClass('visible'); 
    $('#contact-wrapper').removeClass('visible');
    $('.cross-btn span').removeClass('rotate');
    $('.project-item').removeClass('visible');
  });

  $('#li-contact').click(function() {
    $('.content-wrapper').show();
    $('#about-wrapper').removeClass('visible'); 
    $('.cross-btn span').removeClass('rotate');
  });

  $('.cross-btn.growth-m').click(function(){
    $('#gm-wrapper').addClass('visible');
    $('.content-wrapper').hide();
  });

  $('.cross-btn.luf').click(function(){
    $('#luf-wrapper').addClass('visible');
    $('.content-wrapper').hide();
  });
  $('.cross-btn.dual').click(function(){
    $('#db-wrapper').addClass('visible');
    $('.content-wrapper').hide();
  });
  $('.cross-btn.s-rhino').click(function(){
    $('#sr-wrapper').addClass('visible');
    $('.content-wrapper').hide();
  });
  $('.cross-btn.zoomdoc').click(function(){
    $('#zoomdoc-wrapper').addClass('visible');
    $('.content-wrapper').hide();
  });

  $('.cross-btn.open').click(function(){
    $('.project-item').removeClass('visible');
    $('.content-wrapper').show();
  });

});