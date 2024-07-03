import React from "react";
// Libraries
import { Col, Container, Row, Navbar } from "react-bootstrap";
import { m } from "framer-motion";
import { Link } from "react-router-dom";

// Components
import { fadeIn } from "../../Functions/GlobalAnimations";
import {
  Header,
  HeaderCart,
  HeaderLanguage,
  HeaderNav,
  Menu,
  SearchBar,
} from "../../Components/Header/Header";
import FooterStyle01 from "../../Components/Footers/FooterStyle01";
import SideButtons from "../../Components/SideButtons";

// Data
import SimpleAccordion from "../../Components/Accordion/SimpleAccordion";
import MiniVersionPage from "../PageTitle/MiniVersionPage";
import Accordion from "../../Components/Accordion/Accordion";
import { data } from "isotope-layout";
import FooterSection from "../Footer/FooterSection";
import HeaderSection from "../Header/HeaderSection";

const WichtigeInfo = () => {
  const Data = [
    {
      title: "1",
      content:
        "Lorem ipsum is simply dummy text of the printing type setting and industry. Lorem ipsum has been the industry's standard dummy.",
    },
    {
      title: "2- Lets collaborate and make an impact business",
      content:
        "Lorem ipsum is simply dummy text of the printing type setting and industry. Lorem ipsum has been the industry's standard dummy.",
    },
    {
      title: "3- A satisfied customer is the best business strats",
      content:
        "Lorem ipsum is simply dummy text of the printing type setting and industry. Lorem ipsum has been the industry's standard dummy.",
    },
    {
      title: "Common PayPal and credit card issues",
      content:
        "Lorem ipsum is simply dummy text of the printing type setting and industry. Lorem ipsum has been the industry's standard dummy.",
    },
    {
      title: "Lets collaborate and make an impact business",
      content:
        "Lorem ipsum is simply dummy text of the printing type setting and industry. Lorem ipsum has been the industry's standard dummy.",
    },
    {
      title: "A satisfied customer is the best business strats",
      content:
        "Lorem ipsum is simply dummy text of the printing type setting and industry. Lorem ipsum has been the industry's standard dummy.",
    },
  ];

  return (
    <>
      {/* Header Start */}
      <HeaderSection  theme="light" /> 
      {/* Header End */}

      {/* Page Title */}
      {/* <MiniVersionPage className="ml-6" title="WichtigeInfo" /> */}

      {/* Accordion style 03 ( Light ) start */}
      <m.section className="py-60 ">
        <Container>
          {/* <Row className="justify-center"> */}
          <Col lg={12} md={10}>
            <Accordion
              theme="accordion-style-03"
              className=""
              animation={fadeIn}
              data={Data}
            />
          </Col>
          {/* </Row> */}
        </Container>
      </m.section>
      {/* Accordion style 03 ( Light ) end */}

      {/* Footer Start */}
      <FooterSection />
      {/* Footer End */}
    </>
  );
};

export default WichtigeInfo;
