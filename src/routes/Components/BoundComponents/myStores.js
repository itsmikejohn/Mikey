import { writable } from "svelte/store";

//project 1
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

//project 2
import p2img1 from "../../Images/Skills/Proj2/1.png";
import p2img2 from "../../Images/Skills/Proj2/2.png";
import p2img3 from "../../Images/Skills/Proj2/3.png";
import p2img4 from "../../Images/Skills/Proj2/4.png";
import p2img5 from "../../Images/Skills/Proj2/5.png";










//nav stores
export const selectionStore = writable(["Profile", "Knowledge", "Projects", "Contact"]);
export const activeItem = writable("Profile");
export const widthDetector = writable(0);
export const heightDetector = writable(0);
export const showMobileMenu = writable(false);
export const mobNpcLogic = writable(false);

//database pop
export const successSendLogic = writable(false);
export const msgStore = writable("");
export const sendLogic = writable(false);

//projects
//project one 
export const imgsArray = writable([img1,img2, img3, img4, img5, img6, img7, img8, img9, img10]);

//project two
export const p2imgsArray = writable([p2img1, p2img2, p2img3, p2img4, p2img5]);

