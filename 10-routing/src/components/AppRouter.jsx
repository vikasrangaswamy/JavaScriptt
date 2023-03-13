// import {BrowserRouter} from "react-router-dom"
import {BrowserRouter , Routes , Route, NavLink , Link} from "react-router-dom"
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Navigation from "./Navlinks";

const AppRouter = ()=>{
    return <>
    <BrowserRouter>
    <h1>Header</h1>
    <Link to={"/"}>
    <button>Home</button>
    </Link>
    <Navigation/>
    <Routes>
          <Route path="/" element = {<Home/>}></Route> 
          <Route path="/about" element = {<About/>}></Route>
          <Route path="/contact" element = {<Contact/>}></Route>                 
        </Routes>
    <h1>Footer</h1>
    </BrowserRouter>
    </>
}

export default AppRouter;