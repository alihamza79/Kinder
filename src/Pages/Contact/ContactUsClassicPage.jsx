import emailjs from 'emailjs-com';
import { Form, Formik } from 'formik';
import { AnimatePresence, m } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-scroll-parallax';
import Buttons from '../../Components/Button/Buttons';
import { Checkbox, Input, TextArea } from '../../Components/Form/Form';
import * as Yup from 'yup';
import GoogleMap from '../../Components/GoogleMap/GoogleMap';
import MessageBox from '../../Components/MessageBox/MessageBox';
import SideButtons from "../../Components/SideButtons";
import SocialIcons from '../../Components/SocialIcon/SocialIcons';
import { fadeIn } from '../../Functions/GlobalAnimations';
import FooterSection from '../Footer/FooterSection';
import HeaderSection from '../Header/HeaderSection';
import db from '../../appwrite/Services/dbServices';
import {
  ContactFormStyle03Schema
} from '../../Components/Form/FormSchema';

const sendEmail = async (values) => {
  try {
    const result = await emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      values,
      process.env.REACT_APP_EMAILJS_USER_ID,
    );
    return { status: 'success', result };
  } catch (error) {
    console.log(error);
    return { status: 'error', error };
  }
};

const resetForm = (actions) => {
  actions.resetForm();
  actions.setSubmitting(false);
};

