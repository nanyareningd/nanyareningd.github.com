//分享链接的缩略图
var imgUrl = document.getElementsByTagName("img")[0].src;
//分享链接的链接地址
var lineLink = window.location.href;
//分享链接的描述信息
var descContent = document.getElementById("description").content;
//分享链接的标题
var shareTitle = document.title;
//一般为空 就好
var appid = '';
//分享给好友
 
function shareFriend() {
	WeixinJSBridge.invoke('sendAppMessage', {
		"appid": appid,
		"img_url": imgUrl,
		"img_width": "640",
		"img_height": "640",
		"link": lineLink,
		"desc": descContent,
		"title": shareTitle
	}, function(res) {
		_report('send_msg', res.err_msg);
	})
}
//分享到朋友圈
 
function shareTimeline() {
	WeixinJSBridge.invoke('shareTimeline', {
		"img_url": imgUrl,
		"img_width": "640",
		"img_height": "640",
		"link": lineLink,
		"desc": descContent,
		"title": shareTitle
	}, function(res) {
		_report('timeline', res.err_msg);
	});
}
//分享到腾讯微博
 
function shareWeibo() {
	WeixinJSBridge.invoke('shareWeibo', {
		"content": descContent,
		"url": lineLink,
	}, function(res) {
		_report('weibo', res.err_msg);
	});
}
// 当微信内置浏览器完成内部初始化后会触发WeixinJSBridgeReady事件。
document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
	// 发送给好友
	WeixinJSBridge.on('menu:share:appmessage', function(argv) {
		shareFriend();
	});
	// 分享到朋友圈
	WeixinJSBridge.on('menu:share:timeline', function(argv) {
		shareTimeline();
	});
	// 分享到微博
	WeixinJSBridge.on('menu:share:weibo', function(argv) {
		shareWeibo();
	});
}, false);