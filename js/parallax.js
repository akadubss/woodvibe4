$(document).ready(function () {

    // Init ScrollMagic
    var controller = new ScrollMagic.Controller();

    // parallax scene Training
    var slideParallaxScene = new ScrollMagic.Scene({
            triggerElement: '.bcg-parallax',
            triggerHook: 1,
            duration: '200%'
        })
        .setTween(TweenMax.from('.bcg', 1, {
            y: '-40%',
            ease: Power0.easeNone
        }))
        .addTo(controller);
    
        // parallax scene Training
    var slideParallaxScene = new ScrollMagic.Scene({
            triggerElement: '.bcg-parallax',
            triggerHook: 1,
            duration: '200%'
        })
        .setTween(TweenMax.from('.bcg2', 1, {
            y: '-40%',
            ease: Power0.easeNone
        }))
        .addTo(controller);



});
