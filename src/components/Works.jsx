import { styles } from "../style";
import { linkicon } from "../assets";
import { SectionWraper } from "../hoc";
import { projects } from "../constants";
import { fadeIn } from "../utils/motion";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

const ProjectCard = ({ index, name, description, tags, image, link }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.3 * index, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0 }}
      className="w-full"
    >
      <Tilt
        options={{
          max: 25,
          scale: 1.05,
          speed: 400,
          glare: true,
          "max-glare": 1,
        }}
        className="bg-tertiary p-5 rounded-2xl w-full flex flex-col h-full"
      >
        <div className="w-full h-[200px] relative">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-top rounded-2xl"
          />
          {link && (
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(link, "_blank")}
                className="bg-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer shadow-md"
              >
                <img
                  src={linkicon}
                  alt="link icon"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          )}
        </div>

        <div className="mt-5 flex flex-col justify-between flex-grow">
          <div>
            <h3 className="text-white font-bold text-[20px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <div>
        <h2 className={styles.sectionHeadText} style={{ color: "#00aff0" }}>
          Projects
        </h2>
        <p className={styles.sectionSubText}>Welcome to my project showcase!</p>
      </div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="w-full"
      >
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          This curated collection highlights some of my most recent work in web
          and software development. These projects demonstrate my expertise in
          building full-stack applications using modern technologies such as
          Next.js, React.js, Node.js, Firebase, MongoDB, Tailwind CSS, and
          Cloudinary, along with robust implementation of cryptographic
          protocols, real-time communication, AI-driven features, and more.
        </p>
      </motion.div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWraper(Works, "project");
