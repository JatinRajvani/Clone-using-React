import react from 'react';
import './spotify.css'

function Project() {
   const Data1 = [//for 1 portion in sidebar//
      { id: 1, img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Spotify%20logo.png?raw=true", title: 'logo' }

   ]

   const Data2 = [// For 2 Portion in sidebar//
      { id: 1, img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Home.png?raw=true", title: 'Home' },
      { id: 2, img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Search.png?raw=true", title: 'Search' },
      { id: 3, img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Your%20library.png?raw=true", title: 'Your library' }
   ]

   const Data3 = [//For 3 portion in sidebar//
      { id: 1, img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Create.png?raw=true", title: 'Create Playlist' },
      { id: 2, img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Liked.png?raw=true", title: 'Liked Songs' },
      { id: 3, img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/your%20episodes.png?raw=true", title: 'Your Episodes' }
   ]


   const Data4 = [
      { id: 1, img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Liked.png?raw=true", title: 'Liked songs' },
      { id: 1, img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image4.png?raw=true", title: 'Neffex Playlist' },
      { id: 1, img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image3.png?raw=true", title: 'K/Drama' },
      { id: 1, img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image1.png?raw=true", title: 'Liked songs' },
      { id: 1, img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image2.png?raw=true", title: 'Dance/Electronic Mix ' },
   ]

   const Data5 = [
      { id: 1, img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image9.png?raw=true", title: 'Weekly Motivation',title2:"Ben Ina Scott" },
      { id: 2, img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image8.png?raw=true", title: 'Meditation Self',title2:"Ibn Hussain Aleen" },
      { id: 3, img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image7.png?raw=true", title: 'Words beyond action',title2:"Samuel Scott" },
      { id: 4, img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image6.png?raw=true", title: 'The Alexa Show',title2:"Adriana Tom" },
      { id: 5, img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image5.png?raw=true", title: 'The Stories of Ma..',title2:"Lexus" },
      { id: 6, img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image10.png?raw=true", title: 'Motivational Daily b...',title2:"Georgina Martha" },
   ]

   return (
      <>
         <div className='Main'>

            <div className='upeer'>

               <div className='child1'>

                  <div>
                     {Data1.map((i) => (
                        <div key={i.id} className="subchild11">
                           <p><img src={i.img} alt="" srcset="" className='logo' /></p>
                        </div>
                     ))}
                  </div>
                  <div className='subchild12' id='two'>
                     <div>
                        {Data2.map((i) => (
                           <div key={i.id} className="subsubchild122">
                              <p><img src={i.img} alt="" srcset="" className='home' /></p>
                              <p className='homet'>{i.title}</p>
                           </div>
                        ))}
                     </div>
                  </div>

                  <div className='subchild12' id='three'>

                     <div>
                        {Data3.map((i) => (
                           <div key={i.id} className="subsubchild122">
                              <p><img src={i.img} alt="" srcset="" className='home' /></p>
                              <p className='homet'>{i.title}</p>
                           </div>
                        ))}
                     </div>

                  </div>

                  <div className='subchild12' id='desc3'>
                     <span className='fav'>Fav</span>
                     <span className='fav'>Daily Mix 1</span>
                     <span className='fav'>Discover Weekly</span>
                     <span className='fav'>Malayalam</span>
                     <span className='fav'>Dance/Electronic Mix</span>
                     <span className='fav'>EDM/Popular</span>
                  </div>
                  <div className='subchild12' id='four'>
                     <div className='subsubchild122'><div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/grommet-icons_install-option.png?raw=true" alt="" className='add' /></div>
                        <div className='homet'><span >Install Apps</span></div></div>
                  </div>
               </div>

               <div className='child2'>
                  <div className='mainchild2'>

                     <div className='child21'>
                        <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/top%20arrow%20navigation.png?raw=true" alt="" className='LR' /></div>
                        <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/User.png?raw=true" alt="" /></div>
                     </div>
                     <div className='child22'>
                        <div><h1 className='gm'>Good Morning</h1></div>
                        <div className='subchild221'>


                           {Data4.map((i) => (
                              <div key={i.id} className="frame1">
                                 <img src={i.img} alt="" srcset="" className='LI' />
                                 <p className='LS'>{i.title}</p>
                              </div>
                           ))}

                        </div>
                     </div>

                     <div className='child23'>
                        <div className='mainchild23'>
                           <div className='subchild231'>
                              <p className='T3'><h1><b>Shows you might like</b></h1></p>
                              <p className='T4'>SEE All</p>
                           </div>
                           <div className='subchild232'>

                              {Data5.map((i) => (
                                 <div key={i.id} className="">
                                    <img src={i.img} alt="" srcset="" className='' />
                                      <div>
                                      <p className=''>{i.title}</p>
                                      <p2>{i.title2}</p2>
                                      </div>
                                 </div>
                              ))}

                           </div>
                        </div>

                     </div>
                  </div>
               </div>
            </div>


            <div className='down'>
               <div className='uplast'>
                  <div className='uplast1'>
                     <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image11.png?raw=true" alt="" />
                     <p><b>Dreaming On</b><br />NEFFEX</p>
                     </div>
                      <div className='uplast2'>
                      <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/bx_bxs-heart.png?raw=true" alt="" className='greenheart' />
                      </div>
               </div>
               <div className='player'>
                 <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Music%20Player%20Options.png?raw=true" alt="" />
               </div>
               <div className='player2'>
                 <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Right%20options.png?raw=true" alt="" />
               </div>
            </div>
         </div>


      </>
   )
}
export default Project;