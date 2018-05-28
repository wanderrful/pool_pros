import * as React from "react";
import Content from "./Content";

import "./App.css";



const HeaderTop = (props: {bShowMobile: boolean}) => (
  <div id="header_top" className={props.bShowMobile ? "mobile_only" : "desktop_only"}>
    <ul>
      <li>Dealers and Distributors</li>
      <li className="logo mobile_only">|</li>
      <li>Commercial Service <img src="/assets/action-commercial-icon.png" className="icon" /></li>
    </ul>
  </div>
);

const Header = () => (
  <header>
    <HeaderTop bShowMobile={false} />

    <div id="header_bottom">
      <img src="/assets/pool-pros-logo.png" id="header_logo" />

      <ul id="header_links" className="desktop_only">
        <li><b>Pools & Spas</b></li>
        <li><b>Supplies</b></li>
        <li><b>Resources</b></li>
        <li><b>Services</b></li>
      </ul>

      <div className="btn_find desktop_only">
        <img src="/assets/location-icon.png" className="icon" />
        Find a Pool Pro
      </div>
      <div className="btn_find mobile_only">
        <img src="/assets/location-icon.png" className="icon" />
        FIND A PRO
      </div>

      <img src="/assets/menu-icon-mobile.png" id="settings_button" className="mobile_only" />
    </div>

    <img src="/assets/water-image.png" id="header_bar" />
  </header>
);



const Footer = () => (
  <footer>
    <div id="footer_top">
      <img src="/assets/pool-pros-logo-footer.png" id="footer_logo" />

      <div id="footer_connect">
        <b>CONNECT WITH US</b>
        <ul>
          <li><img src="/assets/twitter-icon.png" className="icon" /></li>
          <li><img src="/assets/facebook-icon.png" className="icon" /></li>
          <li><img src="/assets/youtube-icon.png" className="icon" /></li>
        </ul>
      </div>
    </div>

    <div id="footer_bottom">
        <HeaderTop bShowMobile={true} />
        <hr />
      <ul id="footer_legal">
        <li>© 2017 Pool Pros</li>
        <li className="logo">|</li>
        <li>Privacy Policy</li> 
        <li className="logo">|</li>
        <li>Terms and Conditions</li>
      </ul>
    </div>
  </footer>
);

const App = () => (
  <>
    <Header />
    <Content />
    <Footer />
  </>
);



export default App;