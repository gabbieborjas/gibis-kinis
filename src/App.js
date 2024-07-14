
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import HomeCategory from './Pages/HomeCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from "./Components/Footer/Footer"
import banner_bestseller from "./Components/Assets/banner_bestseller.png"
import banner_tops from "./Components/Assets/banner_tops.png"
import banner_bottoms from "./Components/Assets/banner_bottoms.png"

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/bestSellers' element={<HomeCategory banner={banner_bestseller} category = "Best Sellers"/>}/>
        <Route path='/tops' element={<HomeCategory banner={banner_tops} category = "Tops"/>}/>
        <Route path='/bottoms' element={<HomeCategory banner={banner_bottoms} category = "Bottoms"/>}/>
        <Route path ="/product" element={<Product/>} />
        <Route path="/product/:productId" element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
