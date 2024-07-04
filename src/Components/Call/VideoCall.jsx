import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom'
import { Avatar1, Avatar2, Avatar3, Avatar4, Avatar5, ProfileUser, call, call01, call02, call03, callicon1, callicon2, callicon3, chaticon1, chaticon2, chaticon3, plusicon, videoicon1, videoicon2, videoicon3 } from '../imagepath'
import FeatherIcon from 'feather-icons-react/build/FeatherIcon'

const VideoCall = () => {
    return (
        <>
            <Header />
            <Sidebar id='menu-item9' id1='menu-items9' activeClassName='video-call' />
            <>
                <div className="page-wrapper">
                    <div className="content">
                        {/* Page Header */}
                        <div className="page-header">
                            <div className="row">
                                <div className="col-sm-12">
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/voice-call">App </Link></li>
                                        <li className="breadcrumb-item"><i className="fa fa-angle-right" /></li>
                                        <li className="breadcrumb-item active">Video Call</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* /Page Header */}
                        <div className="row">
                            <div className="col-xl-4 d-flex">
                                <div className="card chat-box">
                                    <div className="chat-widgets">
                                        <div className="call-all comman-space-flex">
                                            <h4>Participants<span>32</span></h4>
                                            <h5><Link to="#">Show All</Link></h5>
                                        </div>
                                        <div className="chat-user-group video-call-blk d-flex align-items-center">
                                            <div className="img-users call-user">
                                                <Link to="#"><img src={Avatar1} alt="img" /></Link>
                                            </div>
                                            <div className="chat-users chat-user-blk">
                                                <div className="user-titles ">
                                                    <h5> Me</h5>
                                                </div>
                                                <div className="chat-user-icon">
                                                    <Link to="#"><img src={videoicon1} className="me-2" alt="img" /></Link>
                                                    <Link to="#"><img src={videoicon2} alt="img" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="chat-user-group video-call-blk d-flex align-items-center">
                                            <div className="img-users call-user">
                                                <Link to="#"><img src={Avatar2} alt="img" /></Link>
                                            </div>
                                            <div className="chat-users chat-user-blk">
                                                <div className="user-titles ">
                                                    <h5> Laura Williams</h5>
                                                </div>
                                                <div className="chat-user-icon">
                                                    <Link to="#"><img src={videoicon1} className="me-2" alt="img" /></Link>
                                                    <Link to="#"><img src={videoicon2} alt="img" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="chat-user-group video-call-blk d-flex align-items-center">
                                            <div className="img-users call-user">
                                                <Link to="#"><img src={Avatar3} alt="img" /></Link>
                                            </div>
                                            <div className="chat-users chat-user-blk">
                                                <div className="user-titles ">
                                                    <h5> Smith Bruklin</h5>
                                                </div>
                                                <div className="chat-user-icon">
                                                    <Link to="#"><img src={videoicon1} className="me-2" alt="img" /></Link>
                                                    <Link to="#"><img src={videoicon2} alt="img" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="call-all comman-space-flex">
                                            <h4>Chats<span>32</span></h4>
                                            <h5><Link to="#">Show All</Link></h5>
                                        </div>
                                        <div className="video-chat-show">
                                            <ul>
                                                <li className="media d-flex received">
                                                    <div className="avatar flex-shrink-0">
                                                        <img src={Avatar1} alt="User Image" className="avatar-img rounded-circle" />
                                                    </div>
                                                    <div className="media-body flex-grow-1">
                                                        <div className="msg-box">
                                                            <div className="message-sub-box">
                                                                <h5>Galaviz Lalema</h5>
                                                                <p>Hi Guys, How are you?</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="media d-flex received">
                                                    <div className="avatar flex-shrink-0">
                                                        <img src={Avatar2} alt="User Image" className="avatar-img rounded-circle" />
                                                    </div>
                                                    <div className="media-body flex-grow-1">
                                                        <div className="msg-box">
                                                            <div className="message-sub-box">
                                                                <h5>Williams Bruk</h5>
                                                                <p>non tellus dignissim </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="media d-flex received">
                                                    <div className="avatar flex-shrink-0">
                                                        <img src={Avatar3} alt="User Image" className="avatar-img rounded-circle" />
                                                    </div>
                                                    <div className="media-body flex-grow-1">
                                                        <div className="msg-box">
                                                            <div className="message-sub-box">
                                                                <h5>Laura Williams</h5>
                                                                <p>Vivamus sed dictum dictum ligula, cursus blandit risus</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="media d-flex received">
                                                    <div className="avatar flex-shrink-0">
                                                        <img src={Avatar4} alt="User Image" className="avatar-img rounded-circle" />
                                                    </div>
                                                    <div className="media-body flex-grow-1">
                                                        <div className="msg-box">
                                                            <div className="message-sub-box">
                                                                <h5>Galaviz Lalema</h5>
                                                                <p>Lorem ipsum dolor sit amet aliquam ut a ex aliquam ut a ex</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="media d-flex received">
                                                    <div className="avatar flex-shrink-0">
                                                        <img src={Avatar5} alt="User Image" className="avatar-img rounded-circle" />
                                                    </div>
                                                    <div className="media-body flex-grow-1">
                                                        <div className="msg-box">
                                                            <div className="message-sub-box">
                                                                <h5>Smith Bruklin</h5>
                                                                <p>Vivamus sed dictum dictum ligula, cursus blandit risus
                                                                    Lorem ipsum dolor sit amet aliquam ut a ex aliquam ut a ex</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8">
                                <div className="card chat-box ">
                                    <div className=" chat-search-group ">
                                        <div className="chat-user-group clinic-user mb-0 d-flex align-items-center">
                                            <div className="img-users call-user">
                                                <Link to="#"><img src={Avatar1} alt="img" /></Link>
                                                <span className="active-users bg-info" />
                                            </div>
                                            <div className="chat-users">
                                                <div className="user-titles">
                                                    <h5> Forest Kroch</h5>
                                                </div>
                                                <div className="user-text">
                                                    <p>Lorem ipsum dolor sit amet...</p>
                                                </div>
                                            </div>
                                            <ul className="call-list-add">
                                                <li><Link to="#"><img src={ProfileUser} alt="img" />32</Link></li>
                                                <li><Link to="#"><img src={plusicon} alt="img" /></Link></li>
                                            </ul>
                                        </div>
                                        <div className="chat-search-list">
                                            <ul>
                                                <li><Link to="/video-call"><img src={chaticon1} alt="img" /></Link></li>
                                                <li><Link to="/voice-call"><img src={chaticon2} alt="img" /></Link></li>
                                                <li><Link to="#"><img src={chaticon3} alt="img" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* Chat */}
                                <div className="card chat-box ">
                                    {/* Join Call */}
                                    <div className="page-content">
                                        <div className="meeting">
                                            <div className="meeting-wrapper">
                                                <div className="meeting-list">
                                                    {/* Horizontal View */}
                                                    <div className="join-contents horizontal-view fade-whiteboard">
                                                        <div className="join-video user-active">
                                                            <img src={call} className="img-fluid call-imgs" alt="Logo" />
                                                            <div className="video-avatar">
                                                                <div className="text-avatar">
                                                                    <div className="text-box">
                                                                        S
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="part-name">
                                                                <h4><img src={videoicon3} className="me-2" alt="img" />Laura Strattenberg</h4>
                                                            </div>
                                                            <div className="more-icon">
                                                                <Link to="#" className="handraise-on me-2">
                                                                    <i className="fas fa-thumbtack" />
                                                                </Link>
                                                                <Link to="#" className="mic-off">
                                                                    <i className="feather-mic-off" >
                                                                        <FeatherIcon icon="mic-off" />
                                                                    </i>

                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="join-video single-user">
                                                            <img src={call01} className="img-fluid call-imgs" alt="Logo" />
                                                            <div className="part-name">
                                                                <h4><img src={videoicon3} className="me-2" alt="img" />Stephen Williams</h4>
                                                            </div>
                                                            <div className="more-icon">
                                                                <Link to="#">
                                                                    <i className="feather-mic-off">
                                                                        <FeatherIcon icon="mic-off" />
                                                                    </i>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="join-video single-user">
                                                            <img src={call02} className="img-fluid call-imgs" alt="Logo" />
                                                            <div className="part-name">
                                                                <h4><img src={videoicon3} className="me-2" alt="img" />Galaviz Lalema</h4>
                                                            </div>
                                                            <div className="more-icon">
                                                                <Link to="#">
                                                                    <i className="feather-mic-off">
                                                                        <FeatherIcon icon="mic-off" />
                                                                    </i>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="join-video single-user">
                                                            <img src={call03} className="img-fluid call-imgs" alt="Logo" />
                                                            <div className="part-name">
                                                                <h4><img src={videoicon3} className="me-2" alt="img" />Smith Bruklin</h4>
                                                            </div>
                                                            <div className="more-icon">
                                                                <Link to="#">
                                                                    <i className="feather-mic-off">
                                                                        <FeatherIcon icon="mic-off" />
                                                                    </i>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* /Horizontal View */}
                                                </div>
                                                {/* Meet Footer */}
                                                <div className="meet-footer">
                                                    <div className="meet-icons">
                                                        <div className="met-icons">
                                                            <ul className="meet-items">
                                                                <li className="meet-item">
                                                                    <Link to="#" className="mute-bt">
                                                                        <img src={callicon3} alt="img" />
                                                                    </Link>
                                                                </li>
                                                                <li className="meet-item">
                                                                    <Link to="#" className="mute-video">
                                                                        <i className="feather-video">
                                                                            <FeatherIcon icon="video"/>
                                                                            </i>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="end-call-chat">
                                                            <Link to="#" className="btn btn-primary">End Call</Link>
                                                        </div>
                                                        <div className="end-calls">
                                                            <ul className="meet-items">
                                                                <li className="meet-item">
                                                                    <Link to="#" className="hand-raise">
                                                                        <img src={callicon1} alt="img" />
                                                                    </Link>
                                                                </li>
                                                                <li className="meet-item">
                                                                    <Link to="#" className="showInviteList">
                                                                        <img src={callicon2} alt="img" />
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* /Meet Footer */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Join Call */}
                                </div>
                                {/* /Chat */}
                            </div>
                        </div>
                    </div>
                </div>

            </>
        </>
    )
}

export default VideoCall
