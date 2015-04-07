require.config({
    paths:{
        dom:'dom',
        font_element:'font_element',
        fontselect:'font_select',
        UILoading:'UILoading'
    }
});

require(['dom','FFF','zepto','fontselect','UILoading'],function(dom,FFF,$,FontSelect,UILoading){
      var $d = $('.W_s_chose');
      var fe = new FontSelect.FontSelect().render({
         container:$d 
      }); 
      var loading = new UILoading.UILoading({title:'生成中，请稍等！'}).render(); 

    var $fontInput = $('textarea.form-control');
    var $fontCreate = $('.btn-success');
    var $fontShowBox = $('.W_fontShow_box');
    var $facebookG = $('#webfont');


 

    $fontCreate.on('click', function() {
        var tt = fe.getTitle();
         console.log(tt) 
        if(tt!='选择字体'){
        	loading.showLoading();
            $.ajax({
                type: "POST",
                url: '/strawFont',
                data: {
                    text:$fontInput.val(),
                    fontname:$.trim(fe.getTitle()),
                    id:fe.getSelectIndex()
                },
                success: function(data){
                  $facebookG.append(data);
                  	loading.hideLoading();
                    $facebookG.find('.W_s_panelClose').on('click',function(){
                        $(this).parent('div').parent('div').parent().remove()
                    })

                  setTimeout(function(){
                         $.ajax({
                                type: "get",
                                url: '/downFiels?fontname='+tt+'&fonttext='+$fontInput.val()+'',
                                success: function(data){
                                      var down = $facebookG.find('.W_dowm_a');
                                         down.attr('href',window.location.origin+'/downFiels?fontname='+tt+'&fonttext='+$fontInput.val()+'');
                                },
                                error: function(xhr, type){
                                    alert('Ajax error!')
                                }   
                          });  
                          
                  },1000)
                  
                },
                error: function(xhr, type){
                    alert('Ajax error!')
                }   
            });
        }else{
            alert('请输入文字')
        }
    });
 

   $('#file').on('change',function(){  
        var data = new FormData();  
        var files = $('#file')[0].files; 
        var filenamereg =/([a-zA-Z0-9]+)(.ttf)/;   
        if (files && filenamereg.test(files[0].name)){  
            data.append('codecsv',files[0]); 
            var loading = new UILoading.UILoading({title:'上传中，请稍等！'}).render(); 
             	loading.showLoading();
             $.ajax({  
                cache: false,  
                type: 'post',  
                url:'/uploadFiels',                     
                data : data,  
                contentType: false,  
                processData: false,  
                success : function (data) {  
                		loading.hideLoading();
                   fe.getFonts();
                }  
            })    
        }else{
           alert('上传文件类型错误或文件命名错误');

        } 
        
    });  



});

 
 