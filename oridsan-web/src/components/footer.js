import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { WhatsAppOutlined, FacebookFilled, InstagramOutlined, TwitterSquareFilled, GoogleOutlined } from '@ant-design/icons';
// import  InstagramIcon from '@mui/icons-material/Instagram';
// import  FacebookIcon from '@mui/icons-material/Facebook';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
    return ( 
        <div className="Overall-Footer-Container">
            <div className="Footer-Container">
                <div>
                    <div><h3>ORIDSAN NATIONAL</h3></div>
                    <div>
                        <p>ORIDSAN Nigeria</p>
                        <p>Address: No. 21A, Ifokanbale Community, Lamodi, OFFA. Kwara State Nigeria
                        </p>
                        <p>Give us a call on <strong>+2348140409672</strong></p>
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <h3>Quick Links</h3>
                        </div>
                        <div>
                             <li>Home</li>
                             <li>About</li>
                             <li>Affiliations</li>
                             {/* <Link to='about'>About</Link><br></br>
                             <Link to='products'>Product</Link> */}
                            <li>Contact</li>
                            
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <h3>Services</h3>
                        </div>
                        <div>
                            <li>News</li>
                            <li>Publications</li>
                            <li>Membership</li>
                           
                        </div>
                    </div>
                </div>
                <div>
                    <div><h3>Legal</h3></div>
                    <div>
                        <p>Tems and conditions apply</p>
                        
                        
                    </div>
                    <div >
                    <WhatsAppOutlined style={{padding: 10, fontSize: 25,}}/>
                    <FacebookFilled style={{padding: 10, fontSize: 25,}}/>
                    <InstagramOutlined style={{padding: 10, fontSize: 25,}}/>
                    <TwitterSquareFilled style={{padding: 10, fontSize: 25,}}/>
                    <GoogleOutlined style={{padding: 10, fontSize: 25,}}/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;