//�������ӵ�����ͼ
var imgUrl = '{{ root_url }}/favicon.png';
//�������ӵ����ӵ�ַ
//var lineLink = 'http://www.uedbox.com/';
//�������ӵ�������Ϣ
var descContent = "��ɳ��������ѧ�㶫У���Լ�����վ��";
//�������ӵı���
var shareTitle = "����ers�ڹ㶫";
//һ��Ϊ�� �ͺ�
var appid = '';
//���������
 
function shareFriend() {
	WeixinJSBridge.invoke('sendAppMessage', {
		"appid": appid,
		"img_url": imgUrl,
		"img_width": "640",
		"img_height": "640",
		//"link": lineLink,
		"desc": descContent,
		"title": shareTitle
	}, function(res) {
		_report('send_msg', res.err_msg);
	})
}
//��������Ȧ
 
function shareTimeline() {
	WeixinJSBridge.invoke('shareTimeline', {
		"img_url": imgUrl,
		"img_width": "640",
		"img_height": "640",
		//"link": lineLink,
		"desc": descContent,
		"title": shareTitle
	}, function(res) {
		_report('timeline', res.err_msg);
	});
}
//������Ѷ΢��
 
function shareWeibo() {
	WeixinJSBridge.invoke('shareWeibo', {
		"content": descContent,
		//"url": lineLink,
	}, function(res) {
		_report('weibo', res.err_msg);
	});
}
// ��΢���������������ڲ���ʼ����ᴥ��WeixinJSBridgeReady�¼���
document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
	// ���͸�����
	WeixinJSBridge.on('menu:share:appmessage', function(argv) {
		shareFriend();
	});
	// ��������Ȧ
	WeixinJSBridge.on('menu:share:timeline', function(argv) {
		shareTimeline();
	});
	// ����΢��
	WeixinJSBridge.on('menu:share:weibo', function(argv) {
		shareWeibo();
	});
}, false);