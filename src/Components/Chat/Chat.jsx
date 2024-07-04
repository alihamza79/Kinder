import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom'
import ChatSideContent from './ChatSideContent'
import { Avatar1, Avatar3, Avatar5, chatfooter1, chatfooter2, chatfooter3, chatfooter4, chaticon07, chaticon1, chaticon2, chaticon3, chaticon4, chaticon5, chaticon6, chaticon8 } from '../imagepath'
import FeatherIcon from 'feather-icons-react/build/FeatherIcon'

const Chat = () => {
    return (
        <>
            <Header />
            <Sidebar activeClassName='chat' />
            <>
                <div className="page-wrapper">
                    <div className="content">
                        {/* Page Header */}
                        <div className="page-header">
                            <div className="row">
                                <div className="col-sm-12">
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/chat">App </Link></li>
                                        <li className="breadcrumb-item"><i className="feather-chevron-right">
                                            <FeatherIcon icon="chevron-right" />
                                        </i></li>
                                        <li className="breadcrumb-item active">Chat</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* /Page Header */}
                        <div className="row">
                            <ChatSideContent />
                            <div className="col-xl-8">
                                <div className="card chat-box ">
                                    <div className=" chat-search-group ">
                                        <div className="chat-user-group mb-0 d-flex align-items-center">
                                            <div className="img-users call-user">
                                                <Link to="#"><img src={Avatar5} alt="img" /></Link>
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
                                <div className="card chat-message-box">
                                    <div className="card-body p-0">
                                        <div className="chat-body">
                                            <ul className="list-unstyled chat-message">
                                                <li className="media d-flex received">
                                                    <div className="avatar flex-shrink-0">
                                                        <img src={Avatar1} alt="User Image" className="avatar-img rounded-circle" />
                                                    </div>
                                                    <div className="media-body flex-grow-1">
                                                        <div className="msg-box">
                                                            <div className="message-sub-box">
                                                                <h4>Williams Bruk</h4>
                                                                <p>How likely are you to recommend our company to your friends and family ?</p>
                                                                <span>06:00 PM, 30 Sep 2022</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="media d-flex sent">
                                                    <div className="media-body flex-grow-1">
                                                        <div className="msg-box">
                                                            <div className="message-sub-box">
                                                                <p>How likely are you to recommend our company to your friends and family ?</p>
                                                                <span>06:00 PM, 30 Sep 2022</span>
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
                                                                <h4>Galaviz Lalema</h4>
                                                                <p>non tellus dignissim </p>
                                                                <ul className="msg-sub-list">
                                                                    <li><img src={chaticon4} alt="#" className="me-1" />Explainer Video.avi<span className="ms-1">30.0 MB</span><img src={chaticon07} alt="#" className="ms-1 ms-auto" /></li>
                                                                    <li><img src={chaticon5} alt="#" className="me-1" />Ayush Therapy.mp3<span className="ms-1">4.0 MB</span><img src={chaticon8} alt="#" className="ms-1 ms-auto" /></li>
                                                                    <li><img src={chaticon6} alt="#"  className="me-1" />The liver.img<span className="ms-1">520KB</span></li>
                                                                </ul>
                                                                <span>06:32 PM Yesterday</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="media d-flex sent">
                                                    <div className="media-body flex-grow-1">
                                                        <div className="msg-box">
                                                            <div className="message-sub-box">
                                                                <p>Vivamus sed dictum dictum ligula, cursus blandit risus</p>
                                                                <p className="mb-0">Vivamus sed dictum</p>
                                                                <span>06:50PM Today</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="media d-flex received">
                                                    <div className="avatar flex-shrink-0">
                                                        <img src={Avatar1} alt="User Image" className="avatar-img rounded-circle" />
                                                    </div>
                                                    <div className="media-body flex-grow-1">
                                                        <div className="msg-box">
                                                            <div className="message-sub-box">
                                                                <h4>William Stephin</h4>
                                                                <p>aliquam ut a ex</p>
                                                                <span>5min Ago</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="chat-footer-box">
                                            <div className="discussion-sent">
                                                <div className="row gx-2">
                                                    <div className="col-lg-12 ">
                                                        <div className="footer-discussion">
                                                            <div className="inputgroups">
                                                                <input type="text" placeholder="Type your Message here..." />
                                                                <div className="micro-text position-icon">
                                                                    <img src={chatfooter4} alt="#" />
                                                                </div>
                                                                <div className="send-chat position-icon comman-flex">
                                                                    <Link to="#"><img src={chatfooter3} alt="#" /></Link>
                                                                </div>
                                                                <div className="symple-text position-icon">
                                                                    <ul>
                                                                        <li><Link to="#"><img src={chatfooter1} className="me-2" alt="#" /></Link></li>
                                                                        <li><Link to="#"><img src={chatfooter2} alt="#" /></Link></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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

export default Chat
