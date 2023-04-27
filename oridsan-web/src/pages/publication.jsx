import BackgroundDisplay from '../components/background-display';
import book from '../images/book.jpeg'
import './About.css';

const Publication = () => {
    return ( 
        <div>
           <BackgroundDisplay title='Publications'/>

        <div className="Publication-Container">
            <div>
               <div> <h1>Nigerian Journal of Operations Research (NIJOR)</h1></div>
               <div>
                <h2>Overview</h2>
                <p>Nigerian Journal of Operations Research (NIJOR)  is the official journal of the ORIDSAN. Therefore, it is committed to advancing and promoting the understanding, theories, methodologies and practices of Operations Research in Nigeria and worldwide.</p>
                </div>
                <div>
                <h2>Aim and Scope</h2>
                <p>The Nigerian Journal of Operations Research (NIJOR) publishes high-quality, peer-reviewed original papers contributing to the field and practice of Operations Research, Management Sciences, Industrial Engineering and Decision Analytics. 
                The NIJOR publishes articles type related to the theories, applications, and reviews in the following areas:
                Applied Stochastic optimization, Big Data Optimization, Computational Intelligence, Decision Support System, Discrete and Continuous Optimization, Mathematical Programming, Modelling and Simulation, Multicriteria Decision Analysis, Reliability Optimization, Supply Chain and Inventory Management, Portfolio and Asset Optimization, and Sustainability Optimization</p>
                </div>
            </div>
            <div>
                <img src={book} alt="publication" width='80%' height='500px' />
            </div>
        </div>
        </div>
     );
}
 
export default Publication;