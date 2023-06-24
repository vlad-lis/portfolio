import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="root">
      <Routes>
        <Route path='/' element={
          <>
            <Header />
            <Main />
            <Footer />
          </>
        } />
        <Route path='/about' element={
          <>
            <Header />
            <Main />
            <Footer />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
