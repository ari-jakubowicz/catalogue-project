import logo from './logo.svg';
import './App.css';
import Catalogue from './components/Catalogue/Catalogue';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
      <div className="App">
        <Catalogue></Catalogue>
      </div>
  );
}

export default App;
