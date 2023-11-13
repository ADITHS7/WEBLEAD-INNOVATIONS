
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App-container">
      <BrowserRouter>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
