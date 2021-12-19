
gsap.from("nav", { y: "-100%", duration: 2, delay: 0.5, ease: "slow" });

gsap.from(".home", { x: "-100%", duration: 2,opacity: 3, ease: "slow" });

gsap.from(".foto1", { x: "100%", duration: 2, ease: "slow" });




ScrollReveal().reveal('.top',{
    origin: 'top' , duration: 2000, distance: '60px', opacity : 0
})
ScrollReveal().reveal('.bottom',{
    origin: 'top' , duration: 2000, distance: '60px',opacity : 0
})
ScrollReveal().reveal('.left',{
    origin: 'top' , duration: 2000, distance: '60px', opacity : 0
})

ScrollReveal().reveal('.sag',{
    origin: 'top' , duration: 2000, distance: '60px',  interval:300, opacity : 0
})
ScrollReveal().reveal('.sol',{
    origin: 'top' , duration: 2000, distance: '60px', delay: 200,  interval:300, opacity : 0
})





ScrollReveal().reveal('.anime-top',{
    origin: 'top' , duration: 2000, distance: '60px', delay:200 , opacity : 0
})
ScrollReveal().reveal('.anime-bottom',{
    origin: 'top' , duration: 2000, distance: '60px', delay:300, opacity : 0
})
ScrollReveal().reveal('.anime-right',{
    origin: 'top' , duration: 2000, distance: '60px', delay:400, opacity : 0
})

