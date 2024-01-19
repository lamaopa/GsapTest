const  { innerHeight } = window;
// const innerHeight = window.innerHeight;

gsap.from("#zoomOut h2",{
    scale:50,
    stager : 0.25,
    duration: 3,
    scrollTrigger :{
        trigger: "#zoomOut",
        pin :true,
        end:`+=${innerHeight * 1.3}`,
        scrub : 3
    }
})

gsap.to("#zoomIn h2",{
    scale:100,
    stager : 0.25,
    duration: 3,
    scrollTrigger :{
        trigger: "#zoomIn",
        pin :true,
        end:`+=${innerHeight * 1.3}`,
        scrub : 3
    }
})