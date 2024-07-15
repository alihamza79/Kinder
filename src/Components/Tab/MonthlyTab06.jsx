import React, { memo } from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import PropTypes from "prop-types";
//icons
import location from "../../Assets/img/icons/location.svg";
import person from "../../Assets/img/icons/person.svg";
import calendar_01 from "../../Assets/img/icons/calender_01.svg";

const MonthlyTab06 = (props) => {
  // CSS styles as template literals
  const styles = `
        .nav-item-tab-title {
            width: 8%;
        
            @media (max-width: 576px) {
                width: 15%;
                border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            }
        
            &:hover {
                .nav-link {
                    border-color: var(--base-color, #0038e3);
                }
            }
        }
        
        .nav-link-tab-title {
            &:hover {
                color: initial;
            }
        
            &.active {
                border-color: var(--base-color, #0038e3);
                color: #232323 !important;
            }
        }

        .icon {
            width: 32px; /* Increased width */
            height: 32px; /* Increased height */
            margin-right: 10px; /* Space between icon and text */
            display: inline-block;
            vertical-align: middle; /* Vertical alignment */
        }

        @media (max-width: 576px) {
            .icon {
                width: 24px; /* Smaller width on mobile */
                height: 24px; /* Smaller height on mobile */
            }
        }

        .panel-time,
        .panel-speaker {
            display: flex;
            align-items: center; /* Align icon and text vertically */
        }

        .location-icon {
            width: 32px; /* Increased width */
            height: 32px; /* Increased height */
            margin-right: 10px;
            display: inline-block;
            vertical-align: middle; /* Vertical alignment */
        }

        @media (max-width: 576px) {
            .location-icon {
                width: 24px; /* Smaller width on mobile */
                height: 24px; /* Smaller height on mobile */
            }
        }

        .feature-box-content {
            display: flex;
            flex-direction: column;
            justify-content: center; /* Center vertically */
        }

        .panel-speaker span {
            vertical-align: middle; /* Vertical alignment for text */
        }

        @media (max-width: 576px) {
            .panel {
                margin-bottom: 20px; /* Add bottom margin on mobile devices */
            }
        }
    `;

  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey={0}>
      <style>{styles}</style> {/* Embedding CSS styles */}
      <Nav className="justify-center border-b border-solid">
        {props.data.map((item, i) => (
          <Nav.Item key={i} className="nav-item-tab-title">
            <Nav.Link
              eventKey={i}
              className="nav-link-tab-title tab-title border-b-[3px] border-solid border-transparent px-[20px] mx-[20px] text-darkgray font-serif text-center m-0 font-semibold cursor-pointer md:top-0 md:py-[40px] md:pb-[22px] lg:pt-0 lg:px-[10px] lg:pb-[22px] md:pt-0 md:px-[0px] sm:py-[15px] sm:px-[0px]"
            >
              {item.tabTitle}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
      <Row className="tab-style-06 justify-center">
        <Col lg={12}>
          <Tab.Content>
            {props.data.map((item, i) => (
              <Tab.Pane eventKey={i} key={i}>
                {item.activities.map((activity, j) => (
                  <div
                    key={j}
                    className="panel mt-10 flex justify-center items-center border-b border-solid py-[35px] px-[70px] lg:py-[20px] lg:px-[40px] lg:text-[15px] lg:font-sans md:px-[20px] sm:block"
                  >
                    <div className="pl-[20px] mr-[75px] panel-heading lg:w-[170px] md:w-[135px] sm:w-full sm:text-center">
                      {activity.time && (
                        <span className="panel-time">
                          <img src={calendar_01} alt="calendar icon" className="icon" />
                          {activity.time}
                        </span>
                      )}
                    </div>
                    <div className="pb-10"></div>
                    <div className="flex flex-col">
                      {activity.representatives.map((rep, k) => (
                        <div key={k}>
                          <div className="flex flex-row items-center"> {/* Added items-center */}
                            <img src={location} alt="location icon" className="icon location-icon" />
                            <div className="sm:text-right feature-box-icon py-[7px] md:items-center flex sm:pt-[10px] sm:px-0 sm:pb-[7px]">
                              <div className="text-center feature-box-content">
                                <div className="w-[250px] mb-[20px] text-left">
                                  <span className="font-medium mb-[0px] text-darkgray inline-block pl-[40px] md:p-0">
                                    {rep.hospital}
                                  </span>
                                  <p className="mb-0 w-[65%]">{rep.address}</p>
                                  <p className="mb-0 w-[65%]">
                                    {rep.telephoneNumber}
                                  </p>
                                </div>
                              </div>
                            </div>
                            {/* For large and medium devices */}
                            <div className="sm:hidden">
                              <span className="block panel-speaker mt-[8px]">
                                <img src={person} alt="person icon" className="icon" />
                                <span>{rep.doctors}</span>
                              </span>
                            </div>
                          </div>
                          {/* For small devices */}
                          <div className="sm:block hidden sm:text-left">
                            <span className="panel-speaker lg:mt-[8px] sm:mb-[40px] sm:mt-[-20px]">
                              <img src={person} alt="person icon" className="icon" />
                              <span>{rep.doctors}</span>
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

MonthlyTab06.defaultProps = {
  data: [],
};

MonthlyTab06.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      tabTitle: PropTypes.string.isRequired,
      month: PropTypes.string,
      activities: PropTypes.arrayOf(
        PropTypes.shape({
          time: PropTypes.string.isRequired,
          img: PropTypes.string,
          title: PropTypes.string.isRequired,
          content: PropTypes.string.isRequired,
          author: PropTypes.string.isRequired,
          representatives: PropTypes.arrayOf(
            PropTypes.shape({
              hospital: PropTypes.string.isRequired,
              address: PropTypes.string.isRequired,
              telephoneNumber: PropTypes.string.isRequired,
              doctors: PropTypes.string.isRequired,
            })
          ).isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default memo(MonthlyTab06);
