import React from 'react'

// Libraries
import { Col, Container, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Parallax } from "react-scroll-parallax";
import { m } from "framer-motion";
import { Link as ScrollTo } from "react-scroll"

// Components
import { Header, HeaderCart, HeaderLanguage, HeaderNav, Menu, SearchBar } from '../../Components/Header/Header'
import PortfolioColorful from '../../Components/Portfolio/PortfolioColorful'
import FooterStyle01 from '../../Components/Footers/FooterStyle01'
import SideButtons from "../../Components/SideButtons";
import { TextAnime } from '../../Components/FancyText/FancyText'
import { fadeIn } from "../../Functions/GlobalAnimations";

// Data
const data = [
    {
        icon: "feather-life-buoy",
        title: "Digital branding"
    },
    {
        icon: "feather-briefcase",
        title: "BRAND STRATEGY"
    },
    {
        icon: "feather-globe",
        title: "WEBSITE DESIGNING"
    },
    {
        icon: "feather-shopping-bag",
        title: "ECOMMERCE TOOL"
    }
]

const portfolioColorfulData = [
    {
        title: "Mongolish",
        img: "https://via.placeholder.com/1000x817",
        category: [""],
        subtitle: "Branding",
        link: "/portfolio/single-project-page-01",
        double_col: true
    },
    {
        title: "Masscoating",
        img: "https://via.placeholder.com/800x653",
        category: [""],
        subtitle: "Photography",
        link: "/portfolio/single-project-page-02"
    },
    {
        title: "Cortifiel",
        img: "https://via.placeholder.com/800x653",
        category: [""],
        subtitle: "Brochure",
        link: "/portfolio/single-project-page-03"
    },
    {
        title: "Everyday",
        img: "https://via.placeholder.com/1000x817",
        category: [""],
        subtitle: "Brochure",
        link: "/portfolio/single-project-page-04",
        double_col: true
    },
    {
        title: "Scandinavian",
        img: "https://via.placeholder.com/800x653",
        category: [""],
        subtitle: "Branding",
        link: "/portfolio/single-project-page-05"
    },
    {
        title: "The Simplest",
        img: "https://via.placeholder.com/800x653",
        category: [""],
        subtitle: "Website",
        link: "/portfolio/single-project-page-01"
    }
]

