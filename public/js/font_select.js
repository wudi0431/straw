define(['FFF','zepto'],function(FFF,$){
	var F=FFF.FFF;
	var Widget=F.Widget;
	function FontSelect(){
		Widget.apply(this,arguments);
	}

	FontSelect.ATTRS={
		boundingBox:{
			value:$('<div class="dropdown W_s_fl"></div>')
		},
		title:{
			value:'选择字体',
			changeFn:function(obj){
				var that =this;
				that.$btn.text(obj.value);
			}
		},
		selectIndex:{
			value:0
		}
	}
	F.extend(FontSelect,Widget,{
		initialize:function(){

		},
		renderUI:function(){
			var that=this;
			var html ='';
			var btnhtml='<button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1">'+that.getTitle()+'<span class="caret"></span></button>';
			$.ajax({
	            type: "get",
	            url: '/loadFontlist', 
	            success: function(data){  
	            	 for (var i = 0; i < data.length; i++) {
	            	 	var ff =data[i].replace(/\.\w*/g,"");
	            	 	if(ff!=""){ 
	            	 	 html+='<li  fontname="'+ff+'" class="W_li_click" ><a  index="'+i+'"  href="javasctipt:void(0)">'+ff+'</a></li>';
	            	 	}
	            	 }; 

	                var ulhtml ='<ul class="dropdown-menu J_select"">'+html+'</ul>' ;
	             
	               that.getBoundingBox().append(btnhtml+ulhtml);

	            },
	            error: function(xhr, type){
	                alert('Ajax error!')
	            }   
           });


		},
		bindUI:function(){
			var that=this;	

			setTimeout(function(){
				var $dom =  that.getBoundingBox();

			  that.$btn =$dom.find('#dropdownMenu1');

			 that.$ul =$dom.find('.J_select');
           
            var $lic =$dom.find('.W_li_click');

            that.$btn.on('click',function(){
            	that.$ul.show(); 
            })
            $lic.on('click',function(){
            	 that.setTitle($(this).children('a').text());
            	 that.setSelectIndex($(this).children('a').attr('index'));
            	 that.$ul.hide(); 
            })		

			},1000)
			
			

			 
		},
		destructor:function(){

		},
		getFonts:function(){
			var that=this;
			var html='';	
			$.ajax({
	            type: "get",
	            url: '/loadFontlist', 
	            success: function(data){    
	            	 for (var i = 0; i < data.length; i++) {
	            	 	var ff =data[i].replace(/\.\w*/g,"");
	            	 	var isadd =false;
	            	 	if(ff=="") continue; 
	            	  that.$ul.children('li').each(function(inde,item){
	            	  	var fontname = $(item).attr('fontname');
			          	     if(fontname==ff){
			          	     	isadd=false
			          	     	return false;
			          	     }else{
			          	     	isadd=true;
			          	     }
			          	      
			          });
	            	  if(isadd){
	            	  	html+='<li  fontname="'+ff+'" class="W_li_click" ><a index="'+i+'" href="javasctipt:void(0)">'+ff+'</a></li>';
	            	  }
	            	 };   
	                that.$ul.append(html);

	            },
	            error: function(xhr, type){
	                alert('Ajax error!')
	            }   
           });

		}
	});
	return{
		FontSelect:FontSelect
	}
});