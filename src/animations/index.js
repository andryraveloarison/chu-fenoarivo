// animations.js
import { gsap, Power3 } from "gsap";

export const animatePreloader = (ref1, ref2, ref3, ref4) => {
  setTimeout(() => {
    animateDev(ref1.current)
  }, 700);

  setTimeout(() => {
    animateCreat(ref2.current)
  },1000);

  setTimeout(() => {
    animatePass(ref3.current)
  }, 1300);

  setTimeout(() => {
    animatePass(ref4.current)
  }, 1600);


  setTimeout(() => {
    reAnimateDev(ref1.current)
  }, 2400);

  setTimeout(() => {
    reAnimateCreat(ref2.current)
  }, 2600);

  setTimeout(() => {
    reAnimatePass(ref3.current)
  }, 2800);

  setTimeout(() => {
    reAnimatePass(ref4.current)
  }, 3000);


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

  }, 3600)

}
