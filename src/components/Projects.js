import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { projectData } from "./../utils/Data";

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
            className="flex m-0 relative h-screen"
          >
            {projectData.map((project, index) => (
              <div
                key={index}
                ref={skills}
                className="skill-set px-2 sm:px-12 w-screen sm:w-full h-full bg-transparent flex items-center"
              >
                <div className="mt-10 mx-auto sm:w-full sm:max-w-sm bg-blue-200 p-10">
                  <div className="flex justify-between">
                    <a href={project.link}>
                      <Image
                        src="/icons8-github.svg"
                        alt="Img Logo"
                        className="dark:invert"
                        width={50}
                        height={10}
                        priority
                      />
                    </a>
                    <span className="mt-2 mb-2 p-2 bg-blue-400 rounded-md">
                      {project.label}
                    </span>
                  </div>
                  <p className="text-black text-justify">
                    {project.description}
                  </p>

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
