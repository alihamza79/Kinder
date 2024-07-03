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
import Tab05 from '../../Components/Tab/Tab05';
import HeroIconWithText from '../../Components/IconWithText/HeroIconWithText';
import IconWithText from '../../Components/IconWithText/IconWithText';
import FooterSection from '../Footer/FooterSection';
import HeaderSection from '../Header/HeaderSection';

const Vertretung = () => {
    const TabData06 = [
        {
          tabTitle: 'December 2023',
          month: 'December',
          tabicons: '',
          activities: [
            {
              time: '19.12.23',
              img: 'https://via.placeholder.com/197x197',
              title: 'Alter Postplatz 13',
              content: '71332 Waiblingen\nTel: 01751/53453',
              author: 'Dres.med Weimann/Horlacher/Besuch'
            },
            {
              time: '19.12.23',
              img: 'https://via.placeholder.com/197x197',
              title: 'Ohmstraße 16/1',
              content: '70736 Fellbach\nTel: 0711/587555',
              author: 'Dr. med. Ruth Adam'
            },
            {
              time: '19.12.23',
              img: 'https://via.placeholder.com/197x197',
              title: 'Marktpl. 10',
              content: '73650 Winterbach\nTel: 07181/977880',
              author: 'Drs.Klopp/Lorenz/Intelmann/Onnen'
            },
            {
              time: '23.12.23 - 26.12.23',
              img: 'https://via.placeholder.com/197x197',
              title: 'Am Jakobsweg 1',
              content: '71364 Winnenden\nTel: 0180/6073614',
              author: 'Kinderärztliche Notdienst in Winnenden'
            },
            {
              time: '27.12.23',
              img: 'https://via.placeholder.com/197x197',
              title: 'Alter Postplatz 13',
              content: '71332 Waiblingen\nTel: 01751/53453',
              author: 'Dres.med Weimann/Horlacher/Besuch'
            },
            {
              time: '28.12.23',
              img: 'https://via.placeholder.com/197x197',
              title: 'Strümpfelbacherstr. 29',
              content: '71384 Weinstadt\nTel: 07151/64949',
              author: 'Dr.med.Volker Kemmerich'
            },
            {
              time: '29.12.23',
              img: 'https://via.placeholder.com/197x197',
              title: 'Alter Postplatz 13',
              content: '71332 Waiblingen\nTel: 01751/53453',
              author: 'Dres.med Weimann/Horlacher/Besuch'
            },
            {
              time: '30.12.23 - 31.12.23',
              img: 'https://via.placeholder.com/197x197',
              title: 'Am Jakobsweg 1',
              content: '71364 Winnenden\nTel: 0180/6073614',
              author: 'Kinderärztliche Notdienst in Winnenden'
            },
          ]
        },
        {
          tabTitle: 'January 2024',
          month: 'January',
          tabicons: '',
          activities: [
            {
              time: '01.01.24',
              img: 'https://via.placeholder.com/197x197',
              title: 'Am Jakobsweg 1',
              content: '71364 Winnenden\nTel: 0180/6073614',
              author: 'Kinderärztliche Notdienst in Winnenden'
            },
            {
              time: '03.01.24',
              img: 'https://via.placeholder.com/197x197',
              title: 'Alter Postplatz 13',
              content: '71332 Waiblingen\nTel: 01751/53453',
              author: 'Dres.med Weimann/Horlacher/Besuch'
            },
            {
              time: '04.01.24',
              img: 'https://via.placeholder.com/197x197',
              title: 'Strümpfelbacherstr. 29',
              content: '71384 Weinstadt\nTel: 07151/64949',
              author: 'Dr.med.Volker Kemmerich'
            },
            {
              time: '04.01.24',
              img: 'https://via.placeholder.com/197x197',
              title: 'Lange Str. 3',
              content: '71332 Waiblingen\nTel: 07151/18218',
              author: 'Dr.med.Stefan Klimmeck'
            },
            {
              time: '05.01.24',
              img: 'https://via.placeholder.com/197x197',
              title: 'Lange Str. 3',
              content: '71332 Waiblingen\nTel: 07151/18218',
              author: 'Dr.med.Stefan Klimmeck'
            },
            {
              time: '06.01.24 - 07.01.24',
              img: 'https://via.placeholder.com/197x197',
              title: 'Am Jakobsweg 1',
              content: '71364 Winnenden\nTel: 0180/6073614',
              author: 'Kinderärztliche Notdienst in Winnenden'
            },
          ]
        },
        {
          tabTitle: 'February 2024',
          month: 'February',
          tabicons: '',
          activities: [
            {
              time: '15.02.24 - 16.02.24',
              img: 'https://via.placeholder.com/197x197',
              title: 'Alter Postplatz 13',
              content: '71332 Waiblingen\nTel: 01751/53453',
              author: 'Dres.med Weimann/Horlacher/Besuch'
            },
            {
              time: '15.02.24 - 16.02.24',
              img: 'https://via.placeholder.com/197x197',
              title: 'Marktpl. 10',
              content: '73650 Winterbach\nTel: 07181/977880',
              author: 'Drs.Klopp/Lorenz/Intelmann/Onnen'
            },
            {
              time: '15.02.24 - 16.02.24',
              img: 'https://via.placeholder.com/197x197',
              title: 'Strümpfelbacherstr. 29',
              content: '71384 Weinstadt\nTel: 07151/64949',
              author: 'Dr.med.Volker Kemmerich'
            },
          ]
        }
      ];

      const iconWithTextData = [
        {
          icon: "line-icon-Cursor-Click2 text-[#27ae60]",
          title: "NOTFALL",
          content: "In lebensbedrohlichen Notfällen, insbesondere bei Bewusstlosigkeit, Krampfanfall, starker Blutung, Atemnot oder Vergiftung, rufen Sie bitte den Rettungsdienst unter der Rufnummer 112 an. Die Vergiftungszentrale in Berlin ist unter der \n Tel. 030 -19240 erreichbar.",
        },
        {
          icon: "line-icon-Bakelite text-[#27ae60]",
          title: "NOTDIENST",
          content: "Auf Betreiben der Kassenärztlichen Vereinigung Baden-Württemberg wurde der wohnortnahe Notdienst für Kinder und Jugendliche ins Klinikum Winnenden, Am Jakobsweg 1, 71364 Winnenden, Tel: 01806- 073614 verlegt. \n Montag-Freitag ab 18.00- 08.00 Uhr Samstag, Sonn- und Feiertag rund um die Uhr \n Patienten können ohne Voranmeldung in die Klinik kommen, dort ist ständig ein Kinder- und Jugendarzt dienstbereit.",
        },
        {
          icon: "line-icon-Boy text-[#27ae60]",
          title: "OPENING HOURS",
          content: "Vormittags \n Montags bis freitags:  08 - 11 Uhr \n Nachmittags \n  Montags, mittwochs, freitags 14 -16 Uhr \n Contact Info \n Telefonnummer: 07151 - 21080 \n Email an:  praxis@kjk-wn.de",
        },
      ];
      
      const SocialIconsData = [
        {
          color: "#3b5998",
          link: "https://www.facebook.com/",
          icon: "fab fa-facebook-f",
        },
        {
          color: "#ea4c89",
          link: "https://dribbble.com/",
          icon: "fab fa-dribbble",
        },
        {
          color: "#00aced",
          link: "https://twitter.com/",
          icon: "fab fa-twitter",
        },
        {
          color: "#fe1f49",
          link: "https://www.instagram.com/",
          icon: "fab fa-instagram",
        },
        {
          color: "#0077b5",
          link: "https://www.linkedin.com/",
          icon: "fab fa-linkedin-in",
        },
      ];
      

    return (
        <div>
            {/* Header Start */}
            <HeaderSection  theme="light" /> 
            {/* Header End */}
            <SideButtons />

         

            {/* Weekly Respsentation */}
            <Container>
            {/* <m.section className="py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] md:px-0 sm:px-0 xs:px-0 bg-lightgray" {...fadeIn}> */}
            <div className="mb-[105px] md:mb-[70px] sm:mb-[50px] m-10 pt-[160px] lg:pt-[120px] md:pt-[95px] sm:pt-[80px] xs:pt-[50px] md:px-0 sm:px-0 xs:px-0" {...fadeIn}>
            <Row className="justify-center">
                        <Col md={12} className="text-center mb-[6%]">
                            <h6 className="font-serif text-darkgray font-medium">Weekly Representation</h6>
                        </Col>
                    </Row>
            <Row className="justify-center">
              <Col xs={12} sm={9} lg={12} md={12}>
                <IconWithText
                  grid="row-cols-1 row-cols-lg-2 row-cols-md-2 justify-center gap-y-10 z-10  relative"
                  className="rounded-[4px] flex "
                  theme="icon-with-text-02"
                  data={iconWithTextData}
                  
                />
              </Col>
            </Row>
        </div>
        {/* </m.section> */}
        </Container>


            {/* Monthly Representation */}
            <m.section className="py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] md:px-0 sm:px-0 xs:px-0 " {...fadeIn}>
                <Container>
                    <Row className="justify-center">
                        <Col md={12} className="text-center mb-[6%]">
                            <h6 className="font-serif text-darkgray font-medium">Monthly Representation</h6>
                        </Col>
                    </Row>
                    <Tab06 data={TabData06} />
                </Container>
            </m.section>

            {/* Tab Style 5 */}
            {/* <m.section className="py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] md:px-0 sm:px-0 xs:px-0 bg-gray"  {...fadeIn}>
            <Tab05 fluid />
            </m.section>    */}

            {/* Footer Start */}
            <FooterSection/>
            {/* Footer End */}
        </div>
    );
}

export default Vertretung;
