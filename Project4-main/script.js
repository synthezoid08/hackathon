function loco() {

  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });


  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();

}
loco();

// let tl = gsap.timeline();
// tl
// .to('#loader #circle',{
//     delay : 2,
//     x : -500,
//     ease : Expo.easeInOut
// })
// .to('#loader #tri',{
//     delay : .5,
//     y : -300,
//     ease : Expo.easeInOut
// })
// .to('#loader #rec',{
//     delay : 1,
//     x : 500,
//     ease : Expo.easeInOut
// })
// .to('#loader #circle',{
//     delay : 1,
//     y : 300,
//     ease : Expo.easeInOut
// })
// .to('#loader #tri',{
//     x : -600,
//     ease : Expo.easeInOut
// })
// .to('#loader #rec',{
//     y : -300,
//     ease : Expo.easeInOut
// })
// .to('#loader #circle',{
//     delay : 1,
//     x : 900,
//     ease : Expo.easeInOut
// })
// .to('#loader #tri',{
//     y : 500,
//     ease : Expo.easeInOut
// })
// .to('#loader #rec',{
//     x : -900,
//     ease : Expo.easeInOut
// })
// .to('#loader',{
//     scale : 0,
//     ease : Expo.easeInOut
// })


function nav() {
  var menu = document.querySelector('#nav-right h1')
  var icons = document.querySelectorAll('#nav-right i')
  var nav = document.querySelector('#pop-upnav')
  let flag = 0

  menu.addEventListener('click', function () {
    if (flag === 0) {
      nav.style.left = '50%';
      menu.innerHTML = '<i class="ri-close-line"></i>';
      menu.style.color = 'white'
      icons.forEach((elem) => {
        elem.style.color = "white";
      });
      flag = 1;
    }
    else {
      nav.style.left = '100%';
      menu.innerHTML = '<i id="menu" class="ri-menu-line">';
      menu.style.color = 'black'
      icons.forEach((elem) => {
        elem.style.color = "black";
      });
      flag = 0
    }
  })
}

nav();

gsap.from('#nav-bar', {
  duration: .5,
  y: -80,
})
gsap.from('#page1>#p1-text', {
  x: -200,
  duration: 1,
  ease: Expo.easeInOut,
  opacity: 0,
})
gsap.from('#page1 > img',{
  scale : 0,
  duration : .5,
  ease: Expo.easeInOut,
})
gsap.from('#page1 #circle > img',{
  scale : 0,
  duration : 1,
  ease: Expo.easeInOut,
})


gsap.from('#page2 #p2-top',{
  y : 100,
  opacity : 0,
  duration: 1,
  ease: Expo.easeInOut,
  scrollTrigger : {
    scroller : "#main",
    trigger : '#page2 #p2-top',
    start : "top 90%",
  }
})
gsap.from('#page2 #p2-mid .box',{
  y : 100,
  duration: .5,
  ease: Expo.easeInOut,
  stagger : .2,
  scrollTrigger : {
    scroller : "#main",
    trigger : '#page2 #p2-mid',
    start : "top 100%"
  }
})
gsap.from('#page2 > h1',{
  y : 100,
  duration: .7,
  opacity : 0,
  ease: Expo.easeInOut,
  scrollTrigger : {
    scroller : "#main",
    trigger : '#page2 > h1',
    start : "top 95%",
  }
})
gsap.from('#page2 #p2-top img:nth-child(1)',{
  rotate : '-60deg',
  duration: 1,
  delay : .5,
  ease: Expo.easeInOut,
  scrollTrigger : {
    scroller : "#main",
    trigger : '#page2 #p2-top',
    start : "top 90%",
  }
})
gsap.from('#page2 #p2-top img:nth-child(3)',{
  rotate : '120deg',
  delay : .5,
  duration: 1,
  ease: Expo.easeInOut,
  scrollTrigger : {
    scroller : "#main",
    trigger : '#page2 #p2-top',
    start : "top 90%",
  }
})


gsap.from('#page3 #p3-mid .p3-div:nth-child(1) .p3-left',{
  x : -200,
  duration: 1,
  ease: Expo.easeInOut,
  scrollTrigger : {
    scroller : "#main",
    trigger : '#page3 #p3-mid .p3-div:nth-child(1)',
    start : "top 90%",
  }
})
gsap.from('#page3 #p3-mid .p3-div:nth-child(2) .p3-left',{
  x : 200,
  duration: 1,
  ease: Expo.easeInOut,
  scrollTrigger : {
    scroller : "#main",
    trigger : '#page3 #p3-mid .p3-div:nth-child(2)',
    start : "top 90%",
  }
})
gsap.from('#page3 #p3-mid .p3-div:nth-child(1) .p3-right img',{
  scale : 0,
  duration: 1,
  ease: Expo.easeInOut,
  scrollTrigger : {
    scroller : "#main",
    trigger : '#page3 #p3-mid .p3-div:nth-child(1)',
    start : "top 80%",
  }
})
gsap.from('#page3 #p3-mid .p3-div:nth-child(2) .p3-right img',{
  scale : 0,
  duration: 1,
  ease: Expo.easeInOut,
  scrollTrigger : {
    scroller : "#main",
    trigger : '#page3 #p3-mid .p3-div:nth-child(2)',
    start : "top 80%",
  }
})


gsap.from('#page4 #p4-top #p4-text',{
  y : 100,
  duration: 1,
  opacity : 0,
  ease: Expo.easeInOut,
  scrollTrigger : {
    scroller : "#main",
    trigger : '#page4 #p4-top #p4-text',
    start : "top 100%"
  }
})
gsap.from('#page4 #p4-top #p4-text img:nth-child(1)',{
  delay : .5,
  duration: 1,
  rotate : '-60deg',
  ease: Expo.easeInOut,
  scrollTrigger : {
    scroller : "#main",
    // markers : true,
    trigger : '#page4 #p4-top #p4-text',
    start : "top 80%",
  }
})
gsap.from('#page4 #p4-top #p4-text img:nth-child(3)',{
  delay : .5,
  duration: 1,
  rotate : '120deg',
  ease: Expo.easeInOut,
  scrollTrigger : {
    scroller : "#main",
    // markers : true,
    trigger : '#page4 #p4-top #p4-text',
    start : "top 80%",
  }
})
gsap.from('#page4 #p4-top #categories .p4-btns',{
  y: 100,
  duration: 1,
  scale : 0,
  ease: Expo.easeInOut,
  scrollTrigger : {
    scroller : "#main",
    trigger : '#page4 #p4-top',
    start : "top 50%"
  }
})
gsap.from('#page4 #p4-mid .products',{
  delay : 1,
  scale : 0,
  ease: Expo.easeInOut,
  scrollTrigger : {
    scroller : "#main",
    trigger : '#page4 #p4-top',
    // markers : true,
    start : "top 50%"
  }
})

gsap.from('#page5 #p5-left #p5-circle>img',{
  scale : 0,
  duration : .8,
  ease: Expo.easeInOut,
  scrollTrigger : {
    scroller : "#main",
    trigger : '#page5 #p5-left',
    start : "top 50%"
  }
})
gsap.from('#page5 #p5-right',{
  opacity : 0,
  x : 200,
  duration : .9,
  ease: Expo.easeInOut,
  scrollTrigger : {
    scroller : "#main",
    trigger : '#page5 #p5-right',
    start : "top 50%"
  }
})

gsap.from('#footer .boxes',{
  y : 100,
  opacity : 0,
  duration : .5,
  ease: Expo.easeInOut,
  scrollTrigger : {
    scroller : "#main",
    trigger : '#footer',
    start : "top 90%"
  }
})


