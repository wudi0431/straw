define(['FFF'],function(FFF){
	var F=FFF.FFF;
	var Widget=F.Widget;
	function FontElement(){
		Widget.apply(this,arguments);
	}

	FontElement.ATTRS={
		boundingBox:{
			value:$('<div class="panel panel-info J_hover"></div>')
		}
	}
	F.extend(FontElement,Widget,{
		initialize:function(){

		},
		renderUI:function(){
			var that=this;
			F.on('addAttr',function(obj){

			});

			//var html=
		},
		bindUI:function(){
			var that=this;
			$('.J_hover').on('hover', function() {
				$(this).find('.J_close').show();
				$(this).find('.W_s_link_download').show();
			},function(){
				$(this).find('.J_close').hide();
				$(this).find('.W_s_link_download').hide();
			});
		},
		destructor:function(){

		}
	});
	return {
		FontElement:FontElement
	}
});
