import React, { lazy } from "react";

// Libraries
import { Form, Formik } from "formik";
import { AnimatePresence, m } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";
import * as Yup from "yup";
import { useQuery } from '@tanstack/react-query';

// Functions
import { fadeIn } from "../../../Functions/GlobalAnimations";

// Components
import { Link as ScrollTo } from "react-scroll";
import { Parallax } from "react-scroll-parallax";
import Accordions from "../../../Components/Accordion/Accordion";
import { Input } from "../../../Components/Form/Form";
import Team from "../../../Components/Team/Team";
import TextBox from "../../../Components/TextBox/TextBox";
import { resetForm, sendEmail } from "../../../Functions/Utilities";

// Icons
import { buckets } from "../../../appwrite/buckets";
import { storage } from "../../../appwrite/config";
import db from "../../../appwrite/Services/dbServices";
import storageServices from "../../../appwrite/Services/storageServices";
// Data
import { blogData } from "../../../Components/Blogs/BlogData";
import HeroIconWithText from "../../../Components/IconWithText/HeroIconWithText";
import { TeamData04 } from "../../../Components/Team/TeamData";
import FooterSection from "../../Footer/FooterSection";
import HeaderSection from "../../Header/HeaderSection";
import Preloader from "../../../Components/Preloader";

const IconWithText = lazy(() =>
  import("../../../Components/IconWithText/IconWithText")
);
const IconWithText_Form = lazy(() =>
  import("../../../Components/IconWithText/IconWithText")
);
const Buttons = lazy(() => import("../../../Components/Button/Buttons"));
const Overlap = lazy(() => import("../../../Components/Overlap/Overlap"));
const BlogMasonry = lazy(() => import("../../../Components/Blogs/BlogMasonry"));
const MessageBox = lazy(() =>
  import("../../../Components/MessageBox/MessageBox")
);
const StartupPageBannerSlider = lazy(() => import("./StartupBanner"));

