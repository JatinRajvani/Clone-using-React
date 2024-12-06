import react from "react";
import '../youtube.css'
import Home from '../IMG/home.png'
import Explore from '../IMG/explore.png'
import Subscriptions from '../IMG/subscription.png'
import Shorts from '../IMG/shorts.png'
function Second (){
const Data1=[{id:1, img:Home,title:'Home',},]
const Data2=[{id:2, img:Explore,title:'Explore',},
    {id:3, img:Shorts,title:'Shorts',},
    {id:4, img:Subscriptions,title:'Subscriptions',}
]

    return (
        <>
        <div className="Second">
        {Data1.map((i) => (
                                 <div key={i.id}id="Subsecond">
                                    <img src={i.img} alt="" srcset="" className='Home' />
                                    <span className='Homedisc'>{i.title}</span>
                                 </div>
            ))}
            <div className="subsecondmain">
        {Data2.map((i) => (
                                 <div key={i.id} className="Subsecond">
                                    <img src={i.img} alt="" srcset="" className='Home' />
                                    <span className='Homedisc'>{i.title}</span>
                                 </div>
            ))}
            </div>
            </div> 


        </>
    )
}export default Second;