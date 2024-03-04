import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWraper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full blue-border p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h=[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText} style={{ color: "#00aff0" }}>
          Overview
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[13px] max-w-3xl leading-[30px]"
      >
        I&apos;m a Computer Science enthusiast pursuing a B.Tech in Computer
        Science and Engineering at Guru Gobind Singh Indraprastha University,
        New Delhi, with a CGPA of 8/10. I completed Senior Secondary education
        in Science with a 72% score and Secondary education with 80%. I've
        successfully completed an 8-week certified training in Web Development,
        covering HTML, CSS, Bootstrap, DBMS, PHP, JS, and React, including a
        final project. I also specialized in ReactJS. As an Internshala Student
        Partner, I gained valuable communication and leadership skills. I
        developed a personal portfolio website using ReactJS, Tailwind CSS, and
        Three.js. Proficient in C, C++, Java, with advanced knowledge in C and
        DBMS, and intermediate skills in HTML, CSS, Bootstrap, PHP, and ReactJS.
        I'm eager to apply my expertise and contribute to innovative business
        solutions with an experienced team.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWraper(About, "about");
