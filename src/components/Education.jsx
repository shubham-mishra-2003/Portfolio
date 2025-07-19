import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../style";
import { education } from "../constants/index";
import { SectionWraper } from "../hoc";
import { textVariant } from "../utils/motion";

const EducationCard = ({ education }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArroStyle={{ borderRight: "7px solid #232631" }}
    date={education.date}
    iconStyle={{ background: education.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={education.icon}
          alt={education.college}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{education.title}</h3>
      <p
        className="text-secondary text-[16px] font-semibold "
        style={{ margin: "0" }}
      >
        {education.college}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {education.points.map((point, index) => (
        <li
          key={`education-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Journey till now.</p>
        <h2 className={styles.sectionHeadText} style={{ color: "#00aff0" }}>
          Education
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {education.map((education, index) => (
            <EducationCard key={index} education={education} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWraper(Education, "education");
