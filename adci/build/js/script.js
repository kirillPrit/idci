$(document).ready(function(){var a=$(".box"),c=$(".overlay"),o=$(".box-close");$(".widget-link").on("click",function(o){o.preventDefault(),c.show(),a.toggleClass("box-active")}),o.click(function(){c.hide(),a.toggleClass("box-active")}),c.click(function(){c.hide(),a.toggleClass("box-active")});var e=$(".navbar"),l=$(".navbar-close");l.on("click",function(){e.toggleClass("navbar-active"),l.toggleClass("navbar-close-active")}),$(".slider").slick({arrows:!1,dots:!0})});