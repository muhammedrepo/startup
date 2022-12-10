import { ReactComponent as Facebook } from "../images/social-media/facebook.svg";
import { ReactComponent as Twitter } from "../images/social-media/twitter.svg";
import { ReactComponent as YouTube } from "../images/social-media/youtube.svg";
import { ReactComponent as LinkedIn } from "../images/social-media/linkedin.svg";
import { f1, f2, f3, f4, f5, f6, testi1, testi2, testi3 } from "../images";
export { default as ScrollToTop } from "./scrollToTop";

export const socialIcon = [
  { path: "facebook.com", icon: <Facebook /> },
  { path: "twitter.com", icon: <Twitter /> },
  { path: "linkedin.com", icon: <LinkedIn /> },
  { path: "youtube.com", icon: <YouTube /> },
];

export const navLinks = [
  {
    id: "home",
    title: "Home",
    path: "/",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "pricing",
    title: "Pricing",
  },

  {
    id: "support",
    title: "Support",
  },
];

export const pageLinks = [
  {
    title: "About Page",
    path: "about",
  },
  {
    title: "Contact Page",
    path: "contact",
  },
  {
    title: "Blog Grid Page",
    path: "blog-grid",
  },
  {
    title: "Blog Sidebar Page",
    path: "blog-sidebar",
  },
  {
    title: "Blog Details Page",
    path: "blog-details",
  },
  {
    title: "Sing In Page",
    path: "sign-in",
  },
  {
    title: "Sign Up Page",
    path: "sign-up",
  },
  {
    title: "404 Page",
    path: "error",
  },
];

export const features = [
  {
    id: 1,
    icon: f1,
    name: "Crafted for Startups",
    description:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 2,
    icon: f2,
    name: "High-quality Design",
    description:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 3,
    icon: f3,
    name: "All Essential Components",
    description:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 4,
    icon: f4,
    name: "Speed Optimized",
    description:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 5,
    icon: f5,
    name: "Fully Customizable",
    description:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 6,
    icon: f6,
    name: "Regular Updates",
    description:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
];

export const testimonialsData = [
  {
    pic: `${testi1}`,
    name: "Crafted for Startups",
    job: "Founder @TailGrids",
    description:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
  },
  {
    pic: `${testi2}`,
    name: "Ashrof Salman",
    job: "Founder @Dignity Afric",
    description:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
  },
  {
    pic: `${testi3}`,
    name: "Muhammed Tijani",
    job: "Founder @Muhats",
    description:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
  },
];
