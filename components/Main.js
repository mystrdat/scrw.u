import Hero from './Hero';
import Features from './Features';
import Testimonials from './Testimonials';
import Restaurants from './Restaurants';
import Contact from './Contact';

import Layout from '../constants/layout';

export default () =>
<main>
  <Hero/>
  <Features/>
  <Testimonials/>
  <Restaurants/>
  <Contact/>
  <style global jsx>{`
  main {
    margin-top: ${Layout.headerHeight};
  }
  section {
    max-width: ${Layout.siteWidth};
    margin: 0 auto;
  }
  section > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: ${Layout.contentWidth};
    margin: 0 auto;
    padding: 150px ${Layout.padding};
    overflow: auto;
  }
  section h2 {
    align-self: flex-start;
    font-size: 80px;
    position: relative;
    margin: 0 0 80px 0;
  }
  section h2:before {
    position: absolute;
    left: 0;
    bottom: calc(100% + ${Layout.padding});
    font-size: 24px;
  }
  section .description {
    display: flex;
    flex-direction: row;
  }
  section .description strong {
    flex: 1 0 340px;
    max-width: 40%;
    text-align: right;
    padding-right: 40px;
    font-size: 20px;
    overflow: hidden;
  }
  section .description strong span {
    position: relative;
  }
  section .description strong span:before {
    content: '';
    width: 340px;
    height: 5px;
    position: absolute;
    right: calc(100% + ${Layout.padding});
    top: 9px;
    background-color: ${Layout.colors.burgundy};
  }
  section .description p {
    padding-left: 40px;
    margin: 0;
    font-size: 20px;
  }
  `}</style>
</main>
