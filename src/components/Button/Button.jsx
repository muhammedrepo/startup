import React from "react";
import tw from "tailwind-styled-components";

const ButtonLink = tw.button`
inline-flex items-center justify-center rounded-md py-4 px-4 text-center text-base font-semibold text-white hover:bg-opacity-60 sm:px-10 lg:px-8 xl:px-10 mx-2
${(p) => (p.$primary ? "bg-blue-600" : "bg-gray-700")}
`;

export const Button = ({ title }) => {
  return <ButtonLink $primary={true}>{title}</ButtonLink>;
};

export const ButtonGray = ({ title }) => {
  return <ButtonLink>{title}</ButtonLink>;
};
