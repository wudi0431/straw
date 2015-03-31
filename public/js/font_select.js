define(['FFF','zepto','font_element'],function(FFF,$,font_element){
	var F=FFF.FFF;
	var Widget=F.Widget;
	function FontSelect(){
		Widget.apply(this,arguments);
	}

	FontSelect.ATTRS={
		boundingBox:{
			value:$('<ul class="dropdown-menu J_select" role="menu" aria-labelledby="dropdownMenu1"></ul>')
		}
	}
	F.extend(FontSelect,Widget,{
		initialize:function(){

		},
		renderUI:function(){
			var that=this;
			//ajax..
			that.getBoundingBox().append('html');


		},
		bindUI:function(){
			$('.J_select li').on('click',function(){

			});
			F.trigger('addAttr',{

			});

		},
		destructor:function(){

		}
	});
	return{
		FontSelect:FontSelect
	}
});