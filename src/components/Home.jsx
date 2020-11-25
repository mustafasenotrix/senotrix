import React from "react";
import section1 from "./images/section1.png";
import section2 from "./images/section2.png";
import section3 from "./images/section3.png";
import section4 from "./images/section4.png";
import comment from "./images/comment.png";
import digitalmarketing from "./images/digitalmarketing.png";
import businesslisting from "./images/businesslisting.png";
import tick from "./images/tick.png";


function Home() {
  return ( 
    <div className="home">
      <div class="container-fuid">
        <div class="row section1 align-items-center">
          <div class="col-lg-12">
            <h1>Digital Marketing For <br/>
              <span>Cleaning Companies</span>
            </h1>
            <a href="#" class="button">Read More</a>
          </div>
        </div>

        <div class="row section2 align-items-center">
          <div class="col-lg-1"></div>
          <div class="col-lg-5" id="leftcontent">
            <span>PPC ADS</span>
            <h2>Drive more leads to your business</h2>
            <a href="#" class="customlink">Learn More ></a>
          </div>
          <div class="col-lg-5" id="rightcontent">
              <img src={section1} alt="ppcads" />
          </div>
          <div class="col-lg-1"></div>          
        </div>

        <div class="row section3 align-items-center">
          <div class="col-lg-1"></div>
          <div class="col-lg-5" id="leftcontent">
            <span>WEBSITE DESIGN</span>
            <h2>Stand out from the crowd</h2>
            <a href="#" class="customlink">Learn More > </a>
          </div>
          <div class="col-lg-5" id="rightcontent">
          <img src={section2} alt="website design" />
          </div>
          <div class="col-lg-1"></div>          
        </div>

        <div class="row section4 align-items-center">
          <div class="col-lg-1"></div>
          <div class="col-lg-5" id="leftcontent">
            <span>SOCIAL MEDIA</span>
            <h2>Engage with your audience</h2>
            <a href="#" class="customlink">Learn More ></a>
          </div>
          <div class="col-lg-5" id="rightcontent">
          <img src={section3} alt="social media" />
          </div>
          <div class="col-lg-1"></div>          
        </div>

        <div class="row section5 align-items-center">
          <div class="col-lg-1"></div>
          <div class="col-lg-5" id="leftcontent">
            <span>FREE ONLINE TOOL</span>
            <h2>Check your SEO score for free</h2>
            <a href="#" class="customlink">Learn More ></a>
          </div>
          <div class="col-lg-5" id="rightcontent">
          <img src={section4} alt="seo" />
          </div>
          <div class="col-lg-1"></div>          
        </div>

        <div class="row section6 align-items-center">
          <div class="col-lg-3" id="left">
            <img src={comment} alt="" />
            <h3>Free <span style={{color: "#6648F6"}}>121</span> audit</h3>
            <p>1-2-1 marketing audit via video call, from our friendly agency team in Leeds</p>
            <a href="#" class="customlink">Arrange a 1-2-1 ></a>
          </div>
          <div class="col-lg-3" id="center">
            <img src={digitalmarketing} alt="" />
            <h3><span style={{color: "#F79629"}}>DIY</span> Digital marketing</h3>
            <p>Learn how to easily improve your own online presence, only with Senotrix</p>
            <a href="#" class="customlink">Learn more ></a>
          </div>
          <div class="col-lg-3" id="right">
            <img src={businesslisting} alt="" />
            <h3>Free <span style={{color: "#10C0CA"}}> Business listings</span></h3>
            <p>Get listed across network of directories and Yahoo local, only with Senotrix</p>
            <a href="#" class="customlink">Get started ></a>
          </div>     
        </div>
        <div class="calltoaction align-items-center">
            <h2>Need help? Contact our friendly team</h2>
            <button type="button">Contact us</button>
        </div>
        <div class="row prefooter">
          <div class="col-lg-3" id="first">
            <span>Why Senotrix?</span>
          </div>
          <div class="col-lg-3">
            <span><img src={tick} alt="" /> Full Transparency</span>
            <p>Online dashboard tracking phone call enquiries</p>
          </div>
          <div class="col-lg-3">
            <span><img src={tick} alt="" /> Trusted & Endorsed</span>
            <p>By the world's most popular search engines</p>
          </div>
          <div class="col-lg-3">
            <span><img src={tick} alt="" /> Highly Rated</span>
            <p>4.6 rating on TrustPilot and thousands of customers</p>
          </div>
        </div>                 
      </div>
    </div>
  );
}

export default Home;