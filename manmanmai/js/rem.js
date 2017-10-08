// 需求 ： 根据屏幕的大小动态求得这个屏幕所对应的font-size
// 细节：这段JS不要自作聪明添加一个入口函数
// 比例公式：设计图的宽度/自己设定的fontsize = 当前的屏幕宽度/这个屏幕对应的fontsize
// 获取html对象
var oHtml = document.documentElement;
// 获取屏幕的大小
var screenWidth = oHtml.offsetWidth;
// 设计图的宽度
var uiWidth = 640;
// 自己设定的fontsize值
var font = 40;

// 限制区间
if(screenWidth >= uiWidth){
	// 如果屏幕的宽度大于设计图的宽度就直接定死在设计图对应的font值
	oHtml.style.fontSize = font + 'px';
}else if(screenWidth <= 320){
	// 如果屏幕的宽度小于320的宽度就直接定死在320对应的font值
	oHtml.style.fontSize = 320/(uiWidth/font) + 'px';
}else{
	// 如果前两者都不满足
	// 根据比例公式求这个屏幕对应的font值
	oHtml.style.fontSize = screenWidth/(uiWidth/font) + 'px';
}





