import { ClockCircleOutlined, AimOutlined} from '@ant-design/icons';
import './About.css';
const Conference = () => {
    return ( 
        <div>
           <div className='Background-Display-Image-Container'>
        {/* <img className='bg-img' src='https://www.cactusimages.co.uk/wp-content/uploads/2019/11/121119Oviso_0628.jpg' width='100%' height='300px' alt=''/> */}
       <div className='Centered-Content'> <h1>Events & Conferences</h1></div>
        </div>


                {/* upcoming events and activities  */}
      <div><h3 className="Upcoming-Events-Header">Ongoing/Past Events & Conferences</h3></div>
      <div className="Events-Container">
              {/* <div><h3 className="Upcoming-Events-Header">Upcoming Events & Activities</h3></div> */}
          <div className="Events-Container-Outer">
              <div className="Events-Container-Inner">

                <div className="Event-Date-Section">
                  <div className="Event-Date-Section-Inner">
                    <div><h4>30</h4></div>
                    <div><span>Sept</span></div>
                  </div>
                 
                </div>
                <div className="Events-Title-Section">
                  <div className="Events-Title-Section-Inner">
                    <p>The Importance of Mathematical Modelling in the field of Operations & Research, case Study of Mau Yola</p>
                  </div>
                  <div className="Events-Title-Section-Inner1">
                   <div> <p ><AimOutlined /> American University of Nigeria</p></div>
                   <div> <p className="Time"><ClockCircleOutlined /> 10:00AM</p></div>
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
                  <div> <p ><AimOutlined /> Modibbo Adama University Yola.</p></div>
                   <div> <p className="Time"><ClockCircleOutlined /> 8:00PM</p></div>
                  </div>
                </div>

              </div>

              
              

              
        </div>


        
      </div>


        </div>
     );
}
 
export default Conference;