/* ----------- WINDOW LOAD ----------- */
$(window).load(function(){ 
	"use strict";
	/* ----------- Page Loader ----------- */
	$("#pageloader").fadeOut(1000);
	$("#pageloader > i").fadeOut(800);
	IsotopeGrid();
});	



/* ----------- DOCUMENT READY ----------- */
$(document).ready(function($) {
	"use strict";
	navMenu();
	dropDown();
	sticky();
	fullscreen();
	Animations();
	bgImage();
	parallaxBg();
	numberCounter();
	progressBar();
	owlSlider();
	venoBox();
	backgroundVideo();
	IsotopeGrid();
	bootForm();
	colorSwitcher();
	GmapInit();
	$('[data-toggle="tooltip"]').tooltip();
});



/* --------------------------------------------
			SCROLL NAVIGATION
-------------------------------------------- */	
function navMenu(){	
	/* Active When Scroll */
	$('body').scrollspy({ 
		target: '.main-nav',
		offset: 80
	});
	/* Responsive Auto Close */
	$( ".main-nav .nav li a" ).on( "click", function() {
		 $('.navbar-collapse').removeClass('in');
		 $('.navbar-toggle').addClass('collapsed');
	});
	/* Smooth Scroll Links */
	$( ".page-scroll" ).on( "click", function(event) {
		var $anchor = $(this);
		var headerH = $('nav').innerHeight();
		$('html, body')
			.stop()
			.animate({
				scrollTop: $($anchor.attr('href'))
					.offset()
					.top - 78 + "px"
			}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});
	/* Custom Toggle */
	$( ".custom-toggle" ).on( "click", function(event) {
		event.preventDefault();
	});
}

function dropDown(){	
	"use strict";
	$('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		$(this).parent().siblings().removeClass('open');
		$(this).parent().toggleClass('open');
	});
}


	
/* -------------------------------	
			STICKY
/* ----------------------------- */
function sticky() {
	"use strict";
	if ($('#nav-sticker').length) {
		$("#nav-sticker").sticky({
			topSpacing:0
		});
	 }
}

/* -------------------------------	
		FULL SCREEN
/* ----------------------------- */
function fullscreen() {
	"use strict";
	$('.full-screen').css({ 'height': $(window).height() });
		$(window).on('resize', function() {
			$('.full-screen,.full-screen .item').css({ 'height': $(window).height() 
		});
	});
}

/* ---------------------	
		ANIMATION
/* --------------------- */	
function Animations() {
	"use strict";
	$('.animated').appear(function() {
		var elem = $(this);
		var animation = elem.data('animation');
		if ( !elem.hasClass('visible') ) {
			var animationDelay = elem.data('animation-delay');
			if ( animationDelay ) {			
				setTimeout(function(){
				 elem.addClass( animation + " visible" );
				}, animationDelay);				
			} else {
				elem.addClass( animation + " visible" );
			}
		}
	});
}
/* -------------------------------	
		BACKGROUND IMAGE
/* ----------------------------- */
function bgImage(){	
	"use strict";
	var pageSection = $('[data-background]');
	pageSection.each(function(indx){
		if ($(this).attr("data-background")){
			$(this).css("background-image", "url(" + $(this).data("background") + ")");
		}
	});
	$('[data-bgcolor]').css('background', function () {
		return $(this).data('bgcolor')
	});
}
/* -------------------------------	
		PARALLAX BG IMAGE
/* ----------------------------- */
function parallaxBg(){	
	"use strict";
	if($('.parallax-bg').length != 0 && !navigator.userAgent.match(/iPad|iPhone|Android/i)){	
		$.stellar({
			horizontalScrolling: true,
			verticalOffset: 0,
			horizontalOffset: 0,
			responsive: true,
			scrollProperty: 'scroll',
			parallaxElements: false,
	  });
	}
}
 /* -------------------------------	
		NUMBER COUNTER
/* ----------------------------- */	
function numberCounter(){	
	"use strict";
	if ($('.number-counter').length) {
		$(".number-counter").appear(function(){
			$(this).each(function(){
				var datacount = $(this).attr('data-count');
				$(this).delay(6000).countTo({
					from: 10,
					to: datacount,
					speed: 3000,
					refreshInterval: 50,
				});
			});
		});
	}	
}	

 /* -------------------------------	
		PROGRESS BAR
/* ----------------------------- */	
function progressBar(){
	"use strict";
	var bar = $('.progress-bar');
		$(bar).appear(function() {
		var bar_width = $(this).attr('aria-valuenow');
		$(this).width(bar_width + '%');
		$(this).find('span').fadeIn(800);
	});
}

