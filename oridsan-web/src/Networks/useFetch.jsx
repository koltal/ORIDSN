import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(()=>{
    fetch(url)
    .then(res=>{
      return res.json();
    })
    .then(data =>{
      setLoading(false)
     
          setData(data.data);
        console.log(data)
      
    })
  }, [url]);
    return {data, isLoading}
}
 
export default useFetch;