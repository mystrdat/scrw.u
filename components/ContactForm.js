import Layout from '../constants/layout';

export default () =>
<form>
  <input type="text" placeholder="Name"/>
  <input type="text" placeholder="E-mail"/>
  <input type="text" placeholder="Subject"/>
  <textarea placeholder="Message"></textarea>
  <input type="submit" value="Send"/>
  <style jsx>{`
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 600px;
  }
  input[type=text], textarea {
    width: 100%;
    appearance: none;
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
    position: relative;
    color: #fff;
    border-bottom: 1px solid rgba(255,255,255,0.2);
    transition: border-color 200ms ease-in-out;
    margin-bottom: 15px;
  }
  input[type=text] {
    height: 50px;
  }
  input[type=text]::placeholder, textarea::placeholder {
    color: rgba(255,255,255,0.3);
  }
  input[type=text]:focus,
  textarea:focus {
    border-color: rgba(255,255,255,1);
  }
  textarea {
    padding: 20px 0;
    min-height: 180px;
    max-height: 500px;
    resize: vertical;
  }
  input[type=submit] {
    appearance: none;
    border: 0;
    background: ${Layout.colors.burgundy};
    color: #fff;
    height: 50px;
    border-radius: 4px;
    padding: 0 40px;
  }
  `}</style>
</form>
