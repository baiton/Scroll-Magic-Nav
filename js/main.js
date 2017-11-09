$(document).ready(function(){

  let controller = new ScrollMagic.Controller();

    let navScene = new ScrollMagic.Scene({
      triggerElement: "#custom-nav",
      triggerHook: .10
    })
    .setClassToggle("#custom-nav", 'fade-in')
    .addTo(controller)
    .addIndicators({
      name: 'NavBar',
      colorTrigger: 'black',
      colorStart: '#2c9117',
      colorEnd: '#b01515'
    });

    let pinNavScene = new ScrollMagic.Scene({
      triggerElement: '#custom-nav',
      triggerHook: 0,
    })
    .setPin("#custom-nav", {pushfollowers: false})
    .addTo(controller)
    .addIndicators({
      name: 'NavPin',
      colorTrigger: 'blue',
      colorStart: '#2c9117',
      colorEnd: '#b01515'
    })
})
