import './About.css';
import './about-history';
import AboutHistory from './about-history';
const About = () => {
    return ( 
        <>
        <div className='Background-Display-Image-Container'>
        {/* <img className='bg-img' src='https://www.cactusimages.co.uk/wp-content/uploads/2019/11/121119Oviso_0628.jpg' width='100%' height='300px' alt=''/> */}
       <div className='Centered-Content'> <h1>About ORIDSAN</h1></div>
        </div>
        <div className='my-about-container'>
          <AboutHistory/>
          <AboutHistory/>
        </div>
        </>
     );
}
 
export default About;