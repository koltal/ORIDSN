import { useState } from "react";
import useFetch from "../Networks/useFetch";
import { useNavigate, useParams } from "react-router-dom";

const DetailNews = () => {

    const{data: singleNews} = useFetch('https://oridsan.fly.dev/api/v1/news');
//    const navigate=useNavigate();
    return ( 
        <div >{singleNews.map((news)=>(
            <div key={news._id}>
                <h4>{news.title}</h4>
                <p>{}</p>
                  <img src={news.photo.secureUrl} alt='' width='50%'/>
                
                <p>{news.description}</p>
                <p>{news.time}</p>
            </div>
        ))
             }</div>
     );
}
 
export default DetailNews;