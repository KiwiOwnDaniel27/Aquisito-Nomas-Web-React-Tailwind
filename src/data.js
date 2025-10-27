import HeroImage from "/assets/LOGO.webp";
import HeroImage1 from "/assets/LOGO-AQUISITO-NOMAS.webp";

const Image = {
  HeroImage,
  HeroImage1,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/github.png";
import Tools3 from "/assets/tools/gitbash.svg";
import Tools4 from "/assets/tools/html.png";
import Tools5 from "/assets/tools/css.png";
import Tools6 from "/assets/tools/js.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Editor de código",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "Github",
    ket: "Repositorio",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Git",
    ket: "Sistema Control Versiones",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "HTML5",
    ket: "Lenguaje de programación",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "CSS",
    ket: "Lenguaje de programación",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Lenguaje de programación",
    dad: "600",
  },  
];

import Proyek1 from "/assets/proyek/proyek1.webp";
import Proyek2 from "/assets/proyek/proyek2.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website FreePass",
    desk: "Página marca Ecuatoriana de ropa hecha a mano",
    tools: ["HTML", "CSS", "Javascript", "AOS"],
    dad: "200",
    link: "https://freepass-ec-company.github.io/tienda-free-pass.html" ,
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Website Gamers Ecuador",
    desk: "Página de accesorios y productos Gamers para tu SetUp",
    tools: ["HTML", "CSS", "Javascript", "Swiper", "Lightbox Gallery"],
    dad: "300",
    link: "https://kiwiowndaniel27.github.io/Gamers_Ecuador_Page_Oficial.github.io/gamers_ecuador_oficial.html" ,
  },
];
