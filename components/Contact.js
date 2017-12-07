import ContactForm from './ContactForm'

import Layout from '../constants/layout';

export default () =>
<section className="contact">
  <div>
    <h2>Feedback, suggestions, questions or praise?</h2>
    <div className="description">
      <strong><span>Contact us</span></strong>
      <p>Feedback, suggestions, question or praise? We’d love to hear from you! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor arcu id tristique blandit. Mauris lacus eros, scelerisque ac lectus vel, feugiat varius quam.</p>
    </div>
    <ContactForm/>
  </div>
  <style jsx>{`
  section {
    color: #fff;
    background: ${Layout.gradients.burgundy};
  }
  h2:before {
    content: '3';
  }
  `}</style>
</section>
