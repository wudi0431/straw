define(['FFF','zepto'],function(FFF,$){
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
			$.ajax({
	            type: "get",
	            url: '/loadFontlist', 
	            success: function(data){
	               var html ='<li role="presentation"><a role="menuitem" tabindex="-1" href="#">SentyPaperCut</a></li>'
	               that.getBoundingBox().append(html);

	            },
	            error: function(xhr, type){
	                alert('Ajax error!')
	            }   
           });


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