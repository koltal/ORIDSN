import { ClockCircleOutlined, CalendarOutlined} from '@ant-design/icons';
import { Link, } from 'react-router-dom';
const News = () => {
    const data = [{
        image:"https://ao-alliance.org/wp-content/uploads/2018/03/DSC00226-e1522395266863.jpg",
        title:"ORIDSAN NEWS HEADLINES",
        time:"time stamp",
    }];

    return ( 
        <div className="News-Container">
            <div>
                <center><h1>News and Updates</h1></center>
            </div>
            <div className="News-Card-Container">
                <div className="News-Card">
                    <div className="News-Image">
                        <img src="https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg" alt="imageNews"/>
                    </div>
                    <div className="News-Title">
                       <Link to= 'https://ifors2023.com/'> <p>IFORS 2023 23rd IFORS Triennial Conference Santiago, Chile, July 10 - 14, 2023</p></Link>
                    </div>
                    <div style={{display: 'flex'}}>
                        <div><p><ClockCircleOutlined/> 12:07pm</p></div>
                        <div style={{float: 'right', marginLeft:50}}><p><CalendarOutlined /> 10th, July 2023</p></div>
                    </div>
                </div>
                <div className="News-Card">
                    <div className="News-Image">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg" alt="imageNews"/>
                    </div>
                    <div className="News-Title">
                        <p>ORIDSAN-ASCEND STUDIOS FOUNDATION, CREATIVE TECHNOLOGY PROGRAM (CTP) 2022</p>
                    </div>
                    <div style={{display: 'flex'}}>
                        <div><p><ClockCircleOutlined/> 8:00PM</p></div>
                        <div style={{float: 'right', marginLeft:50}}><p><CalendarOutlined /> 24th, Jan 2023</p></div>
                    </div>
                </div>
                <div className="News-Card">
                    <div className="News-Image">
                        <img src="https://www.unicef.org.uk/babyfriendly/wp-content/uploads/sites/2/2018/03/2000x1000-Conference-2016.jpg" alt="imageNews"/>
                    </div>
                    <div className="News-Title">
                        <p>ORIDSAN-ASCEND STUDIOS FOUNDATION, CREATIVE TECHNOLOGY PROGRAM (CTP) 2022</p>
                    </div>
                    <div style={{display: 'flex'}}>
                        <div><p><ClockCircleOutlined/> 8:00PM</p></div>
                        <div style={{float: 'right', marginLeft:50}}><p><CalendarOutlined /> 24th, Jan 2023</p></div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default News;