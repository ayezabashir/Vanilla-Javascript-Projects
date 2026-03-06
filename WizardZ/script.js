var logo = document.querySelector(".section1 nav h1 i");
var menuBtn = document.getElementById("menuBtn");
var closeBtn = document.querySelector(".closeBtn");
var tl = gsap.timeline();

// adding animation to the logo
logo.addEventListener("mouseenter", function () {
  gsap.to(logo, {
    rotation: 360,
    duration: 1,
  });
});

// removing animation from the logo
logo.addEventListener("mouseleave", function () {
  gsap.to(logo, {
    rotation: 0,
    duration: 1,
  });
});

// adding the animation to the whole navbar
tl.from("nav h1, nav h4, nav .requestBtn", {
  y: -40,
  duration: 0.3,
  delay: 0.4,
  opacity: 0,
  stagger: 0.2,
});

// adding the navbar animation to the menu items in header
var navItems = document.querySelectorAll(".part2 h4");

navItems.forEach((navitem) => {
  navitem.addEventListener("mouseenter", function () {
    gsap.to(navitem, {
      borderBottom: "3px solid #B9FF66",
      paddingBottom: "5px",
      duration: 0.2,
      y: -5,
    });
  });
  navitem.addEventListener("mouseleave", function () {
    gsap.to(navitem, {
      borderBottom: "none",
      paddingBottom: "0px",
      y: 0,
    });
  });
});

// adding the hover animation to the navbar button
var navBtn = document.querySelector("nav .requestBtn ");
navBtn.addEventListener("mouseenter", function () {
  gsap.to("nav .requestBtn ", {
    color: "#B9FF66",
    backgroundColor: "#000",
    duration: 0.2,
    delay: 0.01,
  });
});

// reseting the hover animation when mouse leave
navBtn.addEventListener("mouseleave", function () {
  gsap.to("nav .requestBtn ", {
    color: "black",
    backgroundColor: "white",
    duration: 0.2,
    delay: 0.01,
  });
});

var menuItems = document.querySelector(".part2");
menuBtn.addEventListener("click", function () {
  menuItems.classList.add("openMenu");

  gsap.from(menuItems, {
    x: 300,
    duration: 0.5,
    ease: "power2.out",
  });
});

closeBtn.addEventListener("click", function () {
  gsap.to(menuItems, {
    x: 300,
    duration: 0.4,
    ease: "power2.out",
    onComplete: () => menuItems.classList.remove("openMenu"),
  });
});

// animating the hero section
tl.from(
  ".center-part1 h1",
  {
    x: -400,
    opacity: 0,
    duration: 0.4,
  },
  "-=0.7",
);

tl.from(".center-part1 p", {
  x: -300,
  opacity: 0,
  duration: 0.5,
});

tl.from(".center-part1 button", {
  opacity: 0,
  duration: 0.2,
});

var heroBtn = document.querySelector(".center-part1 button");
var porposalBtn = document.querySelector(".proposal-left button");

heroBtn.addEventListener("mouseenter", function () {
  gsap.to(heroBtn, {
    color: "#000",
    backgroundColor: "#B9FF66",
    duration: 0.2,
    delay: 0.01,
  });
});

heroBtn.addEventListener("mouseleave", function () {
  gsap.to(heroBtn, {
    backgroundColor: "#000",
    color: "#fff",
    duration: 0.2,
    delay: 0.01,
  });
});

porposalBtn.addEventListener("mouseenter", function () {
  gsap.to(porposalBtn, {
    color: "#000",
    backgroundColor: "#B9FF66",
    duration: 0.2,
    delay: 0.01,
  });
});

porposalBtn.addEventListener("mouseleave", function () {
  gsap.to(porposalBtn, {
    backgroundColor: "#000",
    color: "#fff",
    duration: 0.2,
    delay: 0.01,
  });
});

tl.from(
  ".center-part2 img",
  {
    x:300,
    opacity: 0,
    duration: 0.2,
  },
  "-=0.5", // this means it will run 1 second before the in the timeline series
);

// adding animation on the logo images
gsap.from(".section1bottom img", {
  x: -600,
  duration: 1,
  scrollTrigger: {
    trigger: ".section1bottom img",
    scroller: "body",
    start: "top 90%",
    end: "top 30%",
    scrub: 3,
  },
});

// Services section

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2",
    scroller: "body",
    start: "top 50%",
    end: "top 0",
    scrub: 2,
  },
});

tl2.from(".service", {
  y: -20,
  opacity: 0,
  duration: 0.2,
});

tl2.from(
  ".left",
  {
    x: -200,
    opacity: 0,
    duration: 0.3,
    stagger: 0.3,
  },
  "anim",
);

tl2.from(
  ".right",
  {
    x: 200,
    opacity: 0,
    duration: 0.3,
    stagger: 0.3,
  },
  "anim",
);

// animating the section3
gsap.from(".section3 .proposal-card", {
  scale: 0.4,
  scrollTrigger: {
    trigger: ".section3",
    scroll: "body",
    start: "top 100%",
    end: "top 30%",
    scrub: 3,
  },
});

gsap.from(".case-study", {
  opacity: 0,
  duration: 0.3,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".case-study",
    scroller: "body",
    start: "top 50%",
    end: "top 150",
    scrub: 2,
  },
});

gsap.from(".case-study-card", {
  scale: 0.4,
  scrollTrigger: {
    trigger: ".case-study-card",
    scroll: "body",
    start: "top 100%",
    end: "top 120%",
    scrub: 3,
  },
});

var elemCard = document.querySelectorAll(".elem");

elemCard.forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    gsap.to(elem, {
      scale: 1.05,
      y: -10,
      boxShadow: "0px 20px 30px rgba(0,0,0,0.2)",
      duration: 0.3,
      ease: "power2.out",
    });
  });

  elem.addEventListener("mouseleave", () => {
    gsap.to(elem, {
      scale: 1,
      y: 0,
      boxShadow: "0px 10px 0px black",
      duration: 0.3,
      ease: "power2.out",
    });
  });
});
