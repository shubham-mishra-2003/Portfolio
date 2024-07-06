import { styles } from "../style";
import { man } from "../assets/index";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} inset-0 mt-[70px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#00aff0]" />
          <div className="w-1 sm:h-80 h-40 blue-gradient" />
        </div>
        <div>
          <div className="flex">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I&apos;m
              <span className="text-[#00aff0]"> Shubham mishra</span>
            </h1>
          </div>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am currently pursuing a Bachelor&apos;s degree in Computer Science
            and Engineering, B.Tech CSE. As a student in this field, I am
            constantly exploring the latest advancements in technology and how
            they can be applied to solve real-world problems.
          </p>
        </div>
      </div>
      <div className="flex xl:mt-[-170px] justify-center">
        <img src={man} className="h-[250px]" />
      </div>
    </section>
  );
};

export default Hero;
