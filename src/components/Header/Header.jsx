import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useEffect, useRef } from 'react'; // Import useEffect and useRef
import { navLinksEN, navLinksRU } from '../../utils/staticContent';

function Header({
  lang,
  onLanguageChange,
  isLangPopupOpen,
  onLangPopupClick,
  onPopupClose,
}) {
  const linkClassMovies = (navData) =>
    navData.isActive ? 'header__link header__link_active' : 'header__link';

  const langPopupClass = isLangPopupOpen
    ? 'header__lang-popup'
    : 'header__lang-popup_hidden';
  const navLinks = lang === 'En' ? navLinksEN : navLinksRU;

  // ref to the language popup
  const langPopupRef = useRef(null);

  // close language popup on escape keydown
  useEffect(() => {
    const handleEscapeKeyPress = (e) => {
      if (e.key === 'Escape') {
        onPopupClose();
      }
    };

    window.addEventListener('keydown', handleEscapeKeyPress);

    return () => {
      window.removeEventListener('keydown', handleEscapeKeyPress);
    };
  });

  // close language popup on click outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        isLangPopupOpen &&
        langPopupRef.current &&
        !langPopupRef.current.contains(e.target)
      ) {
        onPopupClose();
      }
    };

    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [isLangPopupOpen, onPopupClose]);

  return (
    <header className='header'>
      <div className='header__content'>
        <div className='header__lang-container' ref={langPopupRef}>
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
  onPopupClose: PropTypes.func,
};

Header.defaultProps = {
  onLanguageChange: () => {},
  lang: '',
  isLangPopupOpen: false,
  onLangPopupClick: () => {},
  onPopupClose: () => {},
};

export default Header;
