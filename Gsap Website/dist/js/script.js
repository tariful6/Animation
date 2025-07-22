
function heroSecAnimation(){
    var tl = gsap.timeline()
    tl.from('nav .nav_logo, nav a, nav button',{
       y: -30,
       opacity : 0,
       delay :0.5,
       duration : 1,
       stagger : 0.10
    })

    tl.from('.hero_content h2',{
       x: -300,
       opacity : 0,
       duration : 0.4,
    }, '-=0.3')

    tl.from('.hero_content p',{
      x: -100,
      opacity : 0,
      duration : 0.4,
    })

    tl.from('.hero_content button',{
       opacity : 0,
       duration : 0.3,
    })

    tl.from('.hero_content img',{
       opacity : 0,
       duration : 0.5,
       x : 200
    }, '-=0.7') // -=0.7 use for smooth animation

    tl.from('.company_logo img',{
       opacity : 0,
       y: 30,
       stagger : 0.15,
       duration : 0.5,
    })
}
heroSecAnimation()

function serviceSecAnimation(){
    var tl2 = gsap.timeline({
       scrollTrigger:{
           trigger : '.service_sec',
           scroller : 'body',
           markers :true,
           start : 'top 50%',
           end : 'top 0',
           scrub : 2
        }
    })

    tl2.from('.service_header',{
       y : 30,
       opacity : 0,
    })

    tl2.from('.service_sec #cart_one',{
       x : -300,
       opacity : 0,
       duration : 1,
    }, 'anim1')

    tl2.from('.service_sec #cart_two',{
       x : 300,
       opacity : 0,
       duration : 1,
    }, 'anim1')

    tl2.from('.service_sec #cart_three',{
       x : -300,
       opacity : 0,
       duration : 1,
    }, 'anim2')

    tl2.from('.service_sec #cart_four',{
       x : 300,
       opacity : 0,
       duration : 1,
    }, 'anim2')  // 'anim2' use for animate 2 element same time.


    tl2.from('.service_sec #cart_five',{
       x : -300,
       opacity : 0,
       duration : 1,
    }, 'anim3')

    tl2.from('.service_sec #cart_six',{
       x : 300,
       opacity : 0,
       duration : 1,
    }, 'anim3')
}
serviceSecAnimation()



