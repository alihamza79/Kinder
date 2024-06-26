import React from 'react'

// Libraries
import { Col, Container, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// Components
import Header, { HeaderNav, Menu, SearchBar } from '../../../Components/Header/Header'
import Buttons from '../../../Components/Button/Buttons'
import PortfolioScattered from '../../../Components/Portfolio/PortfolioScattered'
import FooterStyle01 from '../../../Components/Footers/FooterStyle01'
import SideButtons from "../../../Components/SideButtons";

// Data
import { portfolioScatteredData } from '../../../Components/Portfolio/PortfolioData'

const HeaderAlwaysFixedPage = (props) => {
    return (
        <>
            {/* Header Start */}
            <Header topSpace={{ desktop: true }} type="always-fixed">
                <HeaderNav fluid="fluid" theme="white" bg="white" className="px-[35px] py-[0px] md:px-0 md:py-[20px]">
                    <Col className="col-auto col-sm-6 col-lg-2 me-auto ps-lg-0">
                        <Link aria-label="header home link" className="flex items-center" to="/">
                            <Navbar.Brand className="inline-block p-0 m-0">
                                <img className="default-logo" width="111" height="36" loading="lazy" src='/assets/img/webp/logo-fast-blue-black.webp' data-rjs='/assets/img/webp/logo-fast-blue-black@2x.webp' alt='logo' />
                                <img className="alt-logo" width="111" height="36" loading="lazy" src='/assets/img/webp/logo-fast-blue-black.webp' data-rjs='/assets/img/webp/logo-fast-blue-black@2x.webp' alt='logo' />
                                <img className="mobile-logo" width="111" height="36" loading="lazy" src='/assets/img/webp/logo-fast-blue-black.webp' data-rjs='/assets/img/webp/logo-fast-blue-black@2x.webp' alt='logo' />
                            </Navbar.Brand>
                        </Link>
                    </Col>
                    <Navbar.Toggle className="order-last md:px-[25px] md:ml-[12px]">
                        <span className="navbar-toggler-line"></span>
                        <span className="navbar-toggler-line"></span>
                        <span className="navbar-toggler-line"></span>
                        <span className="navbar-toggler-line"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse className="col-auto menu-order px-lg-0 justify-end">
                        <Menu {...props} />
                    </Navbar.Collapse>
                    <Col className="col-auto text-end pe-0 font-size-0 flex items-center !pl-0">
                        <SearchBar className="!pl-[7px]" />
                        <div className="pl-[17px] sm:hidden">
                            <Buttons target="_blank" href="https://1.envato.market/rQEmZd" ariaLabel="buy now" className="btn-fill font-medium font-serif uppercase rounded" themeColor="#0038e3" color="#fff" size="xs" title="buy now" />
                        </div>
                    </Col>
                </HeaderNav>
            </Header>
            {/* Header End */}
            <SideButtons />
            {/* Section start */}
            <section className="overflow-visible cover-background" style={{ backgroundImage: `url("https://via.placeholder.com/1920x1080")` }}>
                <Container>
                    <Row className="full-screen md:h-[650px] sm:h-[550px] xs:h-[450px]">
                        <Col md={5} sm={7} className="flex flex-col py-32">
                            <h1 className="font-serif leading-[120px] font-semibold tracking-[-10px] mb-0 mt-auto text-darkgray text-[11rem] md:leading-[90px] md:text-[9rem] sm:leading-[70px] sm:-tracking-[5px] xs:leading-[70px]">
                                Brian <br></br>
                                <span className="text-border text-[130px] text-border-width-2px fill-transparent inline-block tracking-[-6px] lg:text-[110px] md:text-[90px] md:leading-[85px] sm:text-[65px] sm:leading-[50px] sm:-tracking-[.5px]">miller</span>
                            </h1>
                            <div className="flex font-serif items-center font-medium text-xmd text-darkgray mt-auto">
                                <span className="flex-shrink-0 h-[2px] w-[20px] bg-darkgray item-center mr-[15px]"></span>
                                <div className="grow tracking-[-.5px]">Award winner freelancer</div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* Section End */}

            {/* Section Start */}
            <section className="headeralwaysfixed-portfolio pt-[160px] lg:pt-[120px] md:pt-[95px] sm:pt-[80px] xs:pt-[50px]">
                <Container fluid className="px-[7%] mb-[3.5rem] md:px-[3%] sm:px-[15px]">
                    <PortfolioScattered
                        grid="row row-cols-1 row-cols-xl-4 row-cols-lg-2 row-cols-md-2 portfolio-scattered"
                        data={portfolioScatteredData.slice(0, 8)}
                        />
                </Container>
            </section>
            {/* Section End */}

            {/* Footer Start */}
            <FooterStyle01 theme="dark" className="bg-[#262b35] text-slateblue" />
            {/* Footer End */}
        </>
    )
}

export default HeaderAlwaysFixedPage
