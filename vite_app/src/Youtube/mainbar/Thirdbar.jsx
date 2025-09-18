


// import React, { useEffect, useState } from "react";
// import '../youtube.css';
// import verified from '../IMG/verified.png';

// function Thirdbar({ searchQuery }) {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     if (!searchQuery) return; // Do nothing if no search query

//     const fetchData = async () => {
//       try {
       
//         const apiKey = 'AIzaSyCg5JpFoS3Mjbl9IvnBehSb3jzFqsf4Uc0'; // Your API Key
//         const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(searchQuery)}&key=${apiKey}&type=video&maxResults=30`;

//         const response = await fetch(url);
//         const result = await response.json();

//         const transformedData = result.items.map(item => ({
//           id: item.id.videoId,
//           img: item.snippet.thumbnails.medium.url,
//           disc: item.snippet.title,
//           disc2: item.snippet.description,
//           img2: 'path_to_user_image',
//           img3: verified,
//           lowdisc1: item.snippet.channelTitle,
//           lowdisc2: item.snippet.publishedAt,
//           cname: '',
//           h: ''
//         }));

//         setData(transformedData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [searchQuery]); // Refetch data whenever searchQuery changes

//   return (
//     <div className="Mainthirdbar">
//       <div className="Frame1">
//         {data.map((i) => (
//           <div className="Part1" key={i.id}>
//             <img src={i.img} alt="" />
//             <div className={i.cname}>
//               {i.h && <img src={i.h} alt="" />} {/* Display live icon if exists */}
//             </div>
//             <div className="Part2">
//               <img src={i.img2} alt="" className="sslogo" />
//               <div>
//                 <div className="Lowerdisc">
//                   <span>{i.disc}</span><br />
//                   <span>{i.disc2}</span>
//                 </div>
//                 <div>
//                   <div>
//                     <span>{i.lowdisc1}</span>
//                     <div><img src={i.img3} alt="" className="verify" /></div>
//                   </div>
//                   <div><span>{i.lowdisc2}</span></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Thirdbar


// import React, { useEffect, useState } from "react";
// import '../youtube.css';
// import verified from '../IMG/verified.png';

// function Thirdbar({ searchQuery }) {
//   const [data, setData] = useState([]);
//   const [popupVisible, setPopupVisible] = useState(false);
//   const [selectedVideoId, setSelectedVideoId] = useState(null);

//   useEffect(() => {
//     if (!searchQuery) return; // Do nothing if no search query

//     const fetchData = async () => {
//       try {
//         const apiKey = 'AIzaSyCg5JpFoS3Mjbl9IvnBehSb3jzFqsf4Uc0'; // Your API Key
//         const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(searchQuery)}&key=${apiKey}&type=video&maxResults=30`;

//         const response = await fetch(url);
//         const result = await response.json();

//         const transformedData = result.items.map(item => ({
//           id: item.id.videoId,
//           img: item.snippet.thumbnails.medium.url,
//           disc: item.snippet.title,
//           disc2: item.snippet.description,
//           img2: item.snippet.thumbnails.default.url,
//           img3: verified,
//           lowdisc1: item.snippet.channelTitle,
//           lowdisc2: item.snippet.publishedAt,
//           cname: '',
//           h: ''
//         }));

//         setData(transformedData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [searchQuery]);

//   const openPopup = (videoId) => {
//     setSelectedVideoId(videoId);
//     setPopupVisible(true);
//   };

//   const closePopup = () => {
//     setPopupVisible(false);
//     setSelectedVideoId(null);
//   };

//   return (
//     <div className="Mainthirdbar">
//       <div className="Frame1">
//         {data.map((i) => (
//           <div className="Part1" key={i.id} onClick={() => openPopup(i.id)}>
//             <img src={i.img} alt="" />
//             <div className={i.cname}>
//               {i.h && <img src={i.h} alt="" />}
//             </div>
//             <div className="Part2">
//               <img src={i.img2} alt="" className="sslogo" />
//               <div>
//                 <div className="Lowerdisc">
//                   <span>{i.disc}</span><br />
//                   <span>{i.disc2}</span>
//                 </div>
//                 <div>
//                   <div>
//                     <span>{i.lowdisc1}</span>
//                     <div><img src={i.img3} alt="" className="verify" /></div>
//                   </div>
//                   <div><span>{i.lowdisc2}</span></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Popup Modal */}
//       {popupVisible && selectedVideoId && (
//         <div className="popupOverlay" onClick={closePopup}>
//           <div className="popupContent" onClick={(e) => e.stopPropagation()}>
//             <button className="closeButton" onClick={closePopup}>✖</button>
//             <iframe
//               width="560"
//               height="315"
//               src={`https://www.youtube.com/embed/${selectedVideoId}`}
//               title="YouTube video player"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Thirdbar;

