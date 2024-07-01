import React from 'react'

// Libraries
import { Link } from 'react-router-dom'
import { Autoplay, EffectFade, Keyboard } from "swiper/modules";
import { Col, Container, Navbar, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from "swiper/react";
import { m } from "framer-motion"
import { Link as ScrollTo } from "react-scroll"

// Components
import { TiltBox } from '../../Components/FancyText/FancyText'
import { Header, HeaderCart, HeaderLanguage, HeaderNav, Menu, SearchBar } from "../../Components/Header/Header";
import CustomModal from '../../Components/CustomModal'
import { fadeIn } from '../../Functions/GlobalAnimations';
import Team from '../../Components/Team/Team';
import InteractiveBanners05 from '../../Components/InteractiveBanners/InteractiveBanners05';
import FooterStyle01 from '../../Components/Footers/FooterStyle01';
import Buttons from '../../Components/Button/Buttons'
import SideButtons from "../../Components/SideButtons";
import { TeamData04 } from '../../Components/Team/TeamData';
// Data
import { InteractiveBannersData05 } from '../../Components/InteractiveBanners/InteractiveBannersData';

const OurTeamPage = (props) => {
  const swiperRef = React.useRef(null)

  return (
    <div style={props.style}>
      {/* Header Start */}
      <Header topSpace={{ desktop: true }} type="reverse-scroll">
        <HeaderNav theme="light" expand="lg" menu="light" className="py-[0px] lg:px-[15px] md:px-0" containerClass="sm:px-0">
          <Col className="col-auto col-sm-6 col-lg-2 me-auto ps-lg-0">
            <Link aria-label="header logo" className="flex items-center" to="/">
              <Navbar.Brand className="inline-block p-0 m-0">
                <img className="default-logo" width="111" height="36" loading="lazy" src='/assets/img/webp/logo-fast-blue-black.webp' data-rjs='/assets/img/webp/logo-fast-blue-black@2x.webp' alt='logo' />
                <img className="alt-logo" width="111" height="36" loading="lazy" src='/assets/img/webp/logo-fast-blue-black.webp' data-rjs='/assets/img/webp/logo-fast-blue-black@2x.webp' alt='logo' />
                <img className="mobile-logo" width="111" height="36" loading="lazy" src='/assets/img/webp/logo-fast-blue-black.webp' data-rjs='/assets/img/webp/logo-fast-blue-black@2x.webp' alt='logo' />
              </Navbar.Brand>
            </Link>
          </Col>
          <div className="col-auto hidden order-last md:block">
            <Navbar.Toggle className="md:ml-[10px] sm:ml-0">
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
            </Navbar.Toggle>
          </div>
          <Navbar.Collapse className="col-auto px-0 justify-end">
            <Menu {...props} />
          </Navbar.Collapse>
          <Col className="col-auto text-right pe-0">
            <SearchBar className="pr-0 xs:pl-[15px]" />
            <HeaderLanguage className="xs:pl-[15px]" />
            <HeaderCart className="xs:pl-[15px]" style={{ "--base-color": "#0038e3" }} />
          </Col>
        </HeaderNav>
      </Header>
      {/* Header End */}
      {/* Section Start */}
      <m.section className="overflow-hidden pt-[40px] pb-[20px] lg:pt-[30px] lg:pb-[10px] md:pt-[20px] md:pb-[10px] sm:pt-[20px] sm:pb-[10px] relative bg-cover bg-center bg-no-repeat bg-fixed lg:bg-local" style={{ backgroundImage: 'url(/assets/img/webp/our-team-bg2.webp)' }} {...fadeIn}>
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
            data={TeamData04}
            grid="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 justify-center"
            carousel={false}
            carouselOption={{ slidesPerView: 3, spaceBetween: 30, loop: true, navigation: true, autoplay: { delay: 3000, disableOnInteraction: true }, pagination: { dynamicBullets: true, clickable: true } }} />
        </Container>
      </section>
      {/* Section Start */}

      {/* Footer Start */}
      <FooterStyle01 theme="dark" className="bg-[#262b35] text-slateblue" />
      {/* Footer End */}
    </div>
  )
}

export default OurTeamPage
