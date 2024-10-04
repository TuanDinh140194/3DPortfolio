import React, { useState, useRef, useEffect } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";
import { label } from "three/webgpu";

const About = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef();
  const handleCopy = () => {
    navigator.clipboard.writeText("tuandinh0114@gmail.com");
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted; // Toggle mute state
      setIsMuted(!isMuted); // Update state
    }
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/avarta.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I&apos;m Tuan Dinh</p>
              <p className="grid-subtext">
                With 4 years of experience, I have been working on web
                development. I love what I do. My skills in front-end and
                back-end development allow me to create websites that are both
                visually appealing and user-friendly. Now, I&apos;m focused on
                animated 3D websites. It will be a great addition to the future
                of web development.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/Tech.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in Javascript/TypeScript with a focus on React and
                NextJS ecosystem. I have experienced with TailwindCSS for
                font-end development and NodeJS for back-end development. I also
                proficient in Database and Cloud Services.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={426}
                width={426}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                // showAtmosphere
                // showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 45.523064,
                    lng: -122.676483,
                    text: "I'm here",
                    color: "black",
                    size: 50,
                  },
                ]}
                pointsData={[
                  // Add this section for markers
                  {
                    lat: 45.523064, // Your latitude
                    lng: -122.676483, // Your longitude
                    color: "blue", // Marker color
                    size: 50, // Marker size
                    label: "My Location", // Marker label
                  },
                  // Add more markers as needed
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I work remotely across most timezones
              </p>
              <p className="grid-subtext">
                I'm based in Portland, Oregon, and I'm always looking for new
                opportunities with remote work availability.
              </p>
              {/* <Button
                name="Contact Me"
                isBeam
                containerClass="w-full mt-10"
              /> */}
              <a
                className="w-full mt-10 text-center bg-black-600 text-white px-4 py-3 rounded flex items-center justify-center"
                href="#contact"
              >
                <span className="w-3 h-3 bg-green-500 rounded-full mr-4 animate-pulse"></span>
                Talk to me
              </a>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            {/* <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            /> */}
            <div className="relative">
              <video
                className=" w-full sm:h-[266px] h-fit object-cover rounded-2xl"
                autoPlay
                loop
                ref={videoRef}
              >
                <source src="textures/project/Tech.mp4" type="video/mp4" />
              </video>
              <button
                onClick={toggleMute}
                className="absolute bottom-2 right-2 text-white  bg-white-600 px-3 py-1 rounded shadow-lg opacity-80 hover:opacity-100 transition duration-300"
              >
                <img
                  src={isMuted ? "assets/speakOn.svg" : "assets/speakOff.svg"}
                  alt={isMuted ? "Unmute" : "Mute"}
                  className="w-6 h-6" // Adjust size as needed
                />
              </button>
            </div>
            <div>
              <p className="grid-headtext">My passion for Coding</p>

              <p className="grid-subtext">
                I love solving problems and building things through code.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={isCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-xl md:text-lg font-medium text-gray_gradient text-white my-2">
                  tuandinh0114@gmail.com
                </p>
              </div>
              <div className="text-gray_gradient lg:text-xl md:text-lg flex justify-center items-center gap-2">
                <div className="font-bold   ">
                  <svg
                    className="w-8 h-8 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="gray"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
                    />
                  </svg>
                </div>
                (971)-570-6764
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
