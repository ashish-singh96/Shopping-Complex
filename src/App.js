import './App.css';
import Home from './component/Home';
import Men from './component/Men';
import NavBar from './component/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import S from './component/S';
import OneItem from './component/OneItem';
import Women from './component/Women';
function App() {
  return (
    <>
      <NavBar/>
      {/* <Home/> */}
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/shop/men' element={<Men/>}/>
          <Route path='/shop/women'  element ={<Women/>}/>
          <Route path='/s/50-to-80-percent-off-5427-73191' element={<S/>}/>
          <Route path='/show-one-item' element={<OneItem/>}/>
        </Routes>
     
    </>
  );
}

export default App;
