import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="f-container">
      <div className="f-row">
        <div className="f-col">
          <img src="/images/logo/logo.png" alt="" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="f-col">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="f-col">
          <h2>Category</h2>
          <ul>
            <li>
              <NavLink to="/">Men</NavLink>
            </li>
            <li>
              <NavLink to="/shop">Women</NavLink>
            </li>
            <li>
              <NavLink to="/about">Kids</NavLink>
            </li>
          </ul>
        </div>
        <div className="f-col">
            <h2>Stay in touch with us</h2>
          <div className="socials">
            <a href="/"> <img src="/images/socials/facebook.png" alt="" /></a>
            <a href="/"><img src="/images/socials/instagram.png" alt="" /></a>
            <a href="/"><img src="/images/socials/twitter.png" alt="" /></a>
            <a href="/"><img src="/images/socials/youtube.png" alt="" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
