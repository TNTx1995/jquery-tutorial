$(document).ready(function(){
    $('#btn_2').click(function(){
        $('#custom_modal').hide();
    });
    $('#btn_1').click(function(){
        $('#custom_modal').show();
    });

    $('#btn_3').click(function(){
        $('#custom_modal').hide();
    });


    $('#btn_3').click(function(){
        $('#custom_modal').hide();
        $('#message_1').show();
    });
    $('#btn_x').click(function(){
        $('#message_1').hide();
    });

    $('#X-machine').click(function(){
        $('#X-modal').fadeToggle();
    });

    $('#btn_slide').click(()=>{
        $('#div_slide').slideToggle();
    });


});