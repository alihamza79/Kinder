/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";

import {logo, baricon, baricon1, searchnormal, noteicon, imguser, noteicon1, user06, settingicon01, menuicon08, menuicon04,
    menuicon06, menuicon09, menuicon10, menuicon11, menuicon12, menuicon14, menuicon15, menuicon16, logout, social06,
    social01, social02, social03, social04, profiles03, iconsocial, iconsocial02, iconsocial03, iconsocial04, profileavatar04,
    profileavatar05,profileavatar03,blog7,blog08,blog09,blog10,blog11,blog12, blog13,tag,tag1,tag2,tag3,tag4, dashboard, doctor, sidemenu,blog,
     doctorschedule,blogdetail,patients}
 from '../../Components/imagepath';
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';

const Blogdetails = () => {
  return (
    <div>
       <>
  <div className="main-wrapper">
    <Header/>
    <Sidebar id='menu-item11' id1='menu-items11' activeClassName='blog-details'/>
    <div className="page-wrapper">
      <div className="content">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="#">Blog </Link>
                </li>
                <li className="breadcrumb-item">
                  <i className="feather-chevron-right">
                    <FeatherIcon icon="chevron-right"/>
                    </i>
                </li>
                <li className="breadcrumb-item active">View Blog</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          <div className="col-md-8">
            <div className="blog-view">
              <article className="blog blog-single-post">
                <h3 className="blog-title">
                  Eye Care Routine To Get Rid Of Under Eye Circles And Puffiness
                </h3>
                <div className="blog-info clearfix">
                  <div className="post-right read-blks">
                    <Link to="#.">Read more in 8 Minutes</Link>
                  </div>
                  <div className="post-left date-blks">
                    <ul>
                      <li>
                        <Link to="#">
                          <i className="feather-calendar" >
                            <FeatherIcon icon = "calendar" />
                            {" "}
                          </i>
                          <span>05 Jul 2022</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                        <i className="feather-message" >
                        <FeatherIcon icon="message-square" />
                        {" "}
                        </i>
                          <span>58</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                        <i className="feather-eye" >
                         <FeatherIcon icon = "eye" />
                        </i>
                        <span>2.8k</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="blog-image">
                  <Link to="#.">
                    <img
                     alt="#"
                      src={blogdetail}
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="blog-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                    ad minima veniam, quis nostrum exercitationem ullam corporis
                    suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur? Quis autem vel eum iure reprehenderit qui in ea
                    voluptate velit esse quam nihil molestiae consequatur, vel
                    illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                  </p>
                </div>
                <div className="blog-share ">
                  <div className="share-blogs d-flex align-items-center">
                    <Link to="#">
                      <img alt="#" src={social06} />
                    </Link>
                    <span className="ms-2">2.8k</span>
                  </div>
                  <ul className="social-share nav">
                    <li>
                      <Link to="#">
                        <img alt="#" src={social01} />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img alt="#" src={social02} />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img alt="#" src={social03} />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img alt="#" src={social04} />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="list-add-blogs">
                  <ul className="nav">
                    <li># Ophthalmology</li>
                    <li># Beauty</li>
                    <li># Prevention</li>
                  </ul>
                </div>
              </article>
              <div className="widget author-widget ">
                <div className="authr-blog-group text-center">
                  <div className="authr-blg-img mb-2">
                    <img
                      className="avatar"
                     alt="#"
                      src={profiles03}
                    />
                  </div>
                  <h2>Markhay smith</h2>
                  <span>Dentist</span>
                  <p>
                    {" "}
                    Integer enim neque volutpat ac tincidunt vitae semper quis.
                    Orci sagittis eu volutpat odio facilisis mauris sit. Sed
                    risus ultricies tristique nulla aliquet enim tortor at
                    auctor.{" "}
                  </p>
                  <ul className="nav social-blk">
                    <li>
                      <Link to="#">
                        <img alt="#" src={iconsocial} />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img alt="#" src={iconsocial02} />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img alt="#" src={iconsocial03} />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img alt="#" src={iconsocial04} />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="widget blog-comments clearfix">
                <h3>Comments</h3>
                <ul className="comments-list">
                  <li>
                    <div className="comment">
                      <div className="comment-author">
                        <Link to="#">
                          <img
                            className="avatar"
                           alt="#"
                            src={profileavatar03}
                          />
                        </Link>
                      </div>
                      <div className="comment-block">
                        <div className="comment-by">
                          <div className="week-group">
                            <h5 className="blog-author-name">Diana Bailey</h5>
                            <span className="week-list">2 Weeks ago</span>
                          </div>
                          <span className="float-end">
                            <span className="blog-reply">
                              <Link to="#.">
                                <i className="fa fa-reply" /> Reply
                              </Link>
                            </span>
                          </span>
                        </div>
                        <p>
                          Integer enim neque volutpat ac tincidunt vitae semper
                          quis. Orci sagittis eu volutpat odio facilisis mauris
                          sit. Sed risus ultricies tristique nulla aliquet enim
                          tortor at auctor.{" "}
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="comment">
                      <div className="comment-author">
                        <Link to="#">
                          <img
                            className="avatar"
                           alt="#"
                            src={profileavatar04}
                          />
                        </Link>
                      </div>
                      <div className="comment-block">
                        <div className="comment-by">
                          <div className="week-group">
                            <h5 className="blog-author-name">Diana Bailey</h5>
                            <span className="week-list">2 Weeks ago</span>
                          </div>
                          <span className="float-end">
                            <span className="blog-reply">
                              <Link to="#.">
                                <i className="fa fa-reply" /> Reply
                              </Link>
                            </span>
                          </span>
                        </div>
                        <p>
                          Integer enim neque volutpat ac tincidunt vitae semper
                          quis. Orci sagittis eu volutpat odio facilisis mauris
                          sit. Sed risus ultricies tristique nulla aliquet enim
                          tortor at auctor.{" "}
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="comment">
                      <div className="comment-author">
                        <Link to="#">
                          <img
                            className="avatar"
                           alt="#"
                            src={profileavatar05}
                          />
                        </Link>
                      </div>
                      <div className="comment-block">
                        <div className="comment-by">
                          <div className="week-group">
                            <h5 className="blog-author-name">Diana Bailey</h5>
                            <span className="week-list">2 Weeks ago</span>
                          </div>
                          <span className="float-end">
                            <span className="blog-reply">
                              <Link to="#.">
                                <i className="fa fa-reply" /> Reply
                              </Link>
                            </span>
                          </span>
                        </div>
                        <p>
                          Integer enim neque volutpat ac tincidunt vitae semper
                          quis. Orci sagittis eu volutpat odio facilisis mauris
                          sit. Sed risus ultricies tristique nulla aliquet enim
                          tortor at auctor.{" "}
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Link className="col-md-4">
            <div className="widget post-widget">
              <div className="relat-head">
                <h5>Related Posts</h5>
                <Link to="#">Show All</Link>
              </div>
              <ul className="latest-posts">
                <li>
                  <div className="post-thumb">
                    <Link to="#">
                      <img
                        className="img-fluid"
                        src={blog7}
                       alt="#"
                      />
                    </Link>
                  </div>
                  <div className="post-info">
                    <div className="date-posts">
                      <h5>Health</h5>
                      <span className="ms-2">05 Sep 2022</span>
                    </div>
                    <h4>
                      <Link to="#">
                        Hydration or Moisturization – What to do this Winter?
                      </Link>
                    </h4>
                    <p>
                      {" "}
                      Read more in 10 Minutes
                      <i className="fa fa-long-arrow-right ms-2" />
                    </p>
                  </div>
                </li>
                <li>
                  <div className="post-thumb">
                    <Link to="#">
                      <img
                        className="img-fluid"
                        src={blog08}
                       alt="#"
                      />
                    </Link>
                  </div>
                  <div className="post-info">
                    <div className="date-posts">
                      <h5>Ophthalmology</h5>
                      <span className="ms-2">05 Sep 2022</span>
                    </div>
                    <h4>
                      <Link to="#">
                        Keep proper monitor distance and room lighting.
                      </Link>
                    </h4>
                    <p>
                      {" "}
                      Read more in 5 Minutes
                      <i className="fa fa-long-arrow-right ms-2" />
                    </p>
                  </div>
                </li>
                <li>
                  <div className="post-thumb">
                    <Link to="#">
                      <img
                        className="img-fluid"
                        src={blog09}
                       alt="#"
                      />
                    </Link>
                  </div>
                  <div className="post-info">
                    <div className="date-posts">
                      <h5>Safety</h5>
                      <span className="ms-2">05 Sep 2022</span>
                    </div>
                    <h4>
                      <Link to="#">
                        Keep Hand Sanitizers Away from Young Children
                      </Link>
                    </h4>
                    <p>
                      {" "}
                      Read more in 4 Minutes
                      <i className="fa fa-long-arrow-right ms-2" />
                    </p>
                  </div>
                </li>
                <li>
                  <div className="post-thumb">
                    <Link to="#">
                      <img
                        className="img-fluid"
                        src={blog10}
                       alt="#"
                      />
                    </Link>
                  </div>
                  <div className="post-info">
                    <div className="date-posts">
                      <h5>Ophthalmology</h5>
                      <span className="ms-2">05 Sep 2022</span>
                    </div>
                    <h4>
                      <Link to="#">
                        Hair Loss – Causes, Treatment and Preventions
                      </Link>
                    </h4>
                    <p>
                      {" "}
                      Read more in 10 Minutes
                      <i className="fa fa-long-arrow-right ms-2" />
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="widget tags-widget">
              <div className="relat-head">
                <h5>Tags</h5>
              </div>
              <ul className="tags">
                <li>
                  <Link to="#." className="tag">
                    # Endodontics (10)
                  </Link>
                </li>
                <li>
                  <Link to="#." className="tag">
                    # Endodontics (15)
                  </Link>
                </li>
                <li>
                  <Link to="#." className="tag">
                    # Neurology (70)
                  </Link>
                </li>
                <li>
                  <Link to="#." className="tag">
                    # Insurance (16)
                  </Link>
                </li>
                <li>
                  <Link to="#." className="tag">
                    # Dental (60)
                  </Link>
                </li>
                <li>
                  <Link to="#." className="tag">
                    # Neurology (70)
                  </Link>
                </li>
                <li>
                  <Link to="#." className="tag">
                    # Diabetes (10)
                  </Link>
                </li>
                <li>
                  <Link to="#." className="tag">
                    # Dermotology (15)
                  </Link>
                </li>
                <li>
                  <Link to="#." className="tag">
                    # Stress (25)
                  </Link>
                </li>
              </ul>
            </div>
            <div className="widget post-widget">
              <div className="relat-head">
                <h5>Most Reads</h5>
                <Link to="#">Show All</Link>
              </div>
              <ul className="latest-posts">
                <li>
                  <div className="post-thumb">
                    <Link to="#">
                      <img
                        className="img-fluid"
                        src={blog11}
                       alt="#"
                      />
                    </Link>
                  </div>
                  <div className="post-info">
                    <div className="date-posts">
                      <h5>Health</h5>
                      <span className="ms-2">05 Sep 2022</span>
                    </div>
                    <h4>
                      <Link to="#">
                        Hydration or Moisturization – What to do this Winter?
                      </Link>
                    </h4>
                    <p>
                      {" "}
                      Read more in 10 Minutes
                      <i className="fa fa-long-arrow-right ms-2" />
                    </p>
                  </div>
                </li>
                <li>
                  <div className="post-thumb">
                    <Link to="#">
                      <img
                        className="img-fluid"
                        src={blog12}
                       alt="#"
                      />
                    </Link>
                  </div>
                  <div className="post-info">
                    <div className="date-posts">
                      <h5>Ophthalmology</h5>
                      <span className="ms-2">05 Sep 2022</span>
                    </div>
                    <h4>
                      <Link to="#">
                        Hair Loss – Causes, Treatment and Preventions
                      </Link>
                    </h4>
                    <p>
                      {" "}
                      Read more in 5 Minutes
                      <i className="fa fa-long-arrow-right ms-2" />
                    </p>
                  </div>
                </li>
                <li>
                  <div className="post-thumb">
                    <Link to="#">
                      <img
                        className="img-fluid"
                        src={blog13}
                       alt="#"
                      />
                    </Link>
                  </div>
                  <div className="post-info">
                    <div className="date-posts">
                      <h5>Safety</h5>
                      <span className="ms-2">05 Sep 2022</span>
                    </div>
                    <h4>
                      <Link to="#">
                        Simple Changes That Lowered My Mom Blood Pressure
                      </Link>
                    </h4>
                    <p>
                      {" "}
                      Read more in 4 Minutes
                      <i className="fa fa-long-arrow-right ms-2" />
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="widget category-widget">
              <div className="relat-head mb-0">
                <h5> Categories</h5>
              </div>
              <ul className="categories">
                <li>
                  <Link to="#.">
                    <img
                      src={tag}
                      className="me-1"
                     alt="#"
                    />
                    Hydration or Moisturization (10)
                  </Link>
                </li>
                <li>
                  <Link to="#.">
                    <img
                      src={tag1}
                      className="me-1"
                     alt="#"
                    />
                    Ophthalmology (50)
                  </Link>
                </li>
                <li>
                  <Link to="#.">
                    <img
                      src={tag2}
                      className="me-1"
                     alt="#"
                    />
                    Blood Pressure (24)
                  </Link>
                </li>
                <li>
                  <Link to="#.">
                    <img
                      src={tag3}
                      className="me-1"
                     alt="#"
                    />
                    Corona Virus (32)
                  </Link>
                </li>
                <li>
                  <Link to="#.">
                    <img
                      src={tag4}
                      className="me-1"
                     alt="#"
                    />
                    Dental (15)
                  </Link>
                </li>
              </ul>
            </div>
          </Link>
          <div className="col-md-12">
            <div className="widget new-comment clearfix">
              <h3>Leave a Comment</h3>
              <form>
                <div className="row">
                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="form-group local-forms">
                      <label>
                        Name <span className="login-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter Name"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="form-group local-forms">
                      <label>
                        Email<span className="login-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter Email"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-12">
                    <div className="form-group local-forms">
                      <label>
                        Comments <span className="login-danger">*</span>
                      </label>
                      <textarea
                        className="form-control"
                        rows={3}
                        cols={30}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="remember-me">
                      <label className="custom_check mr-2 mb-0 d-inline-flex remember-me">
                        {" "}
                        Save my name, email, and website in this browser for the
                        next time I comment.
                        <input type="checkbox" name="radio" defaultChecked="" />
                        <span className="checkmark" />
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="doctor-submit text-end">
                      <button
                        type="submit"
                        className="btn btn-primary submit-form me-2"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="sidebar-overlay" data-reff="" />
</>

    </div>
  )
}

export default Blogdetails
