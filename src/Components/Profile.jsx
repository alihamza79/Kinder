import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import doctor3 from '../assets/img/doctor-03.jpg';
import { Link } from 'react-router-dom';
const Profile = () => {
  return (
    <>
    <Header/>
    <Sidebar/>
    <>
<div className="page-wrapper">
  <div className="content">
    <div className="row">
      <div className="col-sm-7 col-6">
        <ul className="breadcrumb">
          <li className="breadcrumb-item"><Link to="index.html">Dashboard </Link></li>
          <li className="breadcrumb-item"><i className="feather-chevron-right" /></li>
        <li className="breadcrumb-item active">My Profile</li>
        </ul>
      </div>
      <div className="col-sm-5 col-6 text-end m-b-30">
        <Link to="edit-profile.html" className="btn btn-primary btn-rounded"><i className="fa fa-plus" /> Edit Profile</Link>
      </div>
    </div>
    <div className="card-box profile-header">
      <div className="row">
        <div className="col-md-12">
          <div className="profile-view">
            <div className="profile-img-wrap">
              <div className="profile-img">
                <Link to="#"><img className="avatar" src={doctor3} alt /></Link>
              </div>
            </div>
            <div className="profile-basic">
              <div className="row">
                <div className="col-md-5">
                  <div className="profile-info-left">
                    <h3 className="user-name m-t-0 mb-0">Cristina Groves</h3>
                    <small className="text-muted">Gynecologist</small>
                    <div className="staff-id">Employee ID : DR-0001</div>
                    <div className="staff-msg"><Link to="/chat" className="btn btn-primary">Send Message</Link></div>
                  </div>
                </div>
                <div className="col-md-7">
                  <ul className="personal-info">
                    <li>
                      <span className="title">Phone:</span>
                      <span className="text"><Link to>770-889-6484</Link></span>
                    </li>
                    <li>
                      <span className="title">Email:</span>
                      <span className="text"><Link to>cristinagroves@example.com</Link></span>
                    </li>
                    <li>
                      <span className="title">Birthday:</span>
                      <span className="text">3rd March</span>
                    </li>
                    <li>
                      <span className="title">Address:</span>
                      <span className="text">714 Burwell Heights Road, Bridge City, TX, 77611</span>
                    </li>
                    <li>
                      <span className="title">Gender:</span>
                      <span className="text">Female</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>                        
        </div>
      </div>
    </div>
    <div className="profile-tabs">
      <ul className="nav nav-tabs nav-tabs-bottom">
        <li className="nav-item"><Link className="nav-link active" to="#about-cont" data-bs-toggle="tab">About</Link></li>
        <li className="nav-item"><Link className="nav-link" to="#bottom-tab2" data-bs-toggle="tab">Profile</Link></li>
        <li className="nav-item"><Link className="nav-link" to="#bottom-tab3" data-bs-toggle="tab">Messages</Link></li>
      </ul>
      <div className="tab-content">
        <div className="tab-pane show active" id="about-cont">
          <div className="row">
            <div className="col-md-12">
              <div className="card-box">
                <h3 className="card-title">Education Informations</h3>
                <div className="experience-box">
                  <ul className="experience-list">
                    <li>
                      <div className="experience-user">
                        <div className="before-circle" />
                      </div>
                      <div className="experience-content">
                        <div className="timeline-content">
                          <Link to="#/" className="name">International College of Medical Science (UG)</Link>
                          <div>MBBS</div>
                          <span className="time">2001 - 2003</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="experience-user">
                        <div className="before-circle" />
                      </div>
                      <div className="experience-content">
                        <div className="timeline-content">
                          <Link to="#/" className="name">International College of Medical Science (PG)</Link>
                          <div>MD - Obstetrics &amp; Gynaecology</div>
                          <span className="time">1997 - 2001</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-box ">
                <h3 className="card-title">Experience</h3>
                <div className="experience-box">
                  <ul className="experience-list">
                    <li>
                      <div className="experience-user">
                        <div className="before-circle" />
                      </div>
                      <div className="experience-content">
                        <div className="timeline-content">
                          <Link to="#/" className="name">Consultant Gynecologist</Link>
                          <span className="time">Jan 2014 - Present (4 years 8 months)</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="experience-user">
                        <div className="before-circle" />
                      </div>
                      <div className="experience-content">
                        <div className="timeline-content">
                          <Link to="#/" className="name">Consultant Gynecologist</Link>
                          <span className="time">Jan 2009 - Present (6 years 1 month)</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="experience-user">
                        <div className="before-circle" />
                      </div>
                      <div className="experience-content">
                        <div className="timeline-content">
                          <Link to="#/" className="name">Consultant Gynecologist</Link>
                          <span className="time">Jan 2004 - Present (5 years 2 months)</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane" id="bottom-tab2">
          Tab content 2
        </div>
        <div className="tab-pane" id="bottom-tab3">
          Tab content 3
        </div>
      </div>
    </div>
  </div>
  <div className="notification-box">
    <div className="msg-sidebar notifications msg-noti">
      <div className="topnav-dropdown-header">
        <span>Messages</span>
      </div>
      <div className="drop-scroll msg-list-scroll" id="msg_list">
        <ul className="list-box">
          <li>
            <Link to="chat.html">
              <div className="list-item">
                <div className="list-left">
                  <span className="avatar">R</span>
                </div>
                <div className="list-body">
                  <span className="message-author">Richard Miles </span>
                  <span className="message-time">12:28 AM</span>
                  <div className="clearfix" />
                  <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="chat.html">
              <div className="list-item new-message">
                <div className="list-left">
                  <span className="avatar">J</span>
                </div>
                <div className="list-body">
                  <span className="message-author">John Doe</span>
                  <span className="message-time">1 Aug</span>
                  <div className="clearfix" />
                  <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="chat.html">
              <div className="list-item">
                <div className="list-left">
                  <span className="avatar">T</span>
                </div>
                <div className="list-body">
                  <span className="message-author"> Tarah Shropshire </span>
                  <span className="message-time">12:28 AM</span>
                  <div className="clearfix" />
                  <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="chat.html">
              <div className="list-item">
                <div className="list-left">
                  <span className="avatar">M</span>
                </div>
                <div className="list-body">
                  <span className="message-author">Mike Litorus</span>
                  <span className="message-time">12:28 AM</span>
                  <div className="clearfix" />
                  <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="chat.html">
              <div className="list-item">
                <div className="list-left">
                  <span className="avatar">C</span>
                </div>
                <div className="list-body">
                  <span className="message-author"> Catherine Manseau </span>
                  <span className="message-time">12:28 AM</span>
                  <div className="clearfix" />
                  <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="chat.html">
              <div className="list-item">
                <div className="list-left">
                  <span className="avatar">D</span>
                </div>
                <div className="list-body">
                  <span className="message-author"> Domenic Houston </span>
                  <span className="message-time">12:28 AM</span>
                  <div className="clearfix" />
                  <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="chat.html">
              <div className="list-item">
                <div className="list-left">
                  <span className="avatar">B</span>
                </div>
                <div className="list-body">
                  <span className="message-author"> Buster Wigton </span>
                  <span className="message-time">12:28 AM</span>
                  <div className="clearfix" />
                  <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="chat.html">
              <div className="list-item">
                <div className="list-left">
                  <span className="avatar">R</span>
                </div>
                <div className="list-body">
                  <span className="message-author"> Rolland Webber </span>
                  <span className="message-time">12:28 AM</span>
                  <div className="clearfix" />
                  <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="chat.html">
              <div className="list-item">
                <div className="list-left">
                  <span className="avatar">C</span>
                </div>
                <div className="list-body">
                  <span className="message-author"> Claire Mapes </span>
                  <span className="message-time">12:28 AM</span>
                  <div className="clearfix" />
                  <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="chat.html">
              <div className="list-item">
                <div className="list-left">
                  <span className="avatar">M</span>
                </div>
                <div className="list-body">
                  <span className="message-author">Melita Faucher</span>
                  <span className="message-time">12:28 AM</span>
                  <div className="clearfix" />
                  <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="chat.html">
              <div className="list-item">
                <div className="list-left">
                  <span className="avatar">J</span>
                </div>
                <div className="list-body">
                  <span className="message-author">Jeffery Lalor</span>
                  <span className="message-time">12:28 AM</span>
                  <div className="clearfix" />
                  <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="chat.html">
              <div className="list-item">
                <div className="list-left">
                  <span className="avatar">L</span>
                </div>
                <div className="list-body">
                  <span className="message-author">Loren Gatlin</span>
                  <span className="message-time">12:28 AM</span>
                  <div className="clearfix" />
                  <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="chat.html">
              <div className="list-item">
                <div className="list-left">
                  <span className="avatar">T</span>
                </div>
                <div className="list-body">
                  <span className="message-author">Tarah Shropshire</span>
                  <span className="message-time">12:28 AM</span>
                  <div className="clearfix" />
                  <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="topnav-dropdown-footer">
        <Link to="chat.html">See all messages</Link>
      </div>
    </div>
  </div>
</div>

    </>
    </>
  )
}

export default Profile
