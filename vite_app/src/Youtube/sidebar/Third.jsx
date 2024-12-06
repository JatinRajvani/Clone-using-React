import react from "react";
import '../youtube.css'
import one from '../IMG/library.png'
import two from '../IMG/history.png'
import three from '../IMG/your_video.png'
import four from '../IMG/watch_later.png'
import five from '../IMG/liked.png'
import six from '../IMG/down_arrow.png'

function Third(){
   const Data1=[{id:1,img:one,title:'Library'},
    {id:2,img:two,title:'History'},
    {id:3,img:three,title:'Your videos' },
    {id:4,img:four,title:'Watch later'},
    {id:5,img:five,title:'Liked'},
    {id:6,img:six,title:'Show More'}
   ] 
    return(
        <>
        <div className="mainthird">
         {Data1.map((i) => (
                                 <div key={i.id} className="subthird">
                                    <img src={i.img} alt="" srcset="" className='Home' />
                                    <span className='Homedisc'>{i.title}</span>
                                 </div>
            ))}
         
        </div>
        </>
    )
}export default Third;