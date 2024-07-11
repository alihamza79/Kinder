import React, { memo } from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import PropTypes from 'prop-types';

const MonthlyTab06 = (props) => {
    // CSS styles as template literals
    const styles = `
        .nav-item-tab-title {
            width: 8%;
        
            @media (max-width: 576px) {
                width: 100%;
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
    `;

    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey={0}>
            <style>{styles}</style> {/* Embedding CSS styles */}
            <Nav className="justify-center border-b border-solid">
                {
                    props.data.map((item, i) => (
                        <Nav.Item key={i} className="nav-item-tab-title">
                            <Nav.Link eventKey={i} className="nav-link-tab-title tab-title border-b-[3px] border-solid border-transparent px-[20px] mx-[20px] text-darkgray font-serif text-center m-0 font-semibold cursor-pointer md:top-0 md:py-[40px] md:pb-[22px] lg:pt-0 lg:px-[10px] lg:pb-[22px] md:pt-0 md:px-[0px] sm:py-[15px] sm:px-[20px]">
                                {item.tabTitle}
                            </Nav.Link>
                        </Nav.Item>
                    ))
                }
            </Nav>
            <Row className="tab-style-06 justify-center">
                <Col lg={12}>
                    <Tab.Content>
                        {
                            props.data.map((item, i) => (
                                <Tab.Pane eventKey={i} key={i}>
                                    {
                                        item.activities.map((activity, j) => (
                                            <div key={j} className='panel flex justify-center items-center border-b border-solid py-[35px] px-[70px] lg:py-[20px] lg:px-[40px] lg:text-[15px] lg:font-sans md:px-[20px] sm:block'>
                                                <div className='mr-[75px] panel-heading lg:w-[170px] md:w-[135px] sm:w-full sm:text-center'>
                                                    {activity.time && <span className='panel-time '><i className="feather-calendar mr-[10px]"></i>{activity.time}</span>}
                                                </div>
                                                <div className='flex flex-col'>
                                                    {activity.representatives.map((rep, k) => (
                                                        <div key={k} className='flex flex-row'>
                                                            <div className='feature-box-icon py-[7px] md:items-center flex sm:pt-[10px] sm:px-0 sm:pb-[7px]'>
                                                                <i className="mt-[10px] feather-map-pin md:h-[70px] md:w-[70px]"></i>
                                                                <div className='feature-box-content'>
                                                                    <div className='w-[250px] mb-[20px] '>
                                                                        <span className="font-medium mb-[5px] text-darkgray inline-block pl-[40px] md:p-0">{rep.hospital}</span>
                                                                        <p className="mb-0 w-[65%]">{rep.address}</p>
                                                                        <p className="mb-0 w-[65%]">{rep.telephoneNumber}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <span className='panel-speaker mt-[40px]'>
                                                                <i className="feather-user"></i>
                                                                <span key={k}>{rep.doctors}</span>
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))
                                    }
                                </Tab.Pane>
                            ))
                        }
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
