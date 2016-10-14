
$(function(){
	
	
//	<!--中文下的div-->
	$("#top_language_list").on("mouseenter",function(){
		$("#top_language_list").find("ul").css(
			{
				"display":"block"
			}
		)
		
		}).on("mouseleave",function(){
		$("#top_language_list").find("ul").css({"display":"none"})
	})
//	<!--客户服务div-->
	$("#top_customerService").on("mouseenter",function(){
		
		$("#top_customerService").find("div").css(
			{
				"display":"block",
				"background":"gainsboro"
			}
		)}).on("mouseleave",function(){
		$("#top_customerService").find("div").css({"display":"none"})		
	})
//		<!--搜索-->	
		   
	$("#search_logo").find("span").on("mouseenter",function(){
		$("#search_logo").find("span").addClass("active");
		$(".fz").css({"display":"block"})
	}).on("mouseleave",function(){
		$("#search_logo").find("span").removeClass("active"); 
		$(".fz").css({"display":"none"})
	})
	
//	<!--分站里面隐藏的div-->
	
	$(".fz").on("mouseenter",function(){
		$("#search_logo").find("span").addClass("active");
		$(".fz").css({"display":"block"})
	}).on("mouseleave",function(){
		$("#search_logo").find("span").removeClass("active"); 
		$(".fz").css({"display":"none"})
	})
	
//	搜索左边的下拉
	$("#xiala").on("mouseenter",function(){
		$("#xiala").find("ul").css({"display":"block"})
	}).on("mouseleave",function(){
		$("#xiala").find("ul").css({"display":"none"})
	})
//	<!--商品商店下的div-->
	$("#shops").on("mouseenter",function(){
		
		$("#shops_list").css({"display":"block"})
	}).on("mouseleave",function(){
		$("#shops_list").css({"display":"none"})	
	})
//	商品商店下的div li
	$(".list_li").on("mouseenter",function(){
		$(this).find("ul").css({"display":"block"})
	}).on("mouseleave",function(){
		$(this).find("ul").css({"display":"none"})	
	})
//	采购
	$("#list1").on("mouseenter",function(){
		$(this).find("ul").css({"display":"block"})
	}).on("mouseleave",function(){
		$(this).find("ul").css({"display":"none"})	
	})
//	外贸服务
	$("#list2").on("mouseenter",function(){
		$(this).find("ul").css({"display":"block"})
	}).on("mouseleave",function(){
		$(this).find("ul").css({"display":"none"})	
	})
//	商铺服务
	$("#list3").on("mouseenter",function(){
		$(this).find("ul").css({"display":"block"})
	}).on("mouseleave",function(){
		$(this).find("ul").css({"display":"none"})	
	})
	
	
})
//供应及成交上移
function AutoScroll(obj){$(obj).find("ul:first").animate({marginTop:"-15px"},500,function(){
		$(this).css({marginTop:"0px"}).find("li:first").appendTo(this);
	});
}
$(document).ready(function(){
	setInterval('AutoScroll("#dynamics_ul")',2000);
	setInterval('AutoScroll("#Market_dynamics-ul")',3000);

});
//图片轮播
$(function(){
	var index = 0;
	var len = $("#lunbo_pting-ul1").find("li").length;
	function show(){
		if (index == len) {
			index=0;
		}else if (index<0) {
			index=len-1;
		}
		$("#lunbo_pting-ul1").find("li").eq(index).animate({opacity:1}).siblings().animate({opacity:0});
		$("#lunbo_pting-ul2").find("li").eq(index).animate({opacity:1}).siblings().animate({opacity:0.5});
	};
	function animate(){
		index++;
		show();
	}
	var timer = setInterval(animate,1000);
	
	//移入移出
	$("#lunbo_pting-ul1").on("mouseenter",function(){
		clearInterval(timer)
	}).on("mouseleave",function(){
		timer = setInterval(animate,2000);
	})
	
	//点击小图标
	$("#lunbo_pting-ul2").find("li").on("click",function(){
		index = $(this).index();
		show();
	})
	$("#lunbo_pting-ul2").find("li").on("mouseenter",function(){
		clearInterval(timer)
	}).on("mouseleave",function(){
		timer = setInterval(animate,2000);
	})
	
})



