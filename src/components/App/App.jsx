import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import WebFont from 'webfontloader';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import About from '../About/About';
import Footer from '../Footer/Footer';

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem('selectedLanguage') || 'En'
  );
  const [isLangPopupOpen, setIsLangPopupOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    localStorage.setItem('selectedLanguage', lang);
    setIsLangPopupOpen(false);
  };

  const handlePopupClick = () => {
    setIsLangPopupOpen(!isLangPopupOpen);
  };

  const handlePopupClose = () => {
    setIsLangPopupOpen(false);
  };

  useEffect(() => {
    WebFont.load({
      custom: {
        families: ['Ubuntu', 'Ubuntu-light'],
        urls: ['/vendor/fonts.css'],
      },
    });
  }, []);

  return (
    <div className='root'>
      <Header
        lang={selectedLanguage}
        isLangPopupOpen={isLangPopupOpen}
        onLanguageChange={handleLanguageChange}
        onLangPopupClick={handlePopupClick}
        onPopupClose={handlePopupClose}
      />
      <Routes>
        <Route path='/' element={<Projects lang={selectedLanguage} />} />
        <Route path='/about' element={<About lang={selectedLanguage} />} />
      </Routes>
      <Footer lang={selectedLanguage} />
    </div>
  );
}

export default App;
