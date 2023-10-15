import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import WebFont from 'webfontloader';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import About from '../About/About';
import Footer from '../Footer/Footer';

function App() {
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
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header />
              <Projects />
              <Footer />
            </>
          }
        />
        <Route
          path='/about'
          element={
            <>
              <Header />
              <About />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
