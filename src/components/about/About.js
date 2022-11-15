import React, {useRef} from 'react'
import gsap from 'gsap'
import {useIntersection} from 'react-use'
import './about.css'
function About() {

   
const sectionRef = useRef(null);


const intersection = useIntersection(sectionRef,{
root:null,
rootMargin:"300px",
threshold:1,
});

const fadeIn = (element) =>{
    gsap.to(element, 1,{
        opacity:1,

        y:-60,
           
        ease:'power3.out',
      
        stagger:{
            amount:.5
        }
    })
}
const fadeOut = (element) =>{
    gsap.to(element, 1,{
        opacity:0,
        y:-20,
   
        ease:'power3.out',
   
    })
}

intersection && intersection.intersectionRatio < 1 ?
fadeOut('.fadeIn')
:fadeIn('.fadeIn')

  return (
    <div ref={sectionRef} className=' section about '>
        <div className="   fadeIn about-wrapper">
    <div className=" item about-me">
    <h3 className='fadeIn'>About me</h3>
<p className='fadeIn'>

I'm Kevin Divinagracia a Freelancer Computer Technician based
                  on Mariveles Bataan with years of experience of repairing,
                  installation, troubleshooting and updating softwares and
                  applications. Aiming to use my skills and experiences to enter
                  the world of web development. A Career shifter that wanted to
                  explore and utilize my strong background and skill being a
                  computer technician .
</p>
    </div>
<div className="interest item">
    <div>
<h3 className='fadeIn'>Interested to</h3>
</div>
   
  
    <div className="int">
  
        <p className=' fadeIn' >Web Design</p>
        <p className='fadeIn' >Graphics Design</p>
        <p className='fadeIn' >Ui/Ux</p>
        <p  className='fadeIn'>Animation</p>
        <p className='fadeIn' >Computer Repair</p>
        <p className='fadeIn' >Smartphones Repair</p>

    
        </div>
  
</div>

 
        </div>
        </div>
      
  )
}

export default About