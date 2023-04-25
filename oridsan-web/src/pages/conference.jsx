import { ClockCircleOutlined, AimOutlined} from '@ant-design/icons';
import './About.css';
import { useState } from 'react';
import BackgroundDisplay from '../components/background-display';
const Conference = () => {

    const[isConference, setIsConference] = useState([{
      title:'The Importance of Mathematical Modelling in the field of Operations & Research, case Study of Mau Yola',
      venue:'American University of Nigeria',
      time: '10:00PM',
      date: '20 September'
    },
  {
      title:'The Importance of Mathematical Modelling in the field of Operations & Research, case Study of Mau Yola',
      venue:'Chile, Chicago',
      time: '10:00AM',
      date: '20 September'
  }])

    return ( 
        <div>
           {/* <BackgroundDisplay/> */}


                {/* upcoming events and activities  */}
      <div><h3 className="Upcoming-Events-Header">Upcoming/Past Events & Conferences</h3></div>
      <div className="Events-Container">
              {/* <div><h3 className="Upcoming-Events-Header">Upcoming Events & Activities</h3></div> */}
          
          {isConference.map((conferences)=>(
             <div className="Events-Container-Outer" key={conferences.time}>
               <div className="Events-Container-Inner">

                <div className="Event-Date-Section">
                  <div className="Event-Date-Section-Inner">
                    <div><h4>{conferences.date.slice(0,2)}</h4></div>
                    <div><span>{conferences.date.slice(2,6)}</span></div>
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
          ))}

        
      </div>


        </div>
     );
}
 
export default Conference;