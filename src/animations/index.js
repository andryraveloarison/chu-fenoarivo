// animations.js
import { gsap, Power3 } from "gsap";

export const animatePreloader = (ref1, ref2, ref3) => {
  setTimeout(() => {
    animateDev(ref1.current)
  }, 300);

  setTimeout(() => {
    animateCreat(ref2.current)
  }, 600);

  setTimeout(() => {
    animatePass(ref3.current)
  }, 900);


  setTimeout(() => {
    reAnimateDev(ref1.current)
  }, 1800);

  setTimeout(() => {
    reAnimateCreat(ref2.current)
  }, 2000);

  setTimeout(() => {
    reAnimatePass(ref3.current)
  }, 2200);


}



 const animateDev = (ref) => {
  gsap.to(ref, {
    opacity: 1,
    y: -50,
    rotate:0,
    ease: Power3.easeOut,
    duration: 1,
  });
};

 const animateCreat = (ref) => {
  gsap.to(ref, {
    opacity: 1,
    y: -50,
    rotate:0,
    ease: Power3.easeOut,
    duration: 1,
  });
};

 const animatePass = (ref) => {
  gsap.to(ref, {
    opacity: 1,
    y: -50,
    rotate:0,
    ease: Power3.easeOut,
    duration: 1,
  });
};



const reAnimateDev = (ref) => {
  gsap.to(ref, {
    y: 40,
    rotate: -40,
    ease: Power3.easeOut,
    duration: 1.5,
  });
};

 const reAnimateCreat = (ref) => {
  gsap.to(ref, {
    y: 40,
    rotate: -40,
    ease: Power3.easeOut,
    duration: 1.5,
  });
};

 const reAnimatePass = (ref) => {
  gsap.to(ref, {
    y: 40,
    rotate: -40,
    ease: Power3.easeOut,
    duration: 1.5,
  });
};




export const animateHero = (ref1, ref2,ref3,ref4)=> {
  setTimeout(() => {

    gsap.to(ref1.current, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      duration: 1,
    });
    gsap.to(ref2.current, {
      opacity: 1,
      y: -30,
      ease: Power3.easeOut,
      duration: 1,
    });

    gsap.to(ref3.current, {
      opacity: 1,
      y: -40,
      ease: Power3.easeOut,
      duration: 1,
    });

    gsap.to(ref4.current, {
      opacity: 1,
      y: -50,
      ease: Power3.easeOut,
      duration: 1,
    });

  }, 2900)

}
