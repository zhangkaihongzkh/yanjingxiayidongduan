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
}

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
		console.log('第'+i+'张的图片高度是'+i*this.scaleHeight+'px');
		console.log('第'+i+'张的图片宽度是'+this.scaleWidth+'px');
	}
}

//第三步 -- 绑定DOM事件
Slider.prototype.bindDOM = function(){
	
}