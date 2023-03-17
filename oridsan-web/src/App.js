import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
// import AboutPage from './components/about';
// import Footer from './components/footer';
// import Products from './components/products';
import Navbar from './components/nav';
import './App.css';
// import Slider from './carouselDisplay';






function App() {
 
  
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar/>
                <Routes>
                <Route path='/' element={<Home/>}/>
                {/* <Route path='/products' element={<Products/>}/>
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/contact' element={<contactPage/>}/> */}
                </Routes>
             
          </BrowserRouter>
    </div>
    // <Slider/>
  );
}

export default App;