const DarkHeaderPage = (props) => {
    return (
        <>
            {/* Header Start */}
            <Header topSpace={{ desktop: true }} type="reverse-scroll">
                <HeaderNav fluid="fluid" theme="dark" bg="black" menu="light" className="px-[35px] py-[0px] md:px-0" containerClass="sm:px-0">
                    <Col className="col-auto col-sm-6 col-lg-2 me-auto ps-lg-0">
                        <Link aria-label="header logo" className="flex items-center" to="/">
                            <Navbar.Brand className="inline-block p-0 m-0">
                                <img className="default-logo" width="111" height="36" loading="lazy" src='/assets/img/webp/logo-white.webp' data-rjs='/assets/img/webp/logo-white@2x.webp' alt='logo' />
                                <img className="alt-logo" width="111" height="36" loading="lazy" src='/assets/img/webp/logo-white.webp' data-rjs='/assets/img/webp/logo-white@2x.webp' alt='logo' />
                                <img className="mobile-logo" width="111" height="36" loading="lazy" src='/assets/img/webp/logo-white.webp' data-rjs='/assets/img/webp/logo-white@2x.webp' alt='logo' />
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
                    <Navbar.Collapse className="col-auto p-0 justify-end">
                        <Menu {...props} />
                    </Navbar.Collapse>
                    <Col className="col-auto text-right pe-0">
                        <SearchBar className="xs:pl-[15px] pr-0" />
                        <HeaderLanguage className="xs:pl-[15px]" />
                        <HeaderCart className="xs:pl-[15px]" style={{ "--base-color": "#0038e3" }} />
                    </Col>
                </HeaderNav>
            </Header>
            {/* Header End */}
            <SideButtons />
            {/* Parallax Section Start */}
            <div className="full-screen relative overflow-hidden md:h-[650px] sm:h-[400px]">
                <Parallax className="lg-no-parallax bg-cover bg-right cover-background absolute top-[0px] left-0 w-full h-[100vh] sm:h-[50vh] md:top-[-60px]" translateY={[-40, 40]} style={{ backgroundImage: `url(https://via.placeholder.com/1920x1080)` }}></Parallax>
                <div style={{ backgroundImage: "url(https://via.placeholder.com/1920x1081)" }} className="absolute left-0 top-0 bg-no-repeat bg-center bg-cover w-full h-full overflow-hidden"></div>
                <div className="flex items-center h-full">
                    <Container className="relative">
                        <Row className="items-center">
                            <Col lg={5} md={6} sm={7} className="py-[8rem] md:flex md:items-center">
                                <h1 className="font-serif font-semibold text-[100px] leading-[95px] tracking-[-4px] text-white mb-0 lg:text-[90px] lg:leading-[90px] md:text-[70px] md:leading-[65px] sm:text-[45px] sm:leading-[43px] sm:tracking-[-.5px] xs:w-[65%]">We are creative agency</h1>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="scroll-down-bottom absolute bottom-[30px] w-auto left-0 right-0 z-[1]">
                    <ScrollTo to="about" offset={0} delay={0} spy={true} smooth={true} duration={800} className="section-link block w-[2px] h-[35px] bg-white mx-auto right-0 left-0 absolute hover:text-white">
                        <span className="scroll-down-text absolute font-serif font-semibold tracking-[-.5px] bottom-[25px] w-[100px] h-auto mb-[5px] -rotate-90 origin-[0]">scroll</span>
                    </ScrollTo>
                </div>
            </div>
            {/* Parallax Section End */}

            {/* Section Start */}
            <section id="about" className="py-[160px] bg-darkgray overflow-hidden lg:py-[120px] md:py-[90px] sm:py-[80px] xs:py-[50px]">
                <Container>
                    <Row>
                        <Col xl={4} lg={5} md={6}>
                            <m.h4 className="font-serif font-semibold text-white -tracking-[1px] sm:text-center xxs:mb-[45px]" {...fadeIn}>
                                <span className="block p-0 sm:text-center tracking-[-1px]">A creative agency specialized in web</span>
                                <TextAnime
                                    duration={3000}
                                    color="#fff"
                                    className="fancy-border-bottom text-left sm:text-center font-semibold my-0 mx-auto"
                                    animation="slide"
                                    data={["strategy creation", "customize tools", "generated revenue"]}
                                />
                            </m.h4>
                        </Col>
                        <m.div className="sm:text-center col-xl-5 col-md-6 offset-xl-2 offset-lg-1" {...{ ...fadeIn, transition: { delay: 0.5 } }}>
                            <span className="font-serif font-semibold text-white uppercase block mb-[15px]">About litho web agency</span>
                            <p className="text-xmd w-[95%] leading-[36px] md:w-full">With years of experience in the website design and development industry pride ourselves on creating unique, creative and quality designs that are developed upon the latest modern coding and developing techniques.</p>
                        </m.div>
                    </Row>
                    <Row className="row-cols-1 row-cols-lg-4 row-cols-sm-2 mt-36 justify-center md:mt-24 landscape:md:mt-12 xs:mt-[65px] gap-y-10">
                        {
                            data.map((item, i) => {
                                return (
                                    <m.div key={i} {...{ ...fadeIn, transition: { delay: 0.2 * i } }}>
                                        <div className="flex justify-center items-center h-full">
                                            <i className={`${item.icon} align-middle text-[28px] text-white mr-[15px]`}></i>
                                            <span className="font-serif font-semibold uppercase">{item.title}</span>
                                        </div>
                                    </m.div>
                                )
                            })
                        }
                    </Row>
                </Container>
            </section>
            {/* Section End */}

            {/* Section Start */}
            <section className="bg-darkgray">
                <Container fluid>
                    <Row>
                        <Col className="sm:px-0">
                            <PortfolioColorful
                                className="m-0"
                                overlay="#232323e6"
                                grid="grid grid-4col xl-grid-4col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large"
                                data={portfolioColorfulData}
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* Section End */}

            {/* Footer Start */}
            <FooterStyle01 theme="dark" className="bg-darkgray text-[#828282]" />
            {/* Footer End */}
        </>
    )
}

export default DarkHeaderPage