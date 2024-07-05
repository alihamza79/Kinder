import React from "react";
import { Link } from "react-router-dom";
import { baricon, baricon1, logo } from "./imagepath";

const Header = () => {


  const handlesidebar = () => {
    document.body.classList.toggle("mini-sidebar");
  };

  const handlesidebarmobilemenu = () => {
    document.body.classList.toggle("slide-nav");
    document.getElementsByTagName("html")[0].classList.toggle("menu-opened");
    document
      .getElementsByClassName("sidebar-overlay")[0]
      .classList.toggle("opened");
  };


  return (
    <div className="main-wrapper">
      <div className="header">
        <div className="header-left">
          <Link className="logo" >
            <img src={logo} width={35} height={35} alt="" /> <span>Eskino</span>
          </Link>
        </div>
        <Link id="toggle_btn" to="#" onClick={handlesidebar}>
          <img src={baricon} alt="" />
        </Link>
        <Link
          id="mobile_btn"
          className="mobile_btn float-start"
          to="#"
          onClick={handlesidebarmobilemenu}
        >
          <img src={baricon1} alt="" />
        </Link>

        <ul className="nav user-menu float-end">
          <li className="nav-item dropdown has-arrow user-profile-list">
            <Link
              to="#"
              className="dropdown-toggle nav-link user-link"
              data-bs-toggle="dropdown"
            >
              <div className="user-names">
                <h5>Ali Hamza </h5>
                <span>Admin</span>
              </div>
            </Link>
            <div className="dropdown-menu">
              <Link
                className="dropdown-item"
                to="#"
              >
                Logout
              </Link>
            </div>
          </li>
          <button  className="inline-flex items-center me-5 cursor-pointer mx-[-2px] my-4 bg-transparent border-0">
            <div className="relative w-11 h-6 bg-blue-800 rounded-full peer dark:bg-blue-900 peer-focus:ring-4 peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-600"></div>
          </button>
        </ul>

        <div className="dropdown mobile-user-menu float-end">
          <Link
            to="#"
            className="dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa-solid fa-ellipsis-vertical" />
          </Link>
          <div className="dropdown-menu dropdown-menu-end">
            <Link className="dropdown-item" to="#" >
              Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
