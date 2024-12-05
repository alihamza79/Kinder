import React, { lazy, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link as ScrollTo } from "react-scroll";
import { Parallax } from "react-scroll-parallax";
import Accordions from "../../../Components/Accordion/Accordion";
import { m } from "framer-motion";
import { fadeIn,fadeInLeft } from "../../../Functions/GlobalAnimations";

import { db,storage } from "../../../config/firebase";
import { collection, getDocs, query } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import HeroIconWithText from "../../../Components/IconWithText/HeroIconWithText";
import Preloader from "../../../Components/Preloader";
import Team from "../../../Components/Team/Team";
import TextBox from "../../../Components/TextBox/TextBox";
import FooterSection from "../../Footer/FooterSection";
import HeaderSection from "../../Header/HeaderSection";
import ImageGallery from "../../ImageGallery/ImageGallery";
// Icons 
import ambulance from "../../../Assets/img/icons/ambulance.svg";
import contact_info from "../../../Assets/img/icons/contact_info.svg";
import emergency_services from "../../../Assets/img/icons/emergency_services.svg";
import opening from "../../../Assets/img/icons/opening.svg";
import opening_hour from "../../../Assets/img/icons/opening_hour.svg";
import pdf from "../../../Assets/img/icons/pdf.svg";
import { useQueries } from "@tanstack/react-query";

const IconWithText = lazy(() =>
  import("../../../Components/IconWithText/IconWithText")
);

const Buttons = lazy(() => import("../../../Components/Button/Buttons"));
const Overlap = lazy(() => import("../../../Components/Overlap/Overlap"));
const BlogMasonry = lazy(() => import("../../../Components/Blogs/BlogMasonry"));
const MessageBox = lazy(() =>
  import("../../../Components/MessageBox/MessageBox")
);
const StartupPageBannerSlider = lazy(() => import("./StartupBanner"));

const fallbackScheduleBody = [
  {
    img: contact_info,
    title: "Contact Info",
    content: "Email an: praxis@kjk-wn.de. \n\n Telefonnummer: 07151 - 21080.",
  },
  {
    img: opening_hour,
    title: "OPENING HOURS",
    content:
      "Vormittags \n Montags bis freitags:  08 - 11 Uhr \n\n Nachmittags \n  Montags, mittwochs, freitags 14 -16 Uhr",
  },
];

const fetchInformationCards = async () => {
  const querySnapshot = await getDocs(collection(db, "informationCard"));
  const fetchedData = querySnapshot.docs.map(doc => doc.data());

  if (fetchedData.length > 0) {
    return [
      {
        img: emergency_services,
        title: fetchedData[0]?.Title || "NOTFALL",
        content: fetchedData[0]?.Description || "Default content...",
      },
      {
        img: ambulance,
        title: fetchedData[1]?.Title || "NOTDIENST",
        content: fetchedData[1]?.Description || "Default content...",
      },
      {
        img: opening,
        title: fetchedData[2]?.Title || "OPENING HOURS",
        content: fetchedData[2]?.Description || "Default content...",
      },
      {
        img: contact_info,
        title: fetchedData[3]?.Title || "Contact Information",
        content: fetchedData[3]?.Description || "Default content...",
      },
    ];
  }

  return [
    {
      img: ambulance,
      title: "NOTFALL",
      content: "Default content...",
    },
    {
      img: emergency_services,
      title: "NOTDIENST",
      content: "Default content...",
    },
    {
      img: opening,
      title: "OPENING HOURS",
      content: "Default content...",
    },
    {
      img: contact_info,
      title: "Contact Information",
      content:"Default content...",
    }
  ];
};

