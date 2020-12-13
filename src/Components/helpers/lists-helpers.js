//FaPaw
//GiSittingDog
//FaTrophy

//IMPORTS

import { FaPaw, FaTrophy } from "react-icons/fa";
import { GiSittingDog } from "react-icons/gi";

//VARIABLES

export const paw = <FaPaw />;
export const trophy = <FaTrophy />;
export const dog = <GiSittingDog />;

//LISTS

export const pageLinks = [
  { page: "Home", link: "/" },
  { page: "About", link: "/about" },
  { page: "Registry", link: "/registry" },
  { page: "Events", link: "/events" },
  { page: "Calendar", link: "/calendar" },
  { page: "Merchandise", link: "/merchandise" },
];

export const featureList = [
  {
    icon: paw,
    title: "Veniam amet",
    desc: "Elit laboris eiusmod esse minim tempor aute elit irure Lorem sint.",
  },
  {
    icon: trophy,
    title: "Veniam amet",
    desc: "Elit laboris eiusmod esse minim tempor aute elit irure Lorem sint.",
  },
  {
    icon: dog,
    title: "Veniam amet",
    desc: "Elit laboris eiusmod esse minim tempor aute elit irure Lorem sint.",
  },
];
