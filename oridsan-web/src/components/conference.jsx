import { ClockCircleOutlined, AimOutlined} from '@ant-design/icons';
import '../pages/About.css';
import useFetch from '../Networks/useFetch';
import { Endpoint } from './endpoint';
import { months } from './Month-Converter';

const Conference = ({title=''}) => {
  const{data:isConference, isLoading} = useFetch(`${Endpoint}/events`);
    
  
  

    

    return ( 
        <div>
         
      <div><h3 className="Upcoming-Events-Header">{title}</h3></div>
      <div className="Events-Container">
             
          {isLoading && <div>Loading.........</div>}
          {/* {error && <div>{error}</div>} */}
          { isConference  && isConference.map((conferences)=>(
             <div className="Events-Container-Outer" key={conferences._id}>
               <div className="Events-Container-Inner">

                <div className="Event-Date-Section">
                  <div className="Event-Date-Section-Inner">
                    <div><p>{conferences.date.slice(8,10)}</p></div>
                    <div><span>{months(conferences.date.slice(5,7))}</span></div>
                  </div>
                
                </div>
                <div className="Events-Title-Section">
                  <div className="Events-Title-Section-Inner">
                    <p>{conferences.title}</p>
                  </div>
                  <div className="Events-Title-Section-Inner1">
                  <div> <p ><AimOutlined /> {conferences.venue}</p></div>
                  <div> <p className="Time"><ClockCircleOutlined /> {conferences.time}</p></div>
                  </div>
                </div>

                </div>
                
              
            </div>
          )).reverse().slice(0)}

        
      </div>


        </div>
     );
}
 
export default Conference;