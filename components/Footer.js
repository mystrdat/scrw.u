import Layout from '../constants/layout';

export default () =>
<footer>
  <div>
    <h2>Download the app</h2>
    <ul className="download-list">
      <li>
        <a className="ios" title="Download Corkscrew for iOS" href="#">Download Corkscrew for iOS</a>
      </li>
      <li>
        <a className="android" title="Download Corkscrew for Android" href="#">Download Corkscrew for Android</a>
      </li>
    </ul>
    <ul className="social-list">
      <li>
        <a className="twitter" title="Corkscrew on Twitter" href="#">Corkscrew on Twitter</a>
      </li>
      <li>
        <a className="facebook" title="Corkscrew on Facebook" href="#">Corkscrew on Facebook</a>
      </li>
      <li>
        <a className="instagram" title="Corkscrew on Instagram" href="#">Corkscrew on Instagram</a>
      </li>
    </ul>
    <p>&copy; 2017 WhatWine Limited | <a href="#">Privacy Policy</a></p>
  </div>
  <style jsx>{`
  footer {
    height: 550px;
    max-width: ${Layout.siteWidth};
    margin: 0 auto;
  }
  footer > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: inherit;
    max-width: ${Layout.contentWidth};
    margin: 0 auto;
    padding: 90px ${Layout.padding} 0 620px;
    background: url(static/iphones-running-corkscrew.png) no-repeat 0 90px;
    overflow: auto;
  }
  h2 {
    font-size: 30px;
    font-weight: 400;
    margin: 0 0 50px 0;
  }
  ul {
    margin: 0 0 40px 0;
  }
  .download-list {
    display: flex;
    flex-direction: row;
  }
  .download-list li:first-child {
    margin-right: 10px;
  }
  .ios, .android {
    display: block;
    width: 162px;
    height: 48px;
    background: no-repeat center / 100% auto;
    text-indent: -999px;
    overflow: hidden;
  }
  .ios {
    background-image: url(static/store-apple.png);
  }
  .android {
    background-image: url(static/store-google.png);
  }
  .social-list {
    display: flex;
    flex-direction: row;
  }
  .social-list li:not(:last-child) {
    margin-right: 10px;
  }
  .twitter, .facebook, .instagram {
    display: block;
    width: 30px;
    height: 30px;
    background: no-repeat center / auto 18px;
    text-indent: -999px;
    overflow: hidden;
  }
  .twitter {
    background-image: url(static/logo-twitter.svg);
  }
  .facebook {
    background-image: url(static/logo-facebook.svg);
  }
  .instagram {
    background-image: url(static/logo-instagram.svg);
  }
  p {
    margin: 0;
  }
  p a {
    color: ${Layout.colors.burgundy};
    text-decoration: none;
  }
  `}</style>
</footer>
