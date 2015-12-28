// JavaScript Document

$(document).ready(function(){	
	
	/*$("#fancybox").click(function() {
		$.fancybox.open({
			//href : 'realtor-services.html',
			type : 'iframe',
			autoSize: true, // shouldn't be true ?
			fitToView: true, 
			maxWidth: 1024,
			AutoDimension: true,
			padding		: '0'
			
		});
	});*/
	/*var tempRedirect;
	$(document).ready(function ($) {
		$(".fancybox").fancybox({
			type : 'iframe',
			autoSize: false, // shouldn't be true ?
			fitToView: true, 
			width     : 1024,
			height    : 800,
			AutoDimension: true,
			padding		: '0',
			
		});
	});*/
	$("a#realtor").click(function(){
		$(".lightbox-overlay").slideDown('medium');
		$(".lightbox-overlay").load("realtor-services.html");
	});
	
	/*$(".lightbox-overlay").click(function(){
		$(".lightbox-overlay").slideUp('medium');
		$(".lightbox-overlay").unload("realtor-services.html");
	});*/
	
	$('.iframe-slider').bxSlider({
	  auto: true,
	  autoControls: true,
	  pager: false
	});
	//Mobile Navigation
	$(".navbar-toggle").click(function(){
		$(".navbar-collapse").animate({'right': '0px'}, 500);
		$("body").animate({'right': '200px'}, 500);
		$(".close-menu").addClass("close-button");
		$(".navbar-toggle .icon-bar").css('display', 'none');
		$(".navbar-toggle").css('display', 'none');
	});
	
	$(".close-menu").click(function(){
		$(".navbar-collapse").animate({'right': '-200px'}, 500);
		$("body").animate({'right': '0px'}, 500);
		$(".close-menu").removeClass("close-button");
		$(".navbar-toggle").css('display', 'block');
		$(".navbar-toggle .icon-bar").css('display', 'block');
	});  
  
	//Why Kentico
	$(".column").first().addClass("first-column");
	
	//Latest Work
	$('.slider').bxSlider({
		slideWidth: 366,
		minSlides: 2,
		maxSlides: 3,
		moveSlides: 1,
		slideMargin: 32,
		pager: false
	});
  
  	//Testimonial
	$('.bxslider').bxSlider({
	  auto: true,
	  controls: false,
	  pause: 7000,
	  adaptiveHeight: true,
	  autoControls: false
	});
	
	var slider2;    
	function bxslider(){
		var width = $(document).width();
		if(width>=992){
			var slider2=$('.bxslider').bxSlider({
				slideWidth:800
			});
	
		}
	}

	$(window).on("orientationchange load resize", function () {
		bxslider();
	});
	
	$(window).on('hashchange', function(e){
		history.replaceState ("", document.title, e.originalEvent.oldURL);
	});
});

//Get in Touch
$('form').validate({
	rules: {
		name: {
			minlength: 3,
			maxlength: 15,
			required: true
		},
		cname: {
			minlength: 3,
			maxlength: 15,
			required: true
		},
		email: {
			minlength: 3,
			//maxlength: 15,
			required: true
		},
		contact: {
			minlength: 3,
			maxlength: 15,
			required: true
		},
		subject: {
			minlength: 3,
			maxlength: 15,
			required: true
		},
		message: {
			minlength: 3,
			//maxlength: 100,
			required: true
		}
	},
	highlight: function(element) {
		$(element).closest('.form-group').addClass('has-error');
	},
	unhighlight: function(element) {
		$(element).closest('.form-group').removeClass('has-error');
	},
	errorElement: 'span',
	errorClass: 'help-block',
	errorPlacement: function(error, element) {
		if(element.parent('.input-group').length) {
			error.insertBefore(element.parent());
		} else {
			error.insertBefore(element);
		}
	}
});
$(window, document, undefined).ready(function() {

  $('input, textarea').blur(function() {
    var $this = $(this);
    if ($this.val())
      $this.addClass('used');
    else
      $this.removeClass('used');
  });

});