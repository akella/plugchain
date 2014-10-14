head.ready(function() {

	$('.navigation__plus').on('click', function() {
		$(this).parents('body').find('.sidemenu').toggleClass('is-open');
		$(this).toggleClass('is-x');
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
		$(this).parent('.switch').find('.switch__buttons').toggleClass('is-active');
		return false;
	});


	//scroll
	$('#pane').jScrollPane({
	});
});