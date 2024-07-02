import React from 'react'
// Libraries
import { Col, Container, Row, Navbar } from 'react-bootstrap'
import { m } from "framer-motion"
import { Link } from 'react-router-dom'

// Components
import { fadeIn } from '../../Functions/GlobalAnimations'
import { Header, HeaderCart, HeaderLanguage, HeaderNav, Menu, SearchBar } from "../../Components/Header/Header";
import FooterStyle01 from '../../Components/Footers/FooterStyle01';
import SideButtons from "../../Components/SideButtons";


// Data
import SimpleAccordion from '../../Components/Accordion/SimpleAccordion'
import MiniVersionPage from '../PageTitle/MiniVersionPage'
import Accordion from '../../Components/Accordion/Accordion'
import { data } from 'isotope-layout'



const WichtigeInfo = () => {

    const Data = [
        {
            title: "1",
            content: "Lorem ipsum is simply dummy text of the printing type setting and industry. Lorem ipsum has been the industry's standard dummy."
        },
        {
            title: "2- Lets collaborate and make an impact business",
            content: "Lorem ipsum is simply dummy text of the printing type setting and industry. Lorem ipsum has been the industry's standard dummy."
        },
        {
            title: "3- A satisfied customer is the best business strats",
            content: "Lorem ipsum is simply dummy text of the printing type setting and industry. Lorem ipsum has been the industry's standard dummy."
        },
        {
            title: "Common PayPal and credit card issues",
            content: "Lorem ipsum is simply dummy text of the printing type setting and industry. Lorem ipsum has been the industry's standard dummy."
        },
        {
            title: "Lets collaborate and make an impact business",
            content: "Lorem ipsum is simply dummy text of the printing type setting and industry. Lorem ipsum has been the industry's standard dummy."
        },
        {
            title: "A satisfied customer is the best business strats",
            content: "Lorem ipsum is simply dummy text of the printing type setting and industry. Lorem ipsum has been the industry's standard dummy."
        },
        
    ]

  return <>
 {/* Header Start */}
 <Header topSpace={{ desktop: true }} type="reverse-scroll">
                <HeaderNav theme="light" expand="lg" menu="light" className="py-[0px] lg:px-[15px] md:px-0" containerClass="sm:px-0">
                    <Col className="col-auto col-sm-6 col-lg-2 me-auto ps-lg-0">
                        <Link aria-label="header logo" className="flex items-center" to="/">
                            <Navbar.Brand className="inline-block p-0 m-0">
                                <img className="default-logo" width="111" height="36" loading="lazy" src='/assets/img/webp/logo-fast-blue-black.webp' alt='logo' />
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
                        <Menu />
                    </Navbar.Collapse>
                   
                </HeaderNav>
            </Header>
            {/* Header End */}

   {/* Page Title */}
   <MiniVersionPage className="ml-6" title="WichtigeInfo"/>


   {/* Accordion style 03 ( Light ) start */}
                        <m.section className="py-20 ">
                            <Container>
                                {/* <Row className="justify-center"> */}
                                    <Col lg={12} md={10}>
                                        <Accordion theme="accordion-style-03" className="" animation={fadeIn} data={Data} />
                                    </Col>
                                {/* </Row> */}
                            </Container>
                        </m.section>
                    {/* Accordion style 03 ( Light ) end */}
  

   {/* Footer Start */}
   <FooterStyle01 theme="dark" className="bg-[#262b35] text-slateblue" />
            {/* Footer End */}
    </>
  
}

export default WichtigeInfo