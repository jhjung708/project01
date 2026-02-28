
// 스크롤 부드럽게
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => 1 - Math.pow(1 - t, 3),
    smoothWheel: true,
    smoothTouch: false,
});

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time)=>{
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// gsap 애니메이션
document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // 가로 스크롤
    const section = document.querySelector(".skills .inner");
    const xScroll = document.querySelector(".skills_list");

    const scrollWidth = xScroll.scrollWidth - section.clientWidth;

    gsap.to(xScroll, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${scrollWidth}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
        }
    });


    // VISUAL 애니메이션
    const visualTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".visual",
            start: "top 70%",
            toggleActions: "restart none none none"
        }
    });

    visualTl
    .to(".visual_name span", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.08
    })
    .to(".visual_ment span", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out"
    }, "-=0.7");


    // ABOUT 애니메이션
    const aboutTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".about",
            start: "top 75%",
            toggleActions: "restart none none none"
        }
    });

    aboutTl
    .to(".about_keyword_main", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
    })

    .to(".about_keyword_letter", {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out"
    }, "-=0.2")  

    .to(".about_greeting", {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: "power3.out"
    }, "-=0.2")

    .to(".about_ment", {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: "power3.out"
    }, "-=0.2");


    // WORKS 애니메이션
    gsap.utils.toArray(".works_box").forEach((box) => {

        const frame = box.querySelector(".works_frame");
        const tit = box.querySelector(".works_tit");
        const txt = box.querySelector(".works_txt");
        const list = box.querySelectorAll(".works_list li");

        const tl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: box,
                start: "top 75%",
                end: "top 75%", 
                toggleActions: "play none reverse none"
            }
        });

        tl
        .to(frame, {
            scale: 0.9,
            opacity: 0.8,
            duration: 1.8,
            ease: "expo.out"
        })

        .to(tit, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out"
        }, "0.4")

        .to(txt, {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power3.out"
        }, "0.8")

        .to(list, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.15,
            ease: "power3.out"
        }, "1");
    });


    // SKILLS 애니메이션
    const skills = gsap.timeline({
        paused: true,
        scrollTrigger: {
            trigger: ".skills_list",
            start: "top 75%",
            end: "top 75%",   
            toggleActions: "play none reverse none"
        }
    });

    skills.to(".skills_list li", {
        opacity: 1,
        y: 0,
        scaleY: 1,
        duration: 1.5,
        ease: "back.out(1.5)"
    });

});