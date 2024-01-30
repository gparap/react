/* gparap (c) 2024 */
import logo from './logo.png';
import './App.css';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className='container'>
      <header className="App App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
      </header>
      <div className='carousel-container'>
        <Carousel />
      </div>
    </div>
  );
}

export default App;
