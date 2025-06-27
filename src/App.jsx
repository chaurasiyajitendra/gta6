import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState } from "react";
import 'remixicon/fonts/remixicon.css'

const App = () => {
  const [showContent, setShowContent] = useState(false)

  useGSAP(()=>{
    const tl = gsap.timeline();
    tl.to(".vi-mask-group", {
      rotate:10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "center center",
    })
    tl.to(".vi-mask-group", {
      scale:10,
      duration: 2,
      delay:-1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "center center",
      opacity: 0,
      onUpdate: ()=>{
        if(tl.progress() >= 0.9){
          const svgEl = document.querySelector('.svg');
          if(svgEl) svgEl.remove();
          setShowContent(true);
          tl.kill();
        }
      }
    })
  })

  useGSAP(()=>{
    const main = document.querySelector('.main');

    main?.addEventListener('mousemove', async(e)=>{
      // moveX: 0 at center, negative left, positive right
       let moveX = await (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      // If moveX is negative, multiply by 5 for more effect
      const moveXAdjusted = moveX < 0 ? moveX * 0.8 : moveX;
      console.log('moveX:', moveX, 'moveXAdjusted:', moveXAdjusted);
      gsap.to('.imageDiv .textDiv', {
        x: `${moveXAdjusted * 14}%` ,
        duration: 0.2,
        ease: "power2.out",
      });
      gsap.to('.sky', {
        x: `${moveXAdjusted * 5}%`,
        ease: "power2.out",
        duration: 0.2,
      });
      gsap.to('.bgg', {
        x: `${moveXAdjusted * 4}%`,
        ease: "power2.out",
        duration: 0.2,
      });
    })
  },[showContent])

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent &&(
        <div className="main w-full">
          <div className="content h-screen w-full bg-black">
            <div className="navBar flex gap-4 absolute top-0 left-0 z-[1] w-full p-10 ">
              <div className="lines flex flex-col gap-2 items-start justify-center">
                <div className="line h-1 w-15 bg-white "></div>
                <div className="line h-1 w-10 bg-white "></div>
                <div className="line h-1 w-5 bg-white"></div>
              </div>
              <h3 className="text-white text-2xl">Rokestar</h3>
            </div>
            <div className="imageDiv relative h-screen w-full overflow-hidden">
              <img className="sky scale-[1.4] absolute top-0 left-0  object-cover" src="./sky.png" alt="" />
              <img className="bgg scale-[1.2]  absolute top-0 left-0 h-full w-full object-cover" src="./bg.png" alt="" />
              <div className="textDiv absolute leading-none top-10 text-white left-1/2 text-[11vw] -translate-x-1/2 ">
                <h1 className="-ml-30">grand</h1>
                <h1 className="ml-40">theft</h1>
                <h1 className="-ml-30">auto</h1>
              </div>
              <img className=" absolute -bottom-105 scale-80 left-1/2 -translate-x-1/2 object-cover" src="./girlbg.png" alt="" />
            </div>
            <div className="btmBar text-white z-10 absolute bottom-0 left-0 p-10 w-full bg-gradient-to-t from-black to-transparent"> 
              <div className=" flex items-center -mt-10 gap-3">
                <i className="ri-arrow-down-line text-2xl"></i>
                <h1 className="font-mono font-bold">Show more</h1>
              </div>
              <img className=" absolute bottom-0 left-1/2 h-[3.5rem] -translate-x-1/2" src="./ps5.png" alt="" />
            </div>
          </div> 
          <div className=" h-screen w-full bg-black flex items-center justify-center">
            <div className=" h-screen text-white w-full flex items-center justify-center overflow-hidden">
              <div className="left w-1/2 relative">
                <img className="h-full w-full object-cover"  src="./imag.png" alt="" />
              </div>
              <div className="right relative w-1/2">
              <div className=" absolute -top-50 left-5 text-7xl" >
                <h1>still Running.</h1>
                <h1>not Hunting</h1>
              </div>
              <h1 className=" font-[game]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quis nemo illum ullam quod quas quisquam quasi neque aperiam optio incidunt rem, repellendus est necessitatibus sapiente ab iusto atque eaque?
              Error cupiditate quo asperiores vitae delectus sequi odit quia natus doloribus perferendis suscipit harum aliquid sapiente consequuntur vel cum similique architecto eius saepe omnis, ipsam nesciunt? Numquam quidem nam ipsam.
              Aliquid illo dolorem in id expedita. Incidunt aspernatur dolores quae a, est minus at, enim omnis maiores aperiam iusto perferendis optio cumque magni, delectus ipsa totam iure autem minima similique.
              Enim esse, laborum facere eius, sint est distinctio tempore doloribus animi quas hic corporis quae eum. Saepe laboriosam quae, nihil vitae ipsam nesciunt architecto eaque, rem minima, explicabo magni reprehenderit.
              </h1>
              <button  className=" bg-amber-400 text-black text-2xl font-bold px-6 py-3 rounded-lg absolute -bottom-20 flex items-center gap-2">
                Download now
              </button>
              </div>
            </div>
          </div>
        </div>

      )}
    </>
  );
};

export default App;
