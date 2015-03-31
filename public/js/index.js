require(['dom','FFF','zepto'],function(dom,FFF,$){
         var $fontInput = $('textarea.form-control');
    var $fontCreate = $('.btn-success');
    var $fontShowBox = $('.W_fontShow_box');
    var $facebookG = $('#facebookG');


    $fontCreate.on('click', function() {
        $facebookG.show();
        $.ajax({
            method: "POST",
            url: '/strawFont',
            data: {
                text:$fontInput.val()
            }
        }).done(function(msg) {
            $fontShowBox.html(msg);
            $facebookG.hide();
        });
    });
});