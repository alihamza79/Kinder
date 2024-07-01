import React from 'react';
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';


// Libraries
// // import { Col, Container, Row, } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
// import { m } from 'framer-motion'

// Components
import { fadeIn } from '../../Functions/GlobalAnimations';
import Tab06 from "../../Components/Tab/Tab06";
import { Header, HeaderCart, HeaderLanguage, HeaderNav, Menu, SearchBar } from "../../Components/Header/Header";
import FooterStyle01 from '../../Components/Footers/FooterStyle01';
import SideButtons from "../../Components/SideButtons";

const Vertretung = () => {
    const TabData06 = [
        // Your tab data here
        {
            tabTitle: 'MONDAY',
            day: "01 DAY",
            tabicons: "",
            activities: [
                {
                    time: '09:00 - 10:00',
                    img: 'https://via.placeholder.com/197x197',
                    title: 'Cultures of creativity',
                    content: 'Lorem ipsum is simply dummy text of the and typesetting industry lorem ipsum.',
                    author: 'By Edward Watson'
                },
                {
                    time: '10:00 - 12:30',
                    img: 'https://via.placeholder.com/197x197',
                    title: 'Reinventing experiences',
                    content: 'Lorem ipsum is simply dummy text of the and typesetting industry lorem ipsum.',
                    author: 'By Edward Watson'
                },
                {
                    time: '12:30 - 05:30',
                    img: 'https://via.placeholder.com/197x197',
                    title: 'Human centered design',
                    content: 'Lorem ipsum is simply dummy text of the and typesetting industry lorem ipsum.',
                    author: 'By Edward Watson'
                },
            ]
        },
        {
            tabTitle: 'TUESDAY',
            day: "02 DAY",
            tabicons: "",
            activities: [
                {
                    time: '09:00 - 10:00',
                    img: 'https://via.placeholder.com/197x197',
                    title: 'Cultures of creativity',
                    content: 'Lorem ipsum is simply dummy text of the and typesetting industry lorem ipsum.',
                    author: 'By Edward Watson'
                },
                {
                    time: '10:00 - 12:30',
                    img: 'https://via.placeholder.com/197x197',
                    title: 'Reinventing experiences',
                    content: 'Lorem ipsum is simply dummy text of the and typesetting industry lorem ipsum.',
                    author: 'By Edward Watson'
                },
                {
                    time: '12:30 - 05:30',
                    img: 'https://via.placeholder.com/197x197',
                    title: 'Human centered design',
                    content: 'Lorem ipsum is simply dummy text of the and typesetting industry lorem ipsum.',
                    author: 'By Edward Watson'
                },
            ]
        },
        // More days can be added following the same structure
    ];

    return (
        <div>
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
                    <Col className="col-auto text-right pe-0">
                        <SearchBar className="pr-0 xs:pl-[15px]" />
                        <HeaderLanguage className="xs:pl-[15px]" />
                        <HeaderCart className="xs:pl-[15px]" style={{ "--base-color": "#0038e3" }} />
                    </Col>
                </HeaderNav>
            </Header>
            {/* Header End */}
            <SideButtons />

            {/* Main Section with Tabs */}
            <m.section className="py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] md:px-0 sm:px-0 xs:px-0 bg-lightgray" {...fadeIn}>
                <Container>
                    <Row className="justify-center">
                        <Col md={12} className="text-center mb-[6%]">
                            <h6 className="font-serif text-darkgray font-medium">Tab style 06</h6>
                        </Col>
                    </Row>
                    <Tab06 data={TabData06} />
                </Container>
            </m.section>

            {/* Footer Start */}
            <FooterStyle01 theme="dark" className="bg-[#262b35] text-slateblue" />
            {/* Footer End */}
        </div>
    );
}

export default Vertretung;
