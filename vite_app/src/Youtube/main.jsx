// import react from "react";
// import './youtube.css'
// import Second from "./sidebar/Second.jsx"
// import Third from "./sidebar/Third.jsx"
// import Four from "./sidebar/Four.jsx"
// import Thirdbar from "./mainbar/Thirdbar.jsx"
// import search from "./IMG/search.png"
// import voice from "./IMG/mic.png"
// import record from "./IMG/create.png"
// import more from "./IMG/more.png"
// import bell from "./IMG/bell.png"
// import profile from "./IMG/Ellipse 4 (3).png"
// import left from "./IMG/leftBottom.png"

// function Main() {
//     return (
//         <>
//             <div className="main">
//                 <div className="Sidebar">
//                     <div className="First">
//                         <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/hambarger.png?raw=true" alt="" className="Logo" />
//                         <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Youtube%20logo.png?raw=true" alt="" />
//                     </div>
//                     <div className="Second">
//                         <div className="Subsecond">
//                             <Second />
//                         </div>

//                     </div>

//                     <div className="Third">
//                         <script></script>
//                         <Third />
//                     </div>

//                     <div className="Four">
//                         <Four />
//                     </div>
//                 </div>
//                 <div className="Mainbar">

//                     <div className="Topbar">
//                         <div className="mainsearch">
//                             <div className="searchbar">
//                                 <input type="text" placeholder="Search" />
//                                 <div className="subsearch"><img src={search} alt="" className="searchicon" /></div>
//                             </div>
//                             <div className="voice">
//                                 <img src={voice} alt="" />
//                             </div>
//                         </div>
//                         <div className="upicon">
//                             <img src={record} alt="" />
//                             <img src={more} alt="" />
//                             <img src={bell} alt="" />
//                             <img src={profile} alt="" />
//                         </div>
//                     </div>
//                     <div className="Secondbar">
//                         <div className="Topdisc">
//                             <p id="para1" >All</p>
//                             <p>Coke Studio</p>
//                             <p>UX</p>
//                             <p>Case Study</p>
//                             <p>Music</p>
//                             <p>Bangla Lofi</p>
//                             <p>Tour</p>
//                             <p>Tech</p>
//                             <p>iPhone13</p>
//                             <p>Sainmartin</p>
//                             <p>User Interface Design</p>
//                         </div>
//                         <div className="topleft"><img src={left} alt="" /></div>
//                     </div>
//                     <div className="Thirdbar">
                       
//                         <Thirdbar search={search}/>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// } export default Main





// import React, { useState } from "react";
// import './youtube.css';
// import Second from "./sidebar/Second.jsx";
// import Third from "./sidebar/Third.jsx";
// import Four from "./sidebar/Four.jsx";
// import Thirdbar from "./mainbar/Thirdbar.jsx";
// import searchIcon from "./IMG/search.png"; // Renamed to avoid confusion with search prop
// import voice from "./IMG/mic.png";
// import record from "./IMG/create.png";
// import more from "./IMG/more.png";
// import bell from "./IMG/bell.png";
// import profile from "./IMG/Ellipse 4 (3).png";
// import left from "./IMG/leftBottom.png";

