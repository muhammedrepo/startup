import { ReactComponent as Facebook } from "../../images/social-media/facebook.svg";
import { ReactComponent as Twitter } from "../../images/social-media/twitter.svg";
import { ReactComponent as YouTube } from "../../images/social-media/youtube.svg";
import { ReactComponent as LinkedIn } from "../../images/social-media/linkedin.svg";

export const socialIcon = [
  { path: "facebook.com", icon: <Facebook /> },
  { path: "twitter.com", icon: <Twitter /> },
  { path: "youtube.com", icon: <YouTube /> },
  { path: "linkedin.com", icon: <LinkedIn /> },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Blog",
        link: "/blog-grid",
      },
      {
        name: "Pricing",
        link: "#pricing",
      },
      {
        name: "About",
        link: "/about",
      },
    ],
  },
  {
    title: "Terms",
    links: [
      {
        name: "TOS",
        link: "/tos",
      },
      {
        name: "Privacy Policy",
        link: "/privacy-policy",
      },
      {
        name: "Refund Policy",
        link: "/refund",
      },
    ],
  },
  {
    title: "Support & Help",
    links: [
      {
        name: "Open Support Ticket",
        link: "#support",
      },
      {
        name: "Terms of Use",
        link: "/terms",
      },
      {
        name: "About",
        link: "/about",
      },
    ],
  },
];
