
gsap.to(".c", {
    scrollTrigger:{
        trigger :".c",
        start:"top center",
        markers : true,
        toggleActions : "restart none none none"

    },
    x:400,
    rotation:360,
    duration:3
});