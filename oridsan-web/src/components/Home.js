import { ClockCircleOutlined, AimOutlined} from '@ant-design/icons';
import Slider from "../carouselDisplay";
import president from "../images/president.jpeg";
import Services from "./services";
import News from "./news";


const Home = () => {

    
    
    return ( 
        <div>
    
      <Slider/>
    
      <div className="President-Container">
        <div className="President-Container-Inner">
            <div className="President-Image-Holder">
            <div className="Desk-Of-President1"><h2 >FROM THE PRESIDENT DESK</h2></div>
              <img className="President-Image" src={president}  alt=""/>
             
             </div>
         <div className="President-Writeup-Holder">
            <div className="Desk-Of-President"><h2 >FROM THE PRESIDENT DESK</h2></div>
            <div>
              <p style={{
                lineHeight: '30px',
                textAlign: 'justify',
                fontFamily: '"Rubik", sans-serif'
              }}>Operations Research Institute for Decision Sciences and Analytics of Nigeria (ORIDSAN) is a professional body and an interdisciplinary institute that welcomes students, practitioners, researchers and policymakers in Nigeria and worldwide. The ORIDSAN draw her membership from the practitioners, researchers and students in Operations Research, Decision Sciences and Analytics, Management Sciences, Mathematics, Statistics, Computer Sciences, Computational and Cognitive Sciences,  and Industrial Engineering, among others. It has local chapters in different tertiary institutions (Universities, Polytechnics, and Colleges of Education) in Nigeria and working towards covering the six (6) geo-political zones of the federation, thus making the Institute the largest and most organized professional body in Nigeria. Any registered Member of ORIDSAN will have an additional membership opportunity with the African Federation of Operations Research Societies (AFROS) and the International Federation of Operations Research Societies (IFORS). The ORIDSAN is mandated to interact and develop the profession into a career path and advance its practices, methods and applications for improved systems performance in Nigeria. The Institute would provide specialized training on the general nature of operations Research as a scientific approach to problem-solving and decision-making, Statistical analysis, and Data analytics from time to time as Faculty development programs at a discounted rate for members. Members also will enjoy discount rates for physical and virtual Conferences, Workshops, Webinars, etc. </p>
            </div>
            <div>
              <h3>Dr Umar Muhammad Modibbo <br></br>
              <span>President</span> </h3><br/>
             
            </div>
         </div>
        </div>
      </div>



              {/* upcoming events and activities  */}
      <div><h3 className="Upcoming-Events-Header">Upcoming Events & Activities</h3></div>
      <div className="Events-Container">
              {/* <div><h3 className="Upcoming-Events-Header">Upcoming Events & Activities</h3></div> */}
          <div className="Events-Container-Outer">
              <div className="Events-Container-Inner">

                <div className="Event-Date-Section">
                  <div className="Event-Date-Section-Inner">
                    <div><h4>30</h4></div>
                    <div><span>Sept</span></div>
                  </div>
                 
                </div>
                <div className="Events-Title-Section">
                  <div className="Events-Title-Section-Inner">
                    <p>The Importance of Mathematical Modelling in the field of Operations & Research, case Study of Mau Yola</p>
                  </div>
                  <div className="Events-Title-Section-Inner1">
                   <div> <p ><AimOutlined /> American University of Nigeria</p></div>
                   <div> <p className="Time"><ClockCircleOutlined /> 10:00AM</p></div>
                  </div>
                </div>

              </div>

              
              

              
        </div>  


        <div className="Events-Container-Outer">
              <div className="Events-Container-Inner">

                <div className="Event-Date-Section">
                  <div className="Event-Date-Section-Inner">
                    <div><h4>10</h4></div>
                    <div><span>July</span></div>
                  </div>
                 
                </div>
                <div className="Events-Title-Section">
                  <div className="Events-Title-Section-Inner">
                    <p>IFORS 2023 23rd IFORS Triennial Conference Santiago, Chile, July 10 - 14, 2023</p>
                  </div>
                  <div className="Events-Title-Section-Inner1">
                  <div> <p ><AimOutlined /> Santiago, Chile.</p></div>
                   <div> <p className="Time"><ClockCircleOutlined /> 8:00AM</p></div>
                  </div>
                </div>

              </div>

              
              

              
        </div>


        
      </div>
      <div className="View-All-Events-Link">
        <span className="All-events">View All Events & Activities</span>
      </div>
      
      <Services/>
             
        <News/>    
        </div>
     );
}
 
export default Home;