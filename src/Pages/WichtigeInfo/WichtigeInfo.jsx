import React from 'react'
// Libraries
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap'
import { m } from "framer-motion"
import { Link } from 'react-router-dom'

// Components
import { fadeIn } from '../../Functions/GlobalAnimations'
import Accordions from '../../Components/Accordion/SimpleAccordion'

// Data
import  {AccordionData, AccordionData02, AccordionData05 } from '../../Components/Accordion/AccordionData'
import SimpleAccordion from '../../Components/Accordion/SimpleAccordion'


const WichtigeInfo = () => {
  return <>
   {/* Accordion style 03 ( Light ) start */}
                        <m.section className="py-20 bg-lightgray">
                            <Container>
                                <Row className="justify-center">
                                    <Col lg={6} md={10}>
                                        <SimpleAccordion theme="accordion-style-03" className="" animation={fadeIn} />
                                    </Col>
                                </Row>
                            </Container>
                        </m.section>
                    {/* Accordion style 03 ( Light ) end */}
  
    </>
  
}

export default WichtigeInfo