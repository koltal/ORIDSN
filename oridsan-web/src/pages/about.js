import './About.css';
import './about-history';
import AboutHistory from './about-history';
import NationalTeam from '../components/National-team';
import BackgroundDisplay from '../components/background-display';
const About = () => {
    return ( 
        <>
        <BackgroundDisplay title='About ORIDSAN'/>
        <div className='my-about-container'>
          <AboutHistory/>
          <NationalTeam/>
        </div>
        </>
     );
}
 
export default About;