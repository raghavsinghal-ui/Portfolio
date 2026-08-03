import { useEffect, useRef,useState } from "react";
import { BrowserRouter,Route,Routes,NavLink, Outlet } from "react-router-dom";
import { gsap } from "gsap";
import {
  Puzzle,
  Clock3,
  Building2,
  Bug,
  Contact,
  Download,
   GraduationCap,
  School,
  BadgeCheck,
   UserRound,
  CalendarDays,
  MapPin,
  Languages,
  Rocket,
  Database,
  Monitor,
  Brain,
   Mail,
  Phone,
  

} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa6";
import avatar from "./frames/upd.png";
import profile from "./frames/profile.jfif";
import "./about.css"
import reactLogo from "./icons/react.svg";
import mongodbLogo from "./icons/mongodb.svg";
import nodejsLogo from "./icons/nodejs.svg";
import TsLogo from "./icons/script.svg";
import dockerLogo from "./icons/docker.svg";
import gitLogo from "./icons/git.svg";
import "./land.css"
import "./navbar.css"
import "./home.css"
import "./homeleft.css"
import "./bottombar.css"
import "./contact.css"
import Project from "./project.jsx"
function Landing({children}){
  

return (<div className={"box"}>
  <div className={"grid"}></div>
  <div className={"stars"}></div>
  <div className="glow"></div>
{/* {children} */}
   <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<ContactCard />} />
      </Routes>


      <Bottombar />
</div>);


}
function OrbitBackground() {
  return (
    <svg
    className="orbit"
    viewBox="0 0 800 800"
    xmlns="http://www.w3.org/2000/svg"
>
     <defs>

        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity=".35"/>
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0"/>
        </radialGradient>

        <filter id="blur">
            <feGaussianBlur stdDeviation="20"/>
        </filter>

    </defs> 

    {/* Blue Glow  */}

    <circle
        cx="400"
        cy="400"
        r="170"
        fill="url(#glow)"
        filter="url(#blur)"
    />

    {/* Orbit 1 */}

    <ellipse
        cx="400"
        cy="400"
        rx="260"
        ry="150"
        fill="none"
        stroke="rgba(59,130,246,.28)"
        strokeWidth="2"
        // strokeDasharray="8 8"
    />

    {/* Orbit 2 */}

    <ellipse
        cx="400"
        cy="400"
        rx="310"
        ry="185"
        fill="none"
        stroke="rgba(59,130,246,.18)"
        strokeWidth="2"
        transform="rotate(-20 400 400)"
    />

    {/* Orbit 3 */}

    <ellipse
        cx="400"
        cy="400"
        rx="215"
        ry="280"
        fill="none"
        stroke="rgba(59,130,246,.15)"
        strokeWidth="2"
        transform="rotate(25 400 400)"
    />
</svg>
  );
}
function Home(){
  const orbitRef = useRef();
const avatarRef = useRef();
const orbitTween = useRef();
   useEffect(() => {

    orbitTween.current = gsap.to(orbitRef.current,{
        rotation:360,
        duration:25,
        repeat:-1,
        ease:"none"
    });

},[]);
    function handleLeave(){

    orbitTween.current.timeScale(1);

    gsap.to(avatarRef.current,{
        scale:1,
        duration:0.5,
        ease:"power2.out"
    });

}
function handleEnter(){

    // Speed up orbit
    orbitTween.current.timeScale(3);

    // Avatar floats up
    gsap.to(avatarRef.current,{
       scale:1.2,
        duration:0.5,
        ease:"power2.out"
    });

}

function Homeleft(){
    return(<>
    <div>
    <h1
  style={{
    fontSize: "40px",
    fontWeight: "700",
    letterSpacing: "2px",
    color: "#cbd5e1",
     fontFamily: "Satoshi",
  }}
>
  Building Digital
</h1>
    <h1 className="text">Experiences</h1></div>
    <p  style={{
    fontSize: "15px",
    fontWeight: "150",
    letterSpacing: "2px",
    color: "#cbd5e1",
        fontfamily: "Sora ,sans-serif"
  }}>Full Stack Developer who loves turning ideas into real-world products.Passionate about clean 
        code ,great design and solving meaninigful problem
    </p>
 {/* <div> */}
    {/* <div
     style={{
    fontSize: "20px",
    fontWeight: "700",
    letterSpacing: "2px",
    color: "#cbd5e1",
     fontFamily: "Satoshi",
  }}
    >Techstack</div> */}
    <div className="techstack">
        {/* <div style={{width:"100%"}}>  <h6  style={{
    fontSize: "20px",
    fontWeight: "700",
    letterSpacing: "2px",
    color: "#cbd5e1",
     fontFamily: "Satoshi",
  }}>Tech Stack</h6></div> */}
         <div className="svglogo">
            <img src={reactLogo} />
            <span
            style={{
 fontSize: "10px",
    fontWeight: "700",
    letterSpacing: "2px",
    color: "#cbd5e1",
     fontFamily: "Satoshi",
  }}>React</span>
        </div>

        <div className="svglogo">
            <img src={mongodbLogo}/>
             <span style={{
   fontSize: "10px",
    fontWeight: "700",
    letterSpacing: "2px",
    color: "#cbd5e1",
     fontFamily: "Satoshi",
  }}>MongoDB</span>
        </div>

        <div className="svglogo">
            <img src={nodejsLogo} />
             <span
             style={{
    fontSize: "10px",
    fontWeight: "700",
    letterSpacing: "2px",
    color: "#cbd5e1",
     fontFamily: "Satoshi",
  }}>NodeJS</span>
        </div>

        <div className="svglogo">
            <img src={TsLogo} />
             <span
             style={{
   fontSize: "10px",
    fontWeight: "700",
    letterSpacing: "2px",
    color: "#cbd5e1",
     fontFamily: "Satoshi",
  }}>TailWind</span>
        </div>
        <div className="svglogo">
            <img src={dockerLogo} />
             <span style={{
   fontSize: "10px",
    fontWeight: "700",
    letterSpacing: "2px",
    color: "#cbd5e1",
     fontFamily: "Satoshi",
  }}>Docker</span>
        </div>
         <div className="svglogo">
            <img src={gitLogo} />
             <span 
             style={{
    fontSize: "10px",
    fontWeight: "700",
    letterSpacing: "2px",
    color: "#cbd5e1",
     fontFamily: "Satoshi",
  }}>Git</span>
        </div>
    </div>
    {/* </div> */}
    </>)
}

return (<diV style={{width:"70vw",height:"60vh"}} className="home">

<div className='homeLeft'>
    <Homeleft></Homeleft>
</div>
<div className="homeRight">

    <div className="orbitContainer" ref={orbitRef}>

        <OrbitBackground />

        <div className="logosvg react">
            <img src={reactLogo} />
        </div>

        <div className=" logosvg  mongo">
            <img src={mongodbLogo}/>
        </div>

        <div className=" logosvg node">
            <img src={nodejsLogo} />
        </div>

        <div className="logosvg TS">
            <img src={TsLogo} />
        </div>

    </div>

   <img
    ref={avatarRef}
    src={avatar}
    className="Avatar"

    onMouseEnter={handleEnter}
    onMouseLeave={handleLeave}
/>

</div>

</diV>)

}
function Navbar(){
 const text = "Raghav Singhal";
 const handleDownload = () => {
  window.location.href = "/project/resume.pdf";
};
return (<div className='Nav'>
   <div style={{display:"flex",justifyContent:"space-evenly", alignItems:"center", width:"20%"}}>
    <span className="logo"> RS</span>  


<span className="name" >
  {text.split("").map((char, index) => (
    <span
      key={index}
      className="letter"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ))}
</span>
    </div>

<ul className="nav-links">
   
     <li> <NavLink to="/">Home</NavLink></li>
      <li> <NavLink to="/about">About</NavLink></li>
      <li> <NavLink to="/contact">contact</NavLink></li>
     <li>  <NavLink to="/project">Project</NavLink></li>
</ul>
<button className="resume-butn"onClick={handleDownload}>
    <Download size={18} />
    <span>Download Resume</span>
    <div className="divider"></div>
</button>
</div>)


}


