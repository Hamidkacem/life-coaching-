
import React, { useEffect } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import $ from "jquery";

const Navbar = () => {
  function animation() {
    var tabsNewAnim = $("#navbarSupportedContent");
    var activeItemNewAnim = tabsNewAnim.find(".active");
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth + "px",
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $("#navbarSupportedContent ul li").removeClass("active");
      $(this).addClass("active");
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        top: itemPosNewAnimTop.top + "px",
        left: itemPosNewAnimLeft.left + "px",
        height: activeWidthNewAnimHeight + "px",
        width: activeWidthNewAnimWidth + "px",
      });
    });
  }

  useEffect(() => {
    animation();
    $(window).on("resize", function () {
      setTimeout(function () {
        animation();
      }, 500);
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg">
      <NavLink className="navbar-brand navbar-logo" to="/" exact>
        Welcome
      </NavLink>

      <button
        className="navbar-toggler"
        onClick={function () {
          setTimeout(function () {
            animation();
          });
        }}
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars text-white"></i>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>

          <li className="nav-item active">
            <NavLink className="nav-link" id="a" to="/Profil" exact>
              <i className="fas fa-tachometer-alt"></i>Profil
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/PostBlogs" exact>
              <i className="far fa-address-book"></i>Create Blog
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/Feed" exact>
              <i className="far fa-clone"></i>Feed
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login" exact>
              <i className="far fa-chart-bar"></i>Survey
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/AboutUs" exact>
              <i className="far fa-copy"></i>Contact Us
            </NavLink>
          </li>
          
          <li className="nav-item" id='log'>
            <NavLink className="nav-link" to="/" exact>
              <i className="far fa-clone"></i>Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;

