import { ClockCircleOutlined, AimOutlined} from '@ant-design/icons';
import './About.css';
import { useEffect, useState } from 'react';
import BackgroundDisplay from '../components/background-display';
const Conference = () => {

    const[isConference, setIsConference] = useState([]);
    const[isLoading, setIsLoading] = useState(true);
    // const [error, setError] = useState(false);

    function formatDate(newDate) {
      const months = {
        0: 'January',
        1: 'February',
        2: 'March',
        3: 'April',
        4: 'May',
        5: 'June',
        6: 'July',
        7: 'August',
        8: 'September',
        9: 'October',
        10: 'November',
        11: 'December',
      }
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      const d = newDate
      const year = d.getFullYear()
      const date = d.getDate()
      const monthIndex = d.getMonth()
      const monthName = months[d.getMonth()]
      const dayName = days[d.getDay()] // Thu
      const formatted = `${dayName}, ${date} ${monthName} ${year}`
      return formatted.toString()
    }

    useEffect(()=>{
      fetch('https://oridsan.fly.dev/api/v1/events')
      .then(res=>{
        return res.json();
      })
      .then(data =>{
        setIsLoading(false)
       
            setIsConference(data.data);
          console.log(data)
        
      })
      .catch(err=>(
        console.log(err)));
        // setIsLoading(false)
       
    }, []);

    return ( 
        <div>
           {/* <BackgroundDisplay/> */}


                {/* upcoming events and activities  */}
      <div><h3 className="Upcoming-Events-Header">Upcoming/Past Events & Conferences</h3></div>
      <div className="Events-Container">
              {/* <div><h3 className="Upcoming-Events-Header">Upcoming Events & Activities</h3></div> */}
          {isLoading && <div>Loading.........</div>}
          {/* {error && <div>{error}</div>} */}
          { isConference && isConference.map((conferences)=>(
             <div className="Events-Container-Outer" key={conferences._id}>
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