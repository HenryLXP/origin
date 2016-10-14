$(function(){
	$("#shops").on("mouseenter",function(){
		
		$("#shops_list").css({"display":"block"})
	}).on("mouseleave",function(){
		$("#shops_list").css({"display":"none"})	
	})
	
	$(".list_li").on("mouseenter",function(){
		$(this).find("ul").css({"display":"block"})
	}).on("mouseleave",function(){
		$(this).find("ul").css({"display":"none"})	
	})
	
	$("#list1").on("mouseenter",function(){
		$(this).find("ul").css({"display":"block"})
	}).on("mouseleave",function(){
		$(this).find("ul").css({"display":"none"})	
	})
	
	$("#list2").on("mouseenter",function(){
		$(this).find("ul").css({"display":"block"})
	}).on("mouseleave",function(){
		$(this).find("ul").css({"display":"none"})	
	})
	$("#list3").on("mouseenter",function(){
		$(this).find("ul").css({"display":"block"})
	}).on("mouseleave",function(){
		$(this).find("ul").css({"display":"none"})	
	})
	
	var $smart = $("#buyCar_").find(".p2").find("li");
	var $large = $("#buyCar_").find(".p1").find("li");
	$smart.on("mouseenter",function(){
		
		var a=$(this).index();
		$(this).css({"background":"red"}).siblings().css({"background":"none"});
		$large.eq(a).css({"display":"block"}).siblings().css({"display":"none"});
		
		
		
	})

	//回到顶部
	var $comeback = $("#comeback");
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();

		if (scrollTop>=500) {
			$comeback.fadeIn();
		}else{
			$comeback.fadeOut();
		}
		
	})
	$comeback.on("click",function(){
//			console.log(123)
//          animate这个方法在火狐不起作用
//			$("html body").animate({"scrollTop":"0"})   
			$(window).scrollTop(0);
	})
	
	
	
//	放大镜效果
	$('#zoom_pt').xzoom({position:"right"})
	$('#zoom_pt1').xzoom({position:"right"})
	$('#zoom_pt2').xzoom({position:"right"})
	$('#zoom_pt3').xzoom({position:"right"})
	
	
	
	

	
	
	var $reduce1 = $(".padd1");
	var $reduce2 = $(".padd2");
	var $reduce3 = $(".padd3");
	var $reduce4 = $(".padd4");
	var $ul = $("#yc_count")
	var $li1 = $ul.find(".li1")
	var $li2 = $ul.find(".li2")
	var $li3 = $ul.find(".li3")
	var $li4 = $ul.find(".li4")
	
	var $li1_i1=$li1.find("i");
	var $li1_i2=$li2.find("i")
	var $li1_i3=$li3.find("i")
	var $li1_i4=$li4.find("i")
	
	var $plus1 =$(".plus1");
	var $plus2 =$(".plus2");
	var $plus3 =$(".plus3");
	var $plus4 =$(".plus4");
	var $pro = $("#produce");
	var $numb = $("#number");
	
	
	
	
	
	
	
	//table里面的总价
	var $tb_count1 = $("#zongjia")
	//table里面的数量
	var $tb_count2 = $("#shuliang")
	
	//刷新时，使数量变为0；
	$(".i2").val(0)
//	$tb_count2.val(0)
	