// function Main() {
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearch = (e) => {
//     e.preventDefault(); // Prevent page refresh
//     const query = e.target.searchInput.value.trim(); // Get value from input
//     setSearchQuery(query); // Update searchQuery state
//   };

//   return (
//     <>
//       <div className="main">
//         <div className="Sidebar">
//           <div className="First">
//             <img
//               src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/hambarger.png?raw=true"
//               alt=""
//               className="Logo"
//             />
//             <img
//               src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Youtube%20logo.png?raw=true"
//               alt=""
//             />
//           </div>
//           <div className="Second">
//             <div className="Subsecond">
//               <Second />
//             </div>
//           </div>
//           <div className="Third">
//             <Third />
//           </div>
//           <div className="Four">
//             <Four />
//           </div>
//         </div>

//         <div className="Mainbar">
//           <div className="Topbar">
//             <div className="mainsearch">
//               {/* Search bar with form to handle submission */}
//               <form onSubmit={handleSearch} className="searchbar">
//                 <input
//                   type="text"
//                   name="searchInput"
//                   placeholder="Search"
//                 />
//                 <button type="submit" className="subsearch">
//                   <img src={searchIcon} alt="Search" className="searchicon" />
//                 </button>
//               </form>
//               <div className="voice">
//                 <img src={voice} alt="Voice Search" />
//               </div>
//             </div>
//             <div className="upicon">
//               <img src={record} alt="Create" />
//               <img src={more} alt="More" />
//               <img src={bell} alt="Notifications" />
//               <img src={profile} alt="Profile" />
//             </div>
//           </div>
//           <div className="Secondbar">
//             <div className="Topdisc">
//               <p id="para1">All</p>
//               <p>Coke Studio</p>
//               <p>UX</p>
//               <p>Case Study</p>
//               <p>Music</p>
//               <p>Bangla Lofi</p>
//               <p>Tour</p>
//               <p>Tech</p>
//               <p>iPhone13</p>
//               <p>Sainmartin</p>
//               <p>User Interface Design</p>
//             </div>
//             <div className="topleft">
//               <img src={left} alt="Left Navigation" />
//             </div>
//           </div>
//           <div className="Thirdbar">
//             {/* Pass searchQuery as prop to Thirdbar */}
//             <Thirdbar searchQuery={searchQuery} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Main;

/*Part-1 Without scolling line*/
// import React, { useState } from "react";
// import './youtube.css';
// import Second from "./sidebar/Second.jsx";
// import Third from "./sidebar/Third.jsx";
// import Four from "./sidebar/Four.jsx";
// import Thirdbar from "./mainbar/Thirdbar.jsx";
// import searchIcon from "./IMG/search.png";
// import voice from "./IMG/mic.png";
// import record from "./IMG/create.png";
// import more from "./IMG/more.png";
// import bell from "./IMG/bell.png";
// import profile from "./IMG/Ellipse 4 (3).png";
// import left from "./IMG/leftBottom.png";

// function Main() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [activeSection, setActiveSection] = useState("Home");

//   const handleSearch = (e) => {
//     e.preventDefault(); // Prevent page refresh
//     const query = e.target.searchInput.value.trim(); // Get value from input
//     setSearchQuery(query); // Update searchQuery state
//   };

//   return (
//     <>
//       <div className="main">
//         <div className="Sidebar">
//           <div className="First">
//             <img
//               src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/hambarger.png?raw=true"
//               alt=""
//               className="Logo"
//             />
//             <img
//               src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Youtube%20logo.png?raw=true"
//               alt=""
//             />
//           </div>
//           <div className="Second">
//             <div className="Subsecond">
//               {/* Pass the setActiveSection callback */}
//               <Second setSection={setActiveSection} />
//             </div>
//           </div>
//           <div className="Third">
//             <Third />
//           </div>
//           <div className="Four">
//             <Four />
//           </div>
//         </div>

//         <div className="Mainbar">
//           <div className="Topbar">
//             <div className="mainsearch">
//               <form onSubmit={handleSearch} className="searchbar">
//                 <input
//                   type="text"
//                   name="searchInput"
//                   placeholder="Search"
//                 />
//                 <button type="submit" className="subsearch">
//                   <img src={searchIcon} alt="Search" className="searchicon" />
//                 </button>
//               </form>
//               <div className="voice">
//                 <img src={voice} alt="Voice Search" />
//               </div>
//             </div>
//             <div className="upicon">
//               <img src={record} alt="Create" />
//               <img src={more} alt="More" />
//               <img src={bell} alt="Notifications" />
//               <img src={profile} alt="Profile" />
//             </div>
//           </div>
//           <div className="Secondbar">
//             <div className="Topdisc">
//               <p id="para1">All</p>
//               <p>Coke Studio</p>
//               <p>UX</p>
//               <p>Case Study</p>
//               <p>Music</p>
//               <p>Bangla Lofi</p>
//               <p>Tour</p>
//               <p>Tech</p>
//               <p>iPhone13</p>
//               <p>Sainmartin</p>
//               <p>User Interface Design</p>
//             </div>
//             <div className="topleft">
//               <img src={left} alt="Left Navigation" />
//             </div>
//           </div>
//           <div className="Thirdbar">
//             {/* Pass activeSection instead of searchQuery */}
//             <Thirdbar searchQuery={searchQuery} activeSection={activeSection} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Main;

/*Part-2 Loading Line added*/
import React, { useState } from "react";
import './youtube.css';
import Second from "./sidebar/Second.jsx";
import Third from "./sidebar/Third.jsx";
import Four from "./sidebar/Four.jsx";
import Thirdbar from "./mainbar/Thirdbar.jsx";
import searchIcon from "./IMG/search.png";
import voice from "./IMG/mic.png";
import record from "./IMG/create.png";
import more from "./IMG/more.png";
import bell from "./IMG/bell.png";
import profile from "./IMG/Ellipse 4 (3).png";
import left from "./IMG/leftBottom.png";

function Main() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState("Home"); // Track active section
  const [isLoading, setIsLoading] = useState(false); // Loading state for the Mainbar

  // Simulate loading effect when a section changes
  const handleSectionChange = (section) => {
    setActiveSection(section);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false); // Stop loading after 1 second
    }, 1000);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.searchInput.value.trim();
    setSearchQuery(query);
  };

  return (
    <>
      <div className="main">
        <div className="Sidebar">
          <div className="First">
            <img
              src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/hambarger.png?raw=true"
              alt=""
              className="Logo"
            />
            <img
              src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Youtube%20logo.png?raw=true"
              alt=""
            />
          </div>
          <div className="Second">
            <div className="Subsecond">
              {/* Pass handleSectionChange to Second */}
              <Second setSection={handleSectionChange} activeSection={activeSection} />
            </div>
          </div>
          <div className="Third">
            <Third />
          </div>
          <div className="Four">
            <Four />
          </div>
        </div>

        <div className="Mainbar">
          {/* Loading line for Mainbar */}
          {isLoading && <div className="loading-line-top"></div>}
          <div className="Topbar">
            <div className="mainsearch">
              <form onSubmit={handleSearch} className="searchbar">
                <input
                  type="text"
                  name="searchInput"
                  placeholder="Search"
                />
                <button type="submit" className="subsearch">
                  <img src={searchIcon} alt="Search" className="searchicon" />
                </button>
              </form>
              <div className="voice">
                <img src={voice} alt="Voice Search" />
              </div>
            </div>
            <div className="upicon">
              <img src={record} alt="Create" />
              <img src={more} alt="More" />
              <img src={bell} alt="Notifications" />
              <img src={profile} alt="Profile" />
            </div>
          </div>
          <div className="Secondbar">
            <div className="Topdisc">
              <p id="para1">All</p>
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
            <div className="topleft">
              <img src={left} alt="Left Navigation" />
            </div>
          </div>
          <div className="Thirdbar">
            <Thirdbar searchQuery={searchQuery} activeSection={activeSection} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
