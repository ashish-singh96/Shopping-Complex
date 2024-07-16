import './App.css';
import Home from './component/Home';
import Men from './component/Men';
import NavBar from './component/NavBar';
import { Routes, Route } from "react-router-dom";
import S1 from './component/S1';
import OneItem from './component/OneItem';
import Women from './component/Women';
import S2 from './component/S2';
import Cart from './component/Cart';
import DashBoard from './Admin/DashBoard';
import PublicRoute from './component/Protected Routing/PublicRoute';
import PrivateRoute from './component/Protected Routing/PrivateRoute';
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<PublicRoute />}>
          <Route path='/' element={<Home />} />
          <Route path='/shop/men' element={<Men />} />
          <Route path='/shop/women' element={<Women />} />
          <Route path='/s/50-to-80-percent-off-5427-73191' element={<S1 />} />
          <Route path='/s/50-to-80-percent-off-5427-63681' element={<S2 />} />
          <Route path='/show-one-item' element={<OneItem />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
        <Route path='/dashboard' element={<PrivateRoute />}>
          <Route path='/admin/dashboard' element={<DashBoard />} />
        </Route>
      </Routes>

    </>
  );
}

export default App;
