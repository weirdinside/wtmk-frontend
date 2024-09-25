import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import spatula_icon from "../../assets/spatula_icon.png";
import whisk_icon from "../../assets/whisk_icon.png";
import pan_icon from "../../assets/pan_icon.png";
import chefhat_icon from "../../assets/chefhat_icon.png";

// if logged in, display another nav item called "favorites"
// that lists the favorite recipes

function Header({ setActiveModal, isLoggedIn }) {
  return (
    <header className="header">
      <div className="header__logo">
        <Link style={{ color: "black" }} to="/">
          <p className="header__logo_text">wtmk</p>
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
          <p className="header__nav_item">recipes</p>
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
