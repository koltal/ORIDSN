// import React from 'react';
import { CloseCircleOutlined, MenuOutlined } from '@ant-design/icons';
import About from '../pages/about';

import { Link, } from 'react-router-dom';
// import Modal from 'react-modal';
// import MenuIcon from '@mui/icons-material/Menu';
// import DeleteIcon from '@mui/icons-material/Delete';

// import MenuIcon from '@material-ui/core/Menu';
// import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from "react"
// import logo1 from './NewLogo.png';
import logo from '../images/logo.png';


// const customStyles = {
//     content: {
//       top: '45%',
      
//       left: '50%',
//       right: 'auto',
//       bottom: 'auto',
//       marginRight: '-150%',
//       transform: 'translate(-50%, -50%)',
//     },
//   };


const Navbar = () => {

//     let subtitle;
//   const [modalIsOpen, setIsOpen] = React.useState(false);

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
                       
                        <Link to=''>Home</Link>
                        <Link to='about'>About</Link>
                        <Link to='about'>Affiliations</Link>
                       
                        <Link to='conferences'>Conferences</Link>
                        <Link to='about'>Training</Link>
                        <Link to='about'>Publications</Link>
                        <Link to='about'>News</Link>
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
                        <Link to='about' onClick={closeMenu}>Affiliation</Link>
                        <Link to='contact' onClick={closeMenu}>Chapters</Link>
                        <Link to='contact' onClick={closeMenu}>Conferences</Link>
                        <Link to='contact' onClick={closeMenu}>Training</Link>
                        <Link to='contact' onClick={closeMenu}>Publications</Link>
                        <Link to='contact' onClick={closeMenu}>News</Link>
                        <Link to='contact' onClick={closeMenu}>Contact</Link>
                        <Link  to='https://operations-research-association.vercel.app/signup'><button className='signup-btn'>Sign Up</button></Link>

                      </ul>
                      
              
                    </div>
                </div>
               
                </div>
                
      
     );
}
 
export default Navbar;