'use client';

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import Stagger from "./components/Stagger";
import Trigger from "./components/Trigger";


gsap.registerPlugin(useGSAP, SplitText);

export default function Home() {
  // const containerRef = useRef(null);
  // const textRef = useRef(null);

  // useGSAP(
  //   () => {
  //     const tl = gsap.timeline();

  //     const split = SplitText.create(textRef.current, {
  //       type: "chars,words",
  //       mask: "chars",
  //       charsClass: "char",
  //       wordsClass: "word",
  //     });

  //     tl.from(".strip", {
  //       width: 0,
  //       duration: 2,
  //       delay: 1,
  //       stagger: 0.2,
  //       ease: "power2.inOut",
  //     });

  //     tl.to(split.chars, {
  //       y: 100,
  //       duration: 1,
  //       stagger: 0.05,
  //       ease: "power2.inOut",
  //     });

  //     return () => {
  //       split.revert();
  //     };
  //   },
  //   { scope: containerRef }
  // );
const timeline=gsap.timeline({
  repeat:-1,repeatDelay:1,}
);

// useGSAP(()=>{
//   timeline.to("#blue-box",{x:300,duration:1,ease:"back.inout",borderRadius:"100%",backgroundColor:"yellow",scale:1.5})

//   timeline.to(("#blue-box"),{y:250,duration:1,ease:"back.inout",borderRadius:"0%",backgroundColor:"blue",scale:1})

//   timeline.to(("#blue-box"),{x:500,duration:1,ease:"back.inout",borderRadius:"0%",backgroundColor:"blue",scale:1})
// },[])
  return (
    <main className="p-24 w-[80%] mx-auto" >
      <button type="button" className="bg-blue-700 p-24 rounded-xl text-white" onClick={() => {if (timeline.paused()){
        timeline.play()}else {timeline.pause()}}}
      
      >pause</button>
      {/* <div className="w-full h-screen content-center bg-indigo-200">
        <div className="strip"></div>
        <div className="strip"></div>
        <div className="strip"></div>
        <div className="strip"></div>
      </div> */}

      {/* <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg"></div> */}

      {/* <h1
        ref={textRef}
        className="text-8xl font-bold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center font-tangerine"
      >
        Created by Beaula Ekka
      </h1> */}
       {/* <Stagger  /> */}
       <Trigger  />
      
    </main>
  );
}