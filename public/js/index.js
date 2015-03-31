require.config({
    paths:{
        dom:'dom',
        font_element:'font_element',
        fontselect:'font_select'
    }
});

require(['dom','FFF','zepto','fontselect'],function(dom,FFF,$,FontSelect){
      var $d = $('#fontinemlint');
      var fe = new FontSelect.FontSelect().render({
         container:$d
      }); 

    var $fontInput = $('textarea.form-control');
    var $fontCreate = $('.btn-success');
    var $fontShowBox = $('.W_fontShow_box');
    var $facebookG = $('#webfont');


    $fontCreate.on('click', function() {
        $.ajax({
            type: "POST",
            url: '/strawFont',
            data: {
                text:$fontInput.val()
            },
            success: function(data){
              $facebookG.append(data);
            },
            error: function(xhr, type){
                alert('Ajax error!')
            }   
        });
    });
});



// $(function() {
//     var $fontInput = $('.fontInput');
//     var $fontCreate = $('.fontCreate');
//     var $fontShowBox = $('.W_fontShow_box');
//     var $facebookG = $('#facebookG');


//     $fontCreate.on('click', function() {
//         $facebookG.show();
//         $.ajax({
//             method: "POST",
//             url: '/strawFont',
//             data: {
//                 text:$fontInput.val()
//             }
//         }).done(function(msg) {
//             $fontShowBox.html(msg);
//             $facebookG.hide();
//         });
//     });
// });