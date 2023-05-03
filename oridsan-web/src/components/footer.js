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
                    <div><h3>ORIDSAN Nigeria</h3><h5> RC - 6952853 </h5></div>
                    <div>
                        <p>OPERATIONS RESEARCH INSTITUTE FOR DECISION SCIENCES & ANALYTICS OF NIGERIA LTD/GTE</p>
                        <p>Address: No. 21A, Ifokanbale Community, Lamodi, OFFA. Kwara State Nigeria
                        </p>
                        <p>Give us a call on <strong>+234 706 - 730 - 4585</strong></p>
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <h3>Quick Links</h3>
                        </div>
                        <div className='Footer-Links'>
                            <div> <Link to='/'>Home</Link></div>
                            <div> <Link to='/about'>About</Link></div>
                             <div><Link to='/affiliation'>Affiliation</Link></div>
                             {/* <li>Affiliations</li> */}
                             {/* <Link to='about'>About</Link><br></br>
                             <Link to='products'>Product</Link> */}
                            {/* <li>Contact</li> */}
                            
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <h3>Services</h3>
                        </div>
                        <div className='Footer-Links'>
                            <div> <Link to='/membership'>Membership</Link></div>
                            <div> <Link to='/chapters'>Chapters</Link></div>
                             <div><Link to='/conference'>Conferences</Link></div>
                             {/* <li>Affiliations</li> */}
                             {/* <Link to='about'>About</Link><br></br>
                             <Link to='products'>Product</Link> */}
                            {/* <li>Contact</li> */}
                            
                        </div>
                    </div>
                </div>
                <div>
                    <div><h3>Legal</h3></div>
                    <div>
                        <p>Terms and conditions apply</p>
                        
                        
                    </div>
                    <div >
                    <WhatsAppOutlined style={{padding: 10, fontSize: 20,}}/>
                    <FacebookFilled style={{padding: 10, fontSize: 20,}}/>
                    <InstagramOutlined style={{padding: 10, fontSize: 20,}}/>
                    <TwitterSquareFilled style={{padding: 10, fontSize: 20,}}/>
                    <GoogleOutlined style={{padding: 10, fontSize: 20,}}/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;