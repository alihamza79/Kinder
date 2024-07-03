import React from 'react'
import FooterMenu, { Footer } from "../../Components/Footers/Footer";
import { Container } from 'react-bootstrap'
import { Col, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import FooterData from '../../Components/Footers/FooterData'

const Footer_Data = [
  FooterData[0],
  FooterData[1],
  FooterData[4],
  FooterData[3],
];

const FooterSection = () => {
  return (
   <>
    {/* Footer Start */}
    <Footer
          className="startup-footer bg-no-repeat bg-right"
          theme="light"
          style={{
            backgroundImage:
              "url(/assets/img/webp/home-startup-footer-down-bg.webp)",
          }}
        >
          <Container fluid className="xs:opacity-0 xs:hidden">
            <Row>
              <Col
                className="h-[65px] lg:h-[30px] bg-top bg-no-repeat"
                style={{
                  backgroundImage:
                    "url(/assets/img/webp/home-startup-footer-shadow.webp)",
                }}
              ></Col>
            </Row>
          </Container>
          <div className="py-[4%] lg:py-[7%] md:py-[50px]">
            <Container>
              <Row md={4} className="justify-center gap-y-[25px]">
                <FooterMenu
                  data={Footer_Data}
                  md={3}
                  sm={6}
                  className="xl:px-[15px]"
                  titleClass="capitalize text-dark"
                />
              </Row>
            </Container>
          </div>
          <div className="pt-[1%] pb-[6%] border-t border-[#ffffff1a]">
            <Container>
              <Row>
                <Link
                  to="/"
                  className="col-sm-4 col-12 sm:mb-[20px] flex justify-start xs:justify-center"
                >
                  <img
                    src="/assets/img/webp/logo-green-dark.webp"
                    alt="logo"
                    width="111"
                    height="36"
                  />
                </Link>
                <p className="col-sm-8 col-12 flex justify-end items-center sm:mb-[20px] xs:text-center xs:justify-center mb-0">
                  © {new Date().getFullYear()} Kinder- und Jugendarztpraxis is Proudly Powered by&nbsp;
                  <a
                    aria-label="ThemeZaa link"
                    className="text-darkgray font-sans underline underline-offset-4 font-medium text-base inline-block hover:text-basecolor"
                    href="https://www.syntax-ai.tech/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    SYNTAX
                  </a>
                </p>
              </Row>
            </Container>
          </div>
        </Footer>
        {/* Footer End */}
   </>
  )
}

export default FooterSection