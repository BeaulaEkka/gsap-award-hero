import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Trigger() {
  const scrollRef = useRef(null);

  useGSAP(() => {
    const boxes = gsap.utils.toArray(scrollRef.current.children);

    boxes.forEach((box) => {
      gsap.to(box, {
        x: 150*(boxes.indexOf(box)+5),
        rotation: 360,
        borderRadius: "100%",
        scale: 1.5,
        scrollTrigger: {
          trigger: box,
          start: "bottom bottom",
          end: "top 20%",
          scrub: true,
          markers: true,
        },
        ease: "power2.inOut",
      });
    });
  }, { scope: scrollRef });

  return (
    <div className="min-h-[200vh] p-10 w-[80%] mx-auto">
      <h1 className="text-3xl font-bold mb-6">Trigger</h1>

      <p className="text-gray-500 pt-5">
        Gsap Scroll Trigger is a plugin that allows you to create animations
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Gsap Scroll
        Trigger is a plugin that allows you to create animations Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Gsap Scroll Trigger is a
        plugin that allows you to create animations Lorem ipsum dolor sit amet
        consectetur adipisicing elit.
      </p>

      <p className="mt-5 text-green-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nam
        delectus quam porro optio rerum inventore asperiores. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Harum nam delectus quam porro
        optio rerum inventore asperiores.
      </p>

      <div className="flex flex-col gap-[500px]" ref={scrollRef}>
        <div
          id="scroll-orange"
          className=" w-20 h-20 rounded-lg bg-orange-500"
        ></div>

        <div
          id="scroll-green"
          className=" w-20 h-20 rounded-lg bg-green-500"
        ></div>

        <div
          id="scroll-blue"
          className=" w-20 h-20 rounded-lg bg-blue-500"
        ></div>
      </div>
    </div>
  );
}