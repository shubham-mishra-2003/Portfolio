import { styles } from "../style";
import { man } from "../assets/index";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} inset-0 pt-[70px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#00aff0]" />
          <div className="w-1 sm:h-60 h-40 blue-gradient" />
        </div>
        <div>
          <div className="flex">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I&apos;m{" "}
              <span className="text-[#00aff0]">Shubham mishra</span>
            </h1>
          </div>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Computer Science Engineering graduate (CGPA: 9.3) skilled in
            full-stack development, secure peer-to-peer systems, and AI-powered
            web applications. Proficient in Next.js, Node.js, React, and
            networking concepts, with a strong focus on building efficient,
            scalable digital platforms.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <img src={man} className="h-[250px]" />
      </div>
    </section>
  );
};

export default Hero;
