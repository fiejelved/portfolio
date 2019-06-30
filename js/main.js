$(document).ready(function() {

  $('.nav-wrapper').scroll(function() {    
    var scroll = $('.nav-wrapper').scrollTop();
    
    if (scroll >= 20) {
      $('.top-nav').addClass('scrolled');
    } else {
      $('.top-nav').removeClass('scrolled');
    };
  });

  $('.project-item.visible').scroll(function() {    
    var scroll = $('.project-item.visible').scrollTop();
    
    if (scroll >= 20) {
      $('.top-nav').addClass('scrolled');
    } else {
      $('.top-nav').removeClass('scrolled');
    };
  });
  
  $('.top-nav-links .link').click(function() {
    $('.top-nav-links .link.current').not(this).removeClass('current');
    $(this).addClass('current');
    window.scrollTo(0,0); 
  });

  $('#li-about').click(function() {
    $('#about-wrapper').addClass('visible');
    $('.content-wrapper').hide();
    $('.cross-btn span').addClass('rotate');
    $('.project-item').removeClass('visible');
    $('#contact-wrapper').removeClass('visible');
  });

  $('#li-contact').click(function() {
    $('#contact-wrapper').addClass('visible');
    $('.content-wrapper').hide();
    $('.cross-btn span').addClass('rotate');
    $('.project-item').removeClass('visible');
    $('#about-wrapper').removeClass('visible');
  });

  $('.cross-btn.about').click(function() {
    $('#about-wrapper').removeClass('visible');
    $('.content-wrapper').fadeIn(); 
  });

  $('.cross-btn.contact').click(function() {
    $('#contact-wrapper').removeClass('visible');
    $('.content-wrapper').fadeIn(); 
  });

  $('.cross-btn.gm-open').click(function() {
    $('#gm-wrapper').removeClass('visible');
    $('.content-wrapper').fadeIn(); 
  });

  $('.cross-btn.luf-open').click(function() {
    $('#luf-wrapper').removeClass('visible');
    $('.content-wrapper').fadeIn(); 
  });

  $('.cross-btn.sr-open').click(function() {
    $('#sr-wrapper').removeClass('visible');
    $('.content-wrapper').fadeIn(); 
  });

  $('.cross-btn.banders-open').click(function() {
    $('#banders-wrapper').removeClass('visible');
    $('.content-wrapper').fadeIn(); 
  });

  $('.cross-btn.ds-open').click(function() {
    $('#ds-wrapper').removeClass('visible');
    $('.content-wrapper').fadeIn(); 
  });

  $('.cross-btn.zoomdoc-open').click(function() {
    $('#zoomdoc-wrapper').removeClass('visible');
    $('.content-wrapper').fadeIn(); 
  });

  $('.cross-btn').click(function() {
    $('.cross-btn span').toggleClass('rotate');
    window.scrollTo(0,0); 
  });

  $('#li-projects').click(function() {
    $('.content-wrapper').fadeIn();
    $('#about-wrapper').removeClass('visible'); 
    $('#contact-wrapper').removeClass('visible');
    $('.cross-btn span').removeClass('rotate');
    $('.project-item').removeClass('visible');
  });

  $('.cross-btn.growth-m').click(function(){
    $('#gm-wrapper').addClass('visible');
    $('.content-wrapper').hide();
  });

  $('.cross-btn.luf').click(function(){
    $('#luf-wrapper').addClass('visible');
    $('.content-wrapper').hide();
  });
  $('.cross-btn.ds').click(function(){
    $('#ds-wrapper').addClass('visible');
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
  $('.cross-btn.banders').click(function(){
    $('#banders-wrapper').addClass('visible');
    $('.content-wrapper').hide();
  });

  $('.cross-btn.open').click(function(){
    $('.project-item').removeClass('visible');
    $('.content-wrapper').fadeIn();
    $('.top-nav-links .link').removeClass('current');
  });

  $('.cross-btn.contact').click(function(){
    $('.top-nav-links #li-contact').removeClass('current');
    $('.top-nav-links #li-projects').addClass('current');
  });
  $('.cross-btn.about').click(function(){
    $('.top-nav-links #li-about').removeClass('current');
    $('.top-nav-links #li-projects').addClass('current');
  });
});