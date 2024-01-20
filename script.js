
function loco() {
    gsap.registerPlugin(ScrollTrigger);
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
  
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  }
  loco();



  var csr= document.querySelector("#cursor");
  document.addEventListener("mousemove",function(dets){
  
      csr.style.left= dets.x+"px";
      csr.style.top= dets.y+"px";

  })
  


//   var tlnav= gsap.timeline({

//     scrollTrigger: {
//     trigger: "nav",
//     scroller:'body',
//     start: "top center",
//     markers:true,
//     scrub:2

//   },
// })
// tlnav.to("nav", {
//     backgroundColor: "black",
//     height: "110px",
//   });

  







var tl3 = gsap.timeline();

// Animation for the #burger element
tl3.from("#burger", {
  delay:0.6,
  scale: 1.2,
  y:"-150%",
});

var tl=gsap.timeline({
    scrollTrigger:{
        trigger:"#page1",
        scrub:true,
        scroller:'#main',

        start:'0% 95%',
        end:"60% 50%"
    },
});


var tl2= gsap.timeline({
    scrollTrigger:{
    trigger: "#page2",
    start: "0% 70%",
    scroller:'#main',
    end: "30% 50%",
    scrub: 3,
    

  },
})
tl2.to("#burger", {
    width:"39%",
    top: "100%",
    left: "30%"
  });


  var tl4= gsap.timeline({
    scrollTrigger:{
    trigger: "#page3",
    start: "0% 70%",
    scroller:'#main',
    end: "30% 50%",
    // markers:true,
    scrub: 3,
    

  },
})
tl4.to("#burger", {
    // width:"39%",
    top: "200%",
    left: "5%"
  });












