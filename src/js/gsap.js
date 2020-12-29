import { gsap } from "gsap";

// ScrollTo / smoothly scroll from navigation items to their section on the page

import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);

let navButtons = ['discover', 'about', 'sell'];

for (let i = 0; i < navButtons.length; i+=1) {

  let id = `${navButtons[i] + "Btn"}`;
  let anchor = document.getElementById(id);
  let section = `#${navButtons[i]}`;
  let timing = i + 1;

  anchor.addEventListener("click", () => {
    gsap.to(window, {
      duration: timing,
      ease: "circ",
      scrollTo:{
        y: section,
        offsetY: -20,
      }
    });
  });
}

// TODO: where to buy buttons!
