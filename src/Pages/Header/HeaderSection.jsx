import React, { useState, useEffect, lazy } from 'react';
import { Col, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { m, AnimatePresence } from 'framer-motion';

// Import functions and components
import { resetForm, sendEmail } from '../../Functions/Utilities';
import { Input } from '../../Components/Form/Form';
import MessageBox from '../../Components/MessageBox/MessageBox';
import SocialIcons from '../../Components/SocialIcon/SocialIcons';
import StaticInstagram from '../../Components/Instagram/StaticInstagram';
import { HamburgerMenu } from '../../Components/Header/Header';
import { SearchBar } from '../../Components/Header/Header';
import { fadeIn } from '../../Functions/GlobalAnimations';

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
  const { theme } = props;
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
        <Col lg={2} sm={6} xs={"auto"} className="mr-auto ps-0">
          <Link aria-label="header logo" className="flex items-center" to="/">
            <img
              className="default-logo w-[100px] h-[80px] md:w-[80px] md:h-[80px] sm:w-[60px] sm:h-[60px]"
              src="/assets/img/webp/logo1.png"
              data-rjs="/assets/img/webp/logo-cropped@2x.png"
              alt="logo"
            />
            <img
              className="default-logo w-[210px] h-[130px] md:w-[160px] md:h-[110px] sm:w-[180px] sm:h-[100px]"
              src="/assets/img/webp/logo2.png"
              data-rjs="/assets/img/webp/logo-cropped@2x.png"
              alt="logo"
            />
            <img
              className="alt-logo w-[100px] h-[80px] md:w-[80px] md:h-[80px] sm:w-[60px] sm:h-[60px]"
              src="/assets/img/webp/logo1.png"
              data-rjs="/assets/img/webp/logo-cropped@2x.png"
              alt="logo"
              style={{ display: scrollUp ? 'block' : 'none' }}
            />
            <img
              className="alt-logo w-[170px] h-[120px] md:w-[160px] md:h-[110px] sm:w-[70px] sm:h-[95px]"
              src="/assets/img/webp/logo2.png"
              data-rjs="/assets/img/webp/logo-cropped@2x.png"
              alt="logo"
              style={{ display: scrollUp ? 'block' : 'none' }}
            />
          </Link>
        </Col>
        <Navbar.Toggle className="order-last md:ml-[17px] w-[25px] min-h-[15px] inline-block align-middle">
          <span className="navbar-toggler-line"></span>
          <span className="navbar-toggler-line"></span>
          <span className="navbar-toggler-line"></span>
          <span className="navbar-toggler-line"></span>
        </Navbar.Toggle>
        <Navbar.Collapse className="justify-center col-auto col-lg-8">
          <Menu {...props} />
        </Navbar.Collapse>
        <Col lg={2} xs={"auto"} className="justify-end pe-0 flex items-center">
          <SearchBar />
          <div className="md:hidden pl-[17px]">
            <HamburgerMenu className="" theme={theme}>
              <Col className="flex flex-col justify-center px-[50px] py-[70px] w-[500px] h-[100vh] shadow-[0_0_20px_rgba(0,0,0,0.3)] right-0 text-center bg-white">
                <div>
                  <h1 className="mb-0 font-bold tracking-[-3px] text-darkgray font-serif uppercase">Hello</h1>
                  <p className="text-lg text-[#27ae60] font-serif uppercase block">Let's be friends.</p>
                  <div className="my-20 w-full">
                    <StaticInstagram className="" />
                  </div>
                  <p className="w-[70%] mb-12 text-darkgray leading-[26px] text-lg font-serif mx-auto inline-block">
                    Get latest update for our trusted applications
                  </p>
                  <Formik
                    initialValues={{ email: '' }}
                    validationSchema={Yup.object().shape({
                      email: Yup.string().email('Invalid email.').required('Field is required.'),
                    })}
                    onSubmit={async (values, actions) => {
                      actions.setSubmitting(true);
                      const response = await sendEmail(values);
                      response.status === 'success' && resetForm(actions);
                    }}
                  >
                    {({ isSubmitting, status }) => (
                      <div className="relative subscribe-style-05 mb-20">
                        <Form className="relative">
                          <Input
                            showErrorMsg={false}
                            type="email"
                            name="email"
                            className="border-[1px] medium-input rounded-[5px] border-solid border-[#dfdfdf]"
                            placeholder="Enter your email address"
                          />
                          <button
                            aria-label="Subscribe"
                            type="submit"
                            className={`text-xs leading-[18px] py-[12px] px-[28px] uppercase xs:text-center${isSubmitting ? ' loading' : ''}`}
                          >
                            <i className="far fa-envelope text-basecolor text-sm leading-none mr-[10px] xs:mr-0"></i>
                            Subscribe
                          </button>
                        </Form>
                        <AnimatePresence>
                          {status && (
                            <m.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="mt-[25px] top-[115%] left-0 w-full"
                            >
                              <MessageBox
                                className="rounded-[4px] text-md py-[10px] px-[22px] z-10"
                                theme="message-box01"
                                variant="success"
                                message="Your message has been sent successfully subscribed to our email list!"
                              />
                            </m.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </Formik>
                  <SocialIcons theme="social-icon-style-05" size="sm" iconColor="dark" data={SocialIconsData} />
                </div>
              </Col>
            </HamburgerMenu>
          </div>
        </Col>
      </HeaderNav>
    </Header>
  );
};

export default HeaderSection;
