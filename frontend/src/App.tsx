import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
