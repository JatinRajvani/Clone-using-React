import react from "react";
import '../youtube.css'
import one from '../IMG/Thumbnail-8.png'
import a from '../IMG/Ellipse 4 (1).png'
function Thirdbar(){
    const data1=[{id:1,img:one,title:"hello",disc:"Hello",img2:a},
    ]
    return(
        <>
        <div className="Mainthirdbar">
            <div className="Frame1">
             <div className="Part1">
             {data1.map((i) => (
                                 <div key={i.id} className="Part1">
                                    <img src={i.img} alt="" srcset=""  />
                                  <div className="Part2">
                                    <img src={i.img2} alt="" />
                                    <span>{i.disc}</span>
                                  </div>
                                 </div>
            ))}
             </div>
            </div>
        </div>
        </>
    )
}export default Thirdbar;
