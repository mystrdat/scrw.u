import Layout from '../constants/layout';

export default () =>
<section className="testimonials">
  <div>
    <q>I was very skeptical that an app could make wine recommendations worthy of an experienced sommelier, but Corkscrew has made a believer out of me.</q>
    <span><strong>Thierry Tomasin</strong> - Former Head Sommelier, Le Gavroche | Former Head of UK Sommelier Association</span>
  </div>
  <style jsx>{`
  section {
    color: #fff;
    background: ${Layout.gradients.burgundy};
    text-align: center;
    position: relative;
  }
  q {
    font-size: 30px;
  }
  span {
    position: absolute;
    bottom: 40px;
    opacity: 0.4;
  }
  `}</style>
</section>
