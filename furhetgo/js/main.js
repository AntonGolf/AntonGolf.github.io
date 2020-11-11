

$(document).ready(function(){
    $(window).scroll(function(){
        parallax();
    });
    function parallax(){
        var scrolled = $(window).scrollTop();
        $('.pr1').css('top',(400-(scrolled*.2))+'px');
        $('.pr2').css('top',(550-(scrolled*.3))+'px');

        $('.pr3').css('top',(1750-(scrolled*.2))+'px');
        $('.pr4').css('top',(2000-(scrolled*.3))+'px');

        $('.pr5').css('top',(1200-(scrolled*.2))+'px');
        $('.pr6').css('top',(1450-(scrolled*.3))+'px');

        $('.pr7').css('top',(1700-(scrolled*.3))+'px');

        $('.pr8').css('top',(750-(scrolled*.2))+'px');
        $('.pr9').css('top',(1450-(scrolled*.3))+'px');

        $('.pr10').css('top',(800-(scrolled*.2))+'px');
        $('.pr11').css('top',(1600-(scrolled*.3))+'px');
    }

    $(".nav_item a").click(function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - 78}, 1500);
    });

    $("form").submit(function () {
        var formID = $(this).attr('id');
        var formNm = $('#' + formID);
        $.ajax({
            type: "POST",
            url: 'mail.php',
            data: formNm.serialize(),
            success: function (data) {
                $('.modal').modal('hide');
                $('body').css('padding-right','0');
                $('#modal_thank').modal('show');
            },
            error: function (jqXHR, text, error) {
                $(formNm).html(error);
            }
        });
        return false;
    });
    
});



