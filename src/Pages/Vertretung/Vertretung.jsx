import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { m } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { fadeIn } from '../../Functions/GlobalAnimations';
import IconWithText from '../../Components/IconWithText/IconWithText';
import FooterSection from '../Footer/FooterSection';
import HeaderSection from '../Header/HeaderSection';
import MonthlyTab06 from '../../Components/Tab/MonthlyTab06';
import { getAllDocuments, getDocument } from '../../firebase/dbService';
import Preloader from '../../Components/Preloader';

//icons

 import calender_03 from "../../Assets/img/icons/calender_03.svg"

const fetchRepresentationDates = async () => {
  try {
    const dateSnapshot = await getAllDocuments('representationDates');
    const dates = dateSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));

    const repSnapshot = await getAllDocuments('representatives');
    const representatives = repSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));

    const fetchedData = dates.map(date => {
      const repsForDate = representatives.filter(rep => rep.dateId === date.id);

      return {
        fromDate: date.fromDate.toDate(),
        toDate: date.toDate.toDate(),
        representatives: repsForDate.map(rep => ({
          name: rep.name,
          hospital: rep.hospital,
          address: rep.address,
          telephoneNumber: rep.telephoneNumber,
          doctors: rep.doctors
        }))
      };
    });

    const formatDate = (date) => {
      return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    };

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    
    return months.map((month, index) => {
      const monthData = fetchedData.filter((doc) => {
        return doc.fromDate.getMonth() === index;
      });

      return {
        tabTitle: month,
        month,
        activities: monthData.map((doc) => ({
          time: doc.fromDate.getTime() === doc.toDate.getTime()
            ? formatDate(doc.fromDate)
            : `${formatDate(doc.fromDate)} - ${formatDate(doc.toDate)}`,
          representatives: doc.representatives || [],
        }))
      };
    });
  } catch (error) {
    console.error('Error fetching representation dates:', error);
    throw error;
  }
};

const fetchWeeklyRepresentation = async () => {
  // Fetch header data
  const headerSnapshot = await getAllDocuments('weeklyRepresentationHeader');
  let weeklyHeader = "";
  if (!headerSnapshot.empty) {
    weeklyHeader = headerSnapshot.docs[0].data().title;
  }

  // Fetch body data
  const bodySnapshot = await getAllDocuments('weeklyRepresentation');
  const weeklyBodyData = bodySnapshot.docs.map((doc) => ({
    img: calender_03,
    title: doc.data().title,
    content: doc.data().description,
  }));

  return { weeklyHeader, weeklyBodyData };
};

const Vertretung = () => {
  const { data: tabData, isLoading: tabLoading, error: tabError } = useQuery({
    queryKey: ['representationDates'],
    queryFn: fetchRepresentationDates,
  });

  const { data: weeklyData, isLoading: weeklyLoading, error: weeklyError } = useQuery({
    queryKey: ['weeklyRepresentation'],
    queryFn: fetchWeeklyRepresentation,
  });

  if (tabLoading || weeklyLoading) {
    return <Preloader/>;
  }

  if (tabError || weeklyError) {
    return <div>Error loading data</div>;
  }

  const { weeklyHeader, weeklyBodyData } = weeklyData;

  return (
    <div>
      {/* Header Start */}
      <HeaderSection theme="light" />
      {/* Header End */}

      {/* Weekly Representation */}
      <Container>
        <div className="mb-[105px] md:mb-[70px] sm:mb-[50px] m-10 pt-[160px] lg:pt-[120px] md:pt-[95px] sm:pt-[80px] xs:pt-[50px] md:px-0 sm:px-0 xs:px-0" {...fadeIn}>
          <Row className="justify-center">
            <Col md={12} className="text-center mb-[6%]">
              <h6 className="font-serif text-darkgray font-medium">{weeklyHeader}</h6>
            </Col>
          </Row>
          <Row className="justify-center">
            <Col xs={12} sm={9} lg={12} md={12}>
              <IconWithText
                grid="row-cols-1 row-cols-lg-2 row-cols-md-2 justify-center gap-y-10 z-10 relative"
                className="rounded-[4px] flex"
                theme="icon-with-text-02"
                data={weeklyBodyData}
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
