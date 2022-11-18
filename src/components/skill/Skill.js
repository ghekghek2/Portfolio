import React ,{useRef} from 'react'
import gsap from 'gsap'
import {useIntersection} from 'react-use'

import './skill.css'
import {FaHtml5,FaCss3,FaSass,FaBootstrap,FaJs,FaReact,FaGit,FaFigma} from "react-icons/fa"



function Skill() {



   
  const skillsec = useRef(null);


  let intersection = useIntersection(skillsec,{
  root:null,
  rootMargin:"0px",
  threshold:1,
  });
  
  const skillIn = (element) =>{
  
      
      gsap.to(element, 1,{
          opacity:1,
  
          y:-60,
             
          ease:'power3.out',
        
          stagger:{
              amount:1
          }
      })
  }
  const skillOut = (element) =>{
      gsap.to(element, 1,{
          opacity:0,
          y:-20,
     
          ease:'power3.out',
          stagger:{
            amount:1
        }
      })
  }
  
  intersection && intersection.intersectionRatio < 1?
  skillOut('.sIn')
  :skillIn('.sIn')
  








  return (
    <div  className='section skill'>
      <h3>Skill</h3>
        <div  ref={skillsec} className="skill-wrapper sIn ">
<div className="skill-icon figma  sIn ">

<FaFigma/>

</div>
<div className="skill-icon html sIn  ">
<FaHtml5/>
</div>
<div className="skill-icon css sIn">
<FaCss3/>
</div>
<div className="skill-icon sass  sIn">
<FaSass/>
</div>
<div className="skill-icon bootstrap  sIn">
<FaBootstrap/>
</div>

<div className="skill-icon javascript sIn">
<FaJs/>
</div>
<div className="skill-icon react sIn">
<FaReact/>
</div>
<div className="skill-icon git  sIn">
<FaGit/>
</div>
<div className="skill-icon jquery  sIn">
  <p>J<span>query</span></p>
</div>
        </div>
    </div>
  )
}

export default Skill