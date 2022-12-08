import { ReactComponent as Facebook } from "../images/social-media/facebook.svg";
import { ReactComponent as Twitter } from "../images/social-media/twitter.svg";
import { ReactComponent as YouTube } from "../images/social-media/youtube.svg";
import { ReactComponent as LinkedIn } from "../images/social-media/linkedin.svg";

export { default as images } from "./images";
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
