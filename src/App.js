import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import AppRouter from './Config/Router/Router';

function App() {
  return (
    <div>

      <div>
        <BrowserRouter>
          <Navbar />
          <AppRouter />
        </BrowserRouter>
      </div>

    </div>
  );
}

export default App;
