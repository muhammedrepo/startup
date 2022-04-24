import tw from "tailwind-styled-components";

export const Header = tw.div`
flex w-full items-center justify-center bg-transparent z-40 left-0 top-0 absolute

`;

export const Nav = tw.nav`bg-[rgba(29,33,68,1)] overflow-hidden h-0 lg:bg-transparent lg:overflow-visible lg:h-auto transition-all delay-300 ease-linear
absolute right-4 top-full w-full max-w-[250px] rounded-lg lg:pb-8 px-6 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none
`;
