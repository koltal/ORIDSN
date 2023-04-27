import {  Link } from 'react-router-dom';
import ifors from '../images/ifors-logo.gif';
import afros from '../images/afros.png';
import BackgroundDisplay from '../components/background-display';

const Affiliation = () => {
    return ( 
        <div>
           <BackgroundDisplay title='Affiliations'/>

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