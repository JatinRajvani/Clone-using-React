import react from "react";
import '../youtube.css'
import one from '../IMG/Thumbnail-8.png'
import two from '../IMG/Thumbnail-9.png'
import three from '../IMG/Thumbnail-10.png'
import four from '../IMG/Thumbnail-11.png'
import five from '../IMG/Thumbnail-4.png'
import six from '../IMG/Thumbnail-5.png'
import seven from '../IMG/Thumbnail-6.png'
import eight from '../IMG/Thumbnail-7.png'
import nine from '../IMG/Thumbnail.png'
import ten from '../IMG/Thumbnail-1.png'
import eleven from '../IMG/Thumbnail-2.png'
import tewelve from '../IMG/Thumbnail-3.png'
import a from '../IMG/Ellipse 4 (1).png'
import b from '../IMG/Ellipse 4 (2).png'
import c from '../IMG/Ellipse 4 (3).png'
import d from '../IMG/Ellipse 4 (4).png'
import e from '../IMG/Ellipse 4 (5).png'
import f from '../IMG/Ellipse 4 (6).png'

import verified from '../IMG/verified.png'
import live from '../IMG/live.png'
function Thirdbar() {
  const data1 = [
    { id:1,img: one,disc: "1Bulbuli |Coke Studio Bangla |", disc2: "Season One | Ritu Raj X Nandita", img2: a, img3: verified,lowdisc1:"Coke Srudio Bangla",lowdisc2:"1.5Mviews • 2Days ago"},

    { id:1,img: two,disc: "Infinix Note 12:Amoled ", disc2: "Helio G88 Processor", img2: b, img3: verified,lowdisc1:"Atc Android ToTo Company",lowdisc2:"42Mviews • 2Days ago"},

    { id:1,img: three,disc: "My First Ux Design Case Study", disc2: "This Got My First My Job", img2: c, img3: verified,lowdisc1:"Saptrashi Prakash",lowdisc2:"48kviews • 1years ago"},

    { id:2,img: four,disc: "My Mix", disc2: "",lowdisc1:"Lopendro Muna,Anupam Roy and more",cname:"subpart1",h:live},

    { id:1,img: five,disc: "UX Design-What is it?", disc2: "(From AJ&Smart)", img2: d, img3: verified,lowdisc1:" AJ&Smart",lowdisc2:"150Kviews • 3years ago"},

    { id:2,img: six,disc: "Mix-Mombati|Mohon Sharif|Dhakaiya", disc2: "Dose|Mahib Ahsan ft Anilka",lowdisc1:"Mohon Sharif,Odd Signature,Shayan",lowdisc2:"Chowdhury Amob and more",cname:"subpart2",h:live},

    { id:1,img: seven,disc: "48 Visa Free", disc2: "World Tour", img2: e, img3: verified,lowdisc1:"Nadir On The Go",lowdisc2:"1.7Mviews • 1 years ago"},

    { id:1,img: eight,disc: "14 Advanced Tips to design", disc2: "Faster in Figma", img2: f, img3: verified,lowdisc1:"Miziko",lowdisc2:"53Kviews • 1 years ago"},

    { id:1,img: nine,disc: "UX Design-What is it?", disc2: "(From AJ&Smart)", img2: d, img3: verified,lowdisc1:" AJ&Smart",lowdisc2:"150Kviews • 3years ago"},
    
    { id:1,img: ten,disc: "UX Design-What is it?", disc2: "(From AJ&Smart)", img2: d, img3: verified,lowdisc1:" AJ&Smart",lowdisc2:"150Kviews • 3years ago"},

    { id:1,img: eleven,disc: "UX Design-What is it?", disc2: "(From AJ&Smart)", img2: d, img3: verified,lowdisc1:" AJ&Smart",lowdisc2:"150Kviews • 3years ago"},

    { id:1,img: tewelve ,disc: "UX Design-What is it?", disc2: "(From AJ&Smart)", img2: d, img3: verified,lowdisc1:" AJ&Smart",lowdisc2:"150Kviews • 3years ago"},
  ]
  
  return (
    <>
      <div className="Mainthirdbar">
        <div className="Frame1">
         

{data1.map((i) => (
i.id==1 ?(
<div className="Part1">
<img src={i.img} alt="" srcset=""  />
{/* <div className="subpart1"><img src={i.h} alt="" /></div> */}
<div className="Part2">
                  <img src={i.img2} alt="" className="sslogo" />
                  <div>
                   <div className="Lowerdisc">
                   <span>{i.disc}</span><br />
                   <span>{i.disc2}</span>
                   </div>
                    <div>
                      <div><span>{i.lowdisc1}</span><div><img src={i.img3} alt="" className="verify"/></div></div>
                      <div><span>{i.lowdisc2}</span></div>
                    </div>
                  </div>

                </div>

</div>
                       ):  
                       
<div className="Part1">
<img src={i.img} alt="" srcset=""  />
<div className={i.cname}><img src={i.h} alt="" /></div>
<div className="Part2">
                  <img src={i.img2} alt="" className="sslogo" />
                  <div>
                   <div className="Lowerdisc">
                   <span>{i.disc}</span><br />
                   <span>{i.disc2}</span>
                   </div>
                    <div>
                      <div><span>{i.lowdisc1}</span><div><img src={i.img3} alt="" className="verify"/></div></div>
                      <div><span>{i.lowdisc2}</span></div>
                    </div>
                  </div>

                </div>

</div>

                           
                          ))}


          </div>
        </div>
      
    </>
  )
} export default Thirdbar;
