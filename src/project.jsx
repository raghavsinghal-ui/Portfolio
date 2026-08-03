import "./productdetail.css"
import "./project.css";
import { useState, useRef } from "react";
import { gsap } from "gsap";


const projects = [

{
  id: 1,

  title: "Event Partner",

  description:
    "Event Partner is a role-based event management backend that streamlines the complete event lifecycle—from event creation and AI-powered promotion to secure registrations, payments, and participant management. The platform centralizes multiple disconnected workflows into a single scalable backend, providing administrators and users with an efficient and secure experience.",

  keyFeatures: [
    "Role-Based Access Control (Super Admin, Admin & User)",
    "AI-powered event promotion using Generative AI",
    "JWT & OTP authentication with secure access control",
    "Event discovery with search, filtering and pagination",
    "Dynamic registration workflow with Razorpay payment integration",
    "User credibility verification and participant tracking"
  ],

  techStack: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
    "Razorpay",
    "Generative AI API",
    "REST API",
    "JavaScript"
  ],

  
  button:{
  key:"GitHub ➜",
   value :"https://github.com/raghavsinghal-ui/event-partner-backend"},

  images: [
   
  "/project/event/eventserver.png"
  
  ]
},
 {
    id: 2,

    title: "Portfolio Website",

    description:
      "A modern developer portfolio built with React and GSAP featuring smooth animations, interactive UI elements, responsive layouts, project showcase, and a visually appealing design focused on performance and user experience.",

    keyFeatures: [
      "Modern animated landing page",
      "Interactive project showcase",
      "GSAP powered animations",
      "Responsive design for all devices",
      "Skills, education and contact sections",
      "Clean component-based architecture"
    ],

    techStack: [
      "React.js",
      "JavaScript",
      "CSS3",
      "GSAP",
      "Vite"
    ],
button:{
  key:"GitHub ➜",
   value : "https://github.com/yourusername/portfolio"},

    images: [
      "/project/pf.png",
       "/project/pfc.png",
    ]
  },
  {
  id: 3,

  title: "DSA Journey",

  description:
    "An ongoing journey of mastering Data Structures and Algorithms through consistent problem-solving on LeetCode. The focus is on building strong problem-solving skills, understanding algorithmic patterns, and writing optimized solutions suitable for coding interviews.",

  keyFeatures: [
    "Solved 300+ LeetCode problems across multiple topics",
    "Strong foundation in Arrays, Strings, Linked Lists, Stacks and Queues",
    "Practiced Binary Search, Trees, Graphs, Dynamic Programming and Greedy Algorithms",
    "Optimized brute-force solutions using efficient algorithms and data structures",
    "Implemented solutions primarily in C++ using STL",
    "Regular participation in coding contests and daily problem-solving"
  ],

  techStack: [
    "C++",
    "STL",
    "Algorithms",
    "Data Structures",
    "LeetCode"
  ],

button:{
  key:"Leetcode Profile➜",
   value : "https://leetcode.com/u/Uk1uBzIXht/"},

  images: [
    "/project/lc.png"
  ]
}

];

function getLayout(count) {
  if (count === 1) return "single";
  if (count === 2) return "double";
  return "special";
}

function ProjectCard({ project, onClick }) {
  return (
    <div
      className="projectCard"
      onClick={() => onClick(project.id)}
    >
      <h2>{project.title}</h2>
    </div>
  );
}


function ProjectDetails({ project, onBack }) {
  const [showGallery, setShowGallery] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

const overlayRef = useRef(null);
const imageRef = useRef(null);
function openGallery() {
  setCurrentIndex(0);
  setShowGallery(true);

  requestAnimationFrame(() => {
    gsap.fromTo(
      overlayRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.35,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      imageRef.current,
      {
        scale: 0.8,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.45,
        ease: "power3.out",
      }
    );
  });
}
function closeGallery() {
  gsap.to(imageRef.current, {
    scale: 0.8,
    opacity: 0,
    duration: 0.25,
    ease: "power2.in",
  });

  gsap.to(overlayRef.current, {
    opacity: 0,
    duration: 0.3,
    delay: 0.05,
    onComplete: () => setShowGallery(false),
  });
}
function prevImage(e) {
  e.stopPropagation();

  const next =
    currentIndex === 0
      ? project.images.length - 1
      : currentIndex - 1;

  gsap.to(imageRef.current, {
    x: 120,
    opacity: 0,
    duration: 0.2,
    onComplete: () => {
      setCurrentIndex(next);

      requestAnimationFrame(() => {
        gsap.fromTo(
          imageRef.current,
          {
            x: -120,
            opacity: 0
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.35,
            ease: "power2.out"
          }
        );
      });
    }
  });
}
function nextImage(e) {
  e.stopPropagation();

  const next =
    currentIndex === project.images.length - 1
      ? 0
      : currentIndex + 1;

  gsap.to(imageRef.current, {
    x: -120,
    opacity: 0,
    duration: 0.2,
    onComplete: () => {
      setCurrentIndex(next);

      requestAnimationFrame(() => {
        gsap.fromTo(
          imageRef.current,
          {
            x: 120,
            opacity: 0
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.35,
            ease: "power2.out"
          }
        );
      });
    }
  });
}
  return (
    <div className="projectDetails">

      <button className="backBtn" onClick={onBack}>
        ← Back
      </button>

      <div className="detailsContainer">

        {/* LEFT */}
        <div className="detailsLeft">

          <div className="leftScroll">

            <h1>{project.title}</h1>

            <p className="description">
              {project.description}
            </p>

            <div className="section">
              <h2>Key Features</h2>

              <ul>
                {project.keyFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="section">
              <h2>Tech Stack</h2>

              <div className="techStack">
                {project.techStack.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
            </div>

            <a
              href={project.button.value}
              target="_blank"
              rel="noreferrer"
              className="githubBtn"
            >
            {project.button.key}
            </a>

          </div>

        </div>

        {/* RIGHT */}

       <div className="detailsRight">
  <div className="imageBox"  onClick={openGallery}>
    <img
      src={project.images[0]}
      alt={project.title}
      className="projectImage"
    />
  </div>
</div>

      </div>
  {showGallery && (
  <div
    className="galleryOverlay"
    ref={overlayRef}
    onClick={closeGallery}
  >

    <button
      className="galleryArrow leftArrow"
      onClick={prevImage}
    >
      &#10094;
    </button>

    <img
      ref={imageRef}
      src={project.images[currentIndex]}
      alt={project.title}
      className="galleryImage"
      onClick={(e) => e.stopPropagation()}
    />

    <button
      className="galleryArrow rightArrow"
      onClick={nextImage}
    >
      &#10095;
    </button>

    <button
      className="closeBtn"
      onClick={closeGallery}
    >
      ✕
    </button>

  </div>
)}

    </div>
  );
}



export default function Project() {
  const layout = getLayout(projects.length);

  const [selectedId, setSelectedId] = useState(null);

  function handleProjectClick(id) {
    setSelectedId(id);
  }

  function handleBack() {
    setSelectedId(null);
  }

  const selectedProject = projects.find(
    (project) => project.id === selectedId
  );

return (
  <div
    className={
      selectedProject
        ? "projectContainer details"
        : `projectContainer ${layout}`
    }
  >
    {selectedProject ? (
      <ProjectDetails
        project={selectedProject}
        onBack={handleBack}
      />
    ) : (
      projects.map(project => (
        <ProjectCard
          key={project.id}
          project={project}
          onClick={handleProjectClick}
        />
      ))
    )}
  </div>
);
}