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
			 
		},
		bindUI:function(){
		 
		},
		destructor:function(){

		}
	});
	return {
		FontElement:FontElement
	}
});
