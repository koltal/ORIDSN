import useFetch from "../Networks/useFetch";

const NationalTeam = () => {
  const{data: isPastPresident, isLoading} = useFetch('https://oridsan.fly.dev/api/v1/Presidents');
    return ( 
        <div>
           
            
                
            <div><center><h2>Past National President</h2></center></div>
            <div className="National-Executive-Team-Container">
              {
                isPastPresident.map((pastPresident)=>{
                  return(
                    pastPresident.current === false ?
                    <div className="National-Executive-Card" key={pastPresident._id}>
                  <div>
                  <img src={pastPresident.photo.secureUrl} height='300px' width='90%' alt=""/>
                  </div>
                    <div className="Name-position-section">
                    <center><h3>{pastPresident.name}</h3>
                    <p>{pastPresident.message}</p></center>
                    </div>
                </div> : null
                  )
                })
              } 
            </div>
        </div>
     );
}
 
export default NationalTeam;