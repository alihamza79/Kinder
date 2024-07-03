import React, { lazy } from "react";

// Libraries
import { Form, Formik } from "formik";
import { AnimatePresence, m } from "framer-motion";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as Yup from "yup";

// Functions
import { fadeIn } from "../../../Functions/GlobalAnimations";

// Components
import { Link as ScrollTo } from "react-scroll";
import { Parallax } from "react-scroll-parallax";
import Accordions from "../../../Components/Accordion/Accordion";
import { Input } from "../../../Components/Form/Form";
import { IconWithTextData_04 } from "../../../Components/IconWithText/IconWithTextData";
import InViewPort from "../../../Components/InViewPort";
import Services from "../../../Components/Services/Services";
import Team from "../../../Components/Team/Team";
import { TeamData04 } from "../../../Components/Team/TeamData";
import TextBox from "../../../Components/TextBox/TextBox";
import { TextBoxData02 } from "../../../Components/TextBox/TextBoxData";
import { resetForm, sendEmail } from "../../../Functions/Utilities";
// Icons

// Data
import { blogData } from "../../../Components/Blogs/BlogData";
import FooterData from "../../../Components/Footers/FooterData";
import HeroIconWithText from "../../../Components/IconWithText/HeroIconWithText";
import FooterSection from "../../Footer/FooterSection";
import HeaderSection from "../../Header/HeaderSection";
const IconWithText = lazy(() =>
  import("../../../Components/IconWithText/IconWithText")
);
const HamburgerMenu = React.lazy(() =>
  import("../../../Components/Header/Header").then((module) => ({
    default: module.HamburgerMenu,
  }))
);
const Header = React.lazy(() =>
  import("../../../Components/Header/Header").then((module) => ({
    default: module.Header,
  }))
);
const HeaderNav = React.lazy(() =>
  import("../../../Components/Header/Header").then((module) => ({
    default: module.HeaderNav,
  }))
);
const Menu = React.lazy(() =>
  import("../../../Components/Header/Header").then((module) => ({
    default: module.Menu,
  }))
);
const SearchBar = React.lazy(() =>
  import("../../../Components/Header/Header").then((module) => ({
    default: module.SearchBar,
  }))
);

const Buttons = lazy(() => import("../../../Components/Button/Buttons"));
const InteractiveBanners02 = lazy(() =>
  import("../../../Components/InteractiveBanners/InteractiveBanners02")
);
const ProcessStep = lazy(() =>
  import("../../../Components/ProcessStep/ProcessStep")
);
const Overlap = lazy(() => import("../../../Components/Overlap/Overlap"));
const PricingTable03 = lazy(() =>
  import("../../../Components/PricingTable/PricingTable03")
);
const ReactCustomScrollbar = lazy(() =>
  import("../../../Components/ReactCustomScrollbar")
);
const BlogMasonry = lazy(() => import("../../../Components/Blogs/BlogMasonry"));
const MessageBox = lazy(() =>
  import("../../../Components/MessageBox/MessageBox")
);
const SocialIcons = lazy(() =>
  import("../../../Components/SocialIcon/SocialIcons")
);
const SideButtons = lazy(() => import("../../../Components/SideButtons"));
const StaticInstagram = lazy(() =>
  import("../../../Components/Instagram/StaticInstagram")
);
const TiltBox = lazy(() =>
  import("../../../Components/FancyText/FancyText").then((module) => ({
    default: module.TiltBox,
  }))
);
const StartupPageBannerSlider = lazy(() => import("./StartupBanner"));

// Services Data
const serviceData5 = [
  { title: "Vorsorge- Untersuchungen" },
  { title: "Jugendgesundheits- Untersuchungen" },
  { title: "Jugendarbeitsschutz- Untersuchungen" },
  { title: "Kindergarten-Eingangsuntersuchungen" },
  { title: "Entwicklungsdiagnostik im Säuglings-, Kleinkind- und Schulalter" },
  { title: "Impfungen" },
  { title: "Säuglingssonographie" },
  { title: "Laboruntersuchungen" },
  { title: "praeoperative Diagnostik" },
  { title: "kleine Chirurgie (z.B. Wundversorgung)" },
  { title: "Seh- und Hörprüfungen" },
  { title: "Allergologie, Lungenfunktion, Allergie- Test" },
];

