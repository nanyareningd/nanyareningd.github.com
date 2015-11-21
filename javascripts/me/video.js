//为了width:height=6:5
window.onresize=Init;
function Init(){

	var ifrs = document.getElementsByTagName("iframe");
	for(var i=0;i<ifrs.length;i++)
	{
		if(ifrs[i].name==""||ifrs[i].name=="default"){
			ifrs[i].allowtransparency="true";
			ifrs[i].allowfullscreen="true";
			ifrs[i].allowfullscreeninteractive="true";
			ifrs[i].scrolling="no";
			ifrs[i].border="0";
			ifrs[i].frameborder="0";
			ifrs[i].width ="100%";
			ifrs[i].height=""+ifrs[i].clientWidth*0.83333+"";
		}
	}
}
Init();
