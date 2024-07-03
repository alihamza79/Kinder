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
import FooterMenu, { Footer } from "../../../Components/Footers/Footer";
import { Input } from "../../../Components/Form/Form";
import InViewPort from "../../../Components/InViewPort";
import Team from "../../../Components/Team/Team";
import { TeamData01 } from "../../../Components/Team/TeamData";
import { TeamData04 } from "../../../Components/Team/TeamData";
import TextBox from "../../../Components/TextBox/TextBox";
import { TextBoxData02 } from "../../../Components/TextBox/TextBoxData";
import { resetForm, sendEmail } from "../../../Functions/Utilities";
import { IconWithTextData_04 } from "../../../Components/IconWithText/IconWithTextData";
import Services from "../../../Components/Services/Services";
// Icons
import { FaAmbulance, FaHospitalAlt, FaClock } from 'react-icons/fa';



// Data
import { blogData } from "../../../Components/Blogs/BlogData";
import FooterData from "../../../Components/Footers/FooterData";
import { Topbar } from "../../../Components/Header/Header";
import HeroIconWithText from "../../../Components/IconWithText/HeroIconWithText";
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
    content: "In lebensbedrohlichen Notfällen, insbesondere bei Bewusstlosigkeit, Krampfanfall, starker Blutung, Atemnot oder Vergiftung, rufen Sie bitte den Rettungsdienst unter der Rufnummer 112 an. Die Vergiftungszentrale in Berlin ist unter der \n Tel. 030 -19240 erreichbar.",
  },
  {
    icon: "line-icon-Bakelite text-[#27ae60]",
    title: "NOTDIENST",
    content: "Auf Betreiben der Kassenärztlichen Vereinigung Baden-Württemberg wurde der wohnortnahe Notdienst für Kinder und Jugendliche ins Klinikum Winnenden, Am Jakobsweg 1, 71364 Winnenden, Tel: 01806- 073614 verlegt. \n Montag-Freitag ab 18.00- 08.00 Uhr Samstag, Sonn- und Feiertag rund um die Uhr \n Patienten können ohne Voranmeldung in die Klinik kommen, dort ist ständig ein Kinder- und Jugendarzt dienstbereit.",
  },
  {
    icon: "line-icon-Boy text-[#27ae60]",
    title: "OPENING HOURS",
    content: "Vormittags \n Montags bis freitags:  08 - 11 Uhr \n Nachmittags \n  Montags, mittwochs, freitags 14 -16 Uhr \n Contact Info \n Telefonnummer: 07151 - 21080 \n Email an:  praxis@kjk-wn.de",
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
      <Header topSpace={{ md: true }} type="reverse-scroll">
        {/* <Topbar className="bg-lightgray border-b border-[#0000001a] sm:hidden md:px-[15px]">
          <Container fluid className="px-[50px]">
            <Row>
              <Col className="col-12 col-sm-auto text-center items-center flex text-sm-start me-auto ps-lg-0 !pl-[15px]">
                <SocialIcons
                  theme="social-icon-style-01"
                  className="decor-social-icon"
                  size="xs"
                  iconColor="dark"
                  data={SocialIconsData}
                />
              </Col>
              <Col className="col-auto flex xs:hidden text-right">
                <div className="top-bar-contact flex">
                  <span className="border-l border-[#0000001a] py-[13px] px-[18px] text-sm flex items-center">
                    <i className="far fa-envelope mr-[10px] text-md relative text-basecolor"></i>
                    <a
                      aria-label="gmail for link"
                      href="mailto:info@yourdomain.com"
                      className="hover:text-darkgray"
                    >
                      info@yourdomain.com
                    </a>
                  </span>
                  <span className="border-l border-[#0000001a] py-[13px] px-[18px] md:pr-0 text-sm flex items-center sm:hidden">
                    <i className="far fa-clock mr-[10px] text-md relative text-basecolor"></i>
                    Mon - Fri: 10:00 - 22:00
                  </span>
                </div>
              </Col>
            </Row>
          </Container>
        </Topbar> */}
        <HeaderNav
          fluid="fluid"
          theme="dark"
          expand="lg"
          className="py-[0px] px-[35px] md:px-[15px] md:py-[20px] sm:px-0"
        >
          <Col lg={2} sm={6} xs={"auto"} className="mr-auto ps-0">
            <Link aria-label="header logo" className="flex items-center" to="/">
              <Navbar.Brand className="inline-block p-0 m-0">
                <img
                  className="default-logo"
                  width="111"
                  height="36"
                  src="/assets/img/webp/logo-white.webp"
                  data-rjs="/assets/img/webp/logo-white@2x.webp"
                  alt="logo"
                />
                <img
                  className="alt-logo"
                  width="111"
                  height="36"
                  src="/assets/img/webp/logo-green-dark.webp"
                  data-rjs="/assets/img/webp/logo-green-dark@2x.webp"
                  alt="logo"
                />
                <img
                  className="mobile-logo"
                  width="111"
                  height="36"
                  src="/assets/img/webp/logo-green-dark.webp"
                  data-rjs="/assets/img/webp/logo-green-dark@2x.webp"
                  alt="logo"
                />
              </Navbar.Brand>
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
          <Col
            lg={2}
            xs={"auto"}
            className="justify-end pe-0 flex items-center"
          >
            <SearchBar />
            <div className="md:hidden pl-[17px]">
              <HamburgerMenu className="" theme="dark">
                <Col className="flex flex-col justify-center px-[50px] py-[70px] w-[500px] h-[100vh] shadow-[0_0_20px_rgba(0,0,0,0.3)] right-0 text-center bg-white">
                  <ReactCustomScrollbar className="pl-[15px]" theme="dark">
                    <div>
                      <h1 className="mb-0 font-bold tracking-[-3px] text-darkgray font-serif uppercase">
                        Hello
                      </h1>
                      <p className="text-lg text-[#27ae60] font-serif uppercase block">
                        Let's be friends.
                      </p>
                      <div className="my-20 w-full">
                        <StaticInstagram className="" />
                      </div>
                      <p className="w-[70%] mb-12 text-darkgray leading-[26px] text-lg font-serif mx-auto inline-block">
                        Get latest update for our trusted applications
                      </p>
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
                                className={`text-xs leading-[18px] py-[12px] px-[28px] uppercase xs:text-center${
                                  isSubmitting ? " loading" : ""
                                }`}
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
                      <SocialIcons
                        theme="social-icon-style-05"
                        size="sm"
                        iconColor="dark"
                        data={SocialIconsData}
                      />
                    </div>
                  </ReactCustomScrollbar>
                </Col>
              </HamburgerMenu>
            </div>
          </Col>
        </HeaderNav>
      </Header>
      {/* Header End */}

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
        <m.section
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
        </m.section>

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

        {/* Section Start */}
        <section className="py-32 p-[130px] bg-lightgray lg:px-[2%] lg:py-[95px] md:py-[75px] sm:py-[50px] sm:px-0 xs:px-0">
          <Container>
            <Row className="justify-center">
              <Col lg={4} sm={6} className="text-center mb-12 md:mb-8">
                <span className="font-serif font-medium text-basecolor text-xmd block mb-[20px] sm:mb-[10px]">
                  Latest blogs
                </span>
                <h2 className="heading-5 font-serif font-semibold text-darkgray inline-block tracking-[-1px]">
                  Attractive articles updated daily basis
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

        {/* Footer Start */}
        <Footer
          className="startup-footer bg-no-repeat bg-right"
          theme="light"
          style={{
            backgroundImage:
              "url(/assets/img/webp/home-startup-footer-down-bg.webp)",
          }}
        >
          <Container fluid className="xs:opacity-0 xs:hidden">
            <Row>
              <Col
                className="h-[65px] lg:h-[30px] bg-top bg-no-repeat"
                style={{
                  backgroundImage:
                    "url(/assets/img/webp/home-startup-footer-shadow.webp)",
                }}
              ></Col>
            </Row>
          </Container>
          <div className="py-[4%] lg:py-[7%] md:py-[50px]">
            <Container>
              <Row md={4} className="justify-center gap-y-[25px]">
                <FooterMenu
                  data={Footer_Data}
                  md={3}
                  sm={6}
                  className="xl:px-[15px]"
                  titleClass="capitalize text-dark"
                />
              </Row>
            </Container>
          </div>
          <div className="pt-[1%] pb-[6%] border-t border-[#ffffff1a]">
            <Container>
              <Row>
                <Link
                  to="/"
                  className="col-sm-4 col-12 sm:mb-[20px] flex justify-start xs:justify-center"
                >
                  <img
                    src="/assets/img/webp/logo-green-dark.webp"
                    alt="logo"
                    width="111"
                    height="36"
                  />
                </Link>
                <p className="col-sm-8 col-12 flex justify-end items-center sm:mb-[20px] xs:text-center xs:justify-center mb-0">
                  © {new Date().getFullYear()} Litho is Proudly Powered by&nbsp;
                  <a
                    aria-label="ThemeZaa link"
                    className="text-darkgray font-sans underline underline-offset-4 font-medium text-base inline-block hover:text-basecolor"
                    href="https://www.themezaa.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ThemeZaa
                  </a>
                </p>
              </Row>
            </Container>
          </div>
        </Footer>
        {/* Footer End */}
      </InViewPort>
    </div>
  );
};

export default HomeStartupPage;
