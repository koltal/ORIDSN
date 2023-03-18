import Slider from "../carouselDisplay";
import president from "../images/president.jpg";



const Home = () => {

    const containerStyle = {
      backgroundColor: 'whitesmoke',
      padding: '20px',
      height: '500px'

    }

    const innerContainerStyle = {
      display: 'grid',
      gridTemplateColumns: '1fr 2fr',
      margin: '0 auto',
      width: '80%',
     
    }
    
    return ( 
        <div>
    
      <Slider/>
    
      <div className="President-Container">
        <div className="President-Container-Inner">
            <div className="President-Image-Holder">
              <img className="President-Image" src={president}  alt=""/>
             
             </div>
         <div className="President-Writeup-Holder">
            <div><h2>FROM THE PRESIDENT DESK</h2></div>
            <div>
              <p style={{
                lineHeight: '30px'
              }}>Nigeria Association of Computing Students (NACOS) is the umbrella body for students studying Computer Science, Computer Engineering, Information Systems, Cyber Security, Software Engineering, Telecommunications Engineering, and all IT-related courses in Nigeria and have been in existence for over two decades and NACOS can boast of its presence in almost all tertiary institutions in Nigeria (including privately owned ones).

              With a membership strength of about Three hundred and fifty thousand (350,000) members in over two hundred and fifty (250) local chapters in different tertiary institutions (Universities, Polytechnics, and Colleges of Education) across the six (6) geo-political zones of the federation, thus making the association the largest and most organized student body in Africa.</p>
            </div>
            <div>
              <h3>Dr U M Modibbo</h3><br/>
              <span>President</span>
            </div>
         </div>
        </div>
      </div>



              {/* upcoming events and activities  */}
      <div><h3 className="Upcoming-Events-Header">Upcoming Events & Activities</h3></div>
      <div className="Events-Container">
              {/* <div><h3 className="Upcoming-Events-Header">Upcoming Events & Activities</h3></div> */}
          <div className="Events-Container-Outer">
              <div className="Events-Container-Inner">

                <div className="Event-Date-Section">
                  <div className="Event-Date-Section-Inner">
                    <div><h4>23</h4></div>
                    <div><span>January</span></div>
                  </div>
                 
                </div>
                <div className="Events-Title-Section">
                  <div className="Events-Title-Section-Inner">
                    <p>ORIDSAN-ASCEND STUDIOS FOUNDATION, CREATIVE TECHNOLOGY PROGRAM (CTP) 2022</p>
                  </div>
                  <div className="Events-Title-Section-Inner1">
                   <div> <p >Venue: Mau Yola</p></div>
                   <div> <p className="Time">Time: 8:00PM</p></div>
                  </div>
                </div>

              </div>

              
              

              
        </div>  


        <div className="Events-Container-Outer">
              <div className="Events-Container-Inner">

                <div className="Event-Date-Section">
                  <div className="Event-Date-Section-Inner">
                    <div><h4>23</h4></div>
                    <div><span>January</span></div>
                  </div>
                 
                </div>
                <div className="Events-Title-Section">
                  <div className="Events-Title-Section-Inner">
                    <p>ORIDSAN-ASCEND STUDIOS FOUNDATION, CREATIVE TECHNOLOGY PROGRAM (CTP) 2022</p>
                  </div>
                  <div className="Events-Title-Section-Inner1">
                   <div> <p >Venue: Mau Yola</p></div>
                   <div> <p className="Time">Time: 8:00PM</p></div>
                  </div>
                </div>

              </div>

              
              

              
        </div>


        
      </div>
             
            
        </div>
     );
}
 
export default Home;