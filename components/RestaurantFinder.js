import Layout from '../constants/layout';

export default () =>
<section className="restaurant-finder">
  <div>
    <div className="restaurant-list">
      <div className="search-container">
        <h3>Restaurants</h3>
        <input type="text" placeholder="Search for restaurant" />
      </div>
      <div className="list-container">
        <ul>
          <li>
            <span className="name">Angelus</span>
            <span className="address">4 Bathurst Street, London</span>
          </li>
          <li>
            <span className="name">Angelus</span>
            <span className="address">4 Bathurst Street, London</span>
          </li>
          <li className="active">
            <span className="name">Angelus</span>
            <span className="address">4 Bathurst Street, London</span>
          </li>
          <li>
            <span className="name">Angelus</span>
            <span className="address">4 Bathurst Street, London</span>
          </li>
          <li>
            <span className="name">Angelus</span>
            <span className="address">4 Bathurst Street, London</span>
          </li>
          <li>
            <span className="name">Angelus</span>
            <span className="address">4 Bathurst Street, London</span>
          </li>
          <li>
            <span className="name">Angelus</span>
            <span className="address">4 Bathurst Street, London</span>
          </li>
          <li>
            <span className="name">Angelus</span>
            <span className="address">4 Bathurst Street, London</span>
          </li>
          <li>
            <span className="name">Angelus</span>
            <span className="address">4 Bathurst Street, London</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="map-container">
      <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyANi07AswxFy5zzm99Itf9w2N65nZxb7ek&q=London" allowfullscreen></iframe>
    </div>
  </div>
  <style jsx>{`
  section {
    max-width: ${Layout.contentMaxWidth};
  }
  section > div {
    height: 900px;
    max-width: 100%;
    max-height: calc(100vh - ${Layout.headerHeight});
    flex-direction: row;
    padding: 0;
    overflow: visible;
  }
  .restaurant-list {
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 100%;
  }
  .search-container {
    background-color: #fcfcfc;
    padding: 40px 40px 30px;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  }
  .search-container h3 {
    font-size: 30px;
    margin: 0 0 20px 0;
  }
  .search-container input {
    appearance: none;
    border: none;
    width: 100%;
    height: 40px;
    background-color: #efefef;
    padding: 0 15px;
    border-radius: 4px;
  }
  .search-container input::placeholder {
    color: rgba(0,0,0,0.5);
  }
  .list-container {
    flex: 1;
    overflow-y: auto;
    will-change: scroll-position;
    -webkit-overflow-scrolling: touch;
  }
  .list-container ul {
    display: flex;
    flex-direction: column;
    padding-left: 40px;
  }
  .list-container li {
    position: relative;
    padding: 40px 40px 40px 0;
    overflow: hidden;
    cursor: pointer;
  }
  .list-container li:before {
    content: '';
    display: block;
    width: 12px;
    height: 12px;
    position: absolute;
    right: 40px;
    top: 50%;
    margin-top: -6px;
    background: url(static/icon-chevron.svg) no-repeat 50% / auto 100%;
    opacity: 0.3;
    transition: all 200ms ease-in-out;
  }
  .list-container li:hover:before,
  .list-container li.active:before {
    transform: translateX(5px);
    opacity: 1;
  }
  .list-container li:after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    transform: translateX(4px);
    transition: transform 200ms ease-in-out;
    background-color: ${Layout.colors.burgundy};
  }
  .list-container li.active:after {
    transform: translateX(0);
  }
  .list-container li:not(:last-child) {
    border-bottom: 1px solid #e1e1e1;
  }
  .name {
    display: block;
    font-weight: 600;
    margin-bottom: 5px;
  }
  .map-container {
    flex: 1;
    height: 100%;
  }
  .map-container iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
  `}</style>
</section>
