import style from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <article className={style.article}>
          <h2 className={style.heading}>Try for free today</h2>
          <button className={style.button}>
            <p>Sign up free</p>
            <span> </span>
          </button>
        </article>
        <section className={style.section}>
          <img src="logo.svg" alt="Logo" className={style.logo} />
          <div className={style.socials}>
            <a href="https://www.instagram.com" className="fa-brands fa-instagram" aria-label="Instagram"></a>
            <a href="https://www.facebook.com" className="fa-brands fa-facebook" aria-label="Facebook"></a>
            <a href="https://www.twitter.com" className="fa-brands fa-twitter" aria-label="Twitter"></a>
            <a href="https://www.linkedin.com" className="fa-brands fa-linkedin" aria-label="LinkedIn"></a>
          </div>
          <ul className={style.list}>
            <li>
              <h3 className={style.subtitle}>Resources</h3>
              <a href="#usage" className={style.link}>Usage</a>
              <a href="#documentation" className={style.link}>Documentation</a>
              <a href="#support" className={style.link}>Support</a>
              <a href="#blog" className={style.link}>Blog</a>
            </li>
            <li>
              <h3 className={style.subtitle}>Company</h3>
              <a href="#about" className={style.link}>About Us</a>
              <a href="#careers" className={style.link}>Careers</a>
              <a href="#contact" className={style.link}>Contact</a>
              <a href="#press" className={style.link}>Press</a>
            </li>
            <li>
              <h3 className={style.subtitle}>Legal</h3>
              <a href="#privacy" className={style.link}>Privacy Policy</a>
              <a href="#terms" className={style.link}>Terms of Service</a>
              <a href="#cookies" className={style.link}>Cookie Policy</a>
              <a href="#compliance" className={style.link}>Compliance</a>
            </li>
            <li>
              <h3 className={style.subtitle}>Social Media</h3>
              <a href="https://www.instagram.com" className={style.link}>Instagram</a>
              <a href="https://www.facebook.com" className={style.link}>Facebook</a>
              <a href="https://www.twitter.com" className={style.link}>Twitter</a>
              <a href="https://www.linkedin.com" className={style.link}>LinkedIn</a>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
