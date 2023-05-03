import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import profile from "../../images/foto_perfil_adrian.jpg";

const socials = [
  {
    id: 1,
    icon: <FaGithub />,
    link: "https://github.com/AdrianGarcia1984",
  },
  {
    id: 2,
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/adrian-garcia-dev",
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
          FullStack Web Developer
        </p>

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
        <p className="text-gray-400 text font-light leading-relaxed text-justify">
          Desarrollador web junior, entusiasta de aprender y superar mis conocimientos, me encanta aprender algo nuevo todos los dias, esposo y padre de 2 hermosos hijos.
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
        href={link} target="_blank"
        className="w-8 h-8 bg-blue-100 rounded text-blue-800 flex items-center justify-center hover:text-white hover:bg-blue-600">
        {icon}
      </a>
    </li>
  );
};
