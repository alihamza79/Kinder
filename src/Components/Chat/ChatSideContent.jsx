import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar1, Avatar2, Avatar3, Avatar4, Avatar5, Avatar6, Avatar7, Avatar8, searchnormal } from '../imagepath'
import FeatherIcon from 'feather-icons-react/build/FeatherIcon'

const ChatSideContent = () => {
    return (
        <div className="col-xl-4 d-flex">
            <div className="card chat-box-clinic ">
                <div className="chat-widgets">
                    <div className="chat-user-group-head d-flex align-items-center">
                        <div className="img-users call-user">
                            <Link to="#"><img src={Avatar1} alt="img" /></Link>
                            <span className="active-users" />
                        </div>
                        <div className="chat-users user-main">
                            <div className="user-titles">
                                <h5> William Stephin	</h5>
                                <div className="chat-user-time">
                                    <p>Doctor</p>
                                </div>
                            </div>
                            <div className="drop-item chat-menu user-dot-list">
                                <Link to="#" data-bs-toggle="dropdown" aria-expanded="false" className="#">
                                    <i className="feather-more-vertical">
                                        <FeatherIcon icon="more-vertical" />
                                    </i>
                                </Link>
                                <div className="dropdown-menu" style={{}}>
                                    <Link className="dropdown-item" to="#"><i className="feather-user me-2 text-primary" /> Profile</Link>
                                    <Link className="dropdown-item" to="#"><i className="feather-plus-circle me-2 text-success" /> Archive</Link>
                                    <Link className="dropdown-item" to="#"><i className="feather-trash-2 me-2 text-danger" /> Delete</Link>
                                    <Link className="dropdown-item " to="#"><i className="feather-slash me-2 text-secondary" /> Block</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="top-liv-search top-chat-search">
                        <form>
                            <div className="chat-search">
                                <div className="form-group me-2 mb-0">
                                    <input type="text" className="form-control" placeholder="Search here" />
                                    <Link className="btn"><img src={searchnormal} alt="#" /></Link>
                                </div>
                                <div className="add-search">
                                    <Link to="#"><i className="fa fa-plus" /></Link>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="chat-user-group d-flex align-items-center">
                        <div className="img-users call-user">
                            <Link to="#"><img src={Avatar5} alt="img" /></Link>
                            <span className="active-users bg-info" />
                        </div>
                        <div className="chat-users">
                            <div className="user-titles d-flex">
                                <h5> William Stephin	</h5>
                                <div className="chat-user-time">
                                    <p>10:22 AM</p>
                                </div>
                            </div>
                            <div className="user-text d-flex">
                                <p>Lorem ipsum dolor sit amet...</p>
                                <div className="chat-user-count">
                                    <span>3</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="chat-user-group d-flex align-items-center">
                        <div className="img-users call-user">
                            <Link to="#"><img src={Avatar2} alt="img" /></Link>
                            <span className="active-users" />
                        </div>
                        <div className="chat-users">
                            <div className="user-titles d-flex">
                                <h5> Mark Hay Smith	</h5>
                                <div className="chat-user-time">
                                    <p>2hrs ago</p>
                                </div>
                            </div>
                            <div className="user-text d-flex">
                                <p>Lorem ipsum dolor sit amet...</p>
                            </div>
                        </div>
                    </div>
                    <div className="chat-user-group d-flex align-items-center">
                        <div className="img-users call-user">
                            <Link to="#"><img src={Avatar3} alt="img" /></Link>
                            <span className="active-users" />
                        </div>
                        <div className="chat-users">
                            <div className="user-titles d-flex">
                                <h5> William Stephin	</h5>
                                <div className="chat-user-time">
                                    <p>11:35 AM</p>
                                </div>
                            </div>
                            <div className="user-text d-flex">
                                <p>Lorem ipsum dolor sit amet...</p>
                                <div className="chat-user-count">
                                    <span>4</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="chat-user-group d-flex align-items-center">
                        <div className="img-users call-user">
                            <Link to="#"><img src={Avatar4} alt="img" /></Link>
                            <span className="active-users bg-info" />
                        </div>
                        <div className="chat-users">
                            <div className="user-titles d-flex">
                                <h5> Bernardo James	</h5>
                                <div className="chat-user-time">
                                    <p>11:35 AM</p>
                                </div>
                            </div>
                            <div className="user-text d-flex">
                                <p>Lorem ipsum dolor sit amet...</p>
                            </div>
                        </div>
                    </div>
                    <div className="chat-user-group d-flex align-items-center">
                        <div className="img-users call-user">
                            <Link to="#"><img src={Avatar5} alt="img" /></Link>
                            <span className="active-users" />
                        </div>
                        <div className="chat-users">
                            <div className="user-titles d-flex">
                                <h5> Harald Kowalski	</h5>
                                <div className="chat-user-time">
                                    <p>11:35 AM</p>
                                </div>
                            </div>
                            <div className="user-text d-flex">
                                <p>Lorem ipsum dolor sit amet...</p>
                                <div className="chat-user-count">
                                    <span>5</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="chat-user-group d-flex align-items-center">
                        <div className="img-users call-user">
                            <Link to="#"><img src={Avatar6} alt="img" /></Link>
                            <span className="active-users bg-info" />
                        </div>
                        <div className="chat-users">
                            <div className="user-titles d-flex">
                                <h5> Alexandr Donnelly	</h5>
                                <div className="chat-user-time">
                                    <p>11:35 AM</p>
                                </div>
                            </div>
                            <div className="user-text d-flex">
                                <p>Lorem ipsum dolor sit amet...</p>
                                <div className="chat-user-count">
                                    <span>3</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="chat-user-group d-flex align-items-center">
                        <div className="img-users call-user">
                            <Link to="#"><img src={Avatar7} alt="img" /></Link>
                            <span className="active-users" />
                        </div>
                        <div className="chat-users">
                            <div className="user-titles d-flex">
                                <h5> Regina Dickerson	</h5>
                                <div className="chat-user-time">
                                    <p>11:35 AM</p>
                                </div>
                            </div>
                            <div className="user-text d-flex">
                                <p>Lorem ipsum dolor sit amet...</p>
                            </div>
                        </div>
                    </div>
                    <div className="chat-user-group mb-0 d-flex align-items-center">
                        <div className="img-users call-user">
                            <Link to="#"><img src={Avatar8} alt="img" /></Link>
                            <span className="active-users bg-info" />
                        </div>
                        <div className="chat-users">
                            <div className="user-titles d-flex">
                                <h5> Forest Kroch</h5>
                                <div className="chat-user-time">
                                    <p>11:35 AM</p>
                                </div>
                            </div>
                            <div className="user-text d-flex">
                                <p>Lorem ipsum dolor sit amet...</p>
                                <div className="chat-user-count">
                                    <span>3</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatSideContent
