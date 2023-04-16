import { PhoneOutlined,MessageOutlined, AimOutlined} from '@ant-design/icons';
import './About.css';
const Contact = () => {
    return ( 
        <div>
            <div className='Background-Display-Image-Container'>
        {/* <img className='bg-img' src='https://www.cactusimages.co.uk/wp-content/uploads/2019/11/121119Oviso_0628.jpg' width='100%' height='300px' alt=''/> */}
       <div className='Centered-Content'> <h1>Contact us</h1></div>
        </div>
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