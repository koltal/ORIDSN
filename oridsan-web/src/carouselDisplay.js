import { useState } from 'react';
import { Carousel } from 'react-carousel-minimal';


function Slider() {
  const [slide, setSlide] = useState([{
    image: "https://www.unicef.org.uk/babyfriendly/wp-content/uploads/sites/2/2018/03/2000x1000-Conference-2016.jpg",
    caption: `IFORS 2023 23rd IFORS Triennial Conference Santiago, Chile, July 10 - 14, 2023`,
    details: "I'm Francissco Junior"
  },
  {
    image: "https://theimageconference.org/wp-content/uploads/2020/04/image_conference_sylvia_opening2-scaled.jpg",
    caption: "The Science of Better Decision Making and Analytics"
  },
  {
    image: "https://library.medschl.cam.ac.uk/files/2019/07/photo-of-a-conference-1024x681.jpg",
    caption: "Darjeeling"
  },
  {
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9",
    caption: "San Francisco"
  },
  {
    image: "https://www.jou.ufl.edu/wp-content/uploads/2016/07/photo_504410-e1469717564175.jpg",
    caption: "Scotland"
  },
  {
    image: "https://everything-pr.com/wp-content/uploads/2015/10/PR-Conference.jpg",
    caption: "Darjeeling"
  },
  {
    image: "https://s3.amazonaws.com/utep-uploads/wp-content/uploads/wsumba/2019/02/15101702/WSUMBA_316098269_WEB-E_1902_HeroImage.jpg",
    caption: "San Francisco"
  },
  {
    image: "https://www.mizlink-pakistan.com/images/Conferences.jpeg",
    caption: "Scotland"
  },
  {
    image: "https://www.ijarbas.com/wp-content/uploads/2020/03/CONFERENCE-IJARBAS-768x432.jpg",
    caption: "Darjeeling"
  }]);
//  const data = [
    
//   ];

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
      
        <div style={{
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
      
    </div>
  );
}

export default Slider;
