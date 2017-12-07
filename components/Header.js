import React from 'react';

import Layout from '../constants/layout';

export default class Header extends React.Component {

  scrollTo(target) {
    if (target) {
      document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scroll({ top: 0, left: 0, behavior: 'smooth'});
    }
  }

  render() {
    return (
      <header>
      <nav>
        <ul>
          <li onClick={() => this.scrollTo()}><span className="corkscrew-logo">Corkscrew</span></li>
          <li onClick={() => this.scrollTo('.features')}>Features</li>
          <li onClick={() => this.scrollTo('.restaurants')}>Restaurants</li>
          <li onClick={() => this.scrollTo('.contact')}>Contact us</li>
        </ul>
      </nav>,
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
        padding: 0 ${Layout.padding};
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
        cursor: pointer;
        color: ${Layout.colors.grey}
        margin-left: 30px;
      }
      li:first-child {
        flex-grow: 1;
        margin-left: 0;
      }
      .corkscrew-logo {
        display: block;
        width: 110px;
        height: 20px;
        background: url(static/corkscrew-logo-white.svg) no-repeat 50% / contain;
        text-indent: -999px;
        overflow: hidden;
      }
      `}</style>
      </header>
    )
  }
}
