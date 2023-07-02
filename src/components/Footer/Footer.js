import { footerContent } from '../../utils/staticContent';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__container">
          <p className="footer__text">{footerContent.year}</p>
          <a className="footer__text footer__link" href={footerContent.github_link} target="_blank" rel="noreferrer">{footerContent.github_text}</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
