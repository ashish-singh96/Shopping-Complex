import './App.css';
import Home from './component/Home';
import Men from './component/Men';
import NavBar from './component/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import S1 from './component/S1';
import OneItem from './component/OneItem';
import Women from './component/Women';
import S2 from './component/S2';
function App() {
  return (
    <>
      <NavBar/>
      {/* <Home/> */}
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/shop/men' element={<Men/>}/>
          <Route path='/shop/women'  element ={<Women/>}/>
          <Route path='/s/50-to-80-percent-off-5427-73191' element={<S1/>}/>
          <Route path ='/s/50-to-80-percent-off-5427-63681' element = {<S2/>}/>
          <Route path='/show-one-item' element={<OneItem/>}/>
        </Routes>
     
    </>
  );
}

export default App;
