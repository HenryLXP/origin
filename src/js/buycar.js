$(function(){
	var count = getCookie("buy_count");
	console.log(count);
	var box = $("#box");

	if (count) {
//		box.css({"display":"none"});
		var name = getCookie("cookname");
		var price = getCookie("cookprice");
	}
	if(count>0){
		box.css({"display":"none"});
	}
	
	
	function creatgoods(){
		var $goods_list = $("#goods_list");
		for(var i = 0;i<count;i++){
	
			var $div = $("<div/>").addClass("goods1");
			var $p1 = $("<p/>").addClass("p1");
			var $p2 = $("<p/>").addClass("p2");
			var $p3 = $("<ul/>").addClass("p3");
			var $p4 = $("<p/>").addClass("p4");
			$("<input/>").attr({type:"checkbox"}).appendTo($p1);
			$p1.appendTo($div);		
			
			
			var $a1 = $("<a/>").attr({href:"#"})
			$("<img/>").attr({src:"../img/46c19eab526eacba8f27618a97b7d77b.jpg@350w_350h.jpg"}).appendTo($a1);
			$a1.appendTo($p2);
			$p2.appendTo($div);	
			
			
			
			var $li1 = $("<li/>");
			var $li2 = $("<li/>");
			var $li3 = $("<li/>");
			var $a2 = $("<a/>").attr({href:"#"}).html(name);
			$a2.appendTo($li1);
			$li1.appendTo($p3);
			var $i1 = $("<i/>").html("颜色：");
			var $span1 = $("<span/>").html("红色");
			$i1.appendTo($p3);
			$span1.appendTo($p3);
			var beizhu = $("<span/>").html("备注");
			var bz_ip = $("<input/>").attr({type:"text"});
			beizhu.appendTo($p3);
			bz_ip.appendTo($p3);
			$p3.appendTo($div);
			
			
			var money = $("<span/>").html(price).addClass("span1");
			money.appendTo($p4);
			var p4_ip = $("<input />").attr({type:"text",value:"1"});
			p4_ip.appendTo($p4);
			var money2 = $("<span/>").html(price).addClass("span2");
			money2.appendTo($p4);
			var a_del=$("<a/>").html("删除").attr({href:"#"});
			var del = $("<span/>").addClass("span3");	
			a_del.appendTo(del);
			del.appendTo($p4);
			$p4.appendTo($div);
			
			$div.appendTo($goods_list);
			
		}
		var del_goods = $(".span3");
		console.log(count);
		var num = 0;
	
		del_goods.on("click",function(){
			
				count--;
				$(this).parent().parent().remove();
				console.log(count)
				var d = new Date;
				d.setDate(d.getDate()+10);						
				setCookie("buy_count",count,d);
				console.log(count);					
		});
	
	
		
	}
	creatgoods();
	


})