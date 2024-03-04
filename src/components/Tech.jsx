import { BallCanvas } from "./canvas";
import { SectionWraper } from "../hoc";
import { technology } from "../constants";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../style";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText} style={{ color: "#00aff0" }}>
          Skills
        </h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technology.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <p style={{ width: "100%", textAlign: "center" }}>
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWraper(Tech, "skills");
