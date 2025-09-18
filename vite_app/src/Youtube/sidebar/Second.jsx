// import react from "react";
// import '../youtube.css'
// import Home from '../IMG/home.png'
// import Explore from '../IMG/explore.png'
// import Subscriptions from '../IMG/subscription.png'
// import Shorts from '../IMG/shorts.png'
// function Second (){
// const Data1=[{id:1, img:Home,title:'Home',},]
// const Data2=[{id:2, img:Explore,title:'Explore',},
//     {id:3, img:Shorts,title:'Shorts',},
//     {id:4, img:Subscriptions,title:'Subscriptions',}
// ]

//     return (
//         <>
//         <div className="Second">
//         {Data1.map((i) => (
//                                  <div key={i.id}id="Subsecond">
                               
//                                   <img src={i.img} alt="" srcset="" className='Home' />
//                                   <span className='Homedisc'>{i.title}</span>
                             
//                                  </div>
//             ))}
//             <div className="subsecondmain">
//         {Data2.map((i) => (
//                                  <div key={i.id} className="Subsecond">
//                                        <div className="hover">
//                                     <img src={i.img} alt="" srcset="" className='Home' />
//                                     <span className='Homedisc'>{i.title}</span>
//                                     </div>
//                                  </div>
//             ))}
//             </div>
//             </div> 


//         </>
//     )
// }export default Second;

/*Part-1 Without Loading Line*/

// import React from "react";
// import '../youtube.css';
// import Home from '../IMG/home.png';
// import Explore from '../IMG/explore.png';
// import Subscriptions from '../IMG/subscription.png';
// import Shorts from '../IMG/shorts.png';

// function Second({ setSection }) {
//   const Data1 = [{ id: 1, img: Home, title: 'Home' }];
//   const Data2 = [
//     { id: 2, img: Explore, title: 'Explore' },
//     { id: 3, img: Shorts, title: 'Shorts' },
//     { id: 4, img: Subscriptions, title: 'Subscriptions' },
//   ];

//   return (
//     <div className="Second">
//       {Data1.map((i) => (
//         <div
//           key={i.id}
//           id="Subsecond"
//           onClick={() => setSection(i.title)} // Update activeSection
//         >
//           <img src={i.img} alt="" className="Home" />
//           <span className="Homedisc">{i.title}</span>
//         </div>
//       ))}
//       <div className="subsecondmain">
//         {Data2.map((i) => (
//           <div
//             key={i.id}
//             className="Subsecond"
//             onClick={() => setSection(i.title)} // Update activeSection
//           >
//             <div className="hover">
//               <img src={i.img} alt="" className="Home" />
//               <span className="Homedisc">{i.title}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Second

/*Part-2 with loading line*/
import React from "react";
import '../youtube.css';
import Home from '../IMG/home.png';
import Explore from '../IMG/explore.png';
import Subscriptions from '../IMG/subscription.png';
import Shorts from '../IMG/shorts.png';

function Second({ setSection, activeSection }) {
  const Data1 = [{ id: 1, img: Home, title: 'Home' }];
  const Data2 = [
    { id: 2, img: Explore, title: 'Explore' },
    { id: 3, img: Shorts, title: 'Shorts' },
    { id: 4, img: Subscriptions, title: 'Subscriptions' },
  ];

  return (
    <div className="Second">
      {Data1.map((item) => (
        <div
          key={item.id}
          id="Subsecond"
          onClick={() => setSection(item.title)}
          className={activeSection === item.title ? "active" : ""}
        >
          <img src={item.img} alt="" className="Home" />
          <span className="Homedisc">{item.title}</span>
        </div>
      ))}
      <div className="subsecondmain">
        {Data2.map((item) => (
          <div
            key={item.id}
            className={`Subsecond ${activeSection === item.title ? "active" : ""}`}
            onClick={() => setSection(item.title)}
          >
            <img src={item.img} alt="" className="Home" />
            <span className="Homedisc">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Second;

