import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom'
import { Avatar2, Avatar3, Avatar4, Avatar5, Avatar6, Avatar7, Avatar8, Avatar9, chaticon1, chaticon2, chaticon3, clock, incomingcall, outgoing, voiceicon1, voiceicon2, voiceicon3 } from '../imagepath'
import FeatherIcon from 'feather-icons-react/build/FeatherIcon'

const VoiceCall = () => {
    return (
        <>
            <Header />
            <Sidebar id='menu-item9' id1='menu-items9' activeClassName='voice-call'/>
            <>
                <div className="page-wrapper">
                    <div className="content">
                        {/* Page Header */}
                        <div className="page-header">
                            <div className="row">
                                <div className="col-sm-12">
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/voice-call">App </Link></li>
                                        <li className="breadcrumb-item">
                                            <i className="feather-chevron-right">
                                                <FeatherIcon icon="chevron-right" />
                                            </i>
                                        </li>
                                        <li className="breadcrumb-item active">Voice Call</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* /Page Header */}
                        <div className="row">
                            <div className="col-xl-4 d-flex">
                                <div className="card chat-box ">
                                    <div className="chat-widgets">
                                        <div className="call-all comman-space-flex">
                                            <h4>Calls<span>32</span></h4>
                                            <h5><Link to="#">Show All</Link></h5>
                                        </div>
                                        <div className="chat-user-group d-flex align-items-center">
                                            <div className="img-users call-user">
                                                <Link to="#"><img src={Avatar5} alt="img" /></Link>
                                            </div>
                                            <div className="chat-users chat-user-blk">
                                                <div className="user-titles ">
                                                    <h5> William Stephin</h5>
                                                    <p>5 min Ago</p>
                                                </div>
                                                <div className="user-text ">
                                                    <p>10:35</p>
                                                    <div className="chat-user-icon">
                                                        <img src={incomingcall} alt="img" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="chat-user-group d-flex align-items-center">
                                            <div className="img-users call-user">
                                                <Link to="#"><img src={Avatar2} alt="img" /></Link>
                                            </div>
                                            <div className="chat-users chat-user-blk">
                                                <div className="user-titles ">
                                                    <h5> William Stephin</h5>
                                                    <p>5 min Ago</p>
                                                </div>
                                                <div className="user-text ">
                                                    <p>11:35</p>
                                                    <div className="chat-user-icon">
                                                        <img src={outgoing} alt="img" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="chat-user-group d-flex align-items-center">
                                            <div className="img-users call-user">
                                                <Link to="#"><img src={Avatar3} alt="img" /></Link>
                                            </div>
                                            <div className="chat-users chat-user-blk">
                                                <div className="user-titles ">
                                                    <h5> William Stephin</h5>
                                                    <p>5 min Ago</p>
                                                </div>
                                                <div className="user-text ">
                                                    <p>10:35 </p>
                                                    <div className="chat-user-icon">
                                                        <img src={incomingcall} alt="img" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="chat-user-group d-flex align-items-center">
                                            <div className="img-users call-user">
                                                <Link to="#"><img src={Avatar4} alt="img" /></Link>
                                            </div>
                                            <div className="chat-users chat-user-blk">
                                                <div className="user-titles ">
                                                    <h5> Bernardo James	</h5>
                                                    <p>06:32 PM</p>
                                                </div>
                                                <div className="user-text ">
                                                    <p>11:35</p>
                                                    <div className="chat-user-icon">
                                                        <img src={incomingcall} alt="img" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="chat-user-group d-flex align-items-center">
                                            <div className="img-users call-user">
                                                <Link to="#"><img src={Avatar5} alt="img" /></Link>
                                            </div>
                                            <div className="chat-users chat-user-blk">
                                                <div className="user-titles ">
                                                    <h5> Harald Kowalski	</h5>
                                                    <p>06:32 PM Yesterday</p>
                                                </div>
                                                <div className="user-text ">
                                                    <p>10:15 </p>
                                                    <div className="chat-user-icon">
                                                        <img src={incomingcall} alt="img" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="chat-user-group d-flex align-items-center">
                                            <div className="img-users call-user">
                                                <Link to="#"><img src={Avatar6} alt="img" /></Link>
                                            </div>
                                            <div className="chat-users chat-user-blk">
                                                <div className="user-titles ">
                                                    <h5> Alexandr Donnelly	</h5>
                                                    <p>05:32 PM Yesterday</p>
                                                </div>
                                                <div className="user-text ">
                                                    <p>09:20 </p>
                                                    <div className="chat-user-icon">
                                                        <img src={incomingcall} alt="img" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="chat-user-group d-flex align-items-center">
                                            <div className="img-users call-user">
                                                <Link to="#"><img src={Avatar7} alt="img" /></Link>
                                            </div>
                                            <div className="chat-users chat-user-blk">
                                                <div className="user-titles ">
                                                    <h5> Regina Dickerson	</h5>
                                                    <p>06:00 PM, 30 Sep 2022</p>
                                                </div>
                                                <div className="user-text ">
                                                    <p>11:35</p>
                                                    <div className="chat-user-icon">
                                                        <img src={outgoing} alt="img" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="chat-user-group mb-0 d-flex align-items-center">
                                            <div className="img-users call-user">
                                                <Link to="#"><img src={Avatar8} alt="img" /></Link>
                                            </div>
                                            <div className="chat-users chat-user-blk">
                                                <div className="user-titles ">
                                                    <h5> Forest Kroch</h5>
                                                    <p>05:32 PM Yesterday</p>
                                                </div>
                                                <div className="user-text ">
                                                    <p>10:35</p>
                                                    <div className="chat-user-icon">
                                                        <img src={incomingcall} alt="img" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8">
                                <div className="card chat-box ">
                                    <div className=" chat-search-group ">
                                        <div className="chat-user-group mb-0 d-flex align-items-center">
                                            <div className="img-users call-user">
                                                <Link to="#"><img src={Avatar9} alt="img" /></Link>
                                            </div>
                                            <div className="chat-users">
                                                <div className="user-titles">
                                                    <h5> Forest Kroch</h5>
                                                </div>
                                                <div className="user-text">
                                                    <p>Doctor</p>
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
                                <div className="card chat-box  mb-0">
                                    <div className="voice-call-blk text-center">
                                        <div className="voice-call-user">
                                            <img src={Avatar3} alt="img" />
                                            <h3>Bernardo James</h3>
                                            <p>Doctor</p>
                                        </div>
                                        <div className="voice-time">
                                            <h3><img src={clock} className="me-2" alt="img" /> 00:10:10</h3>
                                        </div>
                                        <div className="voice-menu">
                                            <ul>
                                                <li><Link to="#"><img src={voiceicon1} alt="img" /></Link></li>
                                                <li className="active"><Link to="#"><img src={voiceicon2} alt="img" /></Link></li>
                                                <li><Link to="#"><img src={voiceicon3} alt="img" /></Link></li>
                                            </ul>
                                        </div>
                                        <div className="end-call-voice">
                                            <Link to="#" className="btn btn-primary">End Call</Link>
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

export default VoiceCall
