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
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  `}</style>,
  <style global jsx>{`
  html, body {
    width: 100%;
    height: 100%;
  }
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
  *, *:before, *:after {
    box-sizing: border-box;
  }
  ul {
    list-style: none;
    padding-left: 0;
  }
  `}</style>
]
