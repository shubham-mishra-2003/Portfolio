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
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h=[280px] flex justify-evenly items-center flex-col">
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
        I am a Computer Science Engineering undergraduate at Guru Gobind Singh
        Indraprastha University, New Delhi, currently maintaining a CGPA of 9.3.
        I have a strong foundation in full-stack web development and secure
        system design, with hands-on experience in technologies like React.js,
        Next.js, Node.js, MongoDB, and Firebase. I have successfully completed
        an 8-week certified training program in web development, covering HTML,
        CSS, Bootstrap, DBMS, PHP, JavaScript, and ReactJS, culminating in a
        full-fledged project. As an Internshala Student Partner, I developed
        strong leadership and communication skills. My technical portfolio
        includes a self-designed personal website and several deployed
        applications built with ReactJS, Tailwind CSS, and Three.js. I am
        proficient in programming languages such as JavaScript, TypeScript,
        Java, and Python, with solid knowledge in cryptography, TCP/UDP
        networking, and database systems. I am eager to apply my skills in a
        collaborative team environment to create impactful digital solutions and
        grow as a full-stack engineer.
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
