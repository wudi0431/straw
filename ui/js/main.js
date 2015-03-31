require(['dom','FFF','zepto','font_select'],function(dom,FFF,$,font_select){
	var FontSelect=font_select.FontSelect;
	var fs=new FontSelect();
	fs.render({
		container:$('.W_s_fl')
	})
});