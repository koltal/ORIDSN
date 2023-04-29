import {  Skeleton } from '@mui/material';

import Services from "./services";
import News from "./news";
import Conference from './conference';
import MyCarouselContent from '../carousels';
import Carousel from 'react-material-ui-carousel'
import useFetch from '../Networks/useFetch';
import PresidentDesk from './president';

const Home = () => {
  const {data:slide, isLoading}= useFetch('https://oridsan.fly.dev/api/v1/Sliders');
  
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
                        )}).reverse()
                  
                )}
                
            </Carousel>
            </div>
              <PresidentDesk/>

              {/* upcoming events and activities  */}
      {/* <div><h3 className="Upcoming-Events-Header">Upcoming Events & Activities</h3></div> */}
      <Conference title='Upcoming/Ongoing Events & Conferences'/>
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
