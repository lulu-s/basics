/*
 * 获取滚动的头部距离和左边距离
 * scroll().top scroll().left
 * @returns {*}
 */
function scroll() {
	if (window.pageYOffset !== null) {
		return {
			top : window.pageYOffset,
			left : window.pageXOffset
		}
	} else if (document.compatMode === "CSS1Compat") {
		return {
			top : document.documentElement.scrollTop,
			left : document.documentElement.scrollLeft
		}			
	} else {
		return {
			top : document.body.scrollTop,
			left : document.body.scrollLeft
		}					
	}
}
/*
 * 获取id
 * @param id 标签id
 * @return {obj}
 */
function $(id) {
	return typeof id === "string" ? document.getElementById(id) : null;
}

// 缓动动画公式
// begin = begin + (end - begin) * 0.2; 向下
// begin = begin + (end - begin) / 20;  向上

/*
 * 块级显示
 * @param 对象
 * @return 
 */
 function show(obj) {
 	return obj.style.display = "block";
 }

 /*
 * 隐藏
 * @param 对象
 * @return 
 */
 function hidden(obj) {
 	return obj.style.display = "none";
 }

 /*
 * 获取可视区域的的宽度和高度
 * client().width client().height
 * @returns {*}
 */
 function client() {
 	// IE9+最新浏览器
 	if (window.innerWidth) {
 		return {
 			width : window.innerWidth,
 			height : window.innerHeight
 		}
 	} else if (document.compatMode === "CSS1Compat") { // W3C
 		return {
 			width : document.documentElement.clientWidth,
 			height : document.documentElement.clientHeight
 		}
 	} else {
 		return {
 			width : document.body.clientWidth,
 			height : document.body.clientHeight
 		} 		
 	}
 }

  /*
 * 阻止冒泡
 * client().width client().height
 * @returns {*}
 */
 function stopPro(event) {
 	// W3C
 	if (event && event.stopPropagation) {
 		event.stopPropagation();
 	} else {
 		// IE678
 		window.event.cancelBubble = true;
 	}
 }