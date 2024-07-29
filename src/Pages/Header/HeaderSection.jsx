import { Form, Formik } from 'formik';
import { AnimatePresence, m } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Col, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = React.lazy(() =>
  import("../../Components/Header/Header").then((module) => ({
    default: module.Header,
  }))
);

const HeaderNav = React.lazy(() =>
  import('../../Components/Header/Header').then((module) => ({
    default: module.HeaderNav,
  }))
);
const Menu = React.lazy(() =>
  import('../../Components/Header/Header').then((module) => ({
    default: module.Menu,
  }))
);

const SocialIconsData = [
  { color: '#3b5998', link: 'https://www.facebook.com/', icon: 'fab fa-facebook-f' },
  { color: '#ea4c89', link: 'https://dribbble.com/', icon: 'fab fa-dribbble' },
  { color: '#00aced', link: 'https://twitter.com/', icon: 'fab fa-twitter' },
  { color: '#fe1f49', link: 'https://www.instagram.com/', icon: 'fab fa-instagram' },
  { color: '#0077b5', link: 'https://www.linkedin.com/', icon: 'fab fa-linkedin-in' },
];

const HeaderSection = (props) => {
  const { theme, logoInvisible = false } = props;
  const [scrollUp, setScrollUp] = useState(false);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      setScrollUp(scrollY < lastScrollY && scrollY !== 0);
      lastScrollY = scrollY;
    };
    window.addEventListener('scroll', updateScrollDirection);
    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, []);

  return (
    <Header topSpace={{ md: true }} type="reverse-scroll">
      <HeaderNav
        fluid="fluid"
        theme={theme}
        expand="lg"
        className={`py-[0px] px-[35px] md:px-[15px] md:py-[20px] sm:px-0 ${theme === 'dark' ? 'navbar-dark' : 'navbar-light'}`}
      >
        <div className="flex items-center justify-between">
          <Col lg={2} sm={6} xs={"auto"} className="mr-auto ps-0" >
            <Link aria-label="header logo" className="flex items-center" to="/" >
              {!logoInvisible ? (
                <>
                  <img
                    className="default-logo w-[80px] h-[80px] md:w-[80px] md:h-[80px] sm:w-[60px] sm:h-[60px]"
                    style={{maxWidth:'none'}}
                    src="/assets/img/webp/logo1.png"
                    data-rjs="/assets/img/webp/logo-cropped@2x.png"
                    alt="logo"
                  />
                  <img
                    className="default-logo w-[270px] h-[64px] md:w-[410px] md:h-[100px] sm:w-[205px] sm:h-[48px]"
                    style={{ maxWidth: '400px' }}
                    src="/assets/img/webp/logo2.png"
                    data-rjs="/assets/img/webp/logo-cropped@2x.png"
                    alt="logo"
                  />
                </>
              ) : null}

              <img
                className="alt-logo w-[100px] h-[80px] md:w-[80px] md:h-[80px] sm:w-[60px] sm:h-[60px]"
                src="/assets/img/webp/logo1.png"
                data-rjs="/assets/img/webp/logo-cropped@2x.png"
                alt="logo"
                style={{ display: scrollUp ? 'block' : 'none',maxWidth:'none' }}
              />
              <img
                className="alt-logo w-[210px] h-[63px] md:w-[140px] md:h-[100px] sm:w-[10px] sm:h-[48px]"

                src="/assets/img/webp/logo2.png"
                data-rjs="/assets/img/webp/logo-cropped@2x.png"
                alt="logo"
                style={{ display: scrollUp ? 'block' : 'none', maxWidth: '400px' }}
              />
            </Link>
          </Col>
        </div>
          
          <Navbar.Toggle className="md:ml-[17px] w-[25px] min-h-[15px] inline-block align-middle">
            <span className="navbar-toggler-line"></span>
            <span className="navbar-toggler-line"></span>
            <span className="navbar-toggler-line"></span>
            <span className="navbar-toggler-line"></span>
          </Navbar.Toggle>
         
        <Navbar.Collapse className="justify-center col-auto col-lg-8">
          <Menu {...props} />
        </Navbar.Collapse>
      </HeaderNav>
    </Header>
  );
};

export default HeaderSection;
