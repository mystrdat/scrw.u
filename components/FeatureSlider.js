import FeaturePagination from './FeaturePagination';

import Layout from '../constants/layout';

export default () =>
<section className="feature-slider">
  <div>
    <div className="view-container">
      <ul>
        <li className="view view-1 active"></li>
        <li className="view view-2">view 2</li>
        <li className="view view-3">view 3</li>
        <li className="view view-4">view 4</li>
        <li className="view view-5">view 5</li>
      </ul>
    </div>
    <FeaturePagination/>
  </div>
  <style jsx>{`
  section > div {
    position: relative;
    max-width: ${Layout.contentMaxWidth};
    padding: 50px 200px;
  }
  .view-container {
    position: relative;
    max-width: 100%;
    width: ${Layout.contentWidth};
    height: 1000px;
    margin: 0 auto;
  }
  .view {
    position: absolute;
    left: 0;
    top: 0;
    background-color: #fff;
    width: 100%;
    height: 100%;
  }
  .view.active {
    z-index: 1;
  }
  .view-1 {
    background-image: url(static/features/view1.png);
    background-repeat: no-repeat;
    background-position: 50%;
  }
  `}</style>
</section>
