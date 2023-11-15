
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App-container">
      <BrowserRouter>
      <Header/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
