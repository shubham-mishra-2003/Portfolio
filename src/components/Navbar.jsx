import { useState } from "react";
import { Link } from "react-router-dom";
import { links, navLinks } from "../constants/index";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`py-5 w-full fixed top-0 z-20 bg-primary`}
      style={{
        padding: "10px 20px",
        background: "transparent",
        backgroundColor: "rgba(0, 49, 89, 0.8)",
        borderBottom: "2px solid #00aff0",
      }}
    >
      <div
        className="w-full flex justify-between items-center max-w-7xl mx-auto"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            style={{ boxShadow: "0px 2px 40px #00a6ff" }}
            alt="logo"
            className="box-content flex rounded-full w-40 sm:w-100 mr"
          />
        </Link>
        <div className="flex gap-3 justify-center items-center">
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } text-[18px] font-medium cursor-pointer`}
                onClick={() => {
                  setActive(link.title);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
          <a
            href={links.resume}
            target="_main"
            className="p-1 hidden md:block bg-blue-500 rounded-md"
          >
            Resume
          </a>
        </div>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[25px] h-[22px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            style={{
              background: "linear-gradient(to top left, #004863, #002d55)",
              borderRadius: "20px",
            }}
            className={`${
              !toggle ? "hidden" : "flex"
            } p-5 flex flex-col gap-2 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounder-xl`}
          >
            <ul className="list-none flex jusify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } hover:text-blue-500 text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
            <a href={links.resume} target="_main" className="">
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
