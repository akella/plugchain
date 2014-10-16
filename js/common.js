head.ready(function() {

	$('.navigation__plus').on('click', function() {
		$(this).parents('body').find('.menu, .feedback-menu, .profile').removeClass('is-open');
		$(this).parents('body').find('.sign-in').toggleClass('is-open');
		$(this).toggleClass('is-x');
		return false;
	});
	$('.navigation__menu').on('click', function() {
		$(this).parents('body').find('.sign-in, .feedback-menu, .profile').removeClass('is-open');
		$(this).parents('body').find('.navigation__plus').removeClass('is-x');
		$(this).parents('body').find('.menu').toggleClass('is-open');
		$(this).toggleClass('is-m');
		return false;
	});
	$('.feedback').on('click', function() {
		$(this).parents('body').find('.sign-in, .menu, .profile').removeClass('is-open');
		$(this).parents('body').find('.navigation__plus').removeClass('is-x');
		$(this).parents('body').find('.feedback-menu').toggleClass('is-open');
		return false;
	});
	$('.navigation__prof').on('click', function() {
		$(this).parents('body').find('.sign-in, .menu, .feedback-menu').removeClass('is-open');
		$(this).parents('body').find('.navigation__plus').removeClass('is-x');
		$(this).parents('body').find('.profile').toggleClass('is-open');
		$(this).toggleClass('is-m');
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
	//scroll
	$('#pane').jScrollPane({
	});
});