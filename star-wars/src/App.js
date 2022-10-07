
import './styles/App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import injectContext from "./store/context";
import Home from './views/Home';
import Selection from './views/Selection';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/selection' element={<Selection />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default injectContext(App);