const initialServiceData = [
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
const fallbackScheduleBody = [
  {
    icon: "line-icon-Bakelite text-[#27ae60]",
    title: "Contact Info",
    content: "Email an: praxis@kjk-wn.de. \n\n Telefonnummer: 07151 - 21080.",
  },
  {
    icon: "line-icon-Boy text-[#27ae60]",
    title: "OPENING HOURS",
    content:
      "Vormittags \n Montags bis freitags:  08 - 11 Uhr \n\n Nachmittags \n  Montags, mittwochs, freitags 14 -16 Uhr",
  },
];

const fetchInformationCards = async () => {
  const querySnapshot = await db.informationCard.list();
  return querySnapshot.documents.map((doc, index) => ({
    icon: "line-icon-Cursor-Click2 text-[#27ae60]",
    title: doc.Title,
    content: doc.Description,
  }));
};

const fetchAboutUs = async () => {
  const querySnapshot = await db.about.list();
  const aboutData = querySnapshot.documents[0];
  const image = await getImageUrl(aboutData.image);
  return {
    title: aboutData.title,
    description: aboutData.description,
    image: image,
  };
};

const fetchServiceData = async () => {
  const headerSnapshot = await db.serviceHeader.list();
  const bodySnapshot = await db.services.list();
  return {
    header: headerSnapshot.documents[0].title,
    body: bodySnapshot.documents.map((doc) => ({ title: doc.name })),
  };
};

const fetchTeamData = async () => {
  const headerSnapshot = await db.teamHeader.list();
  const bodySnapshot = await db.teamBody.list();
  const bodyData = await Promise.all(
    bodySnapshot.documents.map(async (doc) => {
      const img = await getImageUrl(doc.image);
      return {
        img,
        name: doc.name,
        designation: doc.designation,
      };
    })
  );
  return {
    header: headerSnapshot.documents[0].title,
    body: bodyData,
  };
};

const fetchLinksData = async () => {
  const headerSnapshot = await db.linkHeader.list();
  const bodySnapshot = await db.links.list();
  return {
    header: headerSnapshot.documents[0].title,
    body: bodySnapshot.documents.map((doc) => ({
      title: doc.title,
      content: doc.description,
    })),
  };
};

const fetchBlogs = async () => {
  const querySnapshot = await db.blogs.list();
  const data = await Promise.all(
    querySnapshot.documents.map(async (doc) => {
      const imageUrl = await storageServices.images.getFileView(doc.imageUrl);
      return {
        id: doc.$id,
        title: doc.title,
        date: new Date(doc.publicationDate).toLocaleDateString(),
        content: doc.content,
        img: imageUrl.href,
        category: doc.tags,
        publicationDate: new Date(doc.publicationDate),
      };
    })
  );
  return data.sort((a, b) => b.publicationDate - a.publicationDate).slice(0, 3);
};

const fetchHospitalKontakteData = async () => {
  const headerSnapshot = await db.hospitalKontakteHeader.list();
  const bodySnapshot = await db.hospitalKontakte.list();
  return {
    header: headerSnapshot.documents[0].title,
    body: bodySnapshot.documents.map((doc) => ({
      title: doc.title,
      description: doc.description,
    })),
  };
};

const fetchFormData = async () => {
  const headerSnapshot = await db.formHeader.list();
  const bodySnapshot = await db.formBody.list();
  const bodyData = await Promise.all(
    bodySnapshot.documents.map(async (doc) => {
      const fileUrl = await storageServices.files.getFileView(doc.file);
      return {
        icon: "fas fa-file-pdf text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] via[#f767a6] to-[#ff798e]",
        title: doc.title,
        content: `<a href="${fileUrl.href}" target="_blank" download>Download File</a>`,
      };
    })
  );
  return {
    header: headerSnapshot.documents[0].title,
    body: bodyData,
  };
};

const fetchScheduleData = async () => {
  const headerSnapshot = await db.scheduleHeader.list();
  const bodySnapshot = await db.scheduleBody.list();
  const bodyData = bodySnapshot.documents.map((doc, index) => ({
    icon: fallbackScheduleBody[index]?.icon,
    title: doc.title,
    content: doc.description,
  }));
  return {
    header: headerSnapshot.documents[0].title,
    body: bodyData,
  };
};

const getImageUrl = async (imageId) => {
  try {
    const result = storage.getFileView(buckets[0].id, imageId);
    return result.href;
  } catch (error) {
    console.error("Error fetching image URL:", error);
  }
};

const HomeStartupPage = (props) => {
  const { data: informationCards, isLoading: isLoadingInformationCards } = useQuery(['informationCards'], fetchInformationCards);
  const { data: aboutUs, isLoading: isLoadingAboutUs } = useQuery(['aboutUs'], fetchAboutUs);
  const { data: serviceData, isLoading: isLoadingServiceData } = useQuery(['serviceData'], fetchServiceData);
  const { data: teamData, isLoading: isLoadingTeamData } = useQuery(['teamData'], fetchTeamData);
  const { data: linksData, isLoading: isLoadingLinksData } = useQuery(['linksData'], fetchLinksData);
  const { data: blogs, isLoading: isLoadingBlogs } = useQuery(['blogs'], fetchBlogs);
  const { data: hospitalKontakte, isLoading: isLoadingHospitalKontakte } = useQuery(['hospitalKontakte'], fetchHospitalKontakteData);
  const { data: formData, isLoading: isLoadingFormData } = useQuery(['formData'], fetchFormData);
  const { data: scheduleData, isLoading: isLoadingScheduleData } = useQuery(['scheduleData'], fetchScheduleData);

  if (
    isLoadingInformationCards ||
    isLoadingAboutUs ||
    isLoadingServiceData ||
    isLoadingTeamData ||
    isLoadingLinksData ||
    isLoadingBlogs ||
    isLoadingHospitalKontakte ||
    isLoadingFormData ||
    isLoadingScheduleData
  ) {
    return <Preloader />;
  }

  return (
    <div style={props.style}>
      <HeaderSection {...props} />

      <StartupPageBannerSlider />

      <div className="mb-[105px] md:mb-[70px] sm:mb-[50px] m-10">
        <Overlap className="md:mt-0">
          <Row className="justify-center">
            <Col xs={12} sm={9} lg={12} md={12}>
              <HeroIconWithText
                grid="row-cols-1 row-cols-lg-3 row-cols-md-2 justify-center gap-y-10 z-10  relative"
                className="rounded-[4px] flex "
                theme="icon-with-text-11"
                data={informationCards}
              />
            </Col>
          </Row>
        </Overlap>
      </div>

      <section className="py-[160px] overflow-hidden lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
        <Container>
          <Row className="justify-center items-stretch">
            <m.div
              className="col-xl-3 col-lg-4 col-sm-7 flex flex-col md:mb-24"
              {...{ ...fadeIn, transition: { delay: 0.2 } }}
            >
              <h5 className="alt-font text-darkgray font-semibold mt-[90px] mb-[20px] font-serif md:text-center md:mb-[30px] heading-6">
                {scheduleData.header}
              </h5>
            </m.div>
            <Col xl={{ span: 7, offset: 2 }} lg={8}>
              <IconWithText
                grid="row-cols-1 row-cols-lg-2 row-cols-sm-2 gap-y-[40px]"
                theme="icon-with-text-06"
                data={scheduleData.body}
                animation={fadeIn}
                animationDelay={0.2}
              />
            </Col>
          </Row>
        </Container>
      </section>

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
                  <img
                    alt=""
                    src={aboutUs.image}
                    className="w-full"
                    width="385.34"
                    height="565.34"
                  />
                </Parallax>
              </div>
            </Col>
            <Col lg={{ span: 5, offset: 1 }} md={10}>
              <div className="font-serif text-md font-medium mb-[30px] flex">
                <span className="w-[40px] h-[1px] bg-basecolor opacity-70 self-center mr-[20px] shrink-0"></span>
                <div className="grow-[1]">
                  <span className="text-basecolor uppercase">About Us</span>
                </div>
              </div>
              <h1 className="heading-4 font-serif text-darkgray font-semibold w-[85%] mb-[35px] lg:w-full sm:mb-[25px]">
                {aboutUs.title}
              </h1>
              <p className="mb-[25px] w-[80%] lg:w-full">
                {aboutUs.description}
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

      <section className="bg-white py-[160px] border-t lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
        <Container>
          <Row>
            <Col className="mb-[9%]">
              <h6 className="font-serif text-[#000000] text-center font-medium mb-[25px] lg:mb-[15px]">
                {serviceData.header}
              </h6>
            </Col>
          </Row>
          <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1 items-center md:mt-0 gap-y-[40px]">
            {serviceData.body.map((service, index) => (
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

      <section className="py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
        <Container>
          <Row>
            <Col md={12} className="text-center mb-[7%]">
              <h5 className="font-serif text-darkgray font-medium">
                {teamData.header}
              </h5>
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
            data={teamData.body}
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

      <section className="bg-lightgray py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
        <Container>
          <Row>
            <Col className="mb-[6%]">
              <h6 className="font-serif text-dark text-center font-medium mb-[25px] lg:mb-[15px]">
                {formData.header}
              </h6>
            </Col>
          </Row>
          <Row className="justify-center">
            <Col xs={12} sm={8} md={12}>
              <IconWithText
                grid="row-cols-1 row-cols-lg-3 row-cols-md-2 justify-center md:mb-[30px] gap-y-10"
                theme="icon-with-text-04"
                data={formData.body}
                animation={fadeIn}
                animationDelay={0.2}
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-[160px] border-t lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
        <Container>
          <Row>
            <Col className="mb-[8%]">
              <h6 className="font-serif text-darkgray text-center font-medium mb-[25px] lg:mb-[15px]">
                {hospitalKontakte.header}
              </h6>
            </Col>
          </Row>
          <TextBox
            className=""
            grid="row-cols-1 row-cols-lg-3 row-cols-md-2 justify-center gap-y-10"
            theme="text-box-style-02 flex-wrap"
            data={hospitalKontakte.body}
            animation={fadeIn}
          />
        </Container>
      </section>

      <section className="pt-20 switch-tabs">
        <Col className="text-center">
          <h6 className="font-serif text-darkgray text-center font-medium mb-[5%]">
            {linksData.header}
          </h6>
        </Col>
        <m.section className="py-20">
          <Container>
            <Row className="justify-center">
              <Col lg={16} md={20}>
                <Accordions
                  theme="accordion-style-03"
                  data={linksData.body}
                  animation={fadeIn}
                />
              </Col>
            </Row>
          </Container>
        </m.section>
      </section>

      <section className="py-32 p-[130px] bg-lightgray lg:px-[2%] lg:py-[95px] md:py-[75px] sm:py-[50px] sm:px-0 xs:px-0">
        <Container>
          <Row className="justify-center">
            <Col lg={4} sm={6} className="text-center mb-12 md:mb-8">
              <span className="font-serif font-medium text-basecolor text-xmd block mb-[20px] sm:mb-[10px]">
                News
              </span>
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
            data={blogs}
          />
          <Col className="text-center mt-[40px] md:flex md:flex-col md:items-center gap-y-10">
            <Buttons
              ariaLabel="button"
              href="/allnews"
              className="btn-fill mx-[10px] rounded-none font-medium font-serif uppercase btn-fancy"
              size="lg"
              color="#ffffff"
              themeColor="#05867E"
              title="All News"
            />
          </Col>
        </Container>
      </section>

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

      <FooterSection />
    </div>
  );
};

export default HomeStartupPage;