/*3-part(maore button not added)*/

// import React, { useEffect, useState } from "react";
// import "../youtube.css";
// import verified from "../IMG/verified.png";

// function Thirdbar({ searchQuery, activeSection }) {
//   const [data, setData] = useState([]);
//   const [popupVisible, setPopupVisible] = useState(false);
//   const [selectedVideoId, setSelectedVideoId] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
       
//         const apiKey = "AIzaSyATTX5FmnehCW4VmX6haRBZNhY0VM831E4";
//         const query = searchQuery || activeSection; // Use searchQuery if available, fallback to activeSection
//         if (!query) return; // Don't fetch if neither query nor section exists

//         const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
//           query
//         )}&key=${apiKey}&type=video&maxResults=9`;

//         const response = await fetch(url);
//         const result = await response.json();

//         const transformedData = result.items.map((item) => ({
//           id: item.id.videoId,
//           img: item.snippet.thumbnails.medium.url,
//           disc: item.snippet.title,
//           disc2: item.snippet.description,
//           img2: item.snippet.thumbnails.default.url,
//           img3: verified,
//           lowdisc1: item.snippet.channelTitle,
//           lowdisc2: new Date(item.snippet.publishedAt).toDateString(), // Format publish date
//         }));

//         setData(transformedData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [searchQuery, activeSection]); // Refetch whenever searchQuery or activeSection changes

//   const openPopup = (videoId) => {
//     setSelectedVideoId(videoId);
//     setPopupVisible(true);
//   };

//   const closePopup = () => {
//     setPopupVisible(false);
//     setSelectedVideoId(null);
//   };

//   return (
//     <div className="Mainthirdbar">
//       <div className="Frame1">
//         {data.map((video) => (
//           <div
//             className="Part1"
//             key={video.id}
//             onClick={() => openPopup(video.id)}
//           >
//             <img src={video.img} alt={video.disc} />
//             <div className="Part2">
//               <img src={video.img2} alt="Channel Logo" className="sslogo" />
//               <div>
//                 <div className="Lowerdisc">
//                   <span>{video.disc}</span>
//                   <br />
//                   <span>{video.disc2}</span>
//                 </div>
//                 <div>
                  
//                   <div>
//                   <span>{video.lowdisc1}</span>
//                     <img src={video.img3} alt="Verified" className="verify" />
//                   </div>
//                   <span className="lowtext">{video.lowdisc2}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Popup Modal */}
//       {popupVisible && selectedVideoId && (
//         <div className="popupOverlay" onClick={closePopup}>
//           <div className="popupContent" onClick={(e) => e.stopPropagation()}>
//             <button className="closeButton" onClick={closePopup}>
//               ✖
//             </button>
//             <iframe
//               width="560"
//               height="315"
//               src={`https://www.youtube.com/embed/${selectedVideoId}`}
//               title="YouTube video player"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Thirdbar;

/*4-Part more video button added*/
// import React, { useEffect, useState } from "react";
// import "../youtube.css";
// import verified from "../IMG/verified.png";

// function Thirdbar({ searchQuery, activeSection }) {
//   const [data, setData] = useState([]);
//   const [nextPageToken, setNextPageToken] = useState(null);
//   const [popupVisible, setPopupVisible] = useState(false);
//   const [selectedVideoId, setSelectedVideoId] = useState(null);

//   useEffect(() => {
//     fetchData();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [searchQuery, activeSection]); // Refetch whenever searchQuery or activeSection changes

//   const fetchData = async (pageToken = null) => {
//     try {
//       const apiKey = "AIzaSyATTX5FmnehCW4VmX6haRBZNhY0VM831E4";
//       const query = searchQuery || activeSection; // Use searchQuery if available, fallback to activeSection
//       if (!query) return; // Don't fetch if neither query nor section exists

//       const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
//         query
//       )}&key=${apiKey}&type=video&maxResults=30${pageToken ? `&pageToken=${pageToken}` : ""}`;

//       const response = await fetch(url);
//       const result = await response.json();

