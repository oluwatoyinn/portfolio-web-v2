import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { projectData } from './../utils/Data';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const scroller = useRef();
  const skills = useRef();

  useEffect(() => {
    let skillSets = gsap.utils.toArray(".skill-set");

    let to = gsap.to(skillSets, {
      xPercent: () => -100 * (skillSets.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: scroller.current,
        markers: false,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        snap: 1,
        
        end: () => "+=" + window.innerWidth,
      },
    });

    return () => {
      to.kill();
    };
  }, []);

  return (
    <>
    <section id="project">
      <h2 className="text-blue-600 text-4xl text-center">
        Some available projects online
      </h2>
      <div className="overflow-hidden flex">
        <div
          id="skills"
          ref={scroller}
          className="flex w-screen m-0 relative h-screen"
        >
          {projectData.map((project, index) => (
            <div
              key={index}
              ref={skills}
              className="skill-set px-12 w-screen h-full bg-transparent flex items-center"
            >
              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white p-10">
                <a href="https://github.com/oluwatoyinn">
                  <Image
                    src="/icons8-github.svg"
                    alt="Img Logo"
                    className="dark:invert"
                    width={50}
                    height={10}
                    priority
                  />
                </a>
                <p className="text-black text-justify">{project.description}</p>

                <h3 className="text-black text-justify font-bold mt-5">
                  {project.skills}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};


export default Projects;