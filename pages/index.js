import Meta from '../components/Meta';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

export default () => [
  <Meta/>,
  <Header/>,
  <Main/>,
  <Footer/>,
  <style global jsx>{`
  html, body {
    width: 100%;
    height: 100%;
  }
  body {
    margin: 0;
  }
  ul {
    list-style: none;
  }
  `}</style>
]
