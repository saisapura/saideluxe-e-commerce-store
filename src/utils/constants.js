import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "Delivering custom furniture tailored to your style and needs, we strive to exceed expectations with unmatched luxury and individuality, ensuring every piece reflects your unique personality and preferences.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Pioneering personalized furniture globally, we inspire creativity and elevate living spaces with our bespoke creations, setting new standards in luxury craftsmanship and client satisfaction.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "With a legacy of artisanal excellence spanning decades, we've been crafting bespoke furniture to perfection, earning a reputation for unparalleled quality and innovation, making us the premier choice for discerning clients worldwide.",
  },
];

export const products_url = "https://course-api.com/react-store-products";

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
