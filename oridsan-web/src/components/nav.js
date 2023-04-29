import { CloseCircleOutlined, MenuOutlined } from '@ant-design/icons';
import { Link, } from 'react-router-dom';
import React, { useState } from "react"
import logo from '../images/logo.png';



const Navbar = () => {

const [navbarOpen, setNavbarOpen] = useState(false);


    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
        console.log('yeah');
    }
    const closeMenu = () => {
        setNavbarOpen(false)
      }
    return ( 
        
          <div className='Header-Section'>
                <div className='Nav-Logo'>
                  <img src={logo} className='Nuts-Logo' alt="" srcset=""width='160px' height='33px' />
                </div>
                <div className='Nav-Items'>
                    <nav>
                       
                        <Link to='' >Home</Link>
                        <Link to='about'>About</Link>
                        <Link to='affiliation'>Affiliations</Link>
                        <Link to='chapters'>Chapters</Link>
                        <Link to='conference'>Conferences</Link>
                        <Link to='membership'>Membership</Link>
                        <Link to='publication'>Publications</Link>
                        <Link to='news'>News</Link>
                        <Link className='contact-btn' to='contact'>Contact</Link>
                        <Link  to='https://operations-research-association.vercel.app/signup'><button className='signup-btn'>Sign Up</button></Link>
                    </nav>
                    <div className='Menu-Icon-Container'>
                     
                      <MenuOutlined onClick={handleToggle} > {navbarOpen ? "" : ""} </MenuOutlined>
                     
                      <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                       
                         <CloseCircleOutlined className='Close-Btn' onClick={closeMenu}/>

                      <Link 
                        to=''
                        onClick={closeMenu}>Home</Link>
                        <Link to='about' onClick={closeMenu}>About</Link>
                        <Link to='affiliation' onClick={closeMenu}>Affiliation</Link>
                        <Link to='chapters' onClick={closeMenu}>Chapters</Link>
                        <Link to='conference' onClick={closeMenu}>Conferences</Link>
                        <Link to='membership' onClick={closeMenu}>Membership</Link>
                        <Link to='publication' onClick={closeMenu}>Publications</Link>
                        <Link to='contact' onClick={closeMenu}>News</Link>
                        <Link to='contact' onClick={closeMenu}>Contact</Link>
                        <Link  to='https://operations-research-association-demo.vercel.app/'><button className='signup-btn'>Sign Up</button></Link>

                      </ul>
                      
              
                    </div>
                </div>
               
                </div>
                
      
     );
}
 
export default Navbar;