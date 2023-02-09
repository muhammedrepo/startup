import { Link } from 'react-router-dom';
import { socialIcon } from '../../constants';
import { footerLinks } from './data';
import { ReactComponent as FooterImage } from '../../images/footer/footerImage.svg';
import { ReactComponent as FooterImageTwo } from '../../images/footer/footerImage2.svg';
import { logo, logoWhite } from '../../images';

const Footer = () => {
  const renderedSocialLinks = socialIcon.map((item, index) => (
    <Link
      key={index}
      to={item.path}
      aria-label="social-link"
      className="fill-light-blue hover:fill-main-bg mr-6"
    >
      {item.icon}
    </Link>
  ));

  const renderedFooterLinks = footerLinks.map((footerLink) => (
    <div className="xs:my-0 my-4 flex min-w-[150px] flex-col">
      <div className="mb-16">
        <h2 className="mb-10 text-xl font-bold text-white">
          {footerLink.title}
        </h2>
        <ul>
          {footerLink.links.map((link) => (
            <li>
              <a
                href={link.url}
                className="text-gray hover:text-main-bg mb-4 inline-block text-base  font-medium"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ));

  return (
    <footer className="bg-main-bg/5 relative z-10 pt-[100px]">
      <div className="container">
        <div className=" flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-1/3 xl:w-[41.666667%]">
            <div className="mb-16 max-w-[360px]">
              <a href="#home" className="mb-8 inline-block">
                <img src={logoWhite} alt="logo" className="aj w-full" />
                <img src={logo} alt="logo" className="hidden w-full" />
              </a>
              <p className="mb-9 text-base font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                lobortis.
              </p>
              <div className="flex items-center">{renderedSocialLinks}</div>
            </div>
          </div>

          <div className="flex w-full flex-[1.5] flex-row flex-wrap justify-between">
            {renderedFooterLinks}
          </div>
        </div>
      </div>
      <div className="bg-main-bg/10 py-8">
        <div className="container mx-auto px-4">
          <p className="text-center text-base">
            &copy; Crafted by Muhats for You!
          </p>
        </div>
      </div>
      <div className="absolute right-0 top-[3.5rem] -z-[1]">
        <FooterImage />
      </div>
      <div className="absolute left-0 bottom-24 -z-[1]">
        <FooterImageTwo />
      </div>
    </footer>
  );
};

export default Footer;
