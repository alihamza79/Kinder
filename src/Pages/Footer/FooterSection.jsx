import React from 'react'
import FooterMenu, { Footer } from "../../Components/Footers/Footer";
import { Container } from 'react-bootstrap'
import { Col, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import FooterData from '../../Components/Footers/FooterData'
import FooterStyle04 from '../../Components/Footers/FooterStyle04'
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
    <FooterStyle04
          className="startup-footer bg-no-repeat bg-right"
          theme="light"
          style={{
            backgroundImage:
              "url(/assets/img/webp/home-startup-footer-down-bg.webp)",
          }}
        >
          
          
        </FooterStyle04>
        {/* Footer End */}
   </>
  )
}

export default FooterSection