function Bottombar() {
  return (
    <div className="bottom">

      <div className="stat">
        <div className="iconBox">
          <Puzzle size={28}/>
        </div>

        <div className="text">
          <h2>300+</h2>
          <p>DSA Problems</p>
        </div>
      </div>

      <div className="divider"/>

      <div className="stat">
        <div className="iconBox">
          <Clock3 size={28}/>
        </div>

        <div className="text">
          <h2>1000+</h2>
          <p>Hours Coding</p>
        </div>
      </div>

      <div className="divider"/>

      <div className="stat">
        <div className="iconBox">
          <Building2 size={28}/>
        </div>

        <div className="text">
          <h2>Clean</h2>
          <p>Architecture</p>
        </div>
      </div>

      <div className="divider"/>

      <div className="stat">
        <div className="iconBox">
          <Bug size={28}/>
        </div>

        <div className="text">
          <h2>∞</h2>
          <p>Tons of Debugging</p>
        </div>
      </div>

    </div>
  );
}
function About(){
  return (<div className="about">
<div className="aboutLeft">
<div className="ableftup">
 <div className="Education">

      <h3 className="eduHeading">
        <GraduationCap size={22} />
        <span>Education</span>
      </h3>

      <div className="eduContent">

        <div className="eduRow">
          <div className="eduIcon">
            <School size={22} />
          </div>

          <div className="eduText">
            <h4>B.Tech Computer Science Engineering</h4>
            <p>3rd Year</p>
            <span>UIET, Maharshi Dayanand University, Rohtak</span>
          </div>
        </div>

        <div className="cgpaCard">
          <div className="cgpaLeft">
            <BadgeCheck size={22} />
            <span>Current CGPA</span>
          </div>

          <h2>
            8.2<span>/10</span>
          </h2>
        </div>

      </div>

    </div>
    <div className="personals">

      <h3 className="personalHeading">
        <UserRound size={22} />
        <span>Personal Info</span>
      </h3>

      <div className="personalContent">

        <div className="personalRow">
          <div className="personalIcon">
            <CalendarDays size={20} />
          </div>

          <div className="personalText">
            <h4>Date of Birth</h4>
            <p>24 October 2006</p>
          </div>
        </div>

        <div className="personalRow">
          <div className="personalIcon">
            <MapPin size={20} />
          </div>

          <div className="personalText">
            <h4>Location</h4>
            <p>Haryana, India</p>
          </div>
        </div>

        <div className="personalRow">
          <div className="personalIcon">
            <Languages size={20} />
          </div>

          <div className="personalText">
            <h4>Languages</h4>
            <p>Hindi • English</p>
          </div>
        </div>

      </div>

    </div>
<div className="techStack">

    <h3 className="stackHeading">Tech Stack</h3>

    <div className="stackRow">
        <h4>Languages</h4>

        <div className="stackCapsules">
            <span>C++</span>
            <span>JavaScript</span>
        </div>
    </div>

    <div className="stackDivider"></div>

    <div className="stackRow">
        <h4>Frontend</h4>

        <div className="stackCapsules">
            <span>HTML</span>
            <span>CSS</span>
            <span>React</span>
        </div>
    </div>

    <div className="stackDivider"></div>

    <div className="stackRow">
        <h4>Backend</h4>

        <div className="stackCapsules">
            <span>Node.js</span>
            <span>Express.js</span>
        </div>
    </div>

    <div className="stackDivider"></div>

    <div className="stackRow">
        <h4>Database</h4>

        <div className="stackCapsules">
            <span>MongoDB</span>
        </div>
    </div>

</div>



</div>
<div className="ableftdown"><div className="journey">

    <h2 className="journeyTitle"> My Journey</h2>

    <div className="timeline">

        <div className="line"></div>

        <div className="step">

            <div className="circle active"></div>

            <h3>2024</h3>

            <p>Started B.Tech</p>

            <span>
                Began programming with C++ and built strong fundamentals.
            </span>

        </div>

        <div className="step">

            <div className="circle active"></div>

            <h3>2025</h3>

            <p>DSA & Web</p>

            <span>
                Learned Data Structures, JavaScript, React and Backend.
            </span>

        </div>

        <div className="step">

            <div className="circle active"></div>

            <h3>2026</h3>

            <p>Projects</p>

            <span>
                Building scalable backend projects and improving system design.
            </span>

        </div>

        <div className="step">

            <div className="circle future"></div>

            <h3>Future</h3>

            <p>Cloud & AI</p>

            <span>
                Exploring DevOps, Cloud Computing and Artificial Intelligence.
            </span>

        </div>

    </div>

</div></div>


</div>
<div className="aboutRight"><div className="profileImage">
<img src={profile}/>



</div>
<div className="aboutContent">
<h1 className="nameAbout">Raghav Singhal</h1>
<h2 className="designation">
    Aspiring Full Stack Developer
</h2>

<div className="aboutText">

    <p>
        I believe great software is built by combining
        <span> strong fundamentals </span>
        with continuous learning.
    </p>

    <p>
        As a Computer Science Engineering student, I'm developing expertise in
        <span> Backend Engineering</span>,
        <span> Data Structures & Algorithms</span>, and
        <span> Full Stack Development</span> while building projects that
        emphasize clean architecture, scalability, and real-world impact.
    </p>

</div>
</div>
  <div className="divider"></div>

      <div className="internship">
        <Rocket size={50} />
        <span>Open to Internship Opportunities</span>
      </div>

      <div className="divider"></div>

      <div className="skill">

        <div className="skillInfo">
          <div className="skillTitle">
            <Database size={18}/>
            <span>Backend</span>
          </div>

          <span>90%</span>
        </div>

        <div className="progress">
          <div className="progressFill backend"></div>
        </div>

      </div>

      <div className="skill">

        <div className="skillInfo">
          <div className="skillTitle">
            <Monitor size={18}/>
            <span>Frontend</span>
          </div>

          <span>70%</span>
        </div>

        <div className="progress">
          <div className="progressFill frontend"></div>
        </div>

      </div>

      <div className="skill">

        <div className="skillInfo">
          <div className="skillTitle">
            <Brain size={18}/>
            <span>DSA</span>
          </div>

          <span>80%</span>
        </div>

        <div className="progress">
          <div className="progressFill dsa"></div>
        </div>

      </div>
</div>





  </div>)
}



