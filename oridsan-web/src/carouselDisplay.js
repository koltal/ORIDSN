import { Carousel } from 'react-carousel-minimal';

function Slider() {
 const data = [
    {
      image: "https://www.unicef.org.uk/babyfriendly/wp-content/uploads/sites/2/2018/03/2000x1000-Conference-2016.jpg",
      caption: "Operation Research Institute for Decision Science  & Analytics  of Nigeria",
      details: "I'm Francissco Junior"
    },
    {
      image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      caption: "Scotland"
    },
    {
      image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      caption: "Darjeeling"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
      caption: "San Francisco"
    },
    {
      image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
      caption: "Scotland"
    },
    {
      image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
      caption: "Darjeeling"
    },
    {
      image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
      caption: "San Francisco"
    },
    {
      image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
      caption: "Scotland"
    },
    {
      image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
      caption: "Darjeeling"
    }
  ];

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
            data={data}
            time={5000}
            width="100%"
            height="643px"
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
              marginTop: "2px",
            }}
          />
        </div>
      
    </div>
  );
}

export default Slider;
