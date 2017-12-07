import Layout from '../constants/layout';

export default () =>
<section className="hero">
  <div>
    <h1>
      <span>The sommelier</span>
      <em>in your pocket.</em>
    </h1>
  </div>
  <style jsx>{`
  section {
    min-height: calc(100vh - ${Layout.headerHeight});
    background: url(static/hero.jpg) no-repeat 50% / cover;
  }
  section > div {
    min-height: inherit;
  }
  h1 {
    color: #fff;
    margin: 0;
    font-size: 100px;
    text-align: center;
  }
  h1 span {
    letter-spacing: 10px;
    text-transform: uppercase;
  }
  h1 em {
    display: block;
  }
  `}</style>
</section>
