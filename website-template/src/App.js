/* (c) 2022 gparap */
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './routes/Home'
import About from './routes/About'
import Contact from './routes/Contact'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <br />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/Home' exact element={<Home />} />
          <Route path='/About' exact element={<About />} />
          <Route path='/Contact' exact element={<Contact />} />
        </Routes>
        <br />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
