import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './pages/about';
// import AboutPage from './components/about';
// import Footer from './components/footer';
// import Products from './components/products';
import Navbar from './components/nav';
import Footer from './components/footer';
import './App.css';
// import Slider from './carouselDisplay';






function App() {
 
  
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar/>
                <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                {/* <Route path='/products' element={<Products/>}/>
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/contact' element={<contactPage/>}/> */}
                </Routes>
                <Footer/>
          </BrowserRouter>
    </div>
    // <Slider/>
  );
}

export default App;
