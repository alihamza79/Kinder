import React, { memo, useEffect, useState } from 'react';

// Libraries
import { Form, Formik } from 'formik';
import { AnimatePresence, m } from 'framer-motion';
import { PropTypes } from "prop-types";
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

// Components
import { resetForm, sendEmail } from '../../Functions/Utilities';
import { Input } from '../Form/Form';
import MessageBox from '../MessageBox/MessageBox';
import SocialIcons from '../SocialIcon/SocialIcons';
import { Footer } from './Footer';

// Data
import FooterData from './FooterData';

// Appwrite
import db from '../../appwrite/Services/dbServices';

// Define footer links separately
const footerLinks = [
  { title: 'Home', link: '/' },
  { title: 'Wichtige Information', link: '/wichtigeinfo' },
  { title: 'Vertretung', link: '/vertretung' },
  { title: 'All News', link: '/allnews' },
  { title: 'Contact Us', link: '/contactus' },
  { title: 'Privacy Policy', link: '/privacy' },

];

const FooterStyle04 = (props) => {
  const [iconData, setIconData] = useState([
    { color: "#828282", link: "", icon: "fab fa-facebook-f" },
    { color: "#828282", link: "", icon: "fab fa-twitter" },
    { color: "#828282", link: "", icon: "fab fa-instagram" },
    
  ]);

  useEffect(() => {
    const fetchSocialLinks = async () => {
      try {
        const response = await db.socialLinks.list();
        if (response.documents.length > 0) {
          const { facebook, twitter, instagram } = response.documents[0];
          setIconData((prevIconData) =>
            prevIconData.map((item) => {
              if (item.icon.includes('facebook')) item.link = facebook;
              if (item.icon.includes('twitter')) item.link = twitter;
              if (item.icon.includes('instagram')) item.link = instagram;
              return item;
            })
          );
        }
      } catch (error) {
        console.error("Error fetching social links:", error);
      }
    };

    fetchSocialLinks();
  }, []);

  // Split the footerLinks array into two halves for two columns
  const midIndex = Math.ceil(footerLinks.length / 2);
  const firstColumnLinks = footerLinks.slice(0, midIndex);
  const secondColumnLinks = footerLinks.slice(midIndex);

  return (
    <Footer topSpace={false} theme={props.theme} className={`footer-style-04${props.className ? ` ${props.className}` : ""}`}>
      <div className="py-[6%] lg:py-[8%] md:py-[50px]">
        <Container>
          <Row className="justify-between md:justify-start">
            <Col lg={{ span: 3, order: 0 }} sm={{ span: 6, order: 1 }} className="md:mb-[40px] xs:mb-[25px]">
              <Link aria-label="link" to="/" className="mb-[25px] block">
                <div className="flex items-center">
                  <img
                    width={80}
                    height={80}
                    src="/assets/img/webp/logo1.png"
                    data-rjs="/assets/img/webp/logo-cropped@2x.png"
                    alt="logo"
                  />
                  <img
                    width={185}
                    height={120}
                    src="/assets/img/webp/logo2.png"
                    data-rjs="/assets/img/webp/logo-cropped@2x.png"
                    alt="logo"
                  />
                </div>
              </Link>
              <p className="w-full md:w-[80%] mb-[30px] xs:w-11/12">Lorem ipsum dolor amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore.</p>
              <SocialIcons theme="social-icon-style-01" className="justify-start" size="xs" iconColor={props.theme === "dark" ? "light" : "dark"} data={iconData.filter(icon => icon.link)} />
            </Col>
            
            {/* Add this new section for listing pages */}
            <Col lg={{ span: 3 }} sm={{ span: 6 }} className="md:mb-[40px] xs:mb-[25px]">
              <span className="font-serif font-medium block text-themecolor mb-[20px] xs:mb-[10px]">Pages</span>
              <Row>
                <Col xs={6}>
                  <ul className="list-none p-0">
                    {firstColumnLinks.map((page, index) => (
                      <li key={index} className="mb-[10px]">
                        <Link to={page.link} className="text-gray-600 hover:text-gray-800">
                          {page.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Col>
                <Col xs={6}>
                  <ul className="list-none p-0">
                    {secondColumnLinks.map((page, index) => (
                      <li key={index} className="mb-[10px]">
                        <Link to={page.link} className="text-gray-600 hover:text-gray-800">
                          {page.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Col>
              </Row>
            </Col>

            <Col xl={{ span: 3 }} lg={{ span: 4, order: 0 }} sm={{ span: 6, order: 3 }} md={5}>
              <span className="font-serif font-medium block text-themecolor mb-[20px] xs:mb-[10px]">Subscribe to newsletter</span>
              <p className="mb-[25px] md:mb-[20px]">Enter your email address for receiving valuable Updates</p>
              <Formik
                initialValues={{ email: "" }}
                validationSchema={Yup.object().shape({ email: Yup.string().email("Invalid email.").required("Field is required.") })}
                onSubmit={async (values, actions) => {
                  actions.setSubmitting(true)
                  const response = await sendEmail(values)
                  response.status === "success" && resetForm(actions)
                }}
              >
                {({ isSubmitting, status }) => (
                  <div className="relative mb-[25px] subscribe-style-09 mx-auto">
                    <Form className="relative">
                      <Input showErrorMsg={false} type="email" name="email" labelClass="w-full" className="border-[1px] border-solid border-mediumgray py-[13px] pl-[15px] pr-[60px] w-full small-input placeholder-[#A6A6A6]" placeholder="Enter your email address" />
                      <button aria-label="subscribe" type="submit" className={`text-lg tracking-[1px] py-[12px] px-[28px] btn-gradient uppercase${isSubmitting ? " loading" : ""}`} >
                        <i className="feather-mail text-lg m-0"></i>
                      </button>
                    </Form>
                    <AnimatePresence>
                      {status && (
                        <m.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute top-[115%] left-0 w-full"
                        >
                          <MessageBox
                            className="py-[5px] rounded-[4px]"
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
            </Col>
            <p className='text-right'>&copy; Copyright {new Date().getFullYear()} Kinder | Powered by  <Link aria-label="link" to="https://syntax-ai.vercel.app" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 text-themecolor font-medium hover:text-basecolor"> SYNTAX</Link></p>
          </Row>
        </Container>
      </div>
    </Footer >
  )
}


FooterStyle04.propTypes = {
  className: PropTypes.string,
  logo: PropTypes.string,
}

export default memo(FooterStyle04);
