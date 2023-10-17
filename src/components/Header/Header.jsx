import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { navLinksEN, navLinksRU } from '../../utils/staticContent';

function Header({ lang, onLanguageChange, isLangPopupOpen, onLangPopupClick }) {
  const linkClassMovies = (navData) =>
    navData.isActive ? 'header__link header__link_active' : 'header__link';
  const langPopupClass = isLangPopupOpen
    ? 'header__lang-popup'
    : 'header__lang-popup_hidden';
  const navLinks = lang === 'En' ? navLinksEN : navLinksRU;

  return (
    <header className='header'>
      <div className='header__content'>
        <div className='header__lang-container'>
          <button className='header__lang' onClick={onLangPopupClick}>
            <div className='header__lang-icon' />
            <p className='header__lang-chosen'>{lang}</p>
          </button>
          <div className={langPopupClass}>
            <button
              className='header__lang-choice'
              onClick={() => onLanguageChange('En')}
            >
              English
            </button>
            <button
              className='header__lang-choice'
              onClick={() => onLanguageChange('Ru')}
            >
              Русский
            </button>
          </div>
        </div>

        <div className='header__nav-container'>
          <nav className='header__nav'>
            <NavLink className={linkClassMovies} to='/'>
              {navLinks.projects}
            </NavLink>
            <NavLink className={linkClassMovies} to='/about'>
              {navLinks.about}
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  onLanguageChange: PropTypes.func,
  lang: PropTypes.string,
  isLangPopupOpen: PropTypes.bool,
  onLangPopupClick: PropTypes.func,
};

Header.defaultProps = {
  onLanguageChange: () => {},
  lang: '',
  isLangPopupOpen: false,
  onLangPopupClick: () => {},
};

export default Header;
