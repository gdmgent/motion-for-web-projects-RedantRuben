const animatedHeader = document.querySelector("#rubereda h1");
const submarine = document.querySelector("#submarine");
const smallFish = document.querySelector('#smallFish');
const fish2 = document.querySelector('#fish2');
const viewportWidth = window.innerWidth;
const shark = document.querySelector("#shark");
const sharkPath = document.querySelector("#sharkPath");
const scubaDiver = document.querySelector('#scubaDiver');
const dolphin = document.querySelector('#dolphin');

function createBubble() {
    const bubble = document.createElement('span');
    bubble.classList.add('bubble');
    document.body.appendChild(bubble);

    const size = Math.random() * 50 + 50; 
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    bubble.style.left = `${Math.random() * 100}vw`;

    gsap.fromTo(
        bubble, 
        { y: '400vh', x: 'random(-50, 50)', scale: 0.5 },  
        { 
            y: '30vh', x: 'random(-50, 50)', scale: 1.2,  
            duration: 'random(5, 15)', 
            ease: 'power1.out', 
            onComplete: () => bubble.remove()  
        }
    );
}
setInterval(createBubble, 500);

gsap.fromTo(
    dolphin,
    {
      x: -100,
      y: '+=100',
    },
    {
      bezier: {
        type: 'soft',
        values: [
          { x: viewportWidth + 100, y: '-=200' }, 
          { x: -100, y: '+=100' }, 
        ],
      },
      repeat: -1, 
      duration: 5, 
      ease: 'power1.inOut', 
    }
  );
  
  gsap.fromTo(
    ".text2",
    { x: -200 },
    {
      x: 0,
      duration: 8,
      scrollTrigger: {
        trigger: ".text2",
        start: "top 80%",
      },
    }
  );
  
  gsap.fromTo(
    ".text3",
    { x: -200 },
    {
      x: 200, 
      duration: 8,
      scrollTrigger: {
        trigger: ".text3",
        start: "top 80%",
        end: "top 20%", 
        once: true,
      },
    }
  );
  
  gsap.fromTo(
    ".text4",
    { opacity: 0, scale: 0.8 },
    {
      opacity: 1,
      scale: 1,
      duration: 10,
      scrollTrigger: {
        trigger: ".text4",
        start: "top 80%",
        end: "top 20%", 
        once: true,
      },
    }
  );
  
  gsap.fromTo(
    ".text5",
    { x: "-100%" },
    {
      x: "0%",
      duration: 10,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".text5",
        start: "top 80%",
        end: "top 20%", 
        once: true,
      },
    }
  );
  
  gsap.fromTo(
    ".text6",
    { rotation: -90, color: "red" },
    {
      rotation: 0,
      color: "blue",
      duration: 13,
      ease: "elastic.out(1, 0.3)",
      scrollTrigger: {
        trigger: ".text6",
        start: "top 80%",
        end: "top 20%", 
        once: true,
      },
    }
  );
  
gsap.fromTo(scubaDiver, 
    {
      xPercent: 100, 
    },
    {
      xPercent: -100,  
      scrollTrigger: {
        trigger: "#scubaDiver",
        start: "top center",
        end: "bottom #rubereda",
        scrub: 1,
      },
    }
);

var fish2Animation = gsap.fromTo(fish2, 
    {
      x: viewportWidth + 100, 
      y: '+=100',  
    }, 
    {
      x: -100,  
      y: '-=200',  
      repeat: -1,
      duration: 6,  
      ease: 'power1.inOut',  
      paused: true,
    }
);

ScrollTrigger.create({
  trigger: '#rubereda',
  start: 'top center',
  end: 'bottom bottom',
  onEnter: () => fish2Animation.play(),
  onLeaveBack: () => fish2Animation.pause(),
});


var sharkAnimation = gsap.fromTo(shark, 
  {
      x: viewportWidth + 100,
  },
  {
      x: -100,  
      repeat: -1,  
      duration: 5,  
      ease: "power1.inOut",
      paused: true,
  }
);

gsap.to(sharkAnimation, {
  scrollTrigger: {
      trigger: "#shark",
      start: "top center",
      end: "bottom #rubereda",
      scrub: 1,
  },
  x: -100,
  paused: true,
});

gsap.fromTo(smallFish, 
    {
      x: -100, 
    }, 
    {
      x: viewportWidth + 100,
      scrollTrigger: {
        trigger: '#rubereda',
        start: 'top center',
        end: 'bottom bottom',
        scrub: 1,
      },
    }
  );

  gsap.fromTo(submarine, 
    {
      xPercent: -100,
    },
    {
      xPercent: 100,
      scrollTrigger: {
        trigger: "#submarine",
        start: "top center",
        end: "bottom #rubereda",
        scrub: 1,
      },
    }
  );

  function rubereda(fase) {
    console.log("rubereda.js: fase = " + fase);
    let section = document.getElementById("rubereda");
    let heading = document.querySelector("#rubereda h1");

    if (!section.init) {
        section.init = true;
        console.log("rubereda.js: init");
        section.tl = gsap.timeline();

        if (fase === "enter" || fase === "enterBack") {
            section.tl
                .to(".box", { borderRadius: "50%", backgroundColor: "#7fd4ff", duration: 0.2, ease: "power1.inOut" })
                .to(".box", { scale: 0.5, duration: 1, ease: "power1.inOut" })
                .to(".box", { x: "-=40", rotation: 20, duration: 1.5, yoyo: true, repeat: -1, ease: "slow(0.2, 0.6, false)" })
                .add("shark")
                .to("#shark", {
                    motionPath: {
                        path: "#sharkPath",
                        align: "#sharkPath",
                        autoRotate: true
                    },
                    duration: 5,
                    repeat: -1
                }, "shark")
                .to(".box", {})
        }
    }
}