//       const transformedData = result.items.map((item) => ({
//         id: item.id.videoId,
//         img: item.snippet.thumbnails.medium.url,
//         disc: item.snippet.title,
//         disc2: item.snippet.description,
//         img2: item.snippet.thumbnails.default.url,
//         img3: verified,
//         lowdisc1: item.snippet.channelTitle,
//         lowdisc2: new Date(item.snippet.publishedAt).toDateString(), // Format publish date
//       }));

//       setData(transformedData);
//       setNextPageToken(result.nextPageToken || null);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const fetchMoreVideos = () => {
//     if (nextPageToken) {
//       fetchData(nextPageToken);
//     }
//   };

//   const openPopup = (videoId) => {
//     setSelectedVideoId(videoId);
//     setPopupVisible(true);
//   };

//   const closePopup = () => {
//     setPopupVisible(false);
//     setSelectedVideoId(null);
//   };

//   return (
//     <div className="Mainthirdbar">
//       <div className="Frame1">
//         {data.map((video) => (
//           <div
//             className="Part1"
//             key={video.id}
//             onClick={() => openPopup(video.id)}
//           >
//             <img src={video.img} alt={video.disc} />
//             <div className="Part2">
//               <img src={video.img2} alt="Channel Logo" className="sslogo" />
//               <div>
//                 <div className="Lowerdisc">
//                   <span>{video.disc}</span>
//                   <br />
//                   <span>{video.disc2}</span>
//                 </div>
//                 <div>
//                   <div>
//                     <span>{video.lowdisc1}</span>
//                     <img src={video.img3} alt="Verified" className="verify" />
//                   </div>
//                   <span className="lowtext">{video.lowdisc2}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Load More Button */}
//       {nextPageToken && (
//         <button className="loadMoreButton" onClick={fetchMoreVideos}>
//           More Videos
//         </button>
//       )}

//       {/* Popup Modal */}
//       {popupVisible && selectedVideoId && (
//         <div className="popupOverlay" onClick={closePopup}>
//           <div className="popupContent" onClick={(e) => e.stopPropagation()}>
//             <button className="closeButton" onClick={closePopup}>
//               ✖
//             </button>
//             <iframe
//               width="560"
//               height="315"
//               src={`https://www.youtube.com/embed/${selectedVideoId}`}
//               title="YouTube video player"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Thirdbar;

/*Part-5 Infinite scrolling*/
// import React, { useEffect, useState } from "react";
// import "../youtube.css";
// import verified from "../IMG/verified.png";

// function Thirdbar({ searchQuery, activeSection }) {
//   const [data, setData] = useState([]);
//   const [nextPageToken, setNextPageToken] = useState(null);
//   const [popupVisible, setPopupVisible] = useState(false);
//   const [selectedVideoId, setSelectedVideoId] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     fetchData(); // Fetch initial data
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [searchQuery, activeSection]); // Refetch whenever searchQuery or activeSection changes

//   useEffect(() => {
//     const handleScroll = () => {
//       if (
//         window.innerHeight + document.documentElement.scrollTop >=
//           document.documentElement.offsetHeight - 100 &&
//         !isLoading &&
//         nextPageToken
//       ) {
//         fetchMoreVideos(); // Fetch more videos when scrolling near the bottom
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [isLoading, nextPageToken]); // Re-attach event listener whenever isLoading or nextPageToken changes

//   const fetchData = async (pageToken = null) => {
//     try {
//       const apiKey = "AIzaSyATTX5FmnehCW4VmX6haRBZNhY0VM831E4";
//       const query = searchQuery || activeSection; // Use searchQuery if available, fallback to activeSection
//       if (!query) return; // Don't fetch if neither query nor section exists

//       const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
//         query
//       )}&key=${apiKey}&type=video&maxResults=30${
//         pageToken ? `&pageToken=${pageToken}` : ""
//       }`;

//       setIsLoading(true); // Set loading state
//       const response = await fetch(url);
//       const result = await response.json();

//       const transformedData = result.items.map((item) => ({
//         id: item.id.videoId,
//         img: item.snippet.thumbnails.medium.url,
//         disc: item.snippet.title,
//         disc2: item.snippet.description,
//         img2: item.snippet.thumbnails.default.url,
//         img3: verified,
//         lowdisc1: item.snippet.channelTitle,
//         lowdisc2: new Date(item.snippet.publishedAt).toDateString(), // Format publish date
//       }));

//       setData((prevData) => (pageToken ? [...prevData, ...transformedData] : transformedData));
//       setNextPageToken(result.nextPageToken || null);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     } finally {
//       setIsLoading(false); // Reset loading state
//     }
//   };

