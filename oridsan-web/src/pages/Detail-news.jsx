// import useFetch from "../Networks/useFetch";
import {  useParams } from "react-router-dom";
import { useEffect } from "react";
import { ClockCircleOutlined, CalendarOutlined} from '@ant-design/icons';
import { formatDate } from "../components/Date-Converter";
// import { Endpoint } from "../components/endpoint";
import News from "../components/news";
import { useState } from "react";



const DetailNews = () => {
    const [singleNews, setSingleNews] = useState();
    const[isLoading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(()=>{
        fetch(`https://oridsan.fly.dev/api/v1/news/${id}`)
        .then(res=>{
          return res.json();
        })
        .then(data =>{
          setLoading(false)
         
              setSingleNews(data.data);
            console.log(data)
          
        })
      });
   
   
    // const{data: singleNews, isLoading} = useFetch(`${Endpoint}/news/${id}`);
    

   

    return ( 
        
     <div className="Detail-News-Container">
        {isLoading && <div>Loading news...</div>}
    
        {
            
       singleNews &&
        (
           
            <div className='News-Header'>
           
            <div><h2 className='News-Title-Desc'>{singleNews.title}</h2><br></br>
            <span className='News-Date'>{singleNews.time} </span></div>
            <img style={{height:'70vh'}} src={singleNews.photo.secureUrl} alt="Newsimage" srcset="" width='100%'  />
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
        {/* <News /> */}
        </div>
     );
}
 
export default DetailNews;