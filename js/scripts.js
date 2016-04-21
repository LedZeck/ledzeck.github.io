//VEGAS BACKGROUND

$(function() {
    $('#bg').vegas({
        delay: 10000,
    timer: false,
    shuffle: false,
    transition: '',
    transitionDuration: 4000,
    overlay: false,
        slides: [
            { src: 'img/background.jpg' }
        ],
    });
})

// ANIMATIONS

$(window).scroll(function(){
    $('.circle').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
            if(imagePos < topOfWindow+600){
                $(this).addClass("expandUp");
            }
    });
});