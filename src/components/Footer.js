import { FaInstagramSquare, FaFacebookSquare, FaTwitterSquare} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="main_footer">
      <div className="footer_top">
        <h1>MA</h1>
        <div className="footer_right">
          <div>
            <h3>Help</h3>
            <p>FAQ</p>
            <p>Return Policy</p>
            <p>Accessibility</p>
          </div>

          <div>
            <h3>Contact Us</h3>
            <p>Location</p>
            <p>Email</p>
            <p>Telephone</p>
          </div>
        </div>
      </div>

      <div className="footer_bottom">
        <p>Copyright &copy; 2022 Ma, Inc. All Right Reserved</p>

        <div className="socials">
          <FaTwitterSquare
            size="40px"
            style={{ padding: "1%" }}
            onClick={() => window.open("https://www.google.rw", "_blank")}
          />

          <FaFacebookSquare
            size="40px"
            style={{ padding: "1%" }}
            onClick={() => window.open("https://www.google.rw", "_blank")}
          />

          <FaInstagramSquare
            size="40px"
            style={{ padding: "1%" }}
            onClick={() => window.open("https://www.google.rw", "_blank")}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
