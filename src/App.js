import logo from './logo.svg';
import './App.css';
import './Animate.css'
import Components from './Components/Components';
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Components/>
    </div>
  </BrowserRouter>
    
  );
}

export default App;
