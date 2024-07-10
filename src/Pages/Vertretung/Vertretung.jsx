import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { m } from 'framer-motion';
import { fadeIn } from '../../Functions/GlobalAnimations';
import IconWithText from '../../Components/IconWithText/IconWithText';
import FooterSection from '../Footer/FooterSection';
import HeaderSection from '../Header/HeaderSection';
import MonthlyTab06 from '../../Components/Tab/MonthlyTab06';
import db from '../../appwrite/Services/dbServices';

const Vertretung = () => {
  const [tabData, setTabData] = useState();
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  useEffect(() => {
    const fetchRepresentationDates = async () => {
      try {
        const { documents } = await db.representationDates.list();
        const fetchedData = await Promise.all(
          documents.map(async (doc) => {
            const representatives = await Promise.all(
              doc.representativesCollection.map(async (repId) => {
                try {
                  const repData = await db.representatives.get(repId);
                  return {
                    name: repData.name,
                    hospital: repData.hospital,
                    address: repData.address,
                    telephoneNumber: repData.telephoneNumber,
                    doctors: repData.doctors
                  };
                } catch (error) {
                  console.error(`Error fetching representative with ID ${repId}:`, error);
                  return null; // Return null if there's an error fetching this representative
                }
              })
            );
            return {
              ...doc,
              representatives: representatives.filter((rep) => rep !== null), // Filter out any null values
            };
          })
        );
  
        const data = months.map((month, index) => {
          const monthData = fetchedData.filter((doc) => new Date(doc.fromDate).getMonth() === index);
          const activities = monthData.map((doc) => ({
            time: doc.fromDate === doc.toDate ? doc.fromDate : `${doc.fromDate} - ${doc.toDate}`,
            representatives: doc.representatives,
          }));
          return {
            tabTitle: month,
            month,
            activities,
          };
        });
  
        setTabData(data);
        console.log("Tab data: ", data);
      } catch (error) {
        console.error('Error fetching representation dates:', error);
      }
    };
  
    fetchRepresentationDates();
  }, []);
  
  // Ensure that `tabData` is being logged and not `tabData` from the state
  console.log("Tab data outside useEffect: ", tabData);

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

  return (
    <div>
      {/* Header Start */}
      <HeaderSection theme="light" />
      {/* Header End */}
      {/* <SideButtons /> */}

      {/* Weekly Representation */}
      <Container>
        <div className="mb-[105px] md:mb-[70px] sm:mb-[50px] m-10 pt-[160px] lg:pt-[120px] md:pt-[95px] sm:pt-[80px] xs:pt-[50px] md:px-0 sm:px-0 xs:px-0" {...fadeIn}>
          <Row className="justify-center">
            <Col md={12} className="text-center mb-[6%]">
              <h6 className="font-serif text-darkgray font-medium">Weekly Representation</h6>
            </Col>
          </Row>
          <Row className="justify-center">
            <Col xs={12} sm={9} lg={12} md={12}>
              <IconWithText
                grid="row-cols-1 row-cols-lg-2 row-cols-md-2 justify-center gap-y-10 z-10 relative"
                className="rounded-[4px] flex"
                theme="icon-with-text-02"
                data={iconWithTextData}
              />
            </Col>
          </Row>
        </div>
      </Container>

      {/* Monthly Representation */}
      <m.section className="py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] md:px-0 sm:px-0 xs:px-0 " {...fadeIn}>
        <Container>
          <Row className="justify-center">
            <Col md={12} className="text-center mb-[6%]">
              <h6 className="font-serif text-darkgray font-medium">Monthly Representation</h6>
            </Col>
          </Row>
          <MonthlyTab06 data={tabData} />
        </Container>
      </m.section>

      {/* Footer Start */}
      <FooterSection />
      {/* Footer End */}
    </div>
  );
};

export default Vertretung;
