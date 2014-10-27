head.ready(function() {

	$('.navigation__plus').on('click', function() {
		$(this).parents('body').find('.menu, .feedback-menu, .profile').removeClass('is-open');
		$(this).parents('body').find('.sign-in').toggleClass('is-open');
		$(this).parents('body').find('.navigation__menu').removeClass('is-m');
		$(this).parents('body').find('.feedback').removeClass('is-feed');
		$(this).parents('body').find('.feedback-close').removeClass('is-cl');
		$(this).toggleClass('is-x');
		return false;
	});
	$('.navigation__menu').on('click', function() {
		$(this).parents('body').find('.sign-in, .feedback-menu, .profile').removeClass('is-open');
		$(this).parents('body').find('.navigation__plus').removeClass('is-x');
		$(this).parents('body').find('.feedback').removeClass('is-feed');
		$(this).parents('body').find('.menu').toggleClass('is-open');
		$(this).parents('body').find('.feedback-close').removeClass('is-cl');
		$(this).toggleClass('is-m');
		return false;
	});
	$('.feedback').on('click', function() {
		$(this).parents('body').find('.sign-in, .menu, .profile').removeClass('is-open');
		$(this).parents('body').find('.navigation__plus').removeClass('is-x');
		$(this).parents('body').find('.navigation__menu').removeClass('is-m');
		$(this).parents('body').find('.feedback-menu').toggleClass('is-open');
		$(this).parents('body').find('.feedback-close').toggleClass('is-cl');
		$(this).toggleClass('is-feed');
		return false;
	});
	$('.navigation__prof').on('click', function() {
		$(this).parents('body').find('.sign-in, .menu, .feedback-menu').removeClass('is-open');
		$(this).parents('body').find('.navigation__plus').removeClass('is-x');
		$(this).parents('body').find('.feedback').removeClass('is-feed');
		$(this).parents('body').find('.profile').toggleClass('is-open');
		$(this).parents('body').find('.feedback-close').removeClass('is-cl');
		$(this).toggleClass('is-m');
		return false;
	});
	$('.out').on('click', function() {
		$(this).parents('body').find('.sidemenu').removeClass('is-open');
		$(this).parents('body').find('.navigation__plus').removeClass('is-x');
		$(this).parents('body').find('.navigation__menu, .navigation__prof').removeClass('is-m');
		$(this).parents('body').find('.feedback').removeClass('is-feed');
		$(this).parents('body').find('.feedback-close').removeClass('is-cl');
	});
	$('.feedback-close').on('click', function() {
		$(this).parents('body').find('.sidemenu').removeClass('is-open');
		$(this).parents('body').find('.feedback').removeClass('is-feed');
		$(this).parents('body').find('.feedback-close').removeClass('is-cl');
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
		$('#sb,#body,#expl').hide();
		$(' '+attr).show();
		return false;
	});
	//api menu
	$('.head a').click(function(event) {
		/* Act on the event */
		$('.head a').removeClass('chosen');
		$(this).addClass('chosen');
		attr = $(this).attr('href');
		$('#si1,#si2').hide();
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
});