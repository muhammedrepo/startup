import { ReactComponent as Calender } from "../../images/svg/calender.svg";
import { ReactComponent as Comment } from "../../images/svg/comment.svg";
import { ReactComponent as Eye } from "../../images/svg/eye.svg";
import {
  blog1,
  blog2,
  blog3,
  author1,
  author2,
  author3,
  post1,
  post2,
  post3,
} from "../../images";

export const blogData = [
  {
    id: 1,
    blogImg: blog1,
    category: "Computer",
    title: "Best UI components for modern websites ",
    url: "/blog-detail",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor..",
    author: "Samuyl Joshi",
    authorImage: author1,
    job: "Graphic Designer",
    date: "15 Oct, 2023",
  },
  {
    id: 2,
    blogImg: `${blog2}`,
    category: "Design",
    title: "9 simple ways to improve your design skills ",
    url: "/blog-sidebar",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor..",
    author: "Victori Umaru",
    authorImage: `${author2}`,
    job: "Content Writer",
    date: "20 Nov, 2023",
  },
  {
    id: 3,
    blogImg: `${blog3}`,
    category: "Computer",
    title: "Tips to quickly improve your coding speed. ",
    url: "/blog-detail",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor..",
    author: "Ashrof Salman",
    authorImage: `${author3}`,
    job: "Web Developer",
    date: "25 Dec, 2023",
  },
  {
    id: 4,
    blogImg: `${blog1}`,
    category: "Computer",
    title: "Best UI components for modern websites ",
    url: "/blog-sidebar",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor..",
    author: "Samuyl Joshi",
    authorImage: `${author1}`,
    job: "Graphic Designer",
    date: "15 Oct, 2023",
  },
  {
    id: 5,
    blogImg: `${blog2}`,
    category: "Design",
    title: "9 simple ways to improve your design skills ",
    url: "/blog-detail",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor..",
    author: "Victori Umaru",
    authorImage: `${author2}`,
    job: "Content Writer",
    date: "20 Nov, 2023",
  },
  {
    id: 6,
    blogImg: `${blog3}`,
    category: "Computer",
    title: "Tips to quickly improve your coding speed. ",
    url: "/blog-sidebar",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor..",
    author: "Ashrof Salman",
    authorImage: `${author3}`,
    job: "Web Developer",
    date: "25 Dec, 2023",
  },
];

export const views = [
  {
    icon: <Calender />,
    desc: "12 Jan 2023",
  },
  {
    icon: <Comment />,
    desc: "50",
  },
  {
    icon: <Eye />,
    desc: "35",
  },
];

export const relatedPosts = [
  {
    id: 1,
    img: post1,
    url: "/blog-details",
    title: "Best way to boost your online sales.",
    date: "20 Mar, 2024",
  },
  {
    id: 2,
    img: post2,
    url: "/blog-details",
    title: "50 Best web design tips & tricks that will help you.",
    date: "20 Mar, 2024",
  },
  {
    id: 3,
    img: post3,
    url: "/blog-details",
    title: "The 8 best landing page builders, reviewed",
    date: "05 Jan 2023",
  },
];

export const catLists = [
  { title: "Tailwind", url: "/blog" },
  { title: "Landing page", url: "/blog" },
  { title: "Startup", url: "/blog" },
  { title: "Business", url: "/blog" },
  { title: "Multipurpose", url: "/blog" },
];