const fetchAboutUs = async () => {
  const querySnapshot = await getDocs(collection(db, "about"));
  if (!querySnapshot.empty) {
    const aboutData = querySnapshot.docs[0].data();
    const image = await getImageUrl(aboutData.image);
    return {
      title: aboutData.title,
      description: aboutData.description,
      image: image,
      imageTitle: aboutData.imageTitle,
      imageSubtitle: aboutData.imageSubtitle,
    };
  }
  return {
    title: "Liebe Eltern, Kinder und Jugendliche!",
    description:
      "Wir freuen uns, Sie auf der Internetseite der Kinderarztpraxis kunterbunt Waiblingen zu begrüßen. Für uns als Fachärzte für Kinder- und Jugendmedizin steht die körperliche und geistige Entwicklung Ihres Kindes vom Säugling bis zum Jugendlichen im Mittelpunkt unserer Arbeit. Dabei ist uns der einfühlsame und verantwortungsbewusste Umgang mit unseren kleinen und großen Patienten besonders wichtig. Schwerpunkt unserer Praxis ist die hausärztliche Versorgung und ganzheitliche Begleitung von Kindern. Wir versorgen alle akuten und chronischen Erkrankungen, wie z.B. Asthma, Allergien oder ADHS und haben dabei auch psychosomatische Beschwerden im Blick. Wir sind eng vernetzt mit den Kliniken und Spezialisten in der Region und stimmen mit Ihnen die Behandlung und Versorgung im Sinne Ihres Kindes ab. Wir freuen uns, Sie und Ihre Familie kennen zu lernen!",
    image: "https://via.placeholder.com/700x1027",
    imageTitle: "Dr. med. Sybille Walker",
    imageSubtitle: "Fachärztin für Kinder- und Jugendmedizin / Deutschland",
  };
};

const fetchServiceData = async () => {
  const headerSnapshot = await getDocs(collection(db, "serviceHeader"));
  const bodySnapshot = await getDocs(collection(db, "services"));
  
  const header = !headerSnapshot.empty ? headerSnapshot.docs[0].data().title : "Leistungen";
  const body = bodySnapshot.docs.map(doc => ({ title: doc.data().name }));
  
  return { header, body };
};

const fetchTeamData = async () => {
  const headerSnapshot = await getDocs(collection(db, "teamHeader"));
  const bodySnapshot = await getDocs(collection(db, "teamBody"));
  const header = headerSnapshot.docs.length > 0 ? headerSnapshot.docs[0].data().title : "Team";
  
  console.log("Team body data:", bodySnapshot.docs.map(doc => doc.data()));
  
  const body = await Promise.all(bodySnapshot.docs.map(async doc => {
    const data = doc.data();
    const imagePath = data.image || data.imageUrl || data.img;
    const imageUrl = await getImageUrl(imagePath);
    
    console.log("Team member image path:", imagePath);
    console.log("Team member image URL:", imageUrl);
    
    return { 
      img: imageUrl || '/path/to/default/image.jpg',
      name: data.name,
      designation: data.designation 
    };
  }));
  return { header, body };
};

const fetchLinksData = async () => {
  const headerSnapshot = await getDocs(collection(db, "linkHeader"));
  const bodySnapshot = await getDocs(collection(db, "links"));
  const header = headerSnapshot.docs.length > 0 ? headerSnapshot.docs[0].data().title : "Links";
  const body = bodySnapshot.docs.map(doc => ({ title: doc.data().title, content: doc.data().description }));
  return { header, body };
};

const fetchBlogData = async () => {
  const querySnapshot = await getDocs(collection(db, "blogs"));
  
  console.log("Blog data:", querySnapshot.docs.map(doc => doc.data()));
  
  const data = await Promise.all(querySnapshot.docs.map(async doc => {
    const blogData = doc.data();
    const imagePath = blogData.image || blogData.imageUrl || blogData.img;
    const imageUrl = await getImageUrl(imagePath);
    
    console.log("Blog image path:", imagePath);
    console.log("Blog image URL:", imageUrl);
    
    return {
      id: doc.id,
      title: blogData.title,
      date: blogData.publicationDate ? new Date(blogData.publicationDate).toLocaleDateString() : "",
      content: blogData.content,
      img: imageUrl || '/path/to/default/image.jpg',
      category: blogData.tags || [],
      publicationDate: blogData.publicationDate ? new Date(blogData.publicationDate) : new Date(),
    };
  }));
  
  return data.sort((a, b) => b.publicationDate - a.publicationDate).slice(0, 3);
};

