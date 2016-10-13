$(function(){
	var $username = $("#user");
	var $password = $(".li2").find("input");
	
	
	var oldusername2 = getCookie("username2");
	var oldpassword2 = getCookie("password2");
	

	if (oldusername2) {
		$username.val(oldusername2);
		$password.val(oldpassword2);
	}
	
	
	

		var oldusername = getCookie("username");
		var oldpassword = getCookie("password");
		
		
	
		
	
	
	

	
	$(".li4").find("input").on("click",function(){
		if ($username.val()==oldusername) {
			if ($password.val()==oldpassword) {
				$("#welcome").html("登录成功") 
				$("#check").on("click",function(){
					var d = new Date;
					d.setDate(d.getDate() + 10);
					setCookie("username2",$username.val(),d);
					setCookie("password2",$password.val(),d);
				})
			}
		}
		
		if ($username.val()!=oldusername) {
			if ($password.val()!=oldpassword) {
				$("#welcome").html("用户名或者密码错误") 			
			}
		}
		
		
	})
	

	
	
	
	
	
	
	
	$username.on("focus",function(){
		$username.on("input",function(){
			if ($username.val()=="") {
				$("#tip_").css({"display":"block"})
			}else{
				$("#tip_").css({"display":"none"})				
			}
		})		
	}).on("blur",function(){
		if ($username.val()=="") {
				$("#tip_").css({"display":"block"})
		}else{
				$("#tip_").css({"display":"none"})				
		}		
	})
	if ($username.val()=="") {
				$("#tip_").css({"display":"block"})
	}else{
				$("#tip_").css({"display":"none"})				
	}
	
	
	
	
})