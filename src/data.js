import HeroImage from "/assets/LOGO.webp";
import HeroImage1 from "/assets/LOGO-AQUISITO-NOMAS.webp";

const Image = {
  HeroImage,
  HeroImage1,
};

export default Image;

import Tools1 from "/assets/tools/papasfritas.jpeg";
import Tools2 from "/assets/tools/tatos.jpeg";
import Tools3 from "/assets/tools/colada morada.jpeg";
import Tools4 from "/assets/tools/almuerzos.jpg";
import Tools5 from "/assets/tools/jugos.jpeg";
import Tools6 from "/assets/tools/sanduches.jpeg";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Salchipapa Escolar",
    ket: "$1,25",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "Tostitos",
    ket: "$1",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Colada Morada",
    ket: "$2,50",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Almuerzos Empresariales",
    ket: "$3",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Juguitos Naturales",
    ket: "$1,50",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Sanduches",
    ket: "$1,50",
    dad: "600",
  },  
];

import Proyek1 from "/assets/proyek/pagos.jpg";
import Proyek2 from "/assets/proyek/money.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Tarjeta de débito o Transferencia",
    desk: "Puedes realiazar pagos con cualquier cuenta bancaria nacional o internacional",
    tools: ["Débito", "Transferencia"],
    dad: "200",
    link: "https://freepass-ec-company.github.io/tienda-free-pass.html" ,
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Pago en efectivo",
    desk: "Reserva y puedes pagar en efecivo cuando lo retires",
    tools: ["Dolares"],
    dad: "300",
    link: "" ,
  },
];
