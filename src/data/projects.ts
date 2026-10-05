import type { Project } from "../types";

// Add a project by adding an object here. Put screenshots in /public/shots and set image: '/shots/name.png'.
export const projects: Project[] = [
  {
    name: "FeedFirst",
    summary: "Custom bird-feed e-commerce platform.",
    purpose:
      "Lets customers build their own bird-feed mix from ingredients with live pricing.",
    features: [
      "Custom mixes with server-side price recalculation and stock validation",
      "Weight-based delivery fees",
      "JWT auth, customer/admin roles, OTP password reset by email",
      "Admin dashboard; saved addresses with geolocation autofill",
    ],
    tech: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB"],
    live: "https://feed-first-lgma.vercel.app/",
    image: "/shots/FeedFirst.png",
  },
  {
    name: "EasyBuy",
    summary: "Full-stack shopping application.",
    purpose:
      "Gives shoppers a secure store with browsing, filtering and a persistent cart.",
    features: [
      "Category filtering and a persistent cart per user",
      "Email OTP verification, bcrypt hashing, token-based sessions",
      "Admin-only dashboard to add, edit and remove products",
      "Checkout with stock validation and Nodemailer order emails",
    ],
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    live: "https://e-commer-app-frontend.vercel.app/",
    image: "/shots/EasyBuy.png",
  },
  {
    name: "Tiffin&Co",
    summary: "Food delivery website.",
    purpose:
      "Connects customers, restaurants and administrators in one ordering platform.",
    features: [
      "Restaurant approval workflow",
      "REST APIs for orders and menus with role-based access control",
      "Every order tracked from placement to delivery",
      "Responsive interface with a consistent design system",
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB Atlas"],
    live: "https://food-delievery-frontend-alpha.vercel.app/",
    image: "/shots/Tiffin&Co.png",
  },
  {
    name: "Cartify",
    summary: "MERN e-commerce website.",
    purpose: "A shopping platform with cloud-hosted data.",
    features: [
      "REST APIs for product listings, cart and order processing",
      "MongoDB Atlas storage",
      "Frontend and backend deployed separately",
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB Atlas"],
    live: "https://cartify-l7la.vercel.app/",
    image: "/shots/Cartify.png",
  },
];
