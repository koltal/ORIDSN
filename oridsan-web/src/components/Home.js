import { Button, Divider, List, Skeleton } from '@mui/material';
import president from "../images/president.jpeg";
import Services from "./services";
import News from "./news";
import ReadMore from './read-more';
import Conference from '../pages/conference';
import MyCarouselContent from '../carousels';
import Carousel from 'react-material-ui-carousel'
import { useState, useEffect } from 'react';


const Home = () => {

  const [slide, setSlide] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(()=>{
    fetch('https://oridsan.fly.dev/api/v1/Sliders')
    .then(res=>{
      return res.json();
    })
    .then(data =>{
      setLoading(false)
     
          setSlide(data.data);
        console.log(data)
      
    })
  }, []);
    
  
    
    return ( 
        <div>
         
           <div>
             {
                    isLoading && (
                        <Skeleton animation="wave" style={{
                            width: '100%',
                            height: '70vh'
                        }} variant="rectangular" />
                    )
            }
          
    <Carousel  autoPlay stopAutoPlayOnHover>
                {
                 !isLoading && (  
                       
                        slide.map((slides)=>{
                          return(
                            <MyCarouselContent key={slides.id}
                                title={slides.title}
                                description={slides.description}
                               
                                photo={slides.photo.secureUrl}
                                
                             />
                        )})
                  
                )}
                
            </Carousel>
            </div>
     
    
      <div className="President-Container">
        <div className="President-Container-Inner">
            <div className="President-Image-Holder">
            <div className="Desk-Of-President1"><h2 >FROM THE PRESIDENT DESK</h2></div>
              <img className="President-Image" src={president}  alt=""/>
              <div className='President-Name'>
              <h3>Dr Umar Muhammad Modibbo <br></br>
              <span>President</span> </h3><br/>
             
            </div>
             </div>
         <div className="President-Writeup-Holder">
            <div className="Desk-Of-President"><h2 >FROM THE PRESIDENT DESK</h2></div>
            <div>
              <p style={{
                lineHeight: '30px',
                textAlign: 'justify',
                fontFamily: '"Rubik", sans-serif'
              }}> <ReadMore>Operations Research Institute for Decision Sciences and Analytics of Nigeria (ORIDSAN) is a professional body and an interdisciplinary institute that welcomes students,
                 practitioners, researchers and policymakers in Nigeria and worldwide. The ORIDSAN draw her membership from the practitioners, researchers and students in Operations Research, Decision 
                 Sciences and Analytics, Management Sciences, Mathematics, Statistics, Computer Sciences, Computational and Cognitive Sciences,  and Industrial Engineering, among others. It has local chapters in different
                  tertiary institutions (Universities, Polytechnics, and Colleges of Education) in Nigeria and working towards covering the six (6) geo-political zones of the federation, thus making the Institute the largest and most organized professional body in Nigeria. Any registered Member of ORIDSAN will have an additional membership opportunity with the African Federation of Operations Research Societies (AFROS) and the International Federation of Operations Research Societies (IFORS). The ORIDSAN is mandated to interact and develop the profession into a career path and advance
                   its practices, methods and applications for improved systems performance in Nigeria. The Institute would provide specialized training on the general nature of operations Research as a scientific approach to problem-solving and decision-making, Statistical analysis, and Data analytics from time to time as Faculty development programs at a discounted rate for members. Members also will enjoy discount rates for physical and virtual Conferences, 
                   Workshops, Webinars, etc.</ReadMore> </p>
           
            </div>
            {/* <div>
              <h3>Dr Umar Muhammad Modibbo <br></br>
              <span>President</span> </h3><br/>
             
            </div> */}
         </div>
        </div>
      </div>



              {/* upcoming events and activities  */}
      {/* <div><h3 className="Upcoming-Events-Header">Upcoming Events & Activities</h3></div> */}
      <Conference/>
      <div className="View-All-Events-Link">
        <span className="All-events">View All Events & Activities</span>
      </div>
      
      <Services/>
             
        <News/>    
        {/* <GetStarted/> */}
        </div>
     );
     
}

 
export default Home;
