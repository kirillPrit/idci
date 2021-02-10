$(document).ready(function(){
  var box = $('.box');
  var overlay = $('.overlay');
  var btnClose = $('.box-close');
  var linkClose = $('.widget-link');

  linkClose.on('click', function(e) {
    e.preventDefault();
    overlay.show();
    box.toggleClass('box-active');
  });

  btnClose.click(function(){
    overlay.hide();
    box.toggleClass('box-active');
  });

  overlay.click(function(){
    overlay.hide();
    box.toggleClass('box-active');
  });
var navbar = $('.navbar');
var button = $('.navbar-close');
button.on('click', function(){
  navbar.toggleClass('navbar-active');
  button.toggleClass('navbar-close-active');
});
// -------Слайдер---------

$('.slider').slick({
  arrows:false,
  dots:true
  });

});
