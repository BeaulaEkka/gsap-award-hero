import React from 'react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);
export default function Trigger() {
  return (
    <div>
      <h1>Trigger</h1>
    </div>
  )
}
