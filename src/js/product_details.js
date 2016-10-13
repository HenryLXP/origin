//懒加载
$(function(){
	var $goods_pt = $("#goods_pt");
	
	$.ajaxSetup({
		url:"../date/lazyloading.json",		
		success:function(res){
			$.each(res, function(idx,item) {    
				var $div = $("<div/>")
				var $ul = $("<ul/>");
				var $p =$('<p/>');   
				var $li1=$("<li/>").addClass("li1")
				var $li2=$("<li/>").addClass("li2") 
				var $li3=$("<li/>").addClass("li3")
				$("<a/>").attr({href:item.url}).html('<img src="'+item.imgurl+'"/>').appendTo($p);
				$p.appendTo($div)
				
				$("<a/>").attr({href:item.url}).html(item.title).appendTo($li1);
				$li1.appendTo($div)
				
				$("<span/>").addClass("span1").html(item.price).appendTo($li2);
				$("<span/>").addClass("span2").html(item.off).appendTo($li2);
				$li2.appendTo($div)
				
				var $a1=$("<a/>").attr({href:item.url}).addClass('title').html(item.name)
				var $a2=$("<a/>").attr({href:item.url}).addClass('title').html(item.title2)
				
				var $span1=$("<span/>").addClass("span1");
				var $span2=$("<span/>").addClass("span2");
				
				$a1.appendTo($span1);
				$a2.appendTo($span2);
				
				$span1.appendTo($li3);
				$span2.appendTo($li3);
				
				$li3.appendTo($div);
				$goods_pt.append($div);
			});
			
		}	
	});
	$.ajax();
	// 懒加载效果
	// 给window绑定scroll事件，当差不多滚动到底部是加载更多内容
	$(window).on('scroll',function(){
		// 获取滚动条滚动过的距离
		var scrollTop = $(window).scrollTop();
		console.log(scrollTop)
		// 当差不多滚动到底部是加载更多内容
		if(scrollTop >= $(document).height() - $(window).height() - 700){
			$.ajax();
		}
		
	})
})