// Filter the blog data category wise
const blogMasonryData = blogData
  .filter((item) => item.blogType === "masonry")
  .filter((item) => item.category.includes("startup"));

const iconWithTextData = [
  {
    icon: "line-icon-Cursor-Click2 text-[#27ae60]",
    title: "NOTFALL",
    content:
      "In lebensbedrohlichen Notfällen, insbesondere bei Bewusstlosigkeit, Krampfanfall, starker Blutung, Atemnot oder Vergiftung, rufen Sie bitte den Rettungsdienst unter der Rufnummer 112 an. Die Vergiftungszentrale in Berlin ist unter der \n Tel. 030 -19240 erreichbar.",
  },
  {
    icon: "line-icon-Bakelite text-[#27ae60]",
    title: "NOTDIENST",
    content:
      "Auf Betreiben der Kassenärztlichen Vereinigung Baden-Württemberg wurde der wohnortnahe Notdienst für Kinder und Jugendliche ins Klinikum Winnenden, Am Jakobsweg 1, 71364 Winnenden, Tel: 01806- 073614 verlegt. \n Montag-Freitag ab 18.00- 08.00 Uhr Samstag, Sonn- und Feiertag rund um die Uhr \n Patienten können ohne Voranmeldung in die Klinik kommen, dort ist ständig ein Kinder- und Jugendarzt dienstbereit.",
  },
  {
    icon: "line-icon-Boy text-[#27ae60]",
    title: "OPENING HOURS",
    content:
      "Vormittags \n Montags bis freitags:  08 - 11 Uhr \n Nachmittags \n  Montags, mittwochs, freitags 14 -16 Uhr \n Contact Info \n Telefonnummer: 07151 - 21080 \n Email an:  praxis@kjk-wn.de",
  },
];

const iconWithTextDataAfterHero = [
  {
    icon: "line-icon-Cursor-Click2 text-[#27ae60]",
    title: " Terminvergabe und Anforderung von Rezepten/Heilmitteln",
    // content: "In lebensbedrohlichen Notfällen, insbesondere bei Bewusstlosigkeit, Krampfanfall, starker Blutung, Atemnot oder Vergiftung, rufen Sie bitte den Rettungsdienst unter der Rufnummer 112 an. Die Vergiftungszentrale in Berlin ist unter der \n Tel. 030 -19240 erreichbar.",
  },
  {
    icon: "line-icon-Bakelite text-[#27ae60]",
    title: "Contact Info",
    content: "Email an: praxis@kjk-wn.de. \n\n Telefonnummer: 07151 - 21080.",
  },
  {
    icon: "line-icon-Boy text-[#27ae60]",
    title: "OPENING HOURS",
    content: "Vormittags \n Montags bis freitags:  08 - 11 Uhr \n\n Nachmittags \n  Montags, mittwochs, freitags 14 -16 Uhr",
  },
];

const iconWithTextDataAfterHero1 = [
  // {
    // icon: "line-icon-Cursor-Click2 text-[#27ae60]",
  //   title: " Terminvergabe und Anforderung von Rezepten/Heilmitteln",
  //   // content: "In lebensbedrohlichen Notfällen, insbesondere bei Bewusstlosigkeit, Krampfanfall, starker Blutung, Atemnot oder Vergiftung, rufen Sie bitte den Rettungsdienst unter der Rufnummer 112 an. Die Vergiftungszentrale in Berlin ist unter der \n Tel. 030 -19240 erreichbar.",
  // },
  {
    icon: "line-icon-Bakelite text-[#27ae60]",
    title: "Contact Info",
    content: "Email an: praxis@kjk-wn.de. \n\n Telefonnummer: 07151 - 21080.",
  },
  {
    icon: "line-icon-Boy text-[#27ae60]",
    title: "OPENING HOURS",
    content: "Vormittags \n Montags bis freitags:  08 - 11 Uhr \n\n Nachmittags \n  Montags, mittwochs, freitags 14 -16 Uhr",
  },
];

