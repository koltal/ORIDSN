const BackgroundDisplay = ({title=''}) => {
    return ( 
        <div className='Background-Display-Image-Container'>
        {/* <img className='bg-img' src='https://www.cactusimages.co.uk/wp-content/uploads/2019/11/121119Oviso_0628.jpg' width='100%' height='300px' alt=''/> */}
       <div className='Centered-Content'> <h1>{title}</h1></div>
        </div>
     );
}
 
export default BackgroundDisplay;