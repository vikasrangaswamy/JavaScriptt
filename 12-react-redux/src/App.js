import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './pages/Home';
import Cart from './pages/Cart';
import NavScrollExample from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavScrollExample/>
        <Routes>
          <Route path='/' element = {<Home/>}></Route>
          <Route path='/Cart' element = {<Cart/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