function ContactCard() {
  const contacts = [
    {
      title: "Email",
      value: "raghavsinghal732@gmail.com",
      link: "mailto:raghavsinghal732@gmail.com",
      icon: <Mail size={28} />,
    },
    {
      title: "Phone",
      value: "+91 7300167600",
      link: "tel:+917300167600",
      icon: <Phone size={28} />,
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/raghav",
      link: "https://www.linkedin.com/in/raghav-singhal-81996b343?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      icon: <FaLinkedin size={28} />,
    },
    {
      title: "GitHub",
      value: "github.com/raghav",
      link: "https://share.google/67S2gI9EM3KT9LcfG",
      icon: <FaGithub size={28} />,
    },
    {
      title: "Location",
      value: "Haryana, India",
      link: "https://maps.google.com/?q=Haryana,India",
      icon: <MapPin size={28} />,
    },
  ];

  return (
    <div className="contactContainer">

      <h2 className="contactHeading">Contact Me</h2>

      <p className="contactSubHeading">
        Feel free to reach out for collaborations, internships, or just a
        friendly conversation.
      </p>

      <div className="contactCards">
        {contacts.map((item, index) => (
          <div className="contactCard" key={index}>

            <div className="contactIcon">
              {item.icon}
            </div>

            <div className="contactInfo">
              <p className="contactTitle">{item.title}</p>

              <a
                href={item.link}
                className="contactValue"
                target={
                  item.title === "GitHub" ||
                  item.title === "LinkedIn" ||
                  item.title === "Location"
                    ? "_blank"
                    : undefined
                }
                rel="noopener noreferrer"
              >
                {item.value}
              </a>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

function App() {
  
  return (<> <BrowserRouter><Landing>
    
    </Landing></BrowserRouter></>)
}

export default App
