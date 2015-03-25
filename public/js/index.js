$(function() {
    var $fontInput = $('.fontInput');
    var $fontCreate = $('.fontCreate');
    var $fontShowBox = $('.W_fontShow_box');

    $fontCreate.on('click', function() {
        $.ajax({
            method: "POST",
            url: '/strawFont',
            data: {
                text:$fontInput.val()
            }
        }).done(function(msg) {
            $fontShowBox.html(msg);
        });
    });
});