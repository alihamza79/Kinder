import React from 'react'
import Header from '../../Header'
import Sidebar from '../../Sidebar'
import FeatherIcon from 'feather-icons-react/build/FeatherIcon'
import { Link } from 'react-router-dom'
import { Profileuser, cameraicon, doctor, medalicon, medalicon02, medalicon03, menuicon16, profilebg } from '../../imagepath'

const Doctor_Settings = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <>
                <div className="page-wrapper">
                    <div className="content">
                        {/* Page Header */}
                        <div className="page-header">
                            <div className="row">
                                <div className="col-sm-12">
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="doctors.html">Doctors </Link></li>
                                        <li className="breadcrumb-item"><i className="feather-chevron-right">
                                            <FeatherIcon icon="chevron-right"/>
                                            </i>
                                        </li>
                                        <li className="breadcrumb-item active">Doctors Profile</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* /Page Header */}
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="about-info">
                                                    <h4>Doctor Profile  <span><Link to="#"><i className="feather-more-vertical" /></Link></span></h4>
                                                </div>
                                                <div className="doctor-profile-head">
                                                    <div className="profile-bg-img">
                                                        <img src={profilebg} alt="Profile" />
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-4 col-md-4">
                                                            <div className="profile-user-box">
                                                                <div className="profile-user-img">
                                                                    <img src={Profileuser} alt="Profile" />
                                                                    <div className="form-group doctor-up-files profile-edit-icon mb-0">
                                                                        <div className="uplod d-flex">
                                                                            <label className="file-upload profile-upbtn mb-0">
                                                                                <img src={cameraicon} alt="Profile" /><input type="file" />
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="names-profiles">
                                                                    <h4>Dr. Bruce Willis</h4>
                                                                    <h5>Senior Doctor</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 d-flex align-items-center">
                                                            <div className="follow-group">
                                                                <div className="doctor-follows">
                                                                    <h5>Followers</h5>
                                                                    <h4>850</h4>
                                                                </div>
                                                                <div className="doctor-follows">
                                                                    <h5>Following</h5>
                                                                    <h4>18K</h4>
                                                                </div>
                                                                <div className="doctor-follows">
                                                                    <h5>Posts</h5>
                                                                    <h4>250</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 d-flex align-items-center">
                                                            <div className="follow-btn-group">
                                                                <button type="submit" className="btn btn-info follow-btns">Follow</button>
                                                                <button type="submit" className="btn btn-info message-btns">Message</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="doctor-personals-grp">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="heading-detail ">
                                                        <h4 className="mb-3">About me</h4>
                                                        <p>Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital Surat. I love to work with all my hospital staff and seniour doctors.</p>
                                                    </div>
                                                    <div className="about-me-list">
                                                        <ul className="list-space">
                                                            <li>
                                                                <h4>Gender</h4>
                                                                <span>Female</span>
                                                            </li>
                                                            <li>
                                                                <h4>Operation Done</h4>
                                                                <span>30+</span>
                                                            </li>
                                                            <li>
                                                                <h4>Designation</h4>
                                                                <span>Sr. Doctor</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="doctor-personals-grp">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="heading-detail">
                                                        <h4>Skills:</h4>
                                                    </div>
                                                    <div className="skill-blk">
                                                        <div className="skill-statistics">
                                                            <div className="skills-head">
                                                                <h5>Operations</h5>
                                                                <p>45%</p>
                                                            </div>
                                                            <div className="progress mb-0">
                                                                <div className="progress-bar bg-operations" role="progressbar" style={{ width: '45%' }} aria-valuenow={45} aria-valuemin={0} aria-valuemax={100} />
                                                            </div>
                                                        </div>
                                                        <div className="skill-statistics">
                                                            <div className="skills-head">
                                                                <h5>Patient Care</h5>
                                                                <p>85%</p>
                                                            </div>
                                                            <div className="progress mb-0">
                                                                <div className="progress-bar bg-statistics" role="progressbar" style={{ width: '85%' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
                                                            </div>
                                                        </div>
                                                        <div className="skill-statistics">
                                                            <div className="skills-head">
                                                                <h5>Endoscopic </h5>
                                                                <p>65%</p>
                                                            </div>
                                                            <div className="progress mb-0">
                                                                <div className="progress-bar bg-endoscopic" role="progressbar" style={{ width: '65%' }} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} />
                                                            </div>
                                                        </div>
                                                        <div className="skill-statistics">
                                                            <div className="skills-head">
                                                                <h5>Patient Visit </h5>
                                                                <p>90%</p>
                                                            </div>
                                                            <div className="progress mb-0">
                                                                <div className="progress-bar bg-visit" role="progressbar" style={{ width: '90%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="doctor-personals-grp">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="heading-detail">
                                                        <h4>Speciality</h4>
                                                    </div>
                                                    <div className="personal-activity">
                                                        <div className="personal-icons status-grey">
                                                            <img src={medalicon} alt />
                                                        </div>
                                                        <div className="views-personal">
                                                            <h4>Proffesionals</h4>
                                                            <h5>Certified Skin Treatment</h5>
                                                        </div>
                                                    </div>
                                                    <div className="personal-activity">
                                                        <div className="personal-icons status-green">
                                                            <img src={medalicon02} alt />
                                                        </div>
                                                        <div className="views-personal">
                                                            <h4>Certified</h4>
                                                            <h5>Cold Laser Operation</h5>
                                                        </div>
                                                    </div>
                                                    <div className="personal-activity mb-0">
                                                        <div className="personal-icons status-orange">
                                                            <img src={medalicon03} alt />
                                                        </div>
                                                        <div className="views-personal">
                                                            <h4>Medication Laser</h4>
                                                            <h5>Hair Lose Product</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="doctor-personals-grp">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="tab-content-set">
                                                        <ul className="nav">
                                                            <li>
                                                                <Link to="/doctorprofile"><span className="set-about-icon me-2"><img src={doctor} alt /></span>About me</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/doctor-setting" className="active"><span className="set-about-icon me-2"><img src={menuicon16} alt /></span>Settings</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="setting-form-blk">
                                                        <form>
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <div className="form-heading">
                                                                        <h4>Account Setting</h4>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 col-sm-12">
                                                                    <div className="form-group local-forms">
                                                                        <label>Username </label>
                                                                        <input className="form-control" type="text" defaultValue="brucewillis@29" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 col-sm-12">
                                                                    <div className="form-group local-forms">
                                                                        <label>Mobile </label>
                                                                        <input className="form-control" type="text" defaultValue="+1 23 456890" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 col-sm-12">
                                                                    <div className="form-group local-forms">
                                                                        <label>Email </label>
                                                                        <input className="form-control" type="email" defaultValue="brucewillis@info.com" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 col-sm-12">
                                                                    <div className="form-group local-forms">
                                                                        <label>Address  <span className="login-danger">*</span></label>
                                                                        <textarea className="form-control" rows={3} cols={30} defaultValue={"101, Elanxa Apartments, 340 N Madison Avenue"} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="form-heading">
                                                                    <h4>Security Setting</h4>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-sm-12">
                                                                <div className="form-group local-forms">
                                                                    <label>Current Password </label>
                                                                    <input className="form-control" type="password" defaultValue={12345} />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-sm-12">
                                                                <div className="form-group local-forms">
                                                                    <label>New Password </label>
                                                                    <input className="form-control" type="password" placeholder />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-sm-12">
                                                                <div className="form-group local-forms">
                                                                    <label>Confirm Password </label>
                                                                    <input className="form-control" type="password" placeholder />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-sm-12">
                                                                <div className="profile-check-blk form-group">
                                                                    <div className="remember-me">
                                                                        <label className="custom_check mr-2 mb-0 d-inline-flex remember-me"> Profile Visibility For Everyone
                                                                            <input type="checkbox" name="radio" defaultChecked />
                                                                            <span className="checkmark" />
                                                                        </label>
                                                                    </div>
                                                                    <div className="remember-me">
                                                                        <label className="custom_check mr-2 mb-0 d-inline-flex remember-me"> New task notifications
                                                                            <input type="checkbox" name="radio" defaultChecked />
                                                                            <span className="checkmark" />
                                                                        </label>
                                                                    </div>
                                                                    <div className="remember-me">
                                                                        <label className="custom_check mr-2 mb-0 d-inline-flex remember-me"> New friend request notifications
                                                                            <input type="checkbox" name="radio" />
                                                                            <span className="checkmark" />
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="doctor-submit">
                                                                    <button type="submit" className="btn btn-primary submit-form me-2">Submit</button>
                                                                    <button type="submit" className="btn btn-primary cancel-form">Cancel</button>
                                                                </div>
                                                            </div>
                                                        </form></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        </>
    )
}

export default Doctor_Settings
