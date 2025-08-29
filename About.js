var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 250 + "px";
  blur.style.top = dets.y - 250 + "px";
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});
// About Us animations
gsap.from("#about-us h1", {
  y: 100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about-us h1",
    scroller: "body",
    start: "top 80%", // when heading enters viewport
    end: "top 60%",
    scrub: 1
  }
});

gsap.from("#about-us p", {
  y: 50,
  opacity: 0,
  duration: 1.2,
  scrollTrigger: {
    trigger: "#about-us p",
    scroller: "body",
    start: "top 85%",
    end: "top 65%",
    scrub: 1
  }
});
// GSAP Animations for About Us
gsap.from("#about-us h1, #about-us p", {
  y: 50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    start: "top 80%",
    end: "top 65%",
    scrub: 1
  }
});
gsap.to("#logo", {
  scale: 0.5, // scale both width and height
  transformOrigin: "center center", // scale from the center
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});
