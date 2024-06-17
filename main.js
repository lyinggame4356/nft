const tl = gsap.timeline({defaults: {duration: 1, ease: "power1.out"}})
const text1 = gsap.timeline({defaults: {duration: 1, ease: "power1.out"}})
const text2 =gsap.timeline({defaults: {duration: 1, ease: "power1.out"}})
const text3 =gsap.timeline({defaults: {duration: 2, ease: "power1.out"}})
const person1 =gsap.timeline({defaults: {duration: 3, ease: "power1.out"}})
const char =gsap.timeline({defaults: {duration: 0.5, ease: "power1.out"}})
const r1 =gsap.timeline({defaults: {duration: 0.5, ease: "power1.out"}})
const r2 =gsap.timeline({defaults: {duration: 0.5, ease: "power1.out"}})
const r3 =gsap.timeline({defaults: {duration: 0.5, ease: "power1.out"}})
const r4 =gsap.timeline({defaults: {duration: 0.5, ease: "power1.out"}})
const r5 =gsap.timeline({defaults: {duration: 0.25, ease: "power1.out"}})
const r6 =gsap.timeline({defaults: {duration: 0.25, ease: "power1.out"}})

tl.fromTo('.text', {opacity: 0, y: 125}, {opacity:1, y: 0})
text1.fromTo('.text1', {opacity: 0, x:125}, {opacity: 1, x:0})
text2.fromTo('.text2', {opacity: 0, x:-125}, {opacity: 1, x:0})
text3.fromTo('.text3', {opacity: 0, x:200}, {opacity: 1, x:0})
char.fromTo('.char', {opacity: 0, x:125}, {opacity: 1, x:0})
person1.fromTo('.person1', {opacity: 0, y:125}, {opacity: 1, y:0})


const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: '.text1',
    duration: 500,
    triggerHook: 0.5
})
.setTween(text1)
.addTo(controller);

const controller1 = new ScrollMagic.Controller();

const scene1 = new ScrollMagic.Scene({
    triggerElement: '.text2',
    duration: 500,
    triggerHook: 0.5
})
.setTween(text2)
.addTo(controller1);

const controller2 = new ScrollMagic.Controller();

const scene2 = new ScrollMagic.Scene({
    triggerElement: '.text3',
    duration: 900,
    triggerHook: 1
})
.setTween(text3)
.addTo(controller2);

const controller3 = new ScrollMagic.Controller();

const scene3 = new ScrollMagic.Scene({
    triggerElement: '.person1',
    duration: 1000,
    triggerHook: 1
})
.setTween(person1)
.addTo(controller3);

const controller4 = new ScrollMagic.Controller();

const scene4 = new ScrollMagic.Scene({
    triggerElement: '.char',
    duration: 500,
    triggerHook: 0.5
})
.setTween(char)
.addTo(controller4);

const controller5 = new ScrollMagic.Controller();

const scene5 = new ScrollMagic.Scene({
    triggerElement: '.r1',
    duration: 500,
    triggerHook: 1
})
.setTween(r1)
.addTo(controller5);

const controller6 = new ScrollMagic.Controller();

const scene6 = new ScrollMagic.Scene({
    triggerElement: '.r2',
    duration: 400,
    triggerHook: 1
})
.setTween(r2)
.addTo(controller6);

const controller7 = new ScrollMagic.Controller();

const scene7 = new ScrollMagic.Scene({
    triggerElement: '.r3',
    duration: 400,
    triggerHook: 1
})
.setTween(r3)
.addTo(controller7);

const controller8 = new ScrollMagic.Controller();

const scene8 = new ScrollMagic.Scene({
    triggerElement: '.r4',
    duration: 400,
    triggerHook: 0.5
})
.setTween(r4)
.addTo(controller8);

const controller9 = new ScrollMagic.Controller();

const scene9 = new ScrollMagic.Scene({
    triggerElement: '.r5',
    duration: 250,
    triggerHook: 0.5
})
.setTween(r5)
.addTo(controller9);

const controller10 = new ScrollMagic.Controller();

const scene10 = new ScrollMagic.Scene({
    triggerElement: '.r6',
    duration: 250,
    triggerHook: 0.75
})
.setTween(r6)
.addTo(controller10);