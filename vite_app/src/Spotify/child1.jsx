import react from 'react';
import './spotify.css'

function New(){

    const subchild11=[
        {id:1, img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Spotify%20logo.png?raw=true", title:'logo'}
    ]

    const subchild12=[
        {id:1, img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Home.png?raw=true",title:'Home'},
        {id:2 ,img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Search.png?raw=true",title:"Search"},
        {id:3,img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Your%20library.png?raw=true",title:"Your library"}
    ]

    return(
        <>
        {}
        <div>
            {subchild11.map((i)=>(
                <div key={i.id} className="subchild11">
                    <p><img src={i.img} alt="" srcset="" className='logo' /></p>
                </div>
            ))}
        </div>

  <div className='subchild12'>
  <div>
            {subchild12.map((i)=>(
                <div key={i.id} className="subchild122">
                    <p><img src={i.img} alt="" srcset="" className='home' /></p>
                    <p>{i.title}</p>
                </div>
            ))}
        </div>
  </div>


        {/* <div className='child1'>
          <div className='subchild11'><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Spotify%20logo.png?raw=true" alt="" className='logo' /></div> 

          <div className='subchild12'>
             <div className='subsubchild122'><div className='Homesub'><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Home.png?raw=true" alt="" className='home' /></div>
             <div className='homet'><span >Home</span></div></div>
 
             <div className='subsubchild122'><div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Search.png?raw=true" alt="" className='home' /></div>
             <div className='homet'><span >Search</span></div></div>
             
             <div className='subsubchild122'><div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Your%20library.png?raw=true" alt="" className='home' /></div>
             <div className='homet'><span >Your library</span></div></div>
             
             
          </div>

          <div className='subchild12'>
             <div className='subsubchild122'><div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Create.png?raw=true" alt=""  className='add' /></div>
             <div className='homet'><span >Create Playlist</span></div></div>
 
             <div className='subsubchild122'><div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Liked.png?raw=true" alt="" className='add' /></div>
             <div className='homet'><span >Liked Songs</span></div></div>
             
             <div className='subsubchild122'><div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/your%20episodes.png?raw=true" alt="" className='add' /></div>
             <div className='homet'><span >Your Episodes</span></div></div>
             
             
          </div>

          <div className='subchild12' id='desc3'>
          <span className='fav'>Fav</span>
           <span className='fav'>Daily Mix 1</span>
           <span className='fav'>Discover Weekly</span>
           <span className='fav'>Malayalam</span>
           <span className='fav'>Dance/Electronic Mix</span>
           <span className='fav'>EDM/Popular</span>
          </div>
          <div className='subchild12'>
          <div className='subsubchild122'><div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/grommet-icons_install-option.png?raw=true" alt=""  className='add' /></div>
          <div className='homet'><span >Install Apps</span></div></div>
          </div>
        </div>     */}
        </>
    )
}export default New;

