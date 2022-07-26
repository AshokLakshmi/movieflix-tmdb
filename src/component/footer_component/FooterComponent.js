import "./footer.css";
import TMDBLogo from "../../images/tmdblogo.svg";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";

function FooterComponent() {
  return (
    <div className="footer">
      <div className="footer-left ">
        <p className="about">
          <span> MovieFlix</span>
        </p>
        <div className="icons">
          <a href="https://www.instagram.com/mern__developer/" target="_blank">
            <AiFillInstagram />
          </a>
          <a href="https://github.com/AshokLakshmi" target="_blank">
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ashok-rawat-aaa667205/"
            target="_blank"
          >
            <AiFillLinkedin />
          </a>
        </div>
      </div>
      <div className="footer-center">
        <div>
          <p>
            <span> Matiyari Road, Chinhat</span> Lucknow, India
          </p>
        </div>
        <div>
          <i className="fa fa-phone"></i>
          <p> (+91) 8299 008 0**</p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="#"> rawatashu44@gmail.com</a>
          </p>
        </div>
      </div>
      <div className="footer-right">
        <h2>
          <img src={TMDBLogo} alt="tmdb-logo" />
        </h2>
        <p className="menu">
          <Link to="/"> Home</Link> | <Link to="/movies"> Movies</Link> |
          <Link to="/series"> Series</Link> | <Link to="/about"> About</Link> |
          <Link to="/contact"> Contact</Link>
        </p>
        <p className="name">Develop by Ashok Rawat &copy; 2022</p>
      </div>
    </div>
  );
}

export default FooterComponent;
