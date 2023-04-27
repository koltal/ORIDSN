import React, { useState } from "react";
const ReadMore = ({textSlice}) => {
    // const text = textSlice;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return ( 
        <p className="text">
      {isReadMore ? textSlice.slice(0, 250) : textSlice}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...expand" : " <<< show less"}
      </span>
    </p>
     );
}
 
export default ReadMore;