import React from 'react'
import {FaGithub, FaReact, FaJs, FaCss3, FaHtml5, FaNodeJs, FaJava, FaBootstrap}from'react-icons/fa'
import {DiMongodb, DiPostgresql, } from 'react-icons/di'
import {TbBrandTailwind} from 'react-icons/tb'
import selenium from "../../assets/selenium.svg"
import maven from "../../assets/apachemaven.svg"
import postman from "../../assets/postman.svg"
import appium from "../../assets/appium.svg"
import golang from "../../assets/golang.svg"


const skills = [
  {
    id:3,
    icon:<FaJs/>, 
    name:"JavaScript"
  },
  {
    id:7,
    icon:<FaNodeJs/>, 
    name:"NodeJS"
  },
  {
    id:8,
    icon:<FaJava/>, 
    name:"Java"
  },
  {
    id:12,
    icon:<img src={golang} className="w-5"></img>,
    name:"Go" 
  },
  {
    id:2,
    icon:<FaReact/>,
    name:"ReactJs"
  },
  {
    id:13,
    icon:<img src={selenium} className="w-5 "></img>,
    name:"Selenium-Java" 
  },
  {
    id:14,
    icon:<img src={maven} className="w-5 "></img>,
    name:"Maven" 
  },
  {
    id:15,
    icon:<img src={appium} className="w-5 "></img>,
    name:"Appium" 
  },
  {
    id:5,
    icon:<FaCss3/>, 
    name:"CSS3"
  },
  {
    id:6,
    icon:<FaHtml5/>, 
    name:"HTML5"
  },
  {
    id:4,
    icon:<DiMongodb/>, 
    name:"MongoDB"
  },
  {
    id:9,
    icon:<DiPostgresql/>, 
    name:"PostgresSQL"
  }, 
  {
    id:1,
    icon:<FaGithub/>,
    name:"Git-GitHub"
  },
  {
    id:10,
    icon:<FaBootstrap/>,
    name:"BootstrapCSS" 
  },
  {
    id:11,
    icon:<TbBrandTailwind/>, 
    name:"TailwindCSS"
  },
  {
    id:15,
    icon:<img src={postman} className="w-5"></img>,
    name:"Postman" 
  }
]

const Main = () => {
  return (
    <section className="py-8">


      <div className="flex flex-wrap md:px-4">
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-2xl text-gray-800 font-bold mb-4">Quien soy?</h3>
            <p className="text-sm text-gray-500 leading-6 text-justify mb-3 ">
              Apasionado por la tecnologia y la programación, desde el año 2022 en el rol del desarrollo web, tecnologo en sistemas desde el 2014, graduado del SENA, con diplomado en desarrollo web FullStack, QA-Automation, y diferentes cursos que me han permitido adquirir conocimientos en el mundo del desarrollo de software.
            </p>
            <h3 className="text-2xl text-gray-800 font-bold mb-4">Skills</h3>

             <ul className="flex-wrap mb-3">
             {skills.map((skill, id) => (
            <SkillIcons skill={skill} key={id} />
          ))}
             </ul>
            <p className="text-sm text-gray-500 leading-6 mb-3 text-justify">
                Ademas de esto, despues de trabajar 21 años en el INPEC, 8 de estos años fui el lider en la oficina de sistemas de una de sus sedes, lo cual me permite tener la experiencia demostrable en campos como la administracion de sistemas, administracion del recurso humano, redes locales de comunicación (planificacion, ejecución, configuración, puesta en marcha y mantenimiento), administracion de bases de datos de oracle (diplomado certificado con la Universidad Cooperativa de Colombia), entre otros conocimientos relacionados con el mantenimiento de computadores, etc.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Main


const SkillIcons = (props) => {
  const { icon, name } = props.skill;
  return (
    <li className="m-2 flex justify-normal">      
    <a className="w-6 h-6 bg-blue-100 rounded text-blue-800 flex items-center justify-center hover:text-white hover:bg-blue-600">
      {icon}
      </a>
      <p className=" mx-2 text-sm text-gray-600 leading-6 text-justify">{name}</p>
    </li>
  );
};