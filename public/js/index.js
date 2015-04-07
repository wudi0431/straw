require.config({
    paths:{
        dom:'dom',
        font_element:'font_element',
        fontselect:'font_select'
    }
});

require(['dom','FFF','zepto','fontselect'],function(dom,FFF,$,FontSelect){
      var $d = $('.W_s_chose');
      var fe = new FontSelect.FontSelect().render({
         container:$d 
      }); 

    var $fontInput = $('textarea.form-control');
    var $fontCreate = $('.btn-success');
    var $fontShowBox = $('.W_fontShow_box');
    var $facebookG = $('#webfont');


 

    $fontCreate.on('click', function() {
        var tt = fe.getTitle();
         console.log(tt) 
        if(tt!='选择字体'){
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
                    $facebookG.find('.W_s_panelClose').on('click',function(){
                        $(this).parent('div').parent('div').parent().remove()
                    })

                  setTimeout(function(){
                         $.ajax({
                                type: "get",
                                url: '/downFiels?fontname='+tt+'&fonttext='+$fontInput.val()+'',
                                success: function(data){
                                      var down = $facebookG.find('.W_dowm_a');
<<<<<<< HEAD
                                         down.attr('href',window.location.origin+'/downFiels?fontname='+tt+'&fonttext='+$fontInput.val()+'');
=======
                                        down.attr('href',window.location.origin+'/downFiels?fontname='+tt+'&fonttext='+$fontInput.val()+'');
>>>>>>> upstream/master
                                     
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


// $('#submit').on('click',function  (e) {
//     e.preventDefault();


//     var $$form = document.querySelector('form');
//     var data = new FormData($$form);
//     var 
// debugger
//     var xhr = new XMLHttpRequest();

//     xhr.open('POST','/uploadFiels'); //url 是表单的提交地址。
//     xhr.send(data);
//     // body...
// })

   $('#file').on('change',function(){  
        var data = new FormData();  
        var files = $('#file')[0].files; 
        var filenamereg =/([a-zA-Z0-9]+)(.ttf)/;   
        if (files && filenamereg.test(files[0].name)){  
            data.append('codecsv',files[0]); 
             $.ajax({  
                cache: false,  
                type: 'post',  
                url:'/uploadFiels',                     
                data : data,  
                contentType: false,  
                processData: false,  
                success : function (data) {  
                   fe.getFonts();
                }  
            })    
        }else{
           alert('上传文件类型错误或文件命名错误');

        }
       
        
    });  



});

 
 