/* -------------------------------	
		VENO BOX
/* ----------------------------- */ 
 function venoBox() {
	 "use strict";
	 if ($('.venobox').length) {
		$('.venobox').venobox({
			numeratio: true, 
			framewidth: '50%' 
		});
	 }
 }	
 /* -------------------------------	
		OWL SLIDER
/* ----------------------------- */
 function owlSlider() {
	"use strict";
	if ($('.owl-carousel').length) {		    
		  $(".owl-carousel").each(function (index) {
			var autoplay = $(this).data('autoplay');
			var timeout = $(this).data('delay');
			var slidemargin = $(this).data('margin');
			var slidepadding = $(this).data('stagepadding');
			var items = $(this).data('items');
			var animationin = $(this).data('animatein');
			var animationout = $(this).data('animateout');
			var itemheight = $(this).data('autoheight');
			var itemwidth = $(this).data('autowidth');
			var itemmerge = $(this).data('merge');
			var navigation = $(this).data('nav');
			var pagination = $(this).data('dots');
			var infinateloop = $(this).data('loop');
			var itemsdesktop = $(this).data('desktop');
			var itemsdesktopsmall = $(this).data('desktopsmall');
			var itemstablet = $(this).data('tablet');
			var itemsmobile = $(this).data('mobile');
			$(this).owlCarousel({ 
				autoplay: autoplay,
				autoplayTimeout:timeout,
				items : items,
				margin:slidemargin,
				autoHeight:itemheight,
				autoWidth:itemwidth,
				stagePadding:slidepadding,
				URLhashListener:true,
				startPosition: 'one',
				merge:itemmerge,
				nav:navigation,
				dots:pagination,
				loop:infinateloop,
				responsive:{
					0 : {
						items:itemsmobile,
					},
					479:{
						items:itemsmobile,
					},
					768:{
						items:itemstablet,
					},
					980:{
						items:itemsdesktopsmall,
					},
					1199:{
						items:itemsdesktop,
					}
				}
			});
		});
	}  
}
/* ---------------------	
		Background Video 
/* --------------------- */
function backgroundVideo(){
	"use strict";
	if (typeof $.fn.mb_YTPlayer != 'undefined' && $.isFunction($.fn
		.mb_YTPlayer)) {
		var m = false;
		//quality: 'highres' ;
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
			navigator.userAgent)) {
			m = true
		}
		var v = $('.player');
		if (m === false) {
			v.mb_YTPlayer();
			$('#video-controls a')
				.each(function() {
					var t = $(this);
					t.on('click', (function(e) {
						e.preventDefault();
						if (t.hasClass(
							'fa-volume-off')) {
							t.removeClass(
									'fa-volume-off'
								)
								.addClass(
									'fa-volume-down'
								);
							v.unmuteYTPVolume();
							return false
						}
						if (t.hasClass(
							'fa-volume-down')) {
							t.removeClass(
									'fa-volume-down'
								)
								.addClass(
									'fa-volume-off'
								);
							v.muteYTPVolume();
							return false
						}
						if (t.hasClass('fa-pause')) {
							t.removeClass(
									'fa-pause')
								.addClass('fa-play');
							v.pauseYTP();
							return false
						}
						if (t.hasClass('fa-play')) {
							t.removeClass('fa-play')
								.addClass(
									'fa-pause');
							v.playYTP();
							return false
						}
					}));
				});
			$('#video-controls')
				.show();
		}
	}
}
/* -------------------------------	
		ISOTOPE GRID
/* ----------------------------- */
function IsotopeGrid() {
	"use strict";
	if ($('.isotope-grid').length) {
		$('.isotope-grid').each(function(){  
			var filter_selector = $(this).parent().find('.isotope-filters a.active').data('filter');
				$(this).isotope({
				// set itemSelector so .grid-sizer is not used in layout
				itemSelector: '.grid-item',
				percentPosition: true,
				animationEngine: "css",
				filter: filter_selector,
				masonry: {
				// set to the element
				columnWidth: '.grid-sizer'
				}
			});
			// ISOTOPE FILTER
			$('.isotope-filters a').on( "click", function(){
				$(this).parent().parent().find('a.active').removeClass('active');    
				$(this).addClass('active');
				var selector = $(this).parent().parent().find('a.active').attr('data-filter');  
				$(this).parents().find('.isotope-grid').isotope({ filter: selector, animationEngine : "css" });
				return false; 
			});
		});
	}
}


