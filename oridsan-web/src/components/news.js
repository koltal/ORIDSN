import { ClockCircleOutlined, CalendarOutlined} from '@ant-design/icons';
import { useState } from 'react';
import { Link, } from 'react-router-dom';
const News = () => {
    
    const [isNews, setIsNews] = useState([{
        title: 'ORIDSAN-ASCEND STUDIOS FOUNDATION, CREATIVE TECHNOLOGY PROGRAM (CTP) 2022',
        time: '12:30PM',
        date: '12th, July 2023',
        image:"https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg"
    }, 
    {title: 'ORIDSAN testing',
    time: '12:39PM',
    date: '12th, July 2023',
    image:"https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg"
},
{title: 'ORIDSAN testing4',
time: '12:39PM',
date: '12th, July 2023',
image:"https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg"
}
])

    return ( 
        <div className="News-Container">
            <div>
                <center><h1>News and Updates</h1></center>
            </div>
            <div className="News-Card-Container">
                
                    {isNews.map((news)=>(
                      <div className="News-Card" key={news.time}>
                       <div className="News-Image" >
                       <img src={news.image} alt=''/>
                   </div> 
                   <div className="News-Title">
                        <p>{news.title}</p>
                    </div>
                    <div style={{display: 'flex'}}>
                        <div><p><ClockCircleOutlined/> {news.time}</p></div>
                        <div style={{float: 'right', marginLeft:50}}><p><CalendarOutlined /> {news.date}</p></div>
                    </div>
                   </div>
                    ))}
               
            </div>
        </div>
     );
}
 
export default News;