const SocialIconsData = [
  {
    color: "#3b5998",
    link: "https://www.facebook.com/",
    icon: "fab fa-facebook-f",
  },
  {
    color: "#ea4c89",
    link: "https://dribbble.com/",
    icon: "fab fa-dribbble",
  },
  {
    color: "#00aced",
    link: "https://twitter.com/",
    icon: "fab fa-twitter",
  },
  {
    color: "#fe1f49",
    link: "https://www.instagram.com/",
    icon: "fab fa-instagram",
  },
  {
    color: "#0077b5",
    link: "https://www.linkedin.com/",
    icon: "fab fa-linkedin-in",
  },
];

const Footer_Data = [
  FooterData[0],
  FooterData[1],
  FooterData[4],
  FooterData[3],
];

const HomeStartupPage = (props) => {
  return (
    <div style={props.style}>
      {/* Header Start */}
      <HeaderSection {...props}  />      {/* Header End */}

      {/* <SideButtons /> */}

      {/* Hero Section SLider Start */}
      <StartupPageBannerSlider />

      {/* Three Cards on Hero Section Start */}
      {/* <section className="bg-cover bg-center pb-[100px] lg:pb-[10px] md:py-[110px] sm:py-[50px] startup-iconwithtext" > */}
      {/* <Container> */}
      <div className="mb-[105px] md:mb-[70px] sm:mb-[50px] m-10">
        <Overlap className="md:mt-0">
          <Row className="justify-center">
            <Col xs={12} sm={9} lg={12} md={12}>
              <HeroIconWithText
                grid="row-cols-1 row-cols-lg-3 row-cols-md-2 justify-center gap-y-10 z-10  relative"
                className="rounded-[4px] flex "
                theme="icon-with-text-11"
                data={iconWithTextData}
              />
            </Col>
          </Row>
        </Overlap>
      </div>
      {/* </Container> */}
      {/* </section> */}
      {/* Section End */}

{/* Three Cards After Hero Section */}
      <section className="py-[160px] overflow-hidden lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
        <Container>
          <Row className="justify-center">
            <m.div className="col-xl-3 col-lg-4 col-sm-7 flex flex-col md:mb-24" {...{ ...fadeIn, transition: { delay: 0.2 } }}>
              {/* <div className="mb-[20px] md:text-center sm:mb-[10px]">
                <span className="font-serif text-md uppercase font-medium text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e]"></span>
              </div> */}
              <h5 className="alt-font text-darkgray font-semibold mt-[90px] mb-[20px] font-serif md:text-center md:mb-[30px] heading-6"> Terminvergabe und Anforderung von Rezepten/Heilmitteln</h5>
              {/* <div className="mt-auto mx-auto mx-lg-0">
                <Buttons href="/" className="font-medium font-serif uppercase bg-[#fff] hover:bg-black rounded-none md:mb-[15px] text-xxs btn-fancy xs:mb-0" color="#000" size="sm" themeColor="#000" title="Discover litho" />
              </div> */}
            </m.div>
            <Col xl={{ span: 7, offset: 2 }} lg={8}>
              <IconWithText grid="row-cols-1 row-cols-lg-2 row-cols-sm-2 gap-y-[40px]" theme="icon-with-text-06" data={iconWithTextDataAfterHero1} animation={fadeIn} animationDelay={0.2} />
            </Col>
          </Row>
        </Container>
      </section>


      {/* Lazy Load HTML */}
      <InViewPort>
        {/* About us */}
        <section
          className="py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]"
          style={{
            backgroundImage: "url(/assets/img/webp/home-decor-bg-img-02.webp)",
          }}
        >
          <Container>
            <Row className="justify-center items-center">
              <Col
                lg={6}
                md={10}
                className="relative mb-[20px] md:mb-32 sm:mb-40 xs:mb-0"
              >
                <div className="relative">
                  <Parallax className="lg-no-parallax w-[70%] mb-16" speed={0}>
                    {" "}
                    <img
                      alt=""
                      src="https://via.placeholder.com/700x1027"
                      className="w-full"
                      width="385.34"
                      height="565.34"
                    />{" "}
                  </Parallax>
                  <Parallax
                    className="lg-no-parallax flex justify-center items-center w-[55%] bg-no-repeat absolute bottom-0 right-[15px] lg:!ml-auto lg:!top-[145px]"
                    speed={20}
                  >
                    <img
                      alt=""
                      src="https://via.placeholder.com/317x477"
                      width="317"
                      height="477"
                    />
                  </Parallax>
                </div>
              </Col>
              <Col lg={{ span: 5, offset: 1 }} md={10}>
                <div className="font-serif text-md font-medium mb-[30px] flex">
                  <span className="w-[40px] h-[1px] bg-basecolor opacity-70 self-center mr-[20px] shrink-0"></span>
                  <div className="grow-[1]">
                    {" "}
                    <span className="text-basecolor uppercase">
                      About Us
                    </span>{" "}
                  </div>
                </div>
                <h1 className="heading-4 font-serif text-darkgray font-semibold w-[85%] mb-[35px] lg:w-full sm:mb-[25px]">
                  Liebe Eltern, Kinder und Jugendliche!
                </h1>
                <p className="mb-[25px] w-[80%] lg:w-full">
                  Wir freuen uns, Sie auf der Internetseite der Kinderarztpraxis
                  kunterbunt Waiblingen zu begrüßen. Für uns als Fachärzte für
                  Kinder- und Jugendmedizin steht die körperliche und geistige
                  Entwicklung Ihres Kindes vom Säugling bis zum Jugendlichen im
                  Mittelpunkt unserer Arbeit. Dabei ist uns der einfühlsame und
                  verantwortungsbewusste Umgang mit unseren kleinen und großen
                  Patienten besonders wichtig. Schwerpunkt unserer Praxis ist
                  die hausärztliche Versorgung und ganzheitliche Begleitung von
                  Kindern. Wir versorgen alle akuten und chronischen
                  Erkrankungen, wie z.B. Asthma, Allergien oder ADHS und haben
                  dabei auch psychosomatische Beschwerden im Blick. Wir sind eng
                  vernetzt mit den Kliniken und Spezialisten in der Region und
                  stimmen mit Ihnen die Behandlung und Versorgung im Sinne Ihres
                  Kindes ab. Wir freuen uns, Sie und Ihre Familie kennen zu
                  lernen!
                </p>
                <ScrollTo
                  href="#"
                  to="specialization"
                  offset={0}
                  delay={0}
                  spy={true}
                  smooth={true}
                  duration={800}
                ></ScrollTo>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Services */}

        {/* Section Start */}
        <section className="bg-white py-[160px] border-t lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
          <Container>
            <Row>
              <Col className="mb-[9%]">
                <h6 className="font-serif text-[#000000] text-center font-medium mb-[25px] lg:mb-[15px]">
                  Leistungen
                </h6>
              </Col>
            </Row>
            <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1 items-center md:mt-0 gap-y-[40px]">
              {serviceData5.map((service, index) => (
                <Col key={index}>
                  <m.div
                    className="flex items-center"
                    {...{ ...fadeIn, transition: { delay: index * 0.2 } }}
                  >
                    <h6 className="mr-[25px] font-serif text-basecolor mb-0">
                      {index + 1}
                    </h6>
                    <div className="flex-1 font-serif font-medium text-md text-spanishgray uppercase inline-block">
                      <span className="w-[90%] block xs:w-[70%]">
                        {service.title}
                      </span>
                    </div>
                  </m.div>
                </Col>
              ))}
            </div>
          </Container>
        </section>

        {/* Section End */}
        {/* <m.section
          className=" border-t py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]"
          {...fadeIn}
        >
          <Container>
            <Row className="justify-center">
              <Col md={12} className="text-center mb-[7%]">
                <h6 className="font-serif text-darkgray font-medium">
                  LEISTUNGEN
                </h6>
              </Col>
            </Row>
            <Row className="justify-center">
              <Col lg={12} md={11} xs={12} className="md:px-0">
                <Services
                  grid="row-cols-lg-3 row-cols-1 md:my-0 md:mx-auto gap-y-10 justify-center"
                  theme="service-style-05"
                  className="col-md-10"
                  data={serviceData5}
                  animation={fadeIn}
                />
              </Col>
            </Row>
          </Container>
        </m.section> */}

        {/* Team Section */}

        <section className="py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
          <Container>
            <Row>
              <Col md={12} className="text-center mb-[7%]">
                <h5 className="font-serif text-darkgray font-medium">Team</h5>
              </Col>
            </Row>
            <Team
              themeColor="dark"
              theme="team-style-04"
              color={[
                "#05867E",
                "#b263e4cc",
                "#e05fc4cc",
                "#f767a6cc",
                "#ff798ecc",
              ]}
              data={TeamData04}
              animation={fadeIn}
              carousel={true}
              carouselOption={{
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                navigation: false,
                autoplay: { delay: 3000, disableOnInteraction: false },
                pagination: { dynamicBullets: true, clickable: true },
                breakpoints: {
                  1200: { slidesPerView: 4 },
                  992: { slidesPerView: 3 },
                  768: { slidesPerView: 2 },
                },
              }}
            />
          </Container>
          <Container>
            <Row className="justify-center">
              <Col className="text-center md:flex md:flex-col md:items-center gap-y-10">
                <Buttons
                  ariaLabel="button"
                  href="/page/our-team"
                  className="btn-fill mx-[10px] rounded-none font-medium font-serif uppercase btn-fancy"
                  size="lg"
                  color="#ffffff"
                  themeColor="#05867E"
                  title="All Team"
                />
              </Col>
            </Row>
          </Container>
        </section>

        {/* Form Section                     */}
        {/* Section Start */}
        <section className="bg-lightgray py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
          <Container>
            <Row>
              <Col className="mb-[6%]">
                <h6 className="font-serif text-dark text-center font-medium mb-[25px] lg:mb-[15px]">
                  Forms
                </h6>
              </Col>
            </Row>
            <Row className="justify-center">
              <Col xs={12} sm={8} md={12}>
                <IconWithText
                  grid="row-cols-1 row-cols-lg-3 row-cols-md-2 justify-center md:mb-[30px] gap-y-10"
                  theme="icon-with-text-04"
                  data={IconWithTextData_04}
                  animation={fadeIn}
                  animationDelay={0.2}
                />
              </Col>
            </Row>
          </Container>
        </section>

        {/* Section End */}

        {/* Hospital Kontakte */}
        <section className="py-[160px] border-t lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
          <Container>
            <Row>
              <Col className="mb-[8%]">
                <h6 className="font-serif text-darkgray text-center font-medium mb-[25px] lg:mb-[15px]">
                  Hospital Kontakte
                </h6>
              </Col>
            </Row>
            <TextBox
              className=""
              grid="row-cols-1 row-cols-lg-3 row-cols-md-2 justify-center gap-y-10"
              theme="text-box-style-02 flex-wrap"
              data={TextBoxData02}
              animation={fadeIn}
            />
          </Container>
        </section>

        {/* Links */}
        <section className="pt-20 switch-tabs">
          <Col className="text-center">
            <h6 className="font-serif text-darkgray text-center font-medium mb-[5%]">
              Links
            </h6>
          </Col>
          <m.section className="py-20">
            <Container>
              <Row className="justify-center">
                <Col lg={16} md={20}>
                  <Accordions
                    theme="accordion-style-03"
                    className=""
                    animation={fadeIn}
                  />
                </Col>
              </Row>
            </Container>
          </m.section>
        </section>

        {/* News Section Start */}
        <section className="py-32 p-[130px] bg-lightgray lg:px-[2%] lg:py-[95px] md:py-[75px] sm:py-[50px] sm:px-0 xs:px-0">
          <Container>
            <Row className="justify-center">
              <Col lg={4} sm={6} className="text-center mb-12 md:mb-8">
                {/* <span className="font-serif font-medium text-basecolor text-xmd block mb-[20px] sm:mb-[10px]">
                  News
                </span> */}
                <h2 className="heading-5 font-serif font-semibold text-darkgray inline-block tracking-[-1px]">
                  Latest News
                </h2>
              </Col>
            </Row>
          </Container>
          <Container fluid="xs" className="mx-auto">
            <BlogMasonry
              pagination={false}
              filter={false}
              grid="grid grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-double-extra-large"
              data={blogMasonryData}
            />
           {/* <Col className="text-center mt-[40px] md:flex md:flex-col md:items-center gap-y-10">
                <Buttons
                  ariaLabel="button"
                  href="/Blogs/blog-Simple"
                  className="btn-fill mx-[10px] rounded-none font-medium font-serif uppercase btn-fancy"
                  size="lg"
                  color="#ffffff"
                  themeColor="#05867E"
                  title="All News"
                />
              </Col> */}
          </Container>
        </section>
        {/* Section End */}

        {/* Section Start */}
        <m.section
          className="py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px] cover-background overflow-visible"
          style={{
            backgroundImage:
              "url(/assets/img/webp/home-startup-footer-top-bg.webp)",
          }}
          {...fadeIn}
        >
          <Container>
            <Row className="justify-center">
              <Col md={10} lg={7} className="text-center">
                <span className="font-serif font-medium text-basecolor text-xmd mb-[20px] inline-block sm:mb-[10px]">
                  Love to work together
                </span>
                <h2 className="heading-4 font-serif font-semibold text-darkgray inline-block text-center mb-[65px] xs:mb-[30px]">
                  Are you ready to work with us? Let's grow your business.
                </h2>
                <Formik
                  initialValues={{ email: "" }}
                  validationSchema={Yup.object().shape({
                    email: Yup.string()
                      .email("Invalid email.")
                      .required("Field is required."),
                  })}
                  onSubmit={async (values, actions) => {
                    actions.setSubmitting(true);
                    const response = await sendEmail(values);
                    response.status === "success" && resetForm(actions);
                  }}
                >
                  {({ isSubmitting, status }) => (
                    <div className="relative subscribe-style-04 w-[93%] mx-auto xs:w-full">
                      <Form className="relative">
                        <Input
                          showErrorMsg={false}
                          type="email"
                          name="email"
                          className="border-[1px] border-solid border-transparent large-input xs:mb-[60px] pr-[190px]"
                          placeholder="Enter your email address"
                        />
                        <button
                          aria-label="submit"
                          type="submit"
                          className={`text-xs tracking-[1px] py-[12px] px-[28px] xs:!block uppercase${
                            isSubmitting ? " loading" : ""
                          }`}
                        >
                          Subscribe Now
                        </button>
                      </Form>
                      <AnimatePresence>
                        {status && (
                          <m.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="font-serif absolute top-[115%] left-0 w-full"
                          >
                            <MessageBox
                              className="py-[5px] rounded-[4px] z-[2]"
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
            </Row>
          </Container>
        </m.section>
        {/* Section End */}

       <FooterSection/>
      </InViewPort>
    </div>
  );
};

export default HomeStartupPage;
