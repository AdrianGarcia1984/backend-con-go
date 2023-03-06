import React from "react";
import {
  FaBehance,
  FaDribbble,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaSkype,
  FaTwitter,
} from "react-icons/fa";
import profile from "../../images/foto_perfil_adrian.jpg";

const socials = [
  {
    id: 1,
    icon: <FaFacebookF />,
    link: "#0",
  },
  {
    id: 2,
    icon: <FaGithub />,
    link: "#0",
  },
  {
    id: 3,
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/adrian-garcia-dev",
  },
  {
    id: 4,
    icon: <FaInstagram />,
    link: "#0",
  },
  // {
  //   id: 5,
  //   icon: <FaBehance />,
  //   link: "#0",
  // },
  // {
  //   id: 6,
  //   icon: <FaDribbble />,
  //   link: "#0",
  // },
  // {
  //   id: 7,
  //   icon: <FaSkype />,
  //   link: "#0",
  // },
  {
    id: 7,
    icon: <FaTwitter />,
    link: "#0",
  },
];

const Sidebar = () => {
  return (
    <aside className="sticky top-0 bg-white md:mx-8 lg:mx-4 mb-8 p-6 shadow-md rounded-md -mt-40">
      <div className="w-28 h-28 rounded-md overflow-hidden mx-auto mb-5">
        <img src={profile} alt="adrian" className="w-full" />
      </div>
      <div className="text-center">
        <h1 className="text-xl text-gray-800 font-bold mb-1">Adrian Garcia</h1>
        <p className="text-sm text-gray-400 mb-3">
          Frontend and Backend Web Developer
        </p>
        {/* <a
          href="#0"
          className="inline-block mb-3 rounded bg-blue-600 text-center border-0 py-2 px-6 text-white leading-7 tracking-wide hover:bg-blue-800"
          download="Resume"
        >
          Download Resume
        </a> */}
        <ul className="flex flex-wrap justify-center">
          {socials.map((social, id) => (
            <SocialIcon social={social} key={id} />
          ))}
        </ul>
      </div>
      <div className="text-start pt-4">
        <h3 className="text-md mb-2 uppercase font-medium text-gray-800">
          sobre mi
        </h3>
        <p className="text-gray-400 text font-light leading-relaxed">
          Desarrollador web junior, iniciando mi carrera en el mundo del desarrollo web, entusiasta de aprender y superar mis conocimientos, me encanta aprender algo nuevo todos los dias, esposo y padre de 2 hermosos hijos.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;

const SocialIcon = (props) => {
  const { icon, link } = props.social;
  return (
    <li className="m-2">
      <a
        href={link}
        className="w-8 h-8 bg-blue-100 rounded text-blue-800 flex items-center justify-center hover:text-white hover:bg-blue-600"
      >
        {icon}
      </a>
    </li>
  );
};
