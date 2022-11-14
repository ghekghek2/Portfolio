import React, { useRef, useEffect } from "react";
import { TweenMax, TimelineLite, Power3 } from "gsap";
import './home.css'
import heroImg from "../images/home-img.png"


function Home() {
  let app = useRef(null);
  let imageBox = useRef(null);
  let tl = new TimelineLite();
  let p1 = useRef(null);
  let p2 = useRef(null);
  let p3 = useRef(null);
  let p4 = useRef(null);
  let resume_btn = useRef(null);
  let contact_btn = useRef(null);
  let social = useRef(null);




  useEffect(() => {
    //

    const meImg = imageBox.firstElementChild;
    const socials = social.children;

    TweenMax.to(app, 0, { css: { visibility: "visible" } });


    tl.from(
      meImg,
      1.2,
      { scale: 0.6, ease: Power3.easeOut, delay: .5 },
      "Start"
    );
    tl.staggerFrom(
      [p1, p2, p3, p4],
      1,
      { y: 100, ease: Power3.easeOut },
      0.8,
      "Start"
    );
    tl.to(resume_btn, 0.5, { css: { opacity: "100%" } });
    tl.to(contact_btn, 0.5, { css: { opacity: "100%" } });
    tl.staggerFrom(
      [socials[0], socials[1], socials[2], socials[3]],
      0.8,
      { x: 100, ease: Power3.easeOut },
      0.5,
      "Start"
    );
 
  });

  return (
    <div ref={(el) => (app = el)} className="section home ">
     
      <div ref={(el) => (imageBox = el)} className="home-wrapper ">
        <img src={heroImg} alt="" className="hero-img" />
        <div className="p">
          <div className="pBox">
            <p className="title" ref={(el) => (p1 = el)}>
              Hi I'm Kevin
            </p>
          </div>
          <div className="pBox">
            <p ref={(el) => (p2 = el)}>
              A Computer Technician and Aspiring Front-End Web Developer
            </p>
          </div>
          <div className="pBox">
            <p ref={(el) => (p3 = el)}>Web Design</p>
          </div>
          <div className="pBox">
            <p ref={(el) => (p4 = el)}>UI/UX</p>
          </div>
        </div>

        <div className="buttons">
          <button ref={(el) => (resume_btn = el)} className="btn resume">
            <span>Resume</span>
          </button>
          <br />
          <button ref={(el) => (contact_btn = el)} className="btn btn-contact">
            <span>Contact</span>
          </button>
        </div>
        <div ref={(el) => (social = el)} className="social-icon">
          <a href="#Home">
          <i className="icon-hov fab fa-viber"></i>
          </a>
          <a href="#Home">
            <i className="icon-hov fab fa-facebook-f"></i>
          </a>
          <a href="#Home">
            <i className="icon-hov fab fa-linkedin-in"></i>
          </a>
          <a href="#Home">
            <i className="icon-hov fas fa-at"></i>
          </a>
     
      </div>
      </div>
    </div>
  );
}

export default Home;