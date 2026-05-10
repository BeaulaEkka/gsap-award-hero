import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP,SplitText);
export default function Home() {
  return (
    <main >
    <div className="overlay">
      <div className="strip"></div>
      <div className="strip"></div>
      <div className="strip"></div>
      <div className="strip"></div>
    </div>
    
    </main>
  );
}