const ContactUsClassicPage = (props) => {
  const form = useRef(null);
  const [socialLinks, setSocialLinks] = useState({
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: "",
  });

  useEffect(() => {
    const fetchSocialLinks = async () => {
      try {
        const response = await db.socialLinks.list();
        if (response.documents.length > 0) {
          const { facebook, twitter, instagram, linkedin } = response.documents[0];
          setSocialLinks({ facebook, twitter, instagram, linkedin });
        }
      } catch (error) {
        console.error("Error fetching social links:", error);
      }
    };

    fetchSocialLinks();
  }, []);

  const socialIconsData = [
    { color: "#3b5998", link: socialLinks.facebook, icon: "fab fa-facebook-f" },
    { color: "#00aced", link: socialLinks.twitter, icon: "fab fa-twitter" },
    { color: "#fe1f49", link: socialLinks.instagram, icon: "fab fa-instagram" },
    { color: "#007bb6", link: socialLinks.linkedin, icon: "fab fa-linkedin-in" },
  ].filter(icon => icon.link);

  return (
    <div style={props.style}>
      {/* Header Start */}
      <HeaderSection />
      {/* Header End */}
      <SideButtons />
      {/* Parallax Scrolling Start */}
      <m.div className="md:flex md:items-center overflow-hidden relative md:h-[465px] sm:h-[350px] xs:h-[357px]" {...fadeIn}>
        <Parallax className="lg-no-parallax bg-cover cover-background absolute left-0 h-[120vh] top-[60px] lg:h-[64vh] lg:top-[-46px] lg:!translate-y-0 md:h-[60vh] md:-top-[30px] sm:top-[-44px] sm:h-[49vh] xs:top-0 xs:h-[40vh] w-full" translateY={[-40, 40]} style={{ backgroundImage: `url(/assets/img/webp/contactus.jpg)` }}></Parallax>
        <div className="absolute h-full w-full opacity-75 top-0 left-0 bg-gradient-to-tr from-[#0039e3] via-[#5e28dd] to-[#8600d4]"></div>
        <Container className="h-full relative">
          <Row className="justify-center h-full">
            <Col xl={6} lg={7} md={10} className="text-center flex h-[560px] lg:h-[480px] md:h-[450px] sm:h-[350px] justify-center flex-col font-serif">
              <span className="inline-block opacity-60 mb-[5px] text-white">Let's Connect</span>
              <h1 className="text-white text-[42px] leading-[49px] sm:text-[30px] sm:leading-10 font-medium mb-0">Contact us</h1>
            </Col>
          </Row>
        </Container>
      </m.div>
      {/* Parallax Scrolling End */}

      {/* Section Start */}
      <m.section className="py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]" {...fadeIn}>
        <Container>
          <Row className="justify-center">
            <Col xl={6} lg={7} className="text-center mb-[4.5rem] md:mb-12">
              <span className="font-serif mb-[5px] -tracking-[.5px] text-xmd block">Fill out the form and we'll be in touch soon!</span>
              <h4 className="font-serif font-semibold text-darkgray">How we can help you?</h4>
            </Col>
            <Col className="col-xl-10 col-sm-12 col-xs-12">
              <Formik
                initialValues={{ name: '', email: '', phone: '', comment: '', terms_condition: false }}
                validationSchema={ContactFormStyle03Schema}
                onSubmit={async (values, actions) => {
                  actions.setSubmitting(true);
                  const response = await sendEmail(values);
                  if (response.status === "success") {
                    resetForm(actions);
                    actions.setStatus({ success: true, error: false });
                    setTimeout(() => {
                      actions.setStatus({ success: false });
                    }, 3000);
                  } else {
                    actions.setStatus({ success: false, error: true });
                    
                  }
                  actions.setSubmitting(false);
                }}
              >
                {({ isSubmitting, status }) => (
                  <Form ref={form}>
                    <AnimatePresence>
                      {status && status.success && (
                        <Row>
                          <Col xs={12}>
                            <div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                              <MessageBox className="mt-[20px] py-[10px] bg-green-500 text-white" theme="message-box01" variant="success" message="Your message has been sent successfully!" />
                            </div>
                          </Col>
                        </Row>
                      )}
                      {status && status.error && (
                        <Row>
                          <Col xs={12}>
                            <div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                              <MessageBox className="mt-[20px] py-[10px] bg-red-500 text-white" theme="message-box01" variant="error" message="An error occurred while sending your message. Please try again." />
                            </div>
                          </Col>
                        </Row>
                      )}
                    </AnimatePresence>
                    <Row className="row-cols-1 row-cols-md-2">
                      <Col className="mb-16 sm:mb-[25px]">
                        <Input showErrorMsg={false} type="text" name="name" className="py-[15px] px-[20px] text-md w-full border-[1px] border-solid border-[#dfdfdf]" labelClass="mb-[25px]" placeholder="Your name" />
                        <Input showErrorMsg={false} type="email" name="email" className="py-[15px] px-[20px] w-full text-md border-[1px] border-solid border-[#dfdfdf]" labelClass="mb-[25px]" placeholder="Your email address" />
                        <Input showErrorMsg={false} type="tel" name="phone" className="py-[15px] px-[20px] w-full text-md border-[1px] border-solid border-[#dfdfdf]" placeholder="Mobile number" />
                      </Col>
                      <Col className="mb-16 sm:mb-[20px]">
                        <TextArea className="border-[1px] border-solid border-[#dfdfdf] w-full py-[15px] px-[20px] text-md h-[210px] resize-none" rows="6" name="comment" placeholder="Your message"></TextArea>
                      </Col>
                      <Col className="text-left sm:mb-[20px]">
                        <Checkbox type="checkbox" name="terms_condition" className="inline-block mt-[4px]" labelClass="flex items-start">
                          <span className="ml-[10px] text-sm inline-block w-[85%]">I accept the terms & conditions and I understand that my data will be hold securely in accordance with the<Link aria-label="checkbox" to="/privacy" target="_blank" className="text-darkgray underline hover:text-fastblue"> privacy policy</Link>.</span>
                        </Checkbox>
                      </Col>
                      <Col className="text-right sm:text-center">
                        <Buttons type="submit" className={`text-xs tracking-[1px] rounded-none py-[12px] px-[28px] uppercase ${isSubmitting ? "loading" : "bg-green-600 hover:bg-green-700"}`} size="md" color="#fff" title="Send Message" />
                      </Col>
                    </Row>
                  </Form>
                )}
              </Formik>
            </Col>
          </Row>
        </Container>
      </m.section>
      {/* Section End */}

      {/* Section Start */}
      <section className="py-[100px] md:py-[75px] sm:py-[50px]">
        <Container>
          <Row className="justify-center items-center">
            <Col xs={12} xl={3} lg={4} md={5} sm={6} className="lg:flex lg:justify-end xs:mb-[20px] xs:justify-center">
              <span className="font-serif font-medium text-xlg text-darkgray inline-block -tracking-[.5px] lg:text-lg">Connect with social media</span>
            </Col>
            <Col xs={12} md={2} className="block sm:hidden">
              <span className="w-full h-[1px] inline-block bg-mediumgray"></span>
            </Col>
            <Col xs={12} xl={3} lg={4} md={5} sm={6}>
              <SocialIcons theme="social-icon-style-01" className="justify-left xs:justify-center xs:text-center" size="sm" iconColor="dark" data={socialIconsData} />
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section Start */}

      {/* Section Start */}
      <section className="google-map-container pb-20">
        <GoogleMap
          className=" h-[550px] p-0 md:h-[400px] xs:h-[250px] w-[88%] mx-auto border border-gray-300 shadow-sm "
          location="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.352587248077!2d9.318753489368806!3d48.83241292861733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799c8a38c3eea07%3A0xea25113db09e030e!2sBeinsteiner%20Str.%204%2C%2071334%20Waiblingen%2C%20Germany!5e0!3m2!1sen!2s!4v1720685585014!5m2!1sen!2s"
        />
      </section>
      {/* Section End */}

      {/* Footer Start */}
      <FooterSection />
      {/* Footer End */}
    </div>
  );
}

export default ContactUsClassicPage;
