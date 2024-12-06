import react from "react";
import '../youtube.css'
import one from '../IMG/Ellipse 4 (5).png'
import two from '../IMG/Ellipse 4 (1).png'
import three from '../IMG/Ellipse 1 (2).png'
import four from '../IMG/Ellipse 1 (3).png'
import five from '../IMG/Ellipse 4 (2).png'
import six from '../IMG/Ellipse 1 (5).png'
function Four(){

    const Data1=[{id:1,img:one,title:'Nadir on the go'},
        {id:2,img:two,title:'Coke Studio Bangla'},
        {id:3,img:three,title:'IMKDB' },
        {id:4,img:four,title:'Figma'},
        {id:5,img:five,title:'Atc Android ToTo C..'},
        {id:6,img:six,title:'Alux.com'}
       ] 
    return(
        <>
                 <div className="mainfour">
         {Data1.map((i) => (
                                 <div key={i.id} className="subfour">
                                    <img src={i.img} alt="" srcset="" className='Home' />
                                    <span className='Homedisc'>{i.title}</span>
                                 </div>
            ))}
         
        </div>
        </>
    )
}export default Four