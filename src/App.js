import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import AppRouter from './Config/Router/Router';

function App() {
  return (
    <div className='App'>

      <div>
        <BrowserRouter>

          <AppRouter />
        </BrowserRouter>
      </div>

    </div>
  );
}

export default App;
