	$(function(){		
		$("#li6").find("input").on("mouseenter",function(){
			$(this).css({opacity:0.5})
		}).on("mouseleave",function(){
			$(this).css({opacity:1})
		})
		
		$("#li1").find("input").on("focus",function(){
			$("#li1").find(".span2").css({"display":"none"})
			$("#li1").find(".span1").css({"display":"block"})
			
		}).on("blur",function(){
			$("#li1").find(".span1").css({"display":"none"})
			var ret=checkUserid();
			if (ret==0) {
				$("#li1").find(".span2").css({"display":"block"})
				$("#li1").find(".span2").html('手机号码不能为空')
			}
			if (ret== -1) {
				$("#li1").find(".span2").css({"display":"block"})
				$("#li1").find(".span2").html('手机号码错误，开头数字应为1')
			}
			if (ret== -2) {
				$("#li1").find(".span2").css({"display":"block"})
				$("#li1").find(".span2").html('手机号码格式错误,11位且为数字')
			}
		})
		
		
		$("#li3").find("input").on("focus",function(){
			$("#li3").find(".span2").css({"display":"none"})
			$("#li3").find(".span1").css({"display":"block"})
			
		}).on("blur",function(){
			$("#li3").find(".span1").css({"display":"none"})
			var rel =checkYZM();
			if (rel==0) {
				$("#li3").find(".span2").css({"display":"block"})
				$("#li3").find(".span2").html('验证码不能为空')
			}
			if (rel== -1) {
				$("#li3").find(".span2").css({"display":"block"})
			}
		})
		
		$("#li3").find(".yzm").on("click",function(){
				var a="" 
				for (var i=0;i<4;i++) {
					var code = parseInt(Math.random()*10)
					a+=code;					
				} 
				$("#li3").find(".yzm").html(a)
		})
		
		$("#li4").find("input").on("focus",function(){
			$("#li4").find("span").css({"display":"block"})			
		}).on("blur",function(){
			$("#li4").find("span").css({"display":"none"})
			var rel = checkpassword();
			if (rel==0) {
				$("#li4").find("span").css({"display":"block"})		
				$("#li4").find("span").html("密码不能为空")
			}
			if(rel== -1){
				$("#li4").find("span").css({"display":"block"})		
				$("#li4").find("span").html("密码格式不对")
			}
			
		})
		
		
		$("#li6").on("click",function(){  
			var checkpassword_rel=checkpassword();
			var checkUserid_rel =checkUserid();
			var checkYZM_rel=checkYZM();
			if (checkpassword_rel==1) {
				if (checkUserid_rel==1) {
				 	if (checkYZM_rel==1) {
				 		if($('#checkbox').is(':checked')) {
    						$("#loading").css({"display":"block"})	
    						console.log(123);
    						var username = $("#li1").find("input").val();
    						console.log(username);
    						var pwd =$("#li4").find("input").val();
    						console.log(pwd);
    						var d = new Date;
    						d.setDate(d.getDate()+10);
    						setCookie("username",username,d);
    						setCookie("password",pwd,d);
    						
    						
						}
					}
				} 
			}		
		})
		
			
	})
function checkpassword(){
	var password = $("#li4").find("input").val();
	if (password=="") {
		return 0;
	}
	if (/^[0-9a-zA-Z]{6,20}$/.test(password)) {
		return 1;
	}else{
		return -1;
	}
	
}
function checkUserid(){
	var userid = $("#li1").find("input").val();
	if (userid=="") {
		return 0;
	}
	if (/^[1]{1}/.test(userid)) {
		
	}else{
		return -1
	}
	if(/^[0-9]{11}$/.test(userid)){
	}else{
		return -2
	}
	return 1
}


function checkYZM(){
	var yzm = $("#li3").find(".yzm").html();
	var your_yzm=$("#li3").find("input").val();
	if(your_yzm==""){
		return 0;
	}
	if (yzm==your_yzm) {
		return 1
	}else{
		return-1
	}
}





	

