import useFetch from "../Networks/useFetch";
import {  useParams } from "react-router-dom";
import { ClockCircleOutlined, CalendarOutlined} from '@ant-design/icons';
import { formatDate } from "../components/Date-Converter";

const DetailNews = () => {

    const {id} = useParams();
    const{data: singleNews, isLoading} = useFetch(`https://oridsan.fly.dev/api/v1/news/${id}`);


    return ( 
        
        <div className="Detail-News-Container">
        {isLoading && <div>Loading news...</div>}
        
        {
       singleNews  &&
        (
           
        
            <div className='News-Header'>
           
            <div><h2 className='News-Title'>{singleNews.title}</h2><br></br>
            <span className='News-Date'>{singleNews.time} </span></div>
            <img style={{height:'70vh'}} src={''} alt="Newsimage" srcset="" width='100%'  />
            <div className='News-Content'>
                <p className="News-description">{singleNews.description}</p>
               
            </div>
            <div style={{display: 'flex'}}>
                        <div><p><ClockCircleOutlined/> {formatDate(singleNews.createdAt)}</p></div>
                        <div style={{float: 'right', marginLeft:50}}><p><CalendarOutlined /> {singleNews.updatedAt}</p></div>
            </div>
        </div>
       
       
        )
        }
         { console.log()}
        </div>
     );
}
 
export default DetailNews;