//   const fetchMoreVideos = () => {
//     if (nextPageToken) {
//       fetchData(nextPageToken);
//     }
//   };

//   const openPopup = (videoId) => {
//     setSelectedVideoId(videoId);
//     setPopupVisible(true);
//   };

//   const closePopup = () => {
//     setPopupVisible(false);
//     setSelectedVideoId(null);
//   };

//   return (
//     <div className="Mainthirdbar">
//       <div className="Frame1">
//         {data.map((video) => (
//           <div
//             className="Part1"
//             key={video.id}
//             onClick={() => openPopup(video.id)}
//           >
//             <img src={video.img} alt={video.disc} />
//             <div className="Part2">
//               <img src={video.img2} alt="Channel Logo" className="sslogo" />
//               <div>
//                 <div className="Lowerdisc">
//                   <span>{video.disc}</span>
//                   <br />
//                   <span>{video.disc2}</span>
//                 </div>
//                 <div>
//                   <div>
//                     <span>{video.lowdisc1}</span>
//                     <img src={video.img3} alt="Verified" className="verify" />
//                   </div>
//                   <span className="lowtext">{video.lowdisc2}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {isLoading && <div className="loading">Loading more videos...</div>}

//       {/* Popup Modal */}
//       {popupVisible && selectedVideoId && (
//         <div className="popupOverlay" onClick={closePopup}>
//           <div className="popupContent" onClick={(e) => e.stopPropagation()}>
//             <button className="closeButton" onClick={closePopup}>
//               ✖
//             </button>
//             <iframe
//               width="560"
//               height="315"
//               src={`https://www.youtube.com/embed/${selectedVideoId}`}
//               title="YouTube video player"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Thirdbar;

/*Part-5 Channel logo*/
// import React, { useEffect, useState } from "react";
// import "../youtube.css";
// import verified from "../IMG/verified.png";

// function Thirdbar({ searchQuery, activeSection }) {
//   const [data, setData] = useState([]);
//   const [popupVisible, setPopupVisible] = useState(false);
//   const [selectedVideoId, setSelectedVideoId] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const apiKey = "AIzaSyCg5JpFoS3Mjbl9IvnBehSb3jzFqsf4Uc0";
//         const query = searchQuery || activeSection; // Use searchQuery if available, fallback to activeSection
//         if (!query) return; // Don't fetch if neither query nor section exists

//         // Fetch video details
//         const videoUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
//           query
//         )}&key=${apiKey}&type=video&maxResults=15`;

//         const videoResponse = await fetch(videoUrl);
//         const videoResult = await videoResponse.json();

//         // Extract channel IDs for subsequent requests
//         const channelIds = videoResult.items.map(
//           (item) => item.snippet.channelId
//         );

//         // Fetch channel details (logos)
//         const channelUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelIds.join(",")}&key=${apiKey}`;
//         const channelResponse = await fetch(channelUrl);
//         const channelResult = await channelResponse.json();

//         // Map channel IDs to their logos
//         const channelLogos = {};
//         channelResult.items.forEach((channel) => {
//           channelLogos[channel.id] = channel.snippet.thumbnails.default.url;
//         });

//         // Transform video data
//         const transformedData = videoResult.items.map((item) => ({
//           id: item.id.videoId,
//           img: item.snippet.thumbnails.medium.url,
//           disc: item.snippet.title,
//           disc2: item.snippet.description,
//           channelLogo: channelLogos[item.snippet.channelId],
//           img3: verified,
//           lowdisc1: item.snippet.channelTitle,
//           lowdisc2: new Date(item.snippet.publishedAt).toDateString(), // Format publish date
//         }));

//         setData(transformedData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [searchQuery, activeSection]); // Refetch whenever searchQuery or activeSection changes

//   const openPopup = (videoId) => {
//     setSelectedVideoId(videoId);
//     setPopupVisible(true);
//   };

//   const closePopup = () => {
//     setPopupVisible(false);
//     setSelectedVideoId(null);
//   };

