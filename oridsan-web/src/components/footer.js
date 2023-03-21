import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import  TwitterIcon from '@mui/icons-material/Twitter';
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
                        <p>No. 59 Target Junction, Muhammad Mustapha
                            Way Jimeta Yola North, Adamawa State, Nigeria.
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
                            <li>Training</li>
                           
                        </div>
                    </div>
                </div>
                <div>
                    <div><h3>Legal</h3></div>
                    <div>
                        <p>Tems and conditions apply</p>
                        
                        
                    </div>
                    <div>
                        {/* <TwitterIcon></TwitterIcon>
                        <InstagramIcon></InstagramIcon>
                        <FacebookIcon></FacebookIcon>
                        <LinkedInIcon></LinkedInIcon> */}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;