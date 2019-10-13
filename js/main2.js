$(document).ready(function() {
    
    var btn_open = $("#button_callme")
    var btn_close = $("#close")
    var form_calme = $("#modal")

    btn_open.click(function () {       
        form_calme.addClass('modal_active');
    });

    btn_close.click(function () {       
        form_calme.removeClass('modal_active');
    });
    
}) 