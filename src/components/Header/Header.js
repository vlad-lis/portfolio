import { NavLink } from 'react-router-dom';
import { navLinks } from '../../utils/staticContent';

function Header() {
  const linkClassMovies = (navData) => (navData.isActive ? 'header__link header__link_active' : 'header__link');

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__container">
          <nav className="header__nav">
            <NavLink className={linkClassMovies} to='/'>{navLinks.projects}</NavLink>
            <NavLink className={linkClassMovies} to='/about'>{navLinks.about}</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
