import ReadMore from "./read-more";
import useFetch from "../Networks/useFetch";

const PresidentDesk = () => {
   const{data: isPresident} = useFetch('https://oridsan.fly.dev/api/v1/Presidents');
    
    return ( 
        <div className="President-Container">
         {  isPresident && 
            isPresident.map((president)=>{
                return(
                   president.current === true ? <div className="President-Container-Inner">
            <div className="President-Image-Holder">
            <div className="Desk-Of-President1"><h2 >FROM THE PRESIDENT DESK</h2></div>
              <img className="President-Image" src={president.photo.secureUrl}  alt=""/>
              <div className='President-Name'>
              <h3>{president.name} <br></br>
              <span>President</span> </h3><br/>
             
            </div>
             </div>
         <div className="President-Writeup-Holder">
            <div className="Desk-Of-President"><h2 >FROM THE PRESIDENT DESK</h2></div>
            <div>
                {
                     <ReadMore textSlice={president.message}/>
                }
             
              
             
           
            </div>
            
         </div>
        </div>
                : null)
            })
        }
      </div>
     );
}
 
export default PresidentDesk;