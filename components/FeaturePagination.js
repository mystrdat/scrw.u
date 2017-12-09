import Layout from '../constants/layout';

export default () =>
<div className="pagination">
  <ul>
    <li>
      <span className="circle"></span>
      <span className="label">Feature 1</span>
    </li>
    <li>
      <span className="circle"></span>
      <span className="label">Feature 2</span>
    </li>
    <li className="active">
      <span className="circle"></span>
      <span className="label">Feature 3</span>
    </li>
    <li>
      <span className="circle"></span>
      <span className="label">Feature 4</span>
    </li>
    <li>
      <span className="circle"></span>
      <span className="label">Feature 5</span>
    </li>
  </ul>
  <style jsx>{`
  .pagination {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
  ul {
    display: flex;
    flex-direction: column;
    margin: 0;
  }
  li {
    height: 24px;
    line-height: 24px;
    margin: 2px 0;
    padding-left: 64px;
    position: relative;
    cursor: pointer;
    overflow: hidden;
  }
  .circle {
    display: block;
    width: 14px;
    height: 14px;
    border: 2px solid #fff;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: ${Layout.colors.greyLight};
    border-radius: 50%;
    z-index: 1;
    transition: all 200ms linear;
    will-change: border-color;
  }
  .label {
    display: block;
    position: relative;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 600;
    transform: translateX(-10px) scale(1);
    transform-origin: 0 50%;
    transition: all 200ms linear;
    opacity: 0.2;
    will-change: opacity, transform;
  }
  .label:before {
    content: '';
    display: block;
    width: 30px;
    height: 2px;
    position: absolute;
    right: calc(100% + 20px);
    top: 50%;
    transform: translateY(-50%);
    background-color: #000;
    transition: all 200ms linear;
    will-change: opacity;
    opacity: 0;
  }
  /* Hover state */
  li:hover .circle {
    border-color: rgba(0,0,0,0.4);
  }
  li:hover .label {
    opacity: 0.4;
    transform: translateX(0);
  }
  li:hover .label:before {
    opacity: 1;
  }
  /* Active state */
  .active .circle {
    border-color: #000;
  }
  .active .label {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
  .active .label:before {
    opacity: 1;
  }
  `}</style>
</div>
