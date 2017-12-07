import Layout from '../constants/layout';

export default () =>
<footer>
  <div>
    <h2>Download the app</h2>
    <ul className="download-list">
      <li className="ios">
        <a href="#">Download Corkscrew for iOS</a>
      </li>
      <li className="android">
        <a href="#">Download Corkscrew for Android</a>
      </li>
    </ul>
    <ul className="social-list">
      <li className="twitter">
        <a href="#">Corkscrew on Twitter</a>
      </li>
      <li className="facebook">
        <a href="#">Corkscrew on Facebook</a>
      </li>
      <li className="instagram">
        <a href="#">Corkscrew on Instagram</a>
      </li>
    </ul>
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
    align-items: center;
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
  }
  `}</style>
</footer>
