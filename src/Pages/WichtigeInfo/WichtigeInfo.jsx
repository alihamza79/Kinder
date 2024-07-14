import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { m } from "framer-motion";
import { fadeIn } from "../../Functions/GlobalAnimations";
import Accordion from "../../Components/Accordion/Accordion";
import FooterSection from "../Footer/FooterSection";
import HeaderSection from "../Header/HeaderSection";
import db from "../../appwrite/Services/dbServices";
import 'react-toastify/dist/ReactToastify.css';

const WichtigeInfo = () => {
  const [headerData, setHeaderData] = useState(null);
  const [bodyData, setBodyData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch header data
        const headerSnapshot = await db.importantInformationHeader.list();
        if (headerSnapshot.documents.length > 0) {
          setHeaderData({
            title: headerSnapshot.documents[0].title,
            description: headerSnapshot.documents[0].description,
          });
        }

        // Fetch body data
        const bodySnapshot = await db.importantInformation.list();
        const body = bodySnapshot.documents.map((doc) => ({
          title: doc.title,
          content: doc.description,
        }));
        setBodyData(body);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
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