/* --------------------------------------------
				GOOGLE MAP
-------------------------------------------- */	
function GmapInit() {
	  Gmap = $('.map-canvas');
	  Gmap.each(function() {
		var $this           = $(this),
			lat             = -35.2835,
			lng             = 149.128,
			zoom            = 12,
			scrollwheel     = false,
			zoomcontrol 	= true,
			draggable       = true,
			mapType         = google.maps.MapTypeId.ROADMAP,
			title           = '',
			contentString   = '',
			dataLat         = $this.data('lat'),
			dataLng         = $this.data('lng'),
			dataZoom        = $this.data('zoom'),
			dataType        = $this.data('type'),
			dataScrollwheel = $this.data('scrollwheel'),
			dataZoomcontrol = $this.data('zoomcontrol'),
			dataHue         = $this.data('hue'),
			dataSaturation  = $this.data('saturation'),
			dataLightness   = $this.data('lightness'),
			dataTitle       = $this.data('title'),
			dataContent     = $this.data('content');
			
		if( dataZoom !== undefined && dataZoom !== false ) {
			zoom = parseFloat(dataZoom);
		}
		if( dataLat !== undefined && dataLat !== false ) {
			lat = parseFloat(dataLat);
		}
		if( dataLng !== undefined && dataLng !== false ) {
			lng = parseFloat(dataLng);
		}
		if( dataScrollwheel !== undefined && dataScrollwheel !== null ) {
			scrollwheel = dataScrollwheel;
		}
		if( dataZoomcontrol !== undefined && dataZoomcontrol !== null ) {
			zoomcontrol = dataZoomcontrol;
		}
		if( dataType !== undefined && dataType !== false ) {
			if( dataType == 'satellite' ) {
				mapType = google.maps.MapTypeId.SATELLITE;
			} else if( dataType == 'hybrid' ) {
				mapType = google.maps.MapTypeId.HYBRID;
			} else if( dataType == 'terrain' ) {
				mapType = google.maps.MapTypeId.TERRAIN;
			}		  	
		}
		if( dataTitle !== undefined && dataTitle !== false ) {
			title = dataTitle;
		}
		if( navigator.userAgent.match(/iPad|iPhone|Android/i) ) {
			draggable = false;
		}
		
		var mapOptions = {
		  zoom        : zoom,
		  scrollwheel : scrollwheel,
		  zoomControl : zoomcontrol,
		  draggable   : draggable,
		  center      : new google.maps.LatLng(lat, lng),
		  mapTypeId   : mapType,
		  styles:[
				  {
					"elementType": "geometry",
					"stylers": [
					  {
						"color": "#f5f5f5"
					  }
					]
				  },
				  {
					"elementType": "labels.icon",
					"stylers": [
					  {
						"visibility": "off"
					  }
					]
				  },
				  {
					"elementType": "labels.text.fill",
					"stylers": [
					  {
						"color": "#616161"
					  }
					]
				  },
				  {
					"elementType": "labels.text.stroke",
					"stylers": [
					  {
						"color": "#f5f5f5"
					  }
					]
				  },
				  {
					"featureType": "administrative.land_parcel",
					"elementType": "labels.text.fill",
					"stylers": [
					  {
						"color": "#bdbdbd"
					  }
					]
				  },
				  {
					"featureType": "poi",
					"elementType": "geometry",
					"stylers": [
					  {
						"color": "#eeeeee"
					  }
					]
				  },
				  {
					"featureType": "poi",
					"elementType": "labels.text.fill",
					"stylers": [
					  {
						"color": "#757575"
					  }
					]
				  },
				  {
					"featureType": "poi.park",
					"elementType": "geometry",
					"stylers": [
					  {
						"color": "#e5e5e5"
					  }
					]
				  },
				  {
					"featureType": "poi.park",
					"elementType": "labels.text.fill",
					"stylers": [
					  {
						"color": "#9e9e9e"
					  }
					]
				  },
				  {
					"featureType": "road",
					"elementType": "geometry",
					"stylers": [
					  {
						"color": "#ffffff"
					  }
					]
				  },
				  {
					"featureType": "road.arterial",
					"elementType": "labels.text.fill",
					"stylers": [
					  {
						"color": "#757575"
					  }
					]
				  },
				  {
					"featureType": "road.highway",
					"elementType": "geometry",
					"stylers": [
					  {
						"color": "#dadada"
					  }
					]
				  },
				  {
					"featureType": "road.highway",
					"elementType": "labels.text.fill",
					"stylers": [
					  {
						"color": "#616161"
					  }
					]
				  },
				  {
					"featureType": "road.local",
					"elementType": "labels.text.fill",
					"stylers": [
					  {
						"color": "#9e9e9e"
					  }
					]
				  },
				  {
					"featureType": "transit.line",
					"elementType": "geometry",
					"stylers": [
					  {
						"color": "#e5e5e5"
					  }
					]
				  },
				  {
					"featureType": "transit.station",
					"elementType": "geometry",
					"stylers": [
					  {
						"color": "#eeeeee"
					  }
					]
				  },
				  {
					"featureType": "water",
					"elementType": "geometry",
					"stylers": [
					  {
						"color": "#c9c9c9"
					  }
					]
				  },
				  {
					"featureType": "water",
					"elementType": "labels.text.fill",
					"stylers": [
					  {
						"color": "#9e9e9e"
					  }
					]
				  }
				]
		};		
		var map = new google.maps.Map($this[0], mapOptions);
		
		var image = 'images/map-marker.png';
		if( dataContent !== undefined && dataContent !== false ) {
			contentString = '<div class="map-data">' + '<h6>' + title + '</h6>' + '<div class="map-content">' + dataContent + '</div>' + '</div>';
		}
		var infowindow = new google.maps.InfoWindow({
			content: contentString
		});
		
		var marker = new google.maps.Marker({
		  position : new google.maps.LatLng(lat, lng),
		  map      : map,
		  icon     : image,
		  title    : title
		});
		if( dataContent !== undefined && dataContent !== false ) {
			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map,marker);
			});
		}
		
		if( dataHue !== undefined && dataHue !== false ) {
		  var styles = [
			{
			  stylers : [
				{ hue : dataHue },
				{ saturation: dataSaturation },
				{ lightness: dataLightness }
			  ]
			}
		  ];
		  map.setOptions({styles: styles});
		}
	 });	 
}
/* -------------------------------	
		CONTACT AND SUBSCRIBE FORM
/* ----------------------------- */
function bootForm() {
"use strict";
/*Subscribe Form Code*/
if ( $( "#subscribe_form" ).length !== 0 ) {
	$('#subscribe_form').bootstrapValidator({
		container: 'tooltip',
		feedbackIcons: {
			valid: 'ion-ios-checkmark-empty',
			warning: 'fa fa-user',
			invalid: 'ion-ios-close-empty',
			validating: 'fa fa-refresh'
		},
		fields: { 
			subscribe_email: {
				validators: {
					notEmpty: {
						message: 'Email is required. Please enter email.'
					},
					emailAddress: {
						message: 'Please enter a correct email address.'
					}
				}
			},	
		}
	})	
	.on('success.form.bv', function(e) {
		e.preventDefault();
		var $form        = $(e.target),
		validator    = $form.data('bootstrapValidator'),
		submitButton = validator.getSubmitButton();
		var form_data = $('#subscribe_form').serialize();
		$.ajax({
				type: "POST",
				dataType: 'json',
				url: "php/subscription.php",					
				data: form_data,
				success: function(msg){						
					$('.subscribe-message').html(msg.data);
					$('.subscribe-message').show();
					submitButton.removeAttr("disabled");
					resetForm($('#subscribe_form'));						
				},
				error: function(msg){}
		 });
		return false;
	});
}
function resetForm($form) {

	$form.find(
			'input:text, input:password, input, input:file, select, textarea'
		)
		.val('');

	$form.find('input:radio, input:checkbox')
		.removeAttr('checked')
		.removeAttr('selected');
	$form.find('button[type=submit]')
		.attr("disabled", "disabled");
}

/*Contact Form Code*/
if ( $( "#contactform" ).length !== 0 ) {
	$('#contactform').bootstrapValidator({
		container: 'tooltip',
		feedbackIcons: {
			valid: 'ion-ios-checkmark-empty',
			warning: 'fa fa-user',
			invalid: 'ion-ios-close-empty',
			validating: 'fa fa-refresh'
		},
		fields: { 
			contact_name: {
				validators: {
					notEmpty: {
						message: ''
					}
				}
			},
			contact_subject: {
				validators: {
					notEmpty: {
						message: ''
					}
				}
			},
			contact_phone: {
				validators: {
					notEmpty: {
						message: ''
					}
				}
			},
			contact_message: {
				validators: {
					notEmpty: {
						message: ''
					}
				}
			},
		}
	})	
	.on('success.form.bv', function(e) {
		e.preventDefault();
		var $form        = $(e.target),
		validator    = $form.data('bootstrapValidator'),
		submitButton = validator.getSubmitButton();
		var form_data = $('#contactform').serialize();
		$.ajax({
				type: "POST",
				dataType: 'json',
				url: "php/contact-form.php",					
				data: form_data,
				success: function(msg){						
					$('.form-message').html(msg.data);
					$('.form-message').show();
					submitButton.removeAttr("disabled");
					resetForm($('#contactform'));	
				},
				error: function(msg){}
		 });
		return false;
	});
}
	function resetForm($form) {
	
		$form.find(
				'input:text, input:password, input, input:file, select, textarea'
			)
			.val('');
	
		$form.find('input:radio, input:checkbox')
			.removeAttr('checked')
			.removeAttr('selected');
		$form.find('button[type=submit]')
			.attr("disabled", "disabled");	
	
	}
}

/* -------------------------------	
		COLOR SWITCHER
/* ----------------------------- */	
function colorSwitcher(){	
	if ($('.switcher').length) {
		// Color Skins
		$('.switcher').on( "click", function(event){								 	
			var title = jQuery(this).attr('title');
			jQuery('#changeable-colors').attr('href', 'css/color/' + title + '.css');
			return false;
		});
		// BG 
		$('.bg-switcher').on( "click", function(event){
			var attr = $(this).attr('data-background');
			$('body').css('background', 'url('+attr+')');	
			return false;
		});	
		$('.boxed-switcher').on( "click", function(event){
			$('body').addClass('boxed').removeClass('bordered');
			return false;
		});	
		$('.bordered-switcher').on( "click", function(event){
			$('body').addClass('bordered').removeClass('boxed');
			return false;
		});
		$('.default-switcher').on( "click", function(event){
			$('body').removeClass('bordered').removeClass('boxed');
			return false;
		});
		$('.panel-toggle').on( "click", function(event){
			$('.theme-panel').toggleClass("open");
			return false;
		});
	}	
}
