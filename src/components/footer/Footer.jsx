import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col logo-col">
          <div className="footer-logo">LOGO</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam.</p>
          <div className="footer-socials">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fas fa-times"></i></a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>About Us</li>
            <li>Investment Plan</li>
            <li>Services</li>
            <li>Features</li>
            <li>Calculators</li>
            <li>Different Funds</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>Mutual Fund</li>
            <li>Insurance</li>
            <li>PMS</li>
            <li>Retirement Planning</li>
            <li>Fixed Deposits</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Get in Touch</h4>
          <p><strong>Email</strong><br />company@gmail.com</p>
          <p><strong>Phone</strong><br />00 12345 67890</p>
          <p><strong>Address</strong><br />XYZ City</p>
        </div>
      </div>

      <div className="footer-amfi">
        <p><span>Company's Name</span> is an AMFI Registered Mutual Fund Distributor.</p>
      </div>

      <div className="footer-links">
        <a href="#">Risk Factors</a> | 
        <a href="#">Terms & Conditions</a> | 
        <a href="#">SID/SAI/KIM</a> | 
        <a href="#">Code of Conduct</a> | 
        <a href="#">SEBI Circulars</a> | 
        <a href="#">Privacy Policy</a>
      </div>

      <div className="footer-disclaimer">
        <p><strong>Disclaimer:</strong> Mutual Fund investments are subject to market risks... [you can keep full text or short here]</p>
        <p><strong>Company's Name</strong> makes no warranties or representations...</p>
      </div>

      <div className="footer-bottom">
        <span>© 2025 CompanyName</span>
        <span>Designed & Developed by <a href="#">REDVision Global Technologies</a></span>
      </div>
    </footer>
  );
};

export default Footer;
