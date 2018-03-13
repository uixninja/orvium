window.onload = function(){
    var button = document.querySelectorAll(".responsive, aside .close");
    for (var i = 0; i < button.length; i++) {
        button[i].onclick = function(){
            document.querySelectorAll(".screen1 aside")[0].classList.toggle('show');
            document.querySelectorAll(".screen1 .responsive")[0].classList.toggle('hide');
        }
    };

    $('.fancybox')
        .attr('rel', 'media-gallery')
        .fancybox({
            openEffect : 'none',
            closeEffect : 'none',
            prevEffect : 'none',
            nextEffect : 'none',

            arrows : false,
            helpers : {
                media : {},
                buttons : {}
            }
        });

    $('.point_top[data-toggle="tooltip"]').tooltip({'placement' : 'bottom', 'trigger' : 'click hover'});
    $('.point_bottom[data-toggle="tooltip"]').tooltip({'placement' : 'top', 'trigger' : 'click hover'});


    $('.point_top, .point_bottom').on('show.bs.tooltip', function() {
        $('.tooltip').not(this).tooltip('hide');
    });


    $(document).click(function (event) {
        if ($(event.target).hasClass('responsive_menu')) {
            $('.side').toggleClass('show');
            $('.fade').toggleClass('in');
        } else if($('.side').hasClass('show')) {
            $('.side').removeClass('show');
            $('.fade').toggleClass('in');
        }
    });

    $(window).scroll(function() {
        if( $(window).scrollTop() > 150) {
            $('.fixedHead').addClass('active');
        }
        else{
            $('.fixedHead').removeClass('active');
        }
    });
    
}