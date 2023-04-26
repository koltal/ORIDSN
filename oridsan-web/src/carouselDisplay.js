import { useEffect, useState } from 'react';
import { Carousel } from 'react-carousel-minimal';


function Slider() {
  const [slide, setSlide] = useState([]);
//  const data = [
    
//   ];
useEffect(()=>{
  fetch('https://oridsan.fly.dev/api/v1/Sliders')
  .then(res=>{
    return res.json();
  })
  .then(data =>{
    console.log(data)
    setSlide(data)
  })
}, []);

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const detailsStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  // const slideNumberStyle = {
  //   fontSize: '20px',
  //   fontWeight: 'bold',
  // }
  return (
    <div className="App1">
      
      {slide && <div style={{
          padding: ""
        }}>
          <Carousel
            data={slide}
            time={5000}
            width="100%"
            height="843px"
            captionStyle={captionStyle}
            details = {detailsStyle}
            // radius="10px"
            // slideNumber={true}
            // slideNumberStyle={slideNumberStyle}
            captionPosition="center"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="fit"
            // thumbnails={true}
            // thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "100%",
              maxHeight: "50%",
              // marginTop: "2px",
            }}
          />
        </div>
}
    </div>
  );
}

export default Slider;
