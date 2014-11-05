head.ready(function() {

	// $('.navigation__plus').on('click', function() {
	// 	$('.menu, .feedback-menu, .profile').removeClass('is-open');
	// 	$('.sign-in').toggleClass('is-open');
	// 	if($( '.profile').hasClass('is-open');) {}
	// 	$(this).parents('body').toggleClass('is-body');
	// 	$(this).parents('body').find('.navigation__menu').removeClass('is-m');
	// 	$(this).toggleClass('is-x');
	// 	return false;
	// });
	$('.navigation__plus').on('click', function() {
		if($('.sign-in').hasClass('is-open')) {
			$('.sign-in, .menu, .profile, .feedback-menu').removeClass('is-open');
		}
		else {
			$('.navigation__menu, .navigation__prof').removeClass('is-m');
			$('.sign-in').addClass('is-open');
		}
		if($('body').hasClass('is-body')) {
			$('body').addClass('is-body');
		}
		else {
			$('body').toggleClass('is-body');
		}
		if($('.navigation__plus').hasClass('is-x')) {
			$('body').removeClass('is-body');
		}
		else {
			$('.feedback__menu, .menu, .profile').removeClass('is-open');
			$('body').addClass('is-body');
		}
		$(this).toggleClass('is-x');
		return false;
	});

	$('.feedback').on('click', function() {
		if($('.feedback-menu').hasClass('is-open')) {
			$('.sign-in, .menu, .profile, .feedback-menu').removeClass('is-open');
		}
		else {
			$('.feedback-menu').addClass('is-open');
			$('.navigation__plus').removeClass('is-x');
			$('.navigation__menu, .navigation__prof').removeClass('is-m');
		}
		if($('body').hasClass('is-body')) {
			$('body').addClass('is-body');
		}
		else {
			$('body').removeClass('is-body');
		}
		if($('.feedback').hasClass('is-feed')) {
			$('body').removeClass('is-body');
		}
		else {
			$('.sign-in, .menu, .profile').removeClass('is-open');
			$('body').addClass('is-body');
		}
		$(this).toggleClass('is-feed');
		return false;
	});
	$('.navigation__menu').on('click', function() {
		if($('.menu').hasClass('is-open')) {
			$('.sign-in, .menu, .profile, .feedback-menu').removeClass('is-open');
		}
		else {
			$('.menu').addClass('is-open');
			$('.navigation__plus').removeClass('is-x');
			$('.navigation__menu, .navigation__prof').removeClass('is-m');
		}
		if($('body').hasClass('is-body')) {
			$('body').addClass('is-body');
		}
		else {
			$('body').removeClass('is-body');
		}
		if($('.navigation__menu').hasClass('is-m')) {
			$('body').removeClass('is-body');
		}
		else {
			$('.sign-in, .feedback__menu, .profile').removeClass('is-open');
			$('body').addClass('is-body');
		}
		$(this).toggleClass('is-m');
		return false;
	});
	$('.navigation__prof').on('click', function() {
		if($('.profile').hasClass('is-open')) {
			$('.sign-in, .menu, .profile, .feedback-menu').removeClass('is-open');
		}
		else {
			$('.profile').addClass('is-open');
			$('.navigation__plus').removeClass('is-x');
			$('.navigation__menu, .navigation__prof').removeClass('is-m');
		}
		if($('body').hasClass('is-body')) {
			$('body').addClass('is-body');
		}
		else {
			$('body').removeClass('is-body');
		}
		if($('.navigation__prof').hasClass('is-m')) {
			$('body').removeClass('is-body');
		}
		else {
			$('.sign-in, .feedback__menu, .menu').removeClass('is-open');
			$('body').addClass('is-body');
		}
		$(this).toggleClass('is-m');
		return false;
	});
	$('.overlay').on('click', function() {
		$(this).parents('body').find('.menu, .feedback-menu, .profile, .sign-in').removeClass('is-open');
		$(this).parent('body').removeClass('is-body');
		$(this).parents('body').find('.navigation__menu, .navigation__prof').removeClass('is-m');
		$(this).parents('body').find('.feedback').removeClass('is-feed');
		$(this).parents('body').find('.navigation__plus').removeClass('is-x');
		return false;
	});
	//SELECTS
	$(document).ready(function() {
	    $(document).click(function() {
	        $(".js-select-list").hide();
	        $(".js-select").removeClass("is-active");
	    });
	    function selectList() {
	        var select = $(".js-select");
	        var select_list = $(".js-select-list");
	        $("body").on("click", ".js-select", function(event){
	            if ($(this).hasClass("is-active")) {
	                select.removeClass("is-active");
	                select_list.hide();
	            }
	            else {
	                select.removeClass("is-active");
	                select_list.hide();
	                $(this).find(".js-select-list").show();
	                $(this).addClass("is-active");
	            }
	            event.stopPropagation();
	        });
	        $("body").on("click", ".js-select-list li", function(event){
	            var id = $(this).attr("data-id");
	            var text = $(this).text();
	            $(this).parents(".js-select").find(".js-select-text").text(text);
	            $(this).parents(".js-select").find(".js-select-input").val(id);
	            $(this).parent().hide();
	            $(this).parents(".js-select").removeClass("is-active");
	            event.stopPropagation();
	        });
	    }  
	    selectList();
	    $("body").on("click", ".js-select", function(event){
	        event.stopPropagation();
	    });
	});
	//api swith
	$('.switch__buttons').on('click',function() {
		$(this).parent('.switch').find('.switch__buttons').removeClass('is-active');
		$(this).addClass('is-active')
		return false;
	});
	//api menu
	$('.api__tab a').click(function(event) {
		/* Act on the event */
		$('.api__tab a').removeClass('is-active');
		$(this).addClass('is-active');
		attr = $(this).attr('href');
		$('#con,#body,#ex').hide();
		$(' '+attr).show();
		return false;
	});
	//menu
	$('.head a').click(function(event) {
		/* Act on the event */
		$('.head a').removeClass('chosen');
		$(this).addClass('chosen');
		attr = $(this).attr('href');
		$('#si1,#si2').removeClass('close');
		$(' '+attr).addClass('close');
		return false;
	});
	//api menu
	$('.switch__buttons').click(function(event) {
		/* Act on the event */
		$('.head a').removeClass('is-active');
		$(this).addClass('is-active');
		attr = $(this).attr('href');
		$('#ex,#con').hide();
		$(' '+attr).show();
		return false;
	});
	//api docks
	$('.api-arrow').on('click', function() {
		$(this).parents('.api').find('.api__inner').addClass('is-show');
		$(this).parents('.api').find('.api__right').addClass('is-hide');
	});
	//api docks
	$('.blocks__button').on('click', function() {
		$(this).parents('.api').find('.api__inner').removeClass('is-show');
		$(this).parents('.api').find('.api__right').removeClass('is-hide');
	});
	//api menu
	// $(function() {      
	//      //Enable swiping...
	//      $("body").swipe( {
	//        //Generic swipe handler for all directions
	//        swipeRight:function(event, direction, distance, duration, fingerCount, fingerData) {
	//          $('.api__sidebar').addClass('is-swiped'); 
	//          $('.api-side').addClass('is-swiped'); 
	//        },
	//        swipeLeft:function(event, direction, distance, duration, fingerCount, fingerData) {
	//          $('.api__sidebar').removeClass('is-swiped'); 
	//          $('.api-side').removeClass('is-swiped'); 
	//        },
	//        //Default is 75px, set to 0 for demo so any distance triggers swipe
	//         threshold:10
	//      });
	//    });
	$('.api-side').on('click', function() {
		// $('.api__sidebar').toggleClass('is-swiped');
		if ($('.api__sidebar').css('left')=='0px') {
			$('.api__sidebar').css('left', '-100%');
		}
		else {
			$('.api__sidebar').css('left', '0px');
		};
		$('.api-side').toggleClass('is-swiped');
		return false;
	});
	$(function() {      
	     //Enable swiping...
	     $("body").swipe( {
	       swipeRight:function(event, phase, direction, distance)
	       {
	           str="Handler fired, you swiped " + direction;
	        	$('.api__sidebar').css("left", "0");
	        	$('.api-side').addClass('is-swiped'); 
	       },
	       swipeLeft:function(event, phase, direction, distance)
	       {
	           str="Handler fired, you swiped " + direction;
	        	$('.api__sidebar').css("left", "-100%");
	        	$('.api__sidebar').removeClass('is-swiped');
	        	$('.api-side').removeClass('is-swiped'); 
	       },
	       triggerOnTouchEnd:false,
	       threshold:50
	     });
	   });
});