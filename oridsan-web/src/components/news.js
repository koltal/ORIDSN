import { ClockCircleOutlined, CalendarOutlined} from '@ant-design/icons';
import useFetch from '../Networks/useFetch';

const News = () => {
   const{data: isNews} = useFetch('https://oridsan.fly.dev/api/v1/events');
    
   function formatDate(rawDate) {
    const currentDate = new Date();
    const diffInMs = currentDate - new Date(rawDate);
  
    const seconds = Math.floor(diffInMs / 1000);
    if (seconds < 60) {
      return "just now";
    }
  
    const minutes = Math.floor(diffInMs / (1000 * 60));
    if (minutes < 60) {
      return `${minutes} minutes ago`;
    }
  
    const hours = Math.floor(diffInMs / (1000 * 60 * 60));
    if (hours < 24) {
      return `${hours} hours ago`;
    }
  
    const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    if (days < 7) {
      return `${days} days ago`;
    }
  
    const weeks = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 7));
    return `${weeks} weeks ago`;
  }

    return ( 
        <div className="News-Container">
            <div>
                <center><h1>News and Updates</h1></center>
            </div>
            <div className="News-Card-Container">
                
                    {isNews && isNews.map((news)=>(
                      <div className="News-Card" key={news._id}>
                       <div className="News-Image" >
                       {/* <img src={news.photo.secureUrl} alt=''/> */}
                   </div> 
                   <div className="News-Title">
                        <p>{news.title}</p>
                    </div>
                    <div style={{display: 'flex'}}>
                        <div><p><ClockCircleOutlined/> {formatDate(news.createdAt)}</p></div>
                        <div style={{float: 'right', marginLeft:50}}><p><CalendarOutlined /> {news.updatedAt.slice(0,10)}</p></div>
                    </div>
                   </div>
                    ))}
               
            </div>
        </div>
     );
}
 
export default News;