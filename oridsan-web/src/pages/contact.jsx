import { PhoneOutlined,MessageOutlined, AimOutlined} from '@ant-design/icons';
import './About.css';
import BackgroundDisplay from '../components/background-display';
const Contact = () => {
    return ( 
        <div>
            <BackgroundDisplay title='Contact'/>
        <div className="Contact-Us-Container">
            <div><center><h2>If You Have Any Query, Feel Free To Contact Us</h2></center></div>
        <center>
            <div className='contact-section-container'>
                <div>
                    <PhoneOutlined className='Icon-Sizer' /><br></br>
                    <span>Call to ask any Question</span>
                    <h3>+234 7067304585</h3>
                </div>
                <div>
                    <MessageOutlined className='Icon-Sizer'/><br></br>
                    <span>Send Email to:</span>
                    <h3>support@oridsan.org.ng</h3>
                </div>
                <div>
                    <AimOutlined className='Icon-Sizer'/><br></br>
                    <span>Visit our Office</span>
                    <h3>No. 21A, Ifokanbale Community, Lamodi, OFFA. Kwara State, Nigeria</h3>
                </div>

            </div>
        </center>
       </div>
        </div>
     );
}
 
export default Contact;