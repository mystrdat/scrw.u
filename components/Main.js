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
    overflow: auto;
  }
  `}</style>
</main>