//   return (
//     <div className="Mainthirdbar">
//       <div className="Frame1">
//         {data.map((video) => (
//           <div
//             className="Part1"
//             key={video.id}
//             onClick={() => openPopup(video.id)}
//           >
//             <img src={video.img} alt={video.disc} />
//             <div className="Part2">
//               <img
//                 src={video.channelLogo}
//                 alt="Channel Logo"
//                 className="sslogo"
//               />
//               <div>
//                 <div className="Lowerdisc">
//                   <span>{video.disc}</span>
//                   <br />
//                   {/* <span>{video.disc2}</span> */}
//                 </div>
//                 <div>
//                   <div>
//                     <span>{video.lowdisc1}</span>
//                     <img src={video.img3} alt="Verified" className="verify" />
//                   </div>
//                   <span className="lowtext">{video.lowdisc2}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Popup Modal */}
//       {popupVisible && selectedVideoId && (
//         <div className="popupOverlay" onClick={closePopup}>
//           <div className="popupContent" onClick={(e) => e.stopPropagation()}>
//             <button className="closeButton" onClick={closePopup}>
//               ✖
//             </button>
//             <iframe
//               width="560"
//               height="315"
//               src={`https://www.youtube.com/embed/${selectedVideoId}`}
//               title="YouTube video player"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Thirdbar;

import React, { useEffect, useState } from "react";
import "../youtube.css";
import verified from "../IMG/verified.png";

function Thirdbar({ searchQuery, activeSection }) {
  const [data, setData] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData(); // Fetch initial data
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, activeSection]); // Refetch whenever searchQuery or activeSection changes

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 100 &&
        !isLoading &&
        nextPageToken
      ) {
        fetchMoreVideos(); // Fetch more videos when scrolling near the bottom
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading, nextPageToken]); // Re-attach event listener whenever isLoading or nextPageToken changes

  const fetchData = async (pageToken = null) => {
    try {
      const apiKey = "AIzaSyCg5JpFoS3Mjbl9IvnBehSb3jzFqsf4Uc0";
      const query = searchQuery || activeSection; // Use searchQuery if available, fallback to activeSection
      if (!query) return; // Don't fetch if neither query nor section exists

      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
        query
      )}&key=${apiKey}&type=video&maxResults=30${
        pageToken ? `&pageToken=${pageToken}` : ""
      }`;

      setIsLoading(true); // Set loading state
      const response = await fetch(url);
      const result = await response.json();

      const transformedData = await Promise.all(
        result.items.map(async (item) => {
          const channelId = item.snippet.channelId;
          const channelLogo = await fetchChannelLogo(channelId, apiKey);
          return {
            id: item.id.videoId,
            img: item.snippet.thumbnails.medium.url,
            disc: item.snippet.title,
            disc2: item.snippet.description,
            img2: channelLogo,
            img3: verified,
            lowdisc1: item.snippet.channelTitle,
            lowdisc2: new Date(item.snippet.publishedAt).toDateString(), // Format publish date
          };
        })
      );

      setData((prevData) => (pageToken ? [...prevData, ...transformedData] : transformedData));
      setNextPageToken(result.nextPageToken || null);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  const fetchChannelLogo = async (channelId, apiKey) => {
    try {
      const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${apiKey}`;
      const response = await fetch(url);
      const result = await response.json();

      if (result.items && result.items.length > 0) {
        return result.items[0].snippet.thumbnails.default.url;
      } else {
        return ""; // Return a placeholder or empty string if no logo found
      }
    } catch (error) {
      console.error("Error fetching channel logo:", error);
      return "";
    }
  };

  const fetchMoreVideos = () => {
    if (nextPageToken) {
      fetchData(nextPageToken);
    }
  };

  const openPopup = (videoId) => {
    setSelectedVideoId(videoId);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
    setSelectedVideoId(null);
  };

  return (
    <div className="Mainthirdbar">
      <div className="Frame1">
        {data.map((video) => (
          <div
            className="Part1"
            key={video.id}
            onClick={() => openPopup(video.id)}
          >
            <img src={video.img} alt={video.disc} />
            <div className="Part2">
              <img src={video.img2} alt="Channel Logo" className="sslogo" />
              <div>
                <div className="Lowerdisc">
                  <span>{video.disc}</span>
                  <br />
                  {/* <span>{video.disc2}</span> */}
                </div>
                <div>
                  <div>
                    <span>{video.lowdisc1}</span>
                    <img src={video.img3} alt="Verified" className="verify" />
                  </div>
                  <span className="lowtext">{video.lowdisc2}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isLoading && <div className="loading">Loading more videos...</div>}

      {/* Popup Modal */}
      {popupVisible && selectedVideoId && (
        <div className="popupOverlay" onClick={closePopup}>
          <div className="popupContent" onClick={(e) => e.stopPropagation()}>
            <button className="closeButton" onClick={closePopup}>
              ✖
            </button>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${selectedVideoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default Thirdbar;
