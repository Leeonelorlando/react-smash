import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailsContainer from './components/ItemDetailsContainer/ItemDetailsContainer';
import Provider from './components/Context/Context';
import MenuContainer from './components/ItemDetailsContainer/MenuContainer';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Provider>
       <div className="container-fluid fondo_amarillo">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/menu"} element={<MenuContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailsContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;