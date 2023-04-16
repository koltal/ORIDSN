import opsearch from '../images/opsearch.png';
import './About.css';

const Publication = () => {
    return ( 
        <div>
           <div className='Background-Display-Image-Container'>
        {/* <img className='bg-img' src='https://www.cactusimages.co.uk/wp-content/uploads/2019/11/121119Oviso_0628.jpg' width='100%' height='300px' alt=''/> */}
       <div className='Centered-Content'> <h1>Publications</h1></div>
        </div>

        <div className="Publication-Container">
            <div>
               <div> <h1>Nigerian Journal of Operations Research (NIJOR)</h1></div>
               <div><p>The Operational Research Society of India publishes a quarterly journal OPSEARCH. The first issue of the journal was published in January 1964. The journal publishes research and application papers and short communications. The papers published in OPSEARCH journal are abstracted in International Abstracts in Operational Research (IAOR), OR/MS and other abstracting journals.

                Besides the publication of OPSEARCH journal, ORSI publishes proceedings of the international/national seminars and special issues from time to time.</p></div>
            </div>
            <div>
                <img src={opsearch} alt="publication" width='80%' height='500px' />
            </div>
        </div>
        </div>
     );
}
 
export default Publication;