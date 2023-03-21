import folder from "../images/folder.png"

const Services = () => {
    return ( 
        <div >
            <div className="Headings-Services">
             <div><h3 className="What-we-do">WHAT WE DO</h3></div>
            <div><h4>We Help Researchers to Grow Exponentially</h4></div>
         </div>
        <div className="Services-Container">
           
            <div className="Services-Card-Container">
                <div className="Services-Card">
                   <div><img src={folder} alt=""/></div> 
                </div>
                <div>
                    <div><h4>Seminars/Bootcamps</h4></div>
                    <div><p>We organise seminars on practical and theoritcal aspects of computing.</p></div>
                </div>
            </div>

            <div className="Services-Card-Container">
                <div className="Services-Card">
                   <div><img src={folder} alt=""/></div> 
                </div>
                <div>
                    <div><h4>Seminars/Bootcamps</h4></div>
                    <div><p>We organise seminars on practical and theoritcal aspects of computing.</p></div>
                </div>
            </div>
            <div className="Services-Card-Container">
                <div className="Services-Card">
                   <div><img src={folder} alt=""/></div> 
                </div>
                <div>
                    <div><h4>Seminars/Bootcamps</h4></div>
                    <div><p>We organise seminars on practical and theoritcal aspects of computing.</p></div>
                </div>
            </div>
            
        </div>


        {/* we are Everywhere in Nigeria Container */}
        <div className="Statistics-Container">
            <div><center><h2>WE ARE EVERYWHERE IN NIGERIA</h2></center></div>
            <div className="Stastics-Count-section">
                <div className="Stat-Members">
                    
                    <div><h4>3400+ Members</h4></div>
                </div>
                <div className="Stats-Local-Chapters">
                    <div><h4>250+ Local Chapters</h4></div>
                </div>
                <div className="Stats-States">
                    <div><h4>36 states + FCT </h4></div>
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default Services;