
// for first page -------------------
gsap.to("#box1",{
    x : 1000,
    y : 300,
    duration : 2,
    delay : 1,
    rotate : 360,
    backgroundColor : 'blue',
    borderRadius: '50%',
    scale : .5,
    repeat : -1,
    yoyo : true,
} )

gsap.from("#box2",{
    x : 1000,
    y : 300,
    duration : 2,
    delay : 1,
    rotate : 360,
    backgroundColor : 'yellow',
    borderRadius: '50%',
    scale : .5,
    repeat : -1,
    yoyo : true,
} )

gsap.from(".fromSec h1",{
    opacity : 0,
    y : 30,
    color : 'red',
    duration : 2,
    delay : 1,
    stagger : 0.3,
    yoyo : true,
} )

gsap.to(".toSec h2",{
    opacity : 0,
    y : 30,
    color : 'red',
    duration : 2,
    delay : 1,
    stagger : 0.3,
} )



// for second page Timeline -------------------
// manual system Timeline ------------------------------ 
// gsap.to("#box3",{
//     x : 1500,
//     duration : 1.5,
//     delay : 1,
//     rotate : 360,
// } )
// gsap.to("#box4",{
//     x : 1500,
//     backgroundColor : 'yellow',
//     duration : 1.5,
//     delay : 2.5,
// } )
// gsap.to("#box5",{
//     x : 1500,
//     backgroundColor : 'yellow',
//     duration : 1.5,
//     delay : 4,
// } )



// automate system Timeline------------------------------ 
var tl = gsap.timeline();
tl.to("#box3",{
    x : 1500,
    duration : 1.5,
    delay : 1,
    rotate : 360,
})
tl.to("#box4",{
    x : 1500,
    duration : 1.5,
    rotate : 360,
})
tl.to("#box5",{
    x : 1500,
    duration : 1.5,
    rotate : 360,
})

// automate system Timeline for navbar------------------------------ 
var tll = gsap.timeline();
tll.from('nav h4',{
    y: -20,
    opacity : 0,
    duration : 1
})

tll.from('nav h5',{
    y: -20,
    opacity : 0,
    duration : 1,
    stagger : 0.3
})
tll.from('.myName h1',{
    y: 20,
    opacity : 0,
    duration : 1,
    scale :0.2
})

//  =========================================================
// page three scroll trigger------------------------------ 
// scroll default animation start box one ----------
gsap.from('#page1 .box',{
    scale : 0,
    delay : 1,
    duration : 2,
    rotate : 360
})

// scroll animation box two ----------
gsap.from('#page2 .box',{
    scale : 0,
    // delay : 1,
    duration : 2,
    rotate : 360,
    // scrollTrigger : '#page2 .box' // for basic 
    scrollTrigger : {
        trigger : '#page2 .box',
        scroller : 'body',
        markers : true,
        start : 'top 60%',
        scrub :2,
    }
})

// scroll animation box three text animation ----------
gsap.from('#page3 h2',{
     opacity : 0,
     duration : 2,
     x : 500,
     scrollTrigger : {
        trigger : '#page3 h2',
        scroller : 'body',
        markers : true,
        start : 'top 50%',
    }
})

gsap.from('#page3 h3',{
     opacity : 0,
     duration : 2,
     x : -500,
     scrollTrigger : {
        trigger : '#page3 h2',
        scroller : 'body',
        markers : true,
        start : 'top 50%',
    }
})


// box scroll animation  and reverse animation using scroll trigger ---------------
gsap.from('#page4 .box',{
    scale : 0,
    opacity : 0,
    rotate : 720,
    duration : 1,
    scrollTrigger : {
        trigger : '#page4 .box',
        scroller : 'body',
        markers : true,
        start : 'top 60%',
        end : 'top 30%',
        scrub : 2 // give reverse animation
    }
})


// Text animation using scroll trigger and pin ---------------
gsap.from('#page5 h1',{
   transform : 'translate(-150%)',
    scrollTrigger : {
        trigger : '#page5',
        scroller : 'body',
        markers : true,
        start : 'top 0%',
        end : 'top -250%',
        scrub :2,
        pin : true, // when we use pin. we have to target element parent.
    }
})


