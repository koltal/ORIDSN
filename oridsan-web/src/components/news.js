import { ClockCircleOutlined, CalendarOutlined} from '@ant-design/icons';
import useFetch from '../Networks/useFetch';
import { useNavigate, useParams } from 'react-router-dom';
import { formatDate } from './Date-Converter';

const News = ({title=''}) => {
   const{data: isNews} = useFetch('https://oridsan.fly.dev/api/v1/news');
   const navigate=useNavigate();
  
   
   
  

    return ( 
        <div className="News-Container">
          <h1>{title}</h1>  
               
           
            {isNews && isNews.map((news)=>(
            <div   className="News-Card-Container">
                
                   
                      <div onClick={()=>{
                        navigate(`/news/${news._id}`)
                     }} className="News-Card" key={news._id}>
                       <div className="News-Image" >
                       <img src={news.photo.secureUrl} alt=''/>
                   </div> 
                   <div className="News-Title">
                        <p>{news.title}</p>
                    </div>
                    <div style={{display: 'flex'}}>
                        <div><p><ClockCircleOutlined/> {formatDate(news.createdAt)}</p></div>
                        <div style={{float: 'right', marginLeft:50}}><p><CalendarOutlined /> {news.updatedAt.slice(0,10)}</p></div>
                    </div>
                   </div>
                   </div>
                    )).reverse()}
               
            
        </div>
     );
}
 
export default News;