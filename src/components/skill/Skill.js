import React from 'react'
import './skill.css'
import {FaHtml5,FaCss3,FaSass,FaBootstrap,FaJs,FaReact,FaGit,FaFigma} from "react-icons/fa"
function Skill() {
  return (
    <div className='section skill'>
        <div className="skill-wrapper">
<div className="skill-icon figma">
 
<FaFigma/>

</div>
<div className="skill-icon html">
<FaHtml5/>
</div>
<div className="skill-icon css">
<FaCss3/>
</div>
<div className="skill-icon sass">
<FaSass/>
</div>
<div className="skill-icon bootstrap">
<FaBootstrap/>
</div>

<div className="skill-icon javascript">
<FaJs/>
</div>
<div className="skill-icon react">
<FaReact/>
</div>
<div className="skill-icon git">
<FaGit/>
</div>
        </div>
    </div>
  )
}

export default Skill