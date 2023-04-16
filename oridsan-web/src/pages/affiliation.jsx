import {  Link } from 'react-router-dom';
import ifors from '../images/ifors-logo.gif';
import afros from '../images/afros.png';

const Affiliation = () => {
    return ( 
        <div>
            <div className='Background-Display-Image-Container'>
        {/* <img className='bg-img' src='https://www.cactusimages.co.uk/wp-content/uploads/2019/11/121119Oviso_0628.jpg' width='100%' height='300px' alt=''/> */}
       <div className='Centered-Content'> <h1>Affiliations</h1></div>
        </div>

        <div className='Affiliation-Container'>
            <div>
                <div><img src={ifors} alt="logo" srcset="" width='100%' /></div>
                <Link to='https://www.ifors.org/'><div><h3>International Federation of Operational Research Societies (IFORS)</h3></div></Link>
            </div>
            <div>
                <div><img src={afros} alt="logo" srcset="" width='100%' /></div>
                <Link to='http://afrosocieties.org/'><div><h3>African Federation of Operations Research Society </h3></div></Link>
            </div>
        </div>
        </div>
     );
}
 
export default Affiliation;