// ==========================================================
// Svg animation -- page 4 ===============================
var initialPath = "M 10 100 Q 500 100 990 100"
var finalPath = "M 10 100 Q 500 100 990 100"

var string = document.querySelector('#string')

string.addEventListener('mousemove', function(dets){
    initialPath = `M 10 100 Q 500 ${dets.y} 990 100`
    gsap.to('svg path', {
        attr:{ d: initialPath },
        duration : 0.3,
        ease : 'power3.out'
    })
})
string.addEventListener('mouseleave', function(){
        gsap.to('svg path', {
        attr:{ d: finalPath },
        duration : 1.5,
        ease : 'elastic.out(1, 0.2)'
    })
})

// custom cursor ====================================
const cursorArea = document.querySelector('#cursorArea')
const cursorPlace = document.querySelector('#cursorPlace')
const cursor = document.querySelector('#cursor') 
const imagDiv = document.querySelector('#image') 

cursorArea.addEventListener('mousemove', function(dets){
    gsap.to(cursor, {
        opacity : 1
    })
})
cursorArea.addEventListener('mousemove', function(dets){
    gsap.to(cursor, {
        x: dets.x,
        y : dets.y,
        duration : 1,
        // ease : 'back.out'
    })
})
imagDiv.addEventListener('mouseenter', function(dets){
    cursor.innerHTML = "View More",
    gsap.to(cursor, {
        scale : 2,
        backgroundColor : '#282424c1',
        border :'1px solid white'

    })
})
imagDiv.addEventListener('mouseleave', function(dets){
    cursor.innerHTML = "",
    gsap.to(cursor, {
        scale : 1,
         backgroundColor : '#fff',
         border : 'none'
    })
})

// Navbar gsap ====================================
var tal = gsap.timeline()
var menu = document.querySelector('#nav i')
var cross = document.querySelector('#nav-menu i')

tal.to("#nav-menu", {
    right : 0,
    duration : 0.3,
})
tal.from("#nav-menu h4", {
    x :150,
    duration : 0.5,
    stagger :0.25,
    opacity : 0
})
tal.from("#nav-menu i", {
    opacity : 0,
})
tal.pause()

menu.addEventListener('click', function(){
    tal.play()
})

cross.addEventListener('click', function(){
   tal.reverse()
})

// Text animation ====================================
function breakTheText(){
    var h3 = document.querySelector("#text-animate h3")
    var h3Text = h3.textContent;
    var splitH3Text = h3Text.split("");
    
    var clutter = ""
    var halfValueOfSplit = Math.floor(splitH3Text.length / 2);
    splitH3Text.forEach(function(e, idx){
        // clutter += `<span>${e}</span>`
        // console.log(idx);
        if(idx < halfValueOfSplit){
            clutter += `<span class="a">${e}</span>`
        }
        else{
             clutter += `<span class="b">${e}</span>`
        }
    })
    h3.innerHTML = clutter
}
breakTheText();

gsap.from('#text-animate h3 .a', {
    y : 80,
    duration : 0.6,
    delay : 0.5,
    opacity : 0,
    stagger : 0.15
})
gsap.from('#text-animate h3 .b', {
    y : 80,
    duration : 0.6,
    delay : 0.5,
    opacity : 0,
    stagger : -0.15
})

// window mouse wheel animation ====================================
function whileAnimation (){
    window.addEventListener("wheel", function(dets){
        if(dets.deltaY > 0){
            gsap.to('.marque', {
                transform : 'translateX(-200%)',
                duration : 3,
                repeat : -1,
                ease : 'none'
            })
            gsap.to('.marque img', {
                rotate : 180
            })
        }else{
            gsap.to('.marque', {
                transform : 'translateX(0%)',
                duration : 3,
                repeat : -1,
                ease : 'none'
            })
            gsap.to('.marque img', {
                   rotate : 0
            })
        }
    })
}
whileAnimation ()


