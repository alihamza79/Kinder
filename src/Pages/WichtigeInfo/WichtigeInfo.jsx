import React from "react";
import { Col, Container,Row } from "react-bootstrap";
import { m } from "framer-motion";
import { fadeIn } from "../../Functions/GlobalAnimations";
import Accordion from "../../Components/Accordion/Accordion";
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
      <HeaderSection theme="light" />
      {/* Header End */}

      {/* Page Title */}
      <Container>
        <Row className="justify-center">
          <Col md={12} className="text-center  mt-60">
            <h5 className="font-serif text-darkgray font-medium">Important Information</h5>
            <p className="text-darkgray font-medium" style={{fontSize:"1rem"}}>Here you can find useful information and tips.</p>
          </Col>
        </Row>
      </Container>

      {/* Accordion */}
      <m.section className="py-20">
        <Container>
          <Col lg={12} md={10}>
            <Accordion theme="accordion-style-03" animation={fadeIn} data={Data} />
          </Col>
        </Container>
      </m.section>

      {/* Footer */}
      <FooterSection />
    </>
  );
};

export default WichtigeInfo;
