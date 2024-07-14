import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { m } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { fadeIn } from "../../Functions/GlobalAnimations";
import Accordion from "../../Components/Accordion/Accordion";
import FooterSection from "../Footer/FooterSection";
import HeaderSection from "../Header/HeaderSection";
import db from "../../appwrite/Services/dbServices";
import 'react-toastify/dist/ReactToastify.css';
import Preloader from "../../Components/Preloader";

const fetchHeaderData = async () => {
  const headerSnapshot = await db.importantInformationHeader.list();
  if (headerSnapshot.documents.length > 0) {
    return {
      title: headerSnapshot.documents[0].title,
      description: headerSnapshot.documents[0].description,
    };
  }
  return null;
};

const fetchBodyData = async () => {
  const bodySnapshot = await db.importantInformation.list();
  return bodySnapshot.documents.map((doc) => ({
    title: doc.title,
    content: doc.description,
  }));
};

const WichtigeInfo = () => {
  const { data: headerData, isLoading: headerLoading, error: headerError } = useQuery({
    queryKey: ['headerData'],
    queryFn: fetchHeaderData,
  });
  const { data: bodyData, isLoading: bodyLoading, error: bodyError } = useQuery({
    queryKey: ['bodyData'],
    queryFn: fetchBodyData,
  });

  if (headerLoading || bodyLoading) {
    return <Preloader/>;
  }

  if (headerError || bodyError) {
    return <div>Error loading data</div>;
  }

  return (
    <>
      {/* Header Start */}
      <HeaderSection theme="light" />
      {/* Header End */}

      {/* Page Title */}
      {headerData && (
        <Container>
          <Row className="justify-center">
            <Col md={12} className="text-center mt-60">
              <h5 className="font-serif text-darkgray font-medium">{headerData.title}</h5>
              <p className="text-darkgray font-medium" style={{ fontSize: "1rem" }}>
                {headerData.description}
              </p>
            </Col>
          </Row>
        </Container>
      )}

      {/* Accordion */}
      <m.section className="py-20">
        <Container>
          <Col lg={12} md={10}>
            <Accordion theme="accordion-style-03" animation={fadeIn} data={bodyData} />
          </Col>
        </Container>
      </m.section>

      {/* Footer */}
      <FooterSection />
    </>
  );
};

export default WichtigeInfo;
