import folder from "../images/folder.png"
import user from "../images/account.png";
import locationIcon from "../images/Union.png";
import chapterIcon from "../images/folder-active.png";

const Services = () => {
    return ( 
        <div >
            <div className="Headings-Services">
             <div><h2 className="What-we-do">WHAT WE DO</h2></div>
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
                <div><img src={user} alt=""/></div> 
                    <div className="Count"><span>34,000 + </span><p>Members</p></div>
                </div>
                <div className="Stats-Local-Chapters">
               <div><img src={chapterIcon} alt=""/></div> 
                    <div className="Count"><span>250 + </span><p>Local Chapters</p></div>
                </div>
                <div className="Stats-States">
                <div><img src={locationIcon} alt=""/></div> 
                    <div className="Count"><span>36 + FCT </span><p>states </p></div>
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default Services;