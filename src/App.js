import './App.css';
import Home from './component/Home';
import Men from './component/Men';
import NavBar from './component/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import S from './component/S';
function App() {
  return (
    <>
      <NavBar/>
      {/* <Home/> */}
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/shop/men' element={<Men/>}/>
          <Route path='/s/50-to-80-percent-off-5427-73191' element={<S/>}/>
        </Routes>
     
    </>
  );
}

export default App;
