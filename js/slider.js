//构造函数
function Slider(dom){
	//构造函数所需的参数
	this.wrap = dom;
	this.list = wrap.getElementsByTagName("l1");
	//构造三步骤
	this.init();
	this.renderDOM();
	this.bindDOM();
}

//第一步 -- 初始化
Slider.prototype.init = function(){
	//设定每一页的宽高
	this.scaleWidth = window.innerWidth;
	this.scaleHeight = window.innerHeight;
	//设定初始的索引值为0
	this.idx = 0;
};

//第二步 -- 渲染DOM
Slider.prototype.renderDOM = function(){
	var wrap = this.wrap;
	var list = wrap.getElementsByTagName("li");
	var len = list.length;

	for(var i = 0;i<len;i++){
		var item = list[i];
		item.style.height = window.innerHeight + 'px';
		item.style.width = window.innerWidth + 'px';
		item.style.webkitTransform = 'translate3d(0,'+i*this.scaleHeight+'px,0)';
		/*console.log('第'+i+'张的图片高度是'+i*this.scaleHeight+'px');
		console.log('第'+i+'张的图片宽度是'+this.scaleWidth+'px');*/
	}

	wrap.style.height = window.innerHeight + 'px';
	wrap.style.width = window.innerWidth + 'px';
};
Slider.prototype.goIndex(n){
	var idx = this.idx;
	var wrap = this.wrap;
	var list = wrap.getElementsByTagName("li");
	var len = list.length;
	var cidx;

	//如果传的的2,3数字,可以直接滑动到该索引
	if(typeof n == 'number'){
		cidx = idx;
	}else if(typeof n == 'string'){		//传的是字符串
		cidx = n*1;
	}

	//当索引超出值时
	if(cidx > len-1){
		cidx = len -1
	}else if(cidx < 0){
		cidx = 0;
	}
	//保留当前值
	this.idx = cidx;

	//改变动画的过渡方式，从无动画到有动画
	list[cidx].style.webkitTransform = '-webkit-transform 0.2s ease-out';
	list[cidx-1] && (list[cidx-1].style.webkitTransform = '-webkit-transform 0.2s ease-out');
	list[cidx+1] && (list[cidx+1].style.webkitTransform = '-webkit-transform 0.2s ease-out');

	//动画后对应的位移
	list[cidx].style.webkitTransform = 'translate3d(0,0,0)';
	list[cidx-1] && (list[cidx-1].style.webkitTransform = 'translate3d(0,'+this.scaleHeight+'px,0)');
	list[cidx+1] && (list[cidx+1].style.webkitTransform = 'translate3d(0,'+this.scaleHeight+'px,0)');
};

//第三步 -- 绑定DOM事件
Slider.prototype.bindDOM = function(){
	var wrap = this.wrap;
	var list = wrap.getElementsByTagName("li");

	var scaleH = self.scaleHeight;
	var scale = self.scaleWidth;
	var len = list.length;

	var startHandler = function(evt){
		//事件对象
	};
	//手指移动事件
	var moveHandler = function(evt){

	};
	//手抬起来的时候
	var endHandler = function(evt){

	};
	//绑定事件
	this.wrap.addEventListener('touchstart', startHandler);
	this.wrap.addEventListener('touchmove', moveHandler);
	this.wrap.addEventListener('touchend', endHandler);
};