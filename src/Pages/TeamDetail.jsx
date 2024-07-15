import { useQuery } from "@tanstack/react-query";
import { m } from "framer-motion";
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// Components
import { TiltBox } from '../Components/FancyText/FancyText';
import Team from '../Components/Team/Team';
import { fadeIn } from '../Functions/GlobalAnimations';
import db from '../appwrite/Services/dbServices';
import { buckets } from '../appwrite/buckets';
import { storage } from '../appwrite/config';
import FooterSection from './Footer/FooterSection';
import HeaderSection from './Header/HeaderSection';
// Function to fetch team data
const fetchTeamData = async () => {
    const headerSnapshot = await db.teamHeader.list();
    const bodySnapshot = await db.teamBody.list();
    const header = headerSnapshot.documents.length > 0 ? headerSnapshot.documents[0].title : "Team";
    const body = await Promise.all(bodySnapshot.documents.map(async doc => {
      const img = await getImageUrl(doc.image);
      return { img, name: doc.name, designation: doc.designation };
    }));
    return { header, body };
  };
  
  const getImageUrl = async (imageId) => {
    try {
      const result = await storage.getFileView(buckets[0].id, imageId);
      return result.href;
    } catch (error) {
      console.error("Error fetching image URL:", error);
    }
  };
  
  const TeamDetail = (props) => {
    const { data: teamData, isLoading } = useQuery({
      queryKey: ["teamData"],
      queryFn: fetchTeamData,
    });
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    return (
      <div style={props.style}>
        {/* Header Start */}
        <HeaderSection theme={"light"} />
        {/* Header End */}
  
        {/* Section Start */}
        <m.section className="overflow-hidden pt-[40px] pb-[20px] lg:pt-[30px] lg:pb-[10px] md:pt-[20px] md:pb-[10px] sm:pt-[20px] sm:pb-[10px] relative bg-cover bg-center bg-no-repeat bg-fixed lg:bg-local" style={{ backgroundImage: 'url(/assets/img/webp/our-team-bg2.webp)', marginTop: '100px' }} {...fadeIn}>
          <Container fluid className="text-center">
            <Row>
              <Col className="text-center mb-6 z-0 lg:mb-4 md:mb-3">
                <TiltBox>
                  <span className="font-serif title cover-background font-bold text-center text-[60px] leading-[60px] -tracking-[3px] uppercase bg-darkgray lg:text-[50px] lg:leading-[50px] md:text-[40px] md:leading-[40px] sm:text-[30px] sm:leading-[30px] xs:text-[20px] xs:leading-[20px] xs:-tracking-[1px]"
                    style={{ backgroundImage: `url(https://via.placeholder.com/1920x1091)` }}>Team
                  </span>
                </TiltBox>
              </Col>
            </Row>
          </Container>
        </m.section>
        {/* Section End */}
  
        {/* Section Start */}
        <section id="downsection" className="our-team-page-team py-[40px] lg:pt-[30px] lg:pb-[20px] md:pt-[20px] md:pb-[10px] sm:py-[20px] xs:pb-[10px] switch-tabs">
          <Container fluid className="px-[7%] lg:px-[3%]">
            <Team
              themeColor="light"
              overlay={["#0039e3cc", "#4132e0cc", "#5e28ddcc", "#741bd9cc", "#8600d4cc"]}
              theme='team-style-04'
              data={teamData.body}
              grid="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 justify-center"
              carousel={false}
              carouselOption={{ slidesPerView: 3, spaceBetween: 30, loop: true, navigation: true, autoplay: { delay: 3000, disableOnInteraction: true }, pagination: { dynamicBullets: true, clickable: true } }} />
          </Container>
        </section>
        {/* Section End */}
  
        {/* Footer Start */}
        <FooterSection />
        {/* Footer End */}
      </div>
    );
  }
  
  export default TeamDetail;