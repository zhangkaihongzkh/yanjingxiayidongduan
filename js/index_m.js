window.onload = function(){
	download();
};

function download(){
	var oDownload = document.getElementById("download");
	var oDownloadBottom = document.getElementById("download_bottom");
}

function weixin(){
	//获取安卓，ios信息
	var browser = {
		versions:function(){
			var u = navigator.userAgent,
				app = navigator.appVersion;
			return {
				//移动端浏览器信息版本
				ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端 
				android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器 
				iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器 
				iPad: u.indexOf('iPad') > -1, //是否iPad 
			};
		}(),
	};
	console.log("111");
	var ua = navigator.userAgent.toLowerCase();
	if(ua.match(/MicroMessenger/i) != "micromessenger") {
		var mask = document.getElementById('mask');
		mask.style.display = "block";	
	} 	
}

