import React from "react";
import "./CssFiles/Footer.css";

import {
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa6";

import { GoMail } from "react-icons/go";
import NavLogo from "../assets/tree.png";

function Footer() {
  return (
    <div className="footer_wraper">
      <div className="footer_container">
        {/* Left: Logo + Copyright */}
        <div>
          <div className="logo_containerF">
            <img src={NavLogo} className="logo_img" alt="Logo" />
            <div className="logo">
              <span className="nat">Nat</span>
              <span className="ours">ours</span>
            </div>
          </div>
          <span>©Prashant. All rights reserved.</span>
        </div>

        {/* Middle: Footer Links */}
        <div className="footer_links">
          <div className="footer_items">
            <h3>About</h3>
            <span>Company</span>
            <span>Team</span>
            <span>Careers</span>
          </div>
          <div className="footer_items">
            <h3>Terms & Uses</h3>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookies</span>
          </div>
          <div className="footer_items">
            <h3>Partnerships</h3>
            <span>Affiliate</span>
            <span>Travel Agents</span>
            <span>Corporate</span>
          </div>
        </div>

        {/* Right: Payment Channels */}
        <div className="paymentChannels">
          <h3>Payment channels</h3>
          <div>
            <img
              src="https://res.klook.com/image/upload/fl_lossy.progressive,w_160,h_96,c_fit,q_100/v1698376460/UED_new/Foundation/Payment/Visa/Payment_Visa_70_png.webp"
              alt="visa"
            />
            <img
              src="https://res.klook.com/image/upload/fl_lossy.progressive,w_160,h_96,c_fit,q_100/v1575878925/%E6%94%AF%E4%BB%98%E6%96%B9%E5%BC%8FWeb/credit-mastercard.webp"
              alt="mastercard"
            />
            <img
              src="https://res.klook.com/image/upload/fl_lossy.progressive,w_160,h_96,c_fit,q_100/v1624503441/ued/Payment%20Method/methed-Amex_Web.webp"
              alt="amex"
            />
            <img
              src="https://res.klook.com/image/upload/fl_lossy.progressive,w_160,h_96,c_fit,q_100/v1646105892/temur3r3grosalzivths.webp"
              alt="gpay"
            />
            <img
              src="https://res.klook.com/image/upload/fl_lossy.progressive,w_160,h_96,c_fit,q_100/v1646105893/nj8uvkwep875hqcta2dh.webp"
              alt="paytm"
            />
          </div>
        </div>
      </div>

      {/* Bottom: Social Icons */}

      <div className="social_icons_container">
        <a
          href="https://www.instagram.com/prashant_rajput732"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/918789601947"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://www.linkedin.com/in/prashant-singh-266344196/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:prashantsingh113113@gmail.com"
        >
          <GoMail />
        </a>
      </div>
    </div>
  );
}

export default Footer;
