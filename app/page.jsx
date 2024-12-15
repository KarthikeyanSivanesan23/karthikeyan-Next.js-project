import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import "./globals.css";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Endcard from "@/components/Endcard";
import ParallaxEffect from "@/components/ParallaxEffect";

const Home = () => {
  return (
    <section className="h-full relative">
      {/* Parallax effect as background */}
      
      
      <div className="container mx-auto h-full relative z-10">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-4 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-accent">Karthikeyan S</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences, leveraging my
              proficiency in various programming languages and technologies.
              With the ability to customize software according to users' needs,
              I skillfully utilize various frameworks to create seamless,
              dynamic, and user-friendly solutions.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      
      {/* Stats and Endcard Section */}
      <Stats />
      <Endcard />
      
    </section>
  );
};

export default Home;
