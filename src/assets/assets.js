import nav_logo from "./nav_logo.webp";
import favi_logo from "./favi_logo.webp";
import sun_logo from "./sun_logo.png";
import moon_logo from "./moon_logo.png";
import Ak_img from "./Ak_img.png";
import html_logo from "./html_logo.png";
import css_logo from "./css_logo.png";
import js_logo from "./js_logo.png";
import reactjs_logo from "./reactjs_logo.png";
import tailwind_logo from "./tailwind_logo.svg";
import bootstrap_logo from "./bootstrap_logo.png";
import redux from "./redux.png";
import vercel from "./vercel.png";
import netlify from "./netlify.svg";
import mysql from "./mysql.png";
import github from "./github.png";
import proj_3 from "./recipe-search.webp";
import proj_2 from "./my-shop-cart.webp";
import proj_1 from "./laud-page.webp";
import bg_hero from "./bg_hero.jpg";

export const assets = {
  nav_logo,
  favi_logo,
  sun_logo,
  moon_logo,
  bg_hero,
  Ak_img,
  html_logo,
  css_logo,
  js_logo,
  reactjs_logo,
  tailwind_logo,
  bootstrap_logo,
  redux,
  vercel,
  github,
  netlify,
  mysql,
  proj_3,
  proj_2,
  proj_1,
};

export const skills = [
  {
    id: 1,
    img: assets.html_logo,
    title: "HTML",
  },
  {
    id: 2,
    img: assets.css_logo,
    title: "CSS",
  },
  {
    id: 3,
    img: assets.js_logo,
    title: "JavaScript",
  },
  {
    id: 4,
    img: assets.reactjs_logo,
    title: "React.js",
  },
  {
    id: 5,
    img: assets.tailwind_logo,
    title: "Tailwind",
  },
  {
    id: 6,
    img: assets.bootstrap_logo,
    title: "BootStrap",
  },
  {
    id: 7,
    img: assets.redux,
    title: "Redux",
  },
  {
    id: 8,
    img: assets.github,
    title: "Github",
  },
  {
    id: 9,
    img: assets.mysql,
    title: "MySQL",
  },
  {
    id: 10,
    img: assets.vercel,
    title: "Vercel",
  },
  {
    id: 11,
    img: assets.netlify,
    title: "Netlify",
  },
];

export const experience = [
  {
    id: 1,
    year: "Dec 2024 - Apr 2025",
    company: "Intership at Strings Infinity.",
  },
  {
    id: 2,
    year: "Apr 2024 - Aug 2024",
    company: "Intership at ELGI EQUIPMENTS LIMITED·",
  },
];

export const education = [
  {
    id: 1,
    year: "2023 - 2025",
    education: "M.sc. Computer Science at PSGR Krishnammal college for women.",
  },
  {
    id: 2,
    year: "2019 - 2022",
    education: "B.sc. Computer Science at KG college of arts & science.",
  },
];

export const projects = [
  {
    id: 1,
    img: assets.proj_3,
    name: "Recipe-Search-App",
    description:
      "A responsive React.js Recipe Search App with dynamic search, recipe details view, and the ability to add or remove favorites using data from an server API.",
    technologies: [
      "React.js",
      "JavaScript",
      "useState",
      "useEffect",
      "useContext",
      "Tailwind CSS",
    ],
    url: "https://recipe-search-context-app.netlify.app/",
  },
  {
    id: 2,
    img: assets.proj_2,
    name: "My-Shop-Cart",
    description:
      "A React-based shopping cart app where users can add products to the cart, view selected items, and remove them as needed.",
    technologies: [
      "React.js",
      "JavaScript",
      "useState",
      "useEffect",
      "Tailwind CSS",
    ],
    url: "https://my-shop-cartt.netlify.app/",
  },
  {
    id: 3,
    img: assets.proj_1,
    name: "Laud-Page",
    description:
      "This Project is a simple laud page dedicated to Rani Lakshmibai, the brave Queen of Jhansi and a key figure in the Indian Rebellion of 1857.",
    technologies: ["Html", "CSS", "Bootstrap"],
    url: "https://rani-of-jhansi-laud-page.netlify.app/",
  },
];
