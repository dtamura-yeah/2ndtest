window.onload = function(){
	var target = document.getElementById('div01');
	var flag;
	var flag_1st = true;
	var clickOffsetTop = 0;
	var clickOffsetLeft = 0;
	
	/*
	for( var i=0 ; i<=target.length ; i++ ){
		target[i].onmousedown = mdown;
		target[i].onmousemove = mmove;
		target[i].onmouseup = mup;
	}
	*/
	target.onmousedown = mdown;
	target.onmousemove = mmove;
	target.onmouseup = mup;

	
	function mdown(evt){
		console.log("=============================");
		console.log("štarget.onmousedownš");
		flag = 'on';
		
		if( flag_1st==true ){
			clickOffsetTop = evt.clientY - target.offsetTop;
			clickOffsetLeft = evt.clientX - target.offsetLeft;
			console.log("flag_1st = " + flag_1st);
		} else {
			clickOffsetTop = evt.clientY - parseInt(target.style.top);
			clickOffsetLeft = evt.clientX - parseInt(target.style.left);
			console.log("flag_1st = " + flag_1st);
		}
		
		console.log("clickOffsetTop = "+clickOffsetTop);
		console.log("clickOffsetLeft = "+clickOffsetLeft);
		console.log("evt.clientY = "+evt.clientY);
		console.log("evt.clientX = "+evt.clientX);
		console.log("target.style.top = "+target.style.top);
		console.log("target.style.left = "+target.style.left);
		console.log("target.offsetTop = "+target.offsetTop);
		console.log("target.offsetLeft = "+target.offsetLeft);
		console.log("-----------------------------");
		
	}
	
	function mup(){
		flag = 'off';
	}
	
	function mmove(evt){
		if( flag == 'on' ){
			if( flag_1st==true ){
				flag_1st=false;
				return;
			}
			
			target.style.top = evt.clientY - clickOffsetTop + "px";
			target.style.left = evt.clientX - clickOffsetLeft + "px";
			
			console.log("štarget.onmousemoveš" + evt);
			console.log("clickOffsetTop = "+clickOffsetTop);
			console.log("clickOffsetLeft = "+clickOffsetLeft);
			console.log("evt.clientY = "+evt.clientY);
			console.log("evt.clientX = "+evt.clientX);
			console.log("target.style.top = "+target.style.top);
			console.log("target.style.left = "+target.style.left);
			console.log("target.offsetTop = "+target.offsetTop);
			console.log("target.offsetLeft = "+target.offsetLeft);
			console.log("-----------------------------");
		}
	}
}
