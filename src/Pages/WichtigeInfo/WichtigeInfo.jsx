import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { m } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { fadeIn } from "../../Functions/GlobalAnimations";
import Accordion from "../../Components/Accordion/Accordion";
import FooterSection from "../Footer/FooterSection";
import HeaderSection from "../Header/HeaderSection";
import { getAllDocuments } from "../../firebase/dbService";
import 'react-toastify/dist/ReactToastify.css';
import Preloader from "../../Components/Preloader";

const fetchHeaderData = async () => {
  const headerSnapshot = await getAllDocuments('importantInformationHeader');
  if (headerSnapshot.docs.length > 0) {
    const headerData = headerSnapshot.docs[0].data();
    return {
      title: headerData.title,
      description: headerData.description,
    };
  }
  return null;
};

const fetchBodyData = async () => {
  const bodySnapshot = await getAllDocuments('importantInformation');
  return bodySnapshot.docs.map((doc) => ({
    title: doc.data().title,
    content: doc.data().description,
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
    return <Preloader />;
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
              <p className="text-darkgray font-medium text-lg md:text-md">
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
