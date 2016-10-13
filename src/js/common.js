$(function(){
	$("#top_language_list").on("mouseenter",function(){
		$("#top_language_list").find("ul").css(
			{
				"display":"block"
			}
		)
		
		}).on("mouseleave",function(){
		$("#top_language_list").find("ul").css({"display":"none"})
	})
	$("#top_customerService").on("mouseenter",function(){
		
		$("#top_customerService").find("div").css(
			{
				"display":"block",
				"background":"gainsboro" 
			}
		)}).on("mouseleave",function(){
		$("#top_customerService").find("div").css({"display":"none"})		
	})
		
		   
	$("#search_logo").find("span").on("mouseenter",function(){
		$("#search_logo").find("span").addClass("active");
		$(".fz").css({"display":"block"})
	}).on("mouseleave",function(){
		$("#search_logo").find("span").removeClass("active"); 
		$(".fz").css({"display":"none"})
	})
	
	$(".fz").on("mouseenter",function(){
		$("#search_logo").find("span").addClass("active");
		$(".fz").css({"display":"block"})
	}).on("mouseleave",function(){
		$("#search_logo").find("span").removeClass("active"); 
		$(".fz").css({"display":"none"})
	})
	
	$("#xiala").on("mouseenter",function(){
		$("#xiala").find("ul").css({"display":"block"})
	}).on("mouseleave",function(){
		$("#xiala").find("ul").css({"display":"none"})
	})
	
	$("#search_pt").on("mouseenter",function(){
		var timer=setTimeout(function(){
			$("#tip").css({"display":"block"})
		},1000)
	}).on("mouseleave",function(){
		$("#tip").css({"display":"none"})
	})
})