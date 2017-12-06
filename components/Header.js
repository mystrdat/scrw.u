import Layout from '../constants/layout';

export default () =>
<header>
  <nav>
    <ul>
      <li>Corkscrew</li>
      <li>Features</li>
      <li>Restaurants</li>
      <li>Contact us</li>
    </ul>
  </nav>
  <style jsx>{`
  header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: ${Layout.headerHeight};
    background-color: #000;
    z-index: 100;
  }
  nav {
    max-width: ${Layout.contentWidth};
    height: 100%;
    margin: 0 auto;
  }
  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  li {
    color: #fff;
  }
  li:first-child {
    flex-grow: 1;
  }
  `}</style>
</header>
