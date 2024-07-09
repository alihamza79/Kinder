/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { blog, dashboard, doctor, doctorschedule, logout, menuicon04, menuicon06, menuicon08, menuicon09, menuicon10, menuicon11, menuicon12, menuicon14, menuicon15, menuicon16, patients, sidemenu } from './imagepath';
import Scrollbars from "react-custom-scrollbars-2";


const Sidebar = (props) => {
  const [sidebar, setSidebar] = useState("");
  const handleClick = (e, item, item1, item3) => {
    const div = document.querySelector(`#${item}`);
    const ulDiv = document.querySelector(`.${item1}`);
    e?.target?.className ? ulDiv.style.display = 'none' : ulDiv.style.display = 'block'
    e?.target?.className ? div.classList.remove('subdrop') : div.classList.add('subdrop');
  }

  useEffect(() => {
    if (props?.id && props?.id1) {
      const ele = document.getElementById(`${props?.id}`);
      handleClick(ele, props?.id, props?.id1);
    }
  }, [])


  const expandMenu = () => {
    document.body.classList.remove("expand-menu");
  };
  const expandMenuOpen = () => {
    document.body.classList.add("expand-menu");
  };
  return (
    <>
      <div className="sidebar" id="sidebar">
        <Scrollbars
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          autoHeight
          autoHeightMin={0}
          autoHeightMax="95vh"
          thumbMinSize={30}
          universal={false}
          hideTracksWhenNotNeeded={true}
        >
          <div className="sidebar-inner slimscroll">
            <div id="sidebar-menu" className="sidebar-menu"
              onMouseLeave={expandMenu}
              onMouseOver={expandMenuOpen}
            >
              <ul>
                {/* <li className="submenu" >
                  <Link to="#" id="menu-item" onClick={(e) => {

                    handleClick(e, "menu-item", "menu-items")
                  }}>
                    <span className="menu-side">
                      <img src={dashboard} alt="" />
                    </span>{" "}
                    <span> Dashboard </span> <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: sidebar === 'Dashboard' ? 'block' : "none" }} className='menu-items'>
                    <li>
                      <Link className={props?.activeClassName === 'admin-dashboard' ? 'active' : ''} to="/admin-dashboard">Admin Dashboard</Link>
                    </li>
                  </ul>
                </li> */}
                
                {/* Hero Section */}
                <li className="submenu">
                  <Link
                    to="#"
                    id="menu-item4"
                    onClick={(e) => handleClick(e, "menu-item4", "menu-items4")}
                  >
                    <span className="menu-side">
                      <img src={blog} alt="" />
                    </span>{" "}
                    <span>Hero Section</span> <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: "none" }} className="menu-items4">
                    <li>
                      <Link
                        className={
                          props?.activeClassName === "heroSection"
                            ? "active"
                            : ""
                        }
                        to="/landingpage/herosection"
                      >
                        Navbar
                      </Link>
                    </li>

                    {/* Carousels */}
                    <li>
                      <Link
                        className={
                          props?.activeClassName === "childEmergency"
                            ? "active"
                            : ""
                        }
                        to="/herocarousel"
                      >
                        Carousels
                      </Link>
                    </li>

                    {/* Information Cards */}
                    <li>
                      <Link
                        className={
                          props?.activeClassName === "courseContent"
                            ? "active"
                            : ""
                        }
                        to="/informationcard"
                      >
                      Information Cards
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* About Us */}

                <li className="submenu">
                  <Link
                    to="/aboutlist"
                    id="menu-item4"
                    onClick={(e) => handleClick(e, "menu-item4", "menu-items4")}
                  >
                    <span className="menu-side">
                      <img src={blog} alt="" />
                    </span>{" "}
                    <span>About Us</span> 
                  </Link>
                </li>

                {/* Services */}

              <li className="submenu">
                  <Link
                    to="/serviceheader"
                    id="menu-item4"
                    onClick={(e) => handleClick(e, "menu-item4", "menu-items4")}
                  >
                    <span className="menu-side">
                      <img src={blog} alt="" />
                    </span>{" "}
                    <span>Services</span> 
                  </Link>
                </li>

              {/* Team */}

              <li className="submenu">
                  <Link
                    to="/teamheader"
                    id="menu-item4"
                    onClick={(e) => handleClick(e, "menu-item4", "menu-items4")}
                  >
                    <span className="menu-side">
                      <img src={blog} alt="" />
                    </span>{" "}
                    <span>Team</span> 
                  </Link>
                </li>

               {/* Links */}
              
               <li className="submenu">
                  <Link
                    to="/linkheader"
                    id="menu-item4"
                    onClick={(e) => handleClick(e, "menu-item4", "menu-items4")}
                  >
                    <span className="menu-side">
                      <img src={blog} alt="" />
                    </span>{" "}
                    <span>Links</span> 
                  </Link>
                </li>
              
              {/* Blog */}

              <li className="submenu">
                  <Link to="#" id="menu-item11" onClick={(e) => handleClick(e, "menu-item11", "menu-items11")}>
                    <span className="menu-side">
                      <img src={blog} alt="" />
                    </span>{" "}
                    <span> Blog</span> <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: "none" }} className="menu-items11">
                    
                    <li>
                      <Link className={props?.activeClassName === 'blog-details' ? 'active' : ''} to="/blogview">
                        Blog View
                      </Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'add-blog' ? 'active' : ''} to="/blogview/addblog">Add Blog</Link>
                    </li>
                    
                  </ul>
                </li>


              </ul>
              <div className="logout-btn">
                <Link to="/login">
                  <span className="menu-side">
                    <img src={logout} alt="" />
                  </span>{" "}
                  <span>Logout</span>
                </Link>
              </div>
            </div>
          </div>
        </Scrollbars>
      </div>
    </>
  )
}
export default Sidebar