//	var $aa2 = $("#aa2").html(1);
//	var $aa3 = $("#aa3").html(1);
//	var $aa4 = $("#aa4").html(1);
//	var $aa1 = $("#aa1").html(1);
	var a=1;
	

	
	$plus1.on("click",function(){
		var $aa2 = $("#aa2").html();
		var $aa3 = $("#aa3").html();
		var $aa4 = $("#aa4").html();
		var $aa1 = $("#aa1").html();
		var $tb_count1 = $("#zongjia")
		//table里面的数量
		var $tb_count2 = $("#shuliang");
		var aaa = parseInt($aa1)+parseInt($aa2)+parseInt($aa3)+parseInt($aa4)+1;
		$tb_count2.html(aaa);
		$tb_count1.html(aaa*45);
		console.log($aa4);
		
		
		$ul.css({"display":"block"});
		$(this).siblings(".i2").val(a);	
	
		a++;		
		$li1.css({"display":"block"});
		$li1_i1.html(a-1);
		
		

	})	
	$reduce1.on("click",function(){
		var $aa2 = $("#aa2").html();
		var $aa3 = $("#aa3").html();
		var $aa4 = $("#aa4").html();
		var $aa1 = $("#aa1").html();
		//table里面的数量
		var $tb_count2 = $("#shuliang");
		var aaa = parseInt($aa1)+parseInt($aa2)+parseInt($aa3)+parseInt($aa4)+1;
		$tb_count2.html(aaa);
		$tb_count1.html(aaa*45);
		a--;
		if (a<=0) {
			a=0;
			$li1.css({"display":"none"});
		}
		$(this).siblings(".i2").val(a);	
		$li1_i1.html(a);

	})
	
	
	var a2=1;
	$plus2.on("click",function(){
		
		var $aa2 = $("#aa2").html();
		var $aa3 = $("#aa3").html();
		var $aa4 = $("#aa4").html();
		var $aa1 = $("#aa1").html();
		//table里面的数量
		var $tb_count2 = $("#shuliang");
		var aaa = parseInt($aa1)+parseInt($aa2)+parseInt($aa3)+parseInt($aa4)+1;
		$tb_count2.html(aaa);
		$tb_count1.html(aaa*45);
		$ul.css({"display":"block"});
		$(this).siblings(".i2").val(a2);		
		a2++;		
		$li2.css({"display":"block"});
		$li1_i2.html(a2-1);
//		console.log($aa2);
//		console.log($aa3);
//		console.log(parseInt($aa2)+parseInt($aa3))
		
		
	})	
	$reduce2.on("click",function(){
		var $aa2 = $("#aa2").html();
		var $aa3 = $("#aa3").html();
		var $aa4 = $("#aa4").html();
		var $aa1 = $("#aa1").html();
		//table里面的数量
		var $tb_count2 = $("#shuliang")
		var aaa = parseInt($aa1)+parseInt($aa2)+parseInt($aa3)+parseInt($aa4)+1
		$tb_count2.html(aaa);
		$tb_count1.html(aaa*45);
		a2--;
		if (a2<=0) {
			a2=0;
			$li2.css({"display":"none"});
		}
		$(this).siblings(".i2").val(a2);	
		$li1_i2.html(a2);
	})
	
	var a3=1;
	$plus3.on("click",function(){
		var $aa2 = $("#aa2").html();
		var $aa3 = $("#aa3").html();
		var $aa4 = $("#aa4").html();
		var $aa1 = $("#aa1").html();
		//table里面的数量
		var $tb_count2 = $("#shuliang")
		var aaa = parseInt($aa1)+parseInt($aa2)+parseInt($aa3)+parseInt($aa4)+1
		$tb_count2.html(aaa)
		$tb_count1.html(aaa*45);
		$ul.css({"display":"block"});
		$(this).siblings(".i2").val(a3);		
		a3++;		
		$li3.css({"display":"block"});
		$li1_i3.html(a3-1)
	})	
	$reduce3.on("click",function(){
		var $aa2 = $("#aa2").html();
		var $aa3 = $("#aa3").html();
		var $aa4 = $("#aa4").html();
		var $aa1 = $("#aa1").html();
		//table里面的数量
		var $tb_count2 = $("#shuliang")
		var aaa = parseInt($aa1)+parseInt($aa2)+parseInt($aa3)+parseInt($aa4)+1
		$tb_count2.html(aaa);
		$tb_count1.html(aaa*45);
		a3--;
		if (a3<=0) {
			a3=0;
			$li3.css({"display":"none"});
		}
		$(this).siblings(".i2").val(a3);	
		$li1_i3.html(a3);
	})
	
	var a4=1;
	$plus4.on("click",function(){
		var $aa2 = $("#aa2").html();
		var $aa3 = $("#aa3").html();
		var $aa4 = $("#aa4").html();
		var $aa1 = $("#aa1").html();
		//table里面的数量
		var $tb_count2 = $("#shuliang")
		var aaa = parseInt($aa1)+parseInt($aa2)+parseInt($aa3)+parseInt($aa4)+1
		$tb_count2.html(aaa);
		$tb_count1.html(aaa*45);
		$ul.css({"display":"block"});
		$(this).siblings(".i2").val(a4);		
		a4++;		
		$li4.css({"display":"block"});
		$li1_i4.html(a4-1)
	})	
	$reduce4.on("click",function(){
		var $aa2 = $("#aa2").html();
		var $aa3 = $("#aa3").html();
		var $aa4 = $("#aa4").html();
		var $aa1 = $("#aa1").html();
		//table里面的数量
		var $tb_count2 = $("#shuliang")
		var aaa = parseInt($aa1)+parseInt($aa2)+parseInt($aa3)+parseInt($aa4)+1
		$tb_count2.html(aaa);
		$tb_count1.html(aaa*45);
		a4--;
		if (a4<=0) {
			a4=0;
			$li4.css({"display":"none"});
		}
		$(this).siblings(".i2").val(a4);	
		$li1_i4.html(a4);
	})
	
	var $cookname=$("#cook_name");
	var $cookprice=$("#cook_price");
	var $buttom = $("#buycar").find("a");
	var $ckbox = $("#ckbox");
	$buttom.on("click",function(){
		
		var $aa2 = $("#aa2").html();
		var $aa3 = $("#aa3").html();
		var $aa4 = $("#aa4").html(); 
		var $aa1 = $("#aa1").html();
		var aaa = parseInt($aa1)+parseInt($aa2)+parseInt($aa3)+parseInt($aa4)+1
		//shuzi为table里面的数量
		var shuzi = aaa-1;
		$ckbox.css({"display":"block"});
		if (shuzi==0) {			
			$ckbox.html("没有商品");
		}else{
			
			//图片飞过去的效果；
			console.log(123)
			var boxx = $("#buyCar_").find(".pt");
			var $zoom_pt = $("#zoom_pt");
			$zoom_pt.clone().appendTo(boxx);
			$ckbox.html("成功加入购物车");
			
			var d =new Date;
			d.setDate(d.getDate()+10);
			setCookie("cookname",$cookname.html(),d);
			setCookie("cookprice",$cookprice.html(),d);
			setCookie("buy_count",shuzi,d);
		}
		
	})
	
	

	
	
})