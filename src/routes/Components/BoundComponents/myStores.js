import { writable } from "svelte/store";
import img1 from "../../Images/Skills/Proj1/1.png";
import img2 from "../../Images/Skills/Proj1/2.png";
import img3 from "../../Images/Skills/Proj1/3.png";
import img4 from "../../Images/Skills/Proj1/4.png";
import img5 from "../../Images/Skills/Proj1/5.png";
import img6 from "../../Images/Skills/Proj1/6.png";
import img7 from "../../Images/Skills/Proj1/7.png";

import img8 from "../../Images/Skills/Proj1/8.png";
import img9 from "../../Images/Skills/Proj1/9.png";
import img10 from "../../Images/Skills/Proj1/10.png";
import img11 from "../../Images/Skills/Proj1/11.png";
import img12 from "../../Images/Skills/Proj1/12.png";
import img13 from "../../Images/Skills/Proj1/13.png";
import img14 from "../../Images/Skills/Proj1/14.png";








//nav stores
export const selectionStore = writable(["Profile", "Knowledge", "Projects", "Contact"]);
export const activeItem = writable("Profile");
export const widthDetector = writable(0);
export const heightDetector = writable(0);
export const showMobileMenu = writable(false);
export const mobNpcLogic = writable(false);



//projects
//project one desktop view
export const imgsArray = writable([img1,img2, img3, img4, img5, img6, img7]);
//project one mobile view
export const imgsArrayMob = writable([img8,img9,img10,img11,img12,img13,img14]);