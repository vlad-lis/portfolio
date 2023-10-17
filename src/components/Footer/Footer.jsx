import PropTypes from 'prop-types';
import { footerContent } from '../../utils/staticContent';

function Footer({ lang }) {
  const githubText =
    lang === 'En' ? footerContent.github_text_EN : footerContent.github_text_RU;

  return (
    <footer className='footer'>
      <div className='footer__content'>
        <div className='footer__container'>
          <p className='footer__text'>{footerContent.year}</p>
          <a
            className='footer__text footer__link'
            href={footerContent.github_link}
            target='_blank'
            rel='noreferrer'
          >
            {githubText}
          </a>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  lang: PropTypes.string,
};

Footer.defaultProps = {
  lang: '',
};

export default Footer;
