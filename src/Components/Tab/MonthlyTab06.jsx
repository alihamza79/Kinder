import React, { memo } from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import PropTypes from 'prop-types';

const MonthlyTab06 = (props) => {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey={0}>
            <Row className="tab-style-06 justify-center">
                <Col lg={12}>
                    <Nav className="justify-center border-b border-solid">
                        {
                            props.data.map((item, i) => {
                                return (
                                    <Nav.Item key={i}>
                                        <Nav.Link eventKey={i} className="tab-title border-b-[3px] border-solid border-transparent px-[20px] mx-[20px] text-darkgray font-serif text-center m-0 font-semibold cursor-pointer md:top-0 md:py-[40px] md:pb-[22px] lg:pt-0 lg:px-[40px] lg:pb-[22px] md:pt-0 md:px-[20px] sm:py-[15px] sm:px-[20px]">
                                            {item.tabTitle}
                                        </Nav.Link>
                                    </Nav.Item>
                                );
                            })
                        }
                    </Nav>
                </Col>
                <Col lg={12}>
                    <Tab.Content>
                        {
                            props.data.map((item, i) => {
                                return (
                                    <Tab.Pane eventKey={i} key={i}>
                                        {
                                            item.activities.map((activity, j) => {
                                                return (
                                                    <div key={j} className='panel flex justify-center items-center border-b border-solid py-[35px] px-[70px] lg:py-[20px] lg:px-[40px] lg:text-[15px] lg:font-sans md:px-[20px] sm:block'>
                                                        <div className='panel-heading lg:w-[170px] md:w-[135px] sm:w-full sm:text-center'>
                                                            {activity.time && <span className='panel-time '><i className="feather-clock mr-[10px]"></i>{activity.time}</span>}
                                                        </div>
                                                        <div className='feature-box-icon py-[7px] md:items-center flex sm:pt-[10px] sm:px-0 sm:pb-[7px]'>
                                                            {activity.img && <img src={activity.img} alt="" className="md:h-[70px] md:w-[70px]" />}
                                                            <div className='feature-box-content'>
                                                                {activity.title && <span className="font-medium mb-[5px] text-darkgray inline-block pl-[40px] md:p-0">{activity.title}</span>}
                                                                {activity.content && <p className="mb-0 w-[65%]">{activity.content}</p>}
                                                            </div>
                                                        </div>
                                                        {
                                                            activity.author && (
                                                                <span className='panel-speaker'>
                                                                    <i className="feather-user"></i>
                                                                    {activity.author}
                                                                </span>
                                                            )
                                                        }
                                                    </div>
                                                );
                                            })
                                        }
                                    </Tab.Pane>
                                );
                            })
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
                })
            ).isRequired,
        })
    ).isRequired,
};

export default memo(MonthlyTab06);
