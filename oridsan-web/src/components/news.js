import { ClockCircleOutlined, CalendarOutlined} from '@ant-design/icons';
import useFetch from '../Networks/useFetch';

const News = () => {
   const{data: isNews} = useFetch('https://oridsan.fly.dev/api/v1/events');
    
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
                        <div><p><ClockCircleOutlined/> {news.createdAt.slice(14,19)}</p></div>
                        <div style={{float: 'right', marginLeft:50}}><p><CalendarOutlined /> {news.updatedAt.slice(0,10)}</p></div>
                    </div>
                   </div>
                    ))}
               
            </div>
        </div>
     );
}
 
export default News;