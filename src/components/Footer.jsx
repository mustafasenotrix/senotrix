import React from "react";
import mobile from "./images/mobile.png";
import email from "./images/email.png";
import facebook from "./images/facebook.png";
import twitter from "./images/twitter.png";
import linkedin from "./images/linkedin.png";
import instagram from "./images/instagram.png";

function Footer() {
  return (
    <div className="footer">
      <footer>
        <div class="row upperpart">
            <div class="col-lg-3">
                <p class="footertitle">Contact Info US</p>
                <p class="footertitle">Telephone</p>
                  <span class="contactdetails"><a href="tel:+1 888-557-3088"><img src={mobile} alt="" /> +1 888-557-3088</a></span>
                <p class="footertitle">US Support</p>
                  <span class="contactdetails"><a href="tel:+1 415 992 6416"><img src={mobile} alt="" /> +1 415 992 6416</a></span>
                <p class="footertitle">Email</p>
                  <span class="contactdetails"><a href="mailto: info@senotrix.com"><img src={email} alt="" /> info@senotrix.com</a></span>
            </div>
            <div class="col-lg-3">
                <p class="footertitle">Quick Links</p>
                <ul class="links">
                  <li><a href="https://senotrix.com/website-design/">Web Design</a></li>

                  <li><a href="https://senotrix.com/ppc-ads/">PPC Ads</a></li>

                  <li><a href="https://senotrix.com/social-media/">Social Media</a></li>

                  <li><a href="https://senotrix.com/business-listings/">Listings</a></li>

                  <li><a href="https://senotrix.com/business-listings/">SEO</a></li>

                  <li><a href="https://senotrix.com/about/">About Us</a></li>

                  <li><a href="https://senotrix.com/contact/">Contact</a></li>                                    
                </ul>
            </div>
            <div class="col-lg-3">
                <p class="footertitle">Contact Info UK</p>
                <p class="footertitle">UK Support</p>
                  <span class="contactdetails"><a href="tel:+44(0)203 950 9894"><img src={mobile} alt="" /> +44(0)203 950 9894</a></span>
                <p class="footertitle">Email</p>
                  <span class="contactdetails"><a href="mailto: info@senotrix.co.uk"><img src={email} alt="" /> info@senotrix.co.uk</a></span>
                  <span class="socialfooter">
                    <a href="https://www.facebook.com/senotrixltd" target="_blank">
                      <img src={facebook} alt="logo" />
                    </a>
                    <a href="https://twitter.com/senotrixltd" target="_blank">
                      <img src={twitter} alt="logo" />
                    </a>
                    <a href="https://www.linkedin.com/company/senotrixltd/" target="_blank">
                      <img src={linkedin} alt="logo" />
                    </a>
                    <a href="https://www.instagram.com/senotrixltd/" target="_blank">
                      <img src={instagram} alt="logo" />
                    </a>
                  </span>
              </div>
            <div class="col-lg-3">
                <p class="footertitle">Proud Partners</p>
            </div>
        </div>
        <div class="copyright">
          <div class="container">
            <p class="m-0 text-center text-white">
              2020 &copy; All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