const fetchHospitalKontakteData = async () => {
  const headerSnapshot = await getDocs(collection(db, "hospitalKontakteHeader"));
  const bodySnapshot = await getDocs(collection(db, "hospitalKontakte"));
  const header = headerSnapshot.docs.length > 0 ? headerSnapshot.docs[0].data().title : "";
  const body = bodySnapshot.docs.map(doc => ({ title: doc.data().title, description: doc.data().description }));
  return { header, body };
};

const fetchFormData = async () => {
  const headerSnapshot = await getDocs(collection(db, "formHeader"));
  const bodySnapshot = await getDocs(collection(db, "formBody"));
  const header = headerSnapshot.docs.length > 0 ? headerSnapshot.docs[0].data().title : "Forms";
  const body = await Promise.all(bodySnapshot.docs.map(async doc => {
    const fileUrl = await getImageUrl(doc.data().file);
    return {
      img: pdf,
      title: doc.data().title,
      content: `<a href="${fileUrl}" target="_blank" download>Preview</a>`,
    };
  }));
  return { header, body };
};

const fetchScheduleData = async () => {
  const headerSnapshot = await getDocs(collection(db, "scheduleHeader"));
  const bodySnapshot = await getDocs(collection(db, "scheduleBody"));
  const header = headerSnapshot.docs.length > 0 ? headerSnapshot.docs[0].data().title : "";
  const body = bodySnapshot.docs.map((doc, index) => ({
    img: fallbackScheduleBody[index]?.img,
    title: doc.data().title,
    content: doc.data().description,
  }));
  return { header, body };
};

const getImageUrl = async (imagePath) => {
  try {
    const imageRef = ref(storage, imagePath);
    const url = await getDownloadURL(imageRef);
    return url;
  } catch (error) {
    console.error("Error fetching image URL:", error);
    return null;
  }
};
const fetchGalleryData = async () => {
  const headerSnapshot = await getDocs(collection(db, "galleryHeader"));
  const bodySnapshot = await getDocs(collection(db, "galleryBody"));
  const header = headerSnapshot.docs.length > 0 ? headerSnapshot.docs[0].data().title : "Image Gallery";
  const body = await Promise.all(bodySnapshot.docs.map(async doc => {
    const img = await getImageUrl(doc.data().image);
    return { src: img, category: doc.data().category, title: doc.data().title };
  }));
  return { header, body };
};

