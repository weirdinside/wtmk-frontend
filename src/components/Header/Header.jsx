import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import spatula_icon from "../../assets/spatula_icon.png";
import whisk_icon from "../../assets/whisk_icon.png";
import pan_icon from "../../assets/pan_icon.png";
import chefhat_icon from "../../assets/chefhat_icon.png";
import { useState, useEffect } from "react";

function Header({ setActiveModal, isLoggedIn }) {
  const [sandwichActive, setSandwichActive] = useState(false);
  const [activeClass, setActiveClass] = useState("");

  function toggleMenu() {
    if (activeClass === "active") {
      setSandwichActive(false);
      return setActiveClass("");
    }
    if (activeClass === "") {
      setSandwichActive(true);
      return setActiveClass("active");
    }
  }

  function closeMenu(){
    setSandwichActive(false);
    return setActiveClass('');
  }

  return (
    <header className="header">
        <div
          onClick={toggleMenu}
          className={`header__sandwich_button ${activeClass}`}
        >
          <div className={`header__sandwich_button_seg1 ${activeClass}`}></div>
          <div className={`header__sandwich_button_seg2 ${activeClass}`}></div>
          <div className={`header__sandwich_button_seg3 ${activeClass}`}></div>
        </div>
      <div
        className={`header__sandwich ${activeClass}`}
      >
        <nav className="header__sandwich_nav">
          <Link to="/recipes" style={{ color: "black" }}>
            <p onClick={closeMenu} className="header__sandwich_nav_item">recipe finder</p>
          </Link>
          <Link to="/about" style={{ color: "black" }}>
            <p onClick={closeMenu} className="header__sandwich_nav_item">about</p>
          </Link>
          <div className="header__sandwich_user-actions">
            <button
              onClick={() => {
                setActiveModal("login");
                toggleMenu();
              }}
              className="header__sandwich_login"
            >
              sign in
            </button>
            <button
              onClick={() => {
                setActiveModal("register");
              }}
              className="header__sandwich_register"
            >
              register
            </button>
          </div>
        </nav>
      </div>
      <div className="header__logo">
        <Link style={{ color: "black" }} to="/">
          <p onClick={sandwichActive ? toggleMenu : null} className="header__logo_text">wtmk</p>
        </Link>
        <div className="header__logo_border"></div>
        <div className="header__logo_item header__item_bottom">~</div>
        <img
          className="header__logo_item header__item_spatula"
          src={spatula_icon}
        ></img>
        <img
          className="header__logo_item header__item_chef-hat"
          src={chefhat_icon}
        ></img>
        <img
          className="header__logo_item header__item_whisk"
          src={whisk_icon}
        ></img>
        <img
          className="header__logo_item header__item_pan"
          src={pan_icon}
        ></img>
        <div className="header__logo_item header__item_qm">?</div>
      </div>

      <nav className="header__nav">
        {isLoggedIn ? (
          <Link style={{ color: "black" }} to="/favorites">
            <p className="header__nav_item">my favorites</p>
          </Link>
        ) : null}

        <Link style={{ color: "black" }} to="/recipes">
          <p className="header__nav_item">recipe finder</p>
        </Link>

        <Link style={{ color: "black" }} to="/about">
          <p className="header__nav_item">about</p>
        </Link>
      </nav>
      <button
        onClick={() => {
          setActiveModal("login");
        }}
        className="header__login-button"
      >
        sign in
      </button>
    </header>
  );
}

export default Header;
