import react from "react";
import './youtube.css'
import Second from "./sidebar/Second.jsx"
import Third from "./sidebar/Third.jsx"
import Four from "./sidebar/Four.jsx"
import Thirdbar from "./mainbar/Thirdbar.jsx"
import search from "./IMG/search.png"
import voice from "./IMG/mic.png"
import record from "./IMG/create.png"
import more from "./IMG/more.png"
import bell from "./IMG/bell.png"
import profile from "./IMG/Ellipse 4 (3).png"
import left from "./IMG/leftBottom.png"

function Main (){
    return(
        <>
       <div className="main">
        <div className="Sidebar">
        <div className="First">
        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/hambarger.png?raw=true" alt=""  className="Logo"/> 
        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Youtube%20logo.png?raw=true" alt="" />   
        </div> 
        <div className="Second">
            <div className="Subsecond">
            <Second />
            </div>
      
        </div>
       
        <div className="Third">
            <Third/>
        </div>

        <div className="Four">
          <Four/>
        </div>
        </div>
        <div className="Mainbar">
           <div className="Topbar">
            <div className="mainsearch">
            <div className="searchbar">
            <input type="text" placeholder="Search" />
            <div className="subsearch"><img src={search} alt="" className="searchicon" /></div>
            </div>
            <div className="voice">
                <img src={voice} alt="" />
            </div>
            </div>
            <div className="upicon">
                <img src={record} alt="" />
                <img src={more} alt="" />
                <img src={bell} alt="" />
                <img src={profile} alt="" />
            </div>
           </div>
           <div className="Secondbar">
           <div className="Topdisc">
           <p id="para1" >All</p>
           <p>Coke Studio</p>
           <p>UX</p>
           <p>Case Study</p>
           <p>Music</p>
           <p>Bangla Lofi</p>
           <p>Tour</p>
           <p>Tech</p>
           <p>iPhone13</p>
           <p>Sainmartin</p>
           <p>User Interface Design</p>
           </div>
           <div className="topleft"><img src={left} alt="" /></div>
           </div>
           <div className="Thirdbar">
             <Thirdbar/>
           </div>
        </div>
       </div>
        </>
    )
}export default Main