const HomeStartupPage = (props) => {
  const [blogs, setBlogs] = useState([]);
  const [isLoadingBlogs, setIsLoadingBlogs] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogData = await fetchBlogData();
        setBlogs(blogData);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      } finally {
        setIsLoadingBlogs(false);
      }
    };

    fetchBlogs();
  }, []);

  const results = useQueries({
    queries: [
      { queryKey: ["informationCards"], queryFn: fetchInformationCards },
      { queryKey: ["aboutUs"], queryFn: fetchAboutUs },
      { queryKey: ["serviceData"], queryFn: fetchServiceData },
      { queryKey: ["teamData"], queryFn: fetchTeamData },
      { queryKey: ["linksData"], queryFn: fetchLinksData },
      { queryKey: ["hospitalKontakte"], queryFn: fetchHospitalKontakteData },
      { queryKey: ["formData"], queryFn: fetchFormData },
      { queryKey: ["scheduleData"], queryFn: fetchScheduleData },
      { queryKey: ["galleryData"], queryFn: fetchGalleryData },
    ],
  });

  const isLoading = results.some((result) => result.isLoading) || isLoadingBlogs;

  if (isLoading) {
    return <Preloader />;
  }

  const [
    { data: informationCards },
    { data: aboutUs },
    { data: serviceData },
    { data: teamData },
    { data: linksData },
    { data: hospitalKontakte },
    { data: formData },
    { data: scheduleData },
    { data: galleryData },
  ] = results;

  return (
    <div style={props.style}>

      
      <HeaderSection {...props} logoInvisible={true} />


      <StartupPageBannerSlider />

      <div className="mb-[105px] md:mb-[70px] sm:mb-[50px] m-10">
        <Overlap className="md:mt-0">
          <Row className="justify-center">
            <Col xs={12} sm={9} lg={12} md={12}>
              <HeroIconWithText
                grid="row-cols-1 row-cols-lg-4 row-cols-md-2 justify-center gap-y-10 z-10 relative"
                className="rounded-[4px] flex"
                theme="icon-with-text-11"
                data={informationCards}
              />
            </Col>
          </Row>
        </Overlap>
      </div>


      {/* <section className="py-[160px] overflow-hidden lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
        <Container>
          <Row className="justify-content-center">
            <m.div
              className="col-xl-8 col-lg-10 col-md-12 d-flex flex-column mb-24"
              {...{ ...fadeIn, transition: { delay: 0.2 } }}
            >
              <h5 className="alt-font text-darkgray font-semibold mt-[30px] mb-[20px] font-serif text-center heading-6">
                {scheduleData.header}
              </h5>
            </m.div>
          </Row>
          <Container fluid>
            <Row className="justify-content-center">
              <Col>
                <IconWithText
                  grid="row-cols-1 row-cols-lg-2 row-cols-md-2 gap-y-[40px]"
                  theme="icon-with-text-04"
                  data={scheduleData.body}
                  animation={fadeIn}
                  animationDelay={0.2}
                  highlightSecondCard={true}
                />
              </Col>
            </Row>
          </Container>

        </Container>
      </section> */}

{/* New About Us */}
        {/* Section Start */}
        <m.section
          className="py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px] bg-lightgray overflow-hidden"
          {...fadeIn}
        >
          <Container>
            <Row className="items-center justify-center">
              <Col lg={6} md={9} className="p-0 md:mb-[30px]">
                <m.div className="relative" {...fadeIn}>
                  {/* <div
                    onClick={() => swiperRef.current.swiper.slidePrev()}
                    className="btn-slider-prev bg-darkgray z-[11] text-[#fff] w-[50px] h-[50px] left-[15px] transition-default leading-[40px] m-0 right-auto absolute top-[47%] flex item-center justify-center hover:bg-white hover:text-darkgray  cursor-pointer"
                  >
                    <button className="text-xmd" aria-label="prev btn">
                      <i className="feather-arrow-left"></i>
                    </button>
                  </div>

                  <div
                    onClick={() => swiperRef.current.swiper.slideNext()}
                    className="btn-slider-next btn-slider-next bg-darkgray z-[11] text-[#fff] w-[50px] transition-default h-[50px] right-[15px] leading-[40px] m-0 left-auto absolute top-[47%] flex item-center justify-center hover:bg-white hover:text-darkgray  cursor-pointer"
                  >
                    <button className="text-xmd" aria-label="next btn">
                      <i className="feather-arrow-right"></i>
                    </button>
                  </div> */}
                  {/* <Swiper
                    className="black-move swiper-pagination-medium h-full"
                    ref={swiperRef}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                  > */}
                    {/* {TestimonialsCarouselData.map((item, i) => {
                      return (
                        <SwiperSlide key={i} className="p-[15px]"> */}
                          <div className="h-full bg-[#fff] box-shadow">
                            <img className="w-full" src={aboutUs.image} alt="TestimonialsCarousel" width={555} height={432} />
                            <div className="items-center justify-center text-center flex px-[4.5rem] py-14 flex-row xs:p-8">
                              {/* <div className="grow-0 shrink-0 basis-auto flex-initial pr-[40px] xs:pr-[15px]">
                                <h2 className="heading-4 font-semibold text-darkgray font-serif mb-0">
                                  {item.number}
                                </h2>
                              </div> */}
                              <div className="overflow-hidden max-w-full pl-[40px] border-basecolor border-l-[2px] text-left xs:pl-[15px]">
                                <span className="mb-[5px] font-medium text-darkgray text-xmd font-serif block">
                                {aboutUs.imageTitle}
                                 </span>
                                <p className="mb-0">{aboutUs.imageSubtitle}</p>
                              </div>
                            </div>
                          </div>
                        {/* </SwiperSlide>
                      ); */}
                    {/* })} */}
                  {/* </Swiper> */}
                </m.div>
              </Col>
              <m.div
                className="col-lg-5 col-md-9 offset-lg-1"
                {...fadeInLeft}
              >
                <h2 className="heading-4 mb-[40px] leading-[40px] font-semibold tracking-[-1px] text-darkgray font-serif xs:mb-[20px]">
                  <span className="p-0 block">{aboutUs.title}</span>
                  {/* <TextAnime
                    duration={3000}
                    color="#232323"
                    className="font-semibold animated-text-black"
                    animation="slide"
                    data={["perfect design", "perfect layout", "perfect color"]}
                  /> */}
                </h2>
                <p className="w-[110%] mb-[30px] xs:w-full" dangerouslySetInnerHTML={{ __html: aboutUs.description }}>
                  {/* {aboutUs.description} */}
                </p>
                <m.div className="col w-[85%] xs:w-full">
                  {/* <Lists
                    className="font-medium"
                    theme="list-style-01"
                    data={ListData01}
                  /> */}
                </m.div>
              </m.div>
            </Row>
          </Container>
        </m.section>
        {/* Section End */}

{/* About Us  */}
      {/* <section
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
                <Parallax className="lg-no-parallax w-[70%] sm:w-[100%] mb-16" speed={0}>
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
                  <span className="text-basecolor uppercase text-[#028985]">About Us</span>
                </div>
              </div>
              <h1 className="heading-4 font-serif text-darkgray font-semibold w-[103%] mb-[35px] lg:w-full sm:mb-[25px]">
                {aboutUs.title}
              </h1>
              <p className="mb-[25px] w-[100%] lg:w-full text-center"
               dangerouslySetInnerHTML={{ __html: aboutUs.description }}>
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
      </section> */}

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
                  <h6 className="mr-[25px] font-serif text-[#028985] mb-0">
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
                href="/teamdetail"
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

      <section className="bg-lightgray py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] ">
        <Container>
          <Row>
            <Col className="mb-[6%]">
              <h6 className="font-serif text-dark text-center font-medium mb-[25px] lg:mb-[15px]">
                {formData.header}
              </h6>
            </Col>
          </Row>
          <Row className="justify-content-center pl-28 sm:pl-1">
            <Col xs={12} sm={8} md={12}>
              <IconWithText
                grid="row-cols-1 row-cols-lg-4 row-cols-md-2 justify-center md:mb-[30px] gap-y-10"
                theme="icon-with-text-08"
                data={formData.body}
                animation={fadeIn}
                animationDelay={0.2}
                highlightAllCard={true}
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

      <section className="bg-lightgray py-[160px] border-t lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
        <Container>
          <Row>
            <Col className="mb-[6%]">
              <h6 className="font-serif text-dark text-center font-medium mb-[25px] lg:mb-[15px]">
                {galleryData.header}
              </h6>
            </Col>
          </Row>
          <Row>
            <ImageGallery
              theme="image-gallery-02"
              grid="grid grid-4col xl-grid-4col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-large"
              data={galleryData.body}
              overlay={["#36c1e1", "#28ccc0", "#74cf8e", "#bac962", "#feb95b"]}
              animation={fadeIn}
            />
          </Row>
        </Container>
      </section>

      <section className="py-32 p-[130px] bg-lightgray lg:px-[2%] lg:py-[95px] md:py-[75px] sm:py-[50px] sm:px-0 xs:px-0">
        <Container>
          <Row className="justify-center">
            <Col lg={4} sm={6} className="text-center mb-12 md:mb-8">
              <span className="font-serif font-medium text-basecolor text-xmd block mb-[20px] sm:mb-[10px] text-[#028985]" >
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

      <FooterSection />
    </div>
  );
};

export default HomeStartupPage;

