(function($){'use strict';var $window=$(window),$header=$('.header'),$dropdown=$('.dropdown-toggle'),$team=$('.our-team'),$gallery=$('.photo-gallery'),$client=$('.testimonials-carousel'),$client2=$('.testimonials-carousels'),$brand=$('.partner-slider'),$contact=$('#contact-form')
function handlePreloader(){if($('.preloader').length){$('.preloader').delay(500).fadeOut(500);$('body').removeClass('page-load');}}function headerStyle(){if($header.length){var windowpos=$window.scrollTop();if(windowpos>=130){$header.addClass('fixed-header');}else{$header.removeClass('fixed-header');}}}$('#bs-example-navbar-collapse-1').each(function(){$dropdown.on('click',function(){if($window.width()<992){if($(this).parent('.dropdown').hasClass('visible')){$(this).parent('.dropdown').children('.dropdown-menu').first().stop(true,true).slideUp(300);$(this).parent('.dropdown').removeClass('visible');}else{$(this).parent('.dropdown').children('.dropdown-menu').stop(true,true).slideDown(300);$(this).parent('.dropdown').addClass('visible');}}});$window.on('resize',function(){if($window.width()>991){$('.dropdown-menu').removeAttr('style');$('.dropdown ').removeClass('visible');}});});var $srcicon=$('.search-bar a'),$srcfield=$('#search');$srcicon.on('click',function(event){event.preventDefault();$srcfield.addClass('visible');event.stopPropagation();});$('.src-close').on('click',function(){$srcfield.removeClass('visible');});$srcfield.on('click',function(event){event.stopPropagation();});$window.on('click',function(e){$srcfield.removeClass('visible');});$window.on('load',function(){var current=location.pathname;var $path=current.substring(current.lastIndexOf('http://unicoderbd.com/')+1);$('.navbar-nav li a').each(function(e){var $this=$(this);if($path==$this.attr('href')){$this.parent('li').addClass('active');}else if($path==''){$('.navbar-nav li.first').addClass('active');}})})
if ($team.length) { $team.owlCarousel({ loop: true, margin: 30, nav: true, smartSpeed: 500, autoplay: false, navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'], responsive: { 0: { items: 1 }, 600: { items: 2 }, 1024: { items: 3 }, 1200: { items: 4 } } }); } if ($gallery.length) { $gallery.owlCarousel({ loop: true, margin: 30, nav: true, smartSpeed: 500, autoplay: false, navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'], responsive: { 0: { items: 1 }, 600: { items: 2 }, 1024: { items: 3 }, 1200: { items: 3 } } }); } if ($client.length) { $client.owlCarousel({ loop: true, margin: 30, nav: true, autoplayHoverPause: false, autoplay: 5000, smartSpeed: 700, navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'], responsive: { 0: { items: 1 } } }); } if ($client2.length) { $client2.owlCarousel({ loop: true, margin: 30, nav: true, autoplayHoverPause: false, autoplay: 5000, smartSpeed: 700, navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'], responsive: { 0: { items: 1 }, 600: { items: 1 }, 760: { items: 2 }, 1024: { items: 3 }, 1200: { items: 3 } } }); } if ($brand.length) { $brand.owlCarousel({ loop: true, margin: 30, nav: true, smartSpeed: 500, autoplay: 4000, navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'], responsive: { 0: { items: 1 }, 480: { items: 2 }, 600: { items: 3 }, 800: { items: 4 }, 1200: { items: 5 } } }); } if ($('.according_area').length) { $('.according_title').on('click', function () { if ($(this).hasClass('active')) { $(this).addClass('active'); } else { $('.according_title').removeClass('active'); $('.according_details').slideUp(300); $(this).addClass('active'); $(this).next('.according_details').slideDown(300); } }); } if ($('.img_view').length) { $('.img_view').fancybox({ openEffect: 'elastic', closeEffect: 'elastic', helpers: { media: {} } }); } function factCounter() { if ($('.fact-counter').length) { $('.fact-counter .count.animated').each(function () { var $t = $(this), n = $t.find(".count-num").attr("data-stop"), r = parseInt($t.find(".count-num").attr("data-speed"), 10); if (!$t.hasClass("counted")) { $t.addClass("counted"); $({ countNum: $t.find(".count-text").text() }).animate({ countNum: n }, { duration: r, easing: "linear", step: function () { $t.find(".count-num").text(Math.floor(this.countNum)); }, complete: function () { $t.find(".count-num").text(this.countNum); } }); } var size = $(this).children('.progress-bar').attr('aria-valuenow'); $(this).children('.progress-bar').css('width', size + '%'); }); } } function enableMasonry() { if ($('.sortable-masonry').length) { var winDow = $(window); var $container = $('.sortable-masonry .items-container'); var $filter = $('.sortable-masonry .filter-btns'); $container.isotope({ filter: '*', masonry: { columnWidth: 1 }, animationOptions: { duration: 1000, easing: 'linear' } }); $filter.find('li').on('click', function () { var selector = $(this).attr('data-filter'); try { $container.isotope({ filter: selector, animationOptions: { duration: 1000, easing: 'linear', queue: false } }); } catch (err) { } return false; }); winDow.on('bind', 'resize', function () { var selector = $filter.find('li.active').attr('data-filter'); $container.isotope({ filter: selector, animationOptions: { duration: 1000, easing: 'linear', queue: false } }); }); var filterItemA = $('.sortable-masonry .filter-btns li'); filterItemA.on('click', function () { var $this = $(this); if (!$this.hasClass('active')) { filterItemA.removeClass('active'); $this.addClass('active'); } }); } } enableMasonry(); if ($contact.length) { $contact.validate({ rules: { firstname: { required: true }, email: { required: true, email: true }, subject: { required: true }, message: { required: true } }, messages: { firstname: "Please enter your First Name", email: "Please enter valid Email", subject: "Please enter your Subject", message: "Please write your Message" }, submitHandler: function (form) { $('#send').attr({ 'disabled': 'true', 'value': 'Sending...' }); $.ajax({ type: 'POST', url: '//formspree.io/suhail.mir.ahmed@gmail.com', data: $(form).serialize(), dataType: 'json', success: function () { $('#send').removeAttr('disabled').attr('value', 'Send'); $("#success").slideDown("slow"); setTimeout(function () { $("#success").slideUp("slow"); }, 5000); form.reset(); }, error: function () { $('#send').removeAttr('disabled').attr('value', 'Send'); $("#error").slideDown("slow"); setTimeout(function () { $("#error").slideUp("slow"); }, 5000); } }); return false; } }); } if ($('.wow').length) { var wow = new WOW({ boxClass: 'wow', animateClass: 'animated', offset: 0, mobile: true, live: true }); wow.init(); } $(document).ready(function () { var rangeSlider = function () { var slider = $('.range-slider'), range = $('.range-slider__range'), value = $('.range-slider__value'); slider.each(function () { value.each(function () { var value = $(this).prev().attr('value'); $(this).html(value); }); range.on('input', function () { $(this).next(value).html(this.value); }); }); }; rangeSlider(); }); $window.on('scroll', function () { headerStyle(); factCounter(); }); if ($('.wow').length) { var wow = new WOW({ boxClass: 'wow', animateClass: 'animated', offset: 0, mobile: true, live: true }); wow.init(); } $window.on('scroll', function () { headerStyle(); factCounter(); }); $window.on('load', function () { handlePreloader(); enableMasonry(); }); jQuery(function () { jQuery("a.video-popup").YouTubePopUp(); }); jQuery(function () { jQuery("a.video-popup").YouTubePopUp(); });
})(window.jQuery);

$(window).resize(function () {
    console.log('resize called');
    var width = $(window).width();
    if (width <= 727 ) {
        $('.substhird').parent().css("z-index", "9999");
    }
    else {
       
    }
})
.resize();
