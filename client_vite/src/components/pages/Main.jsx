import React from 'react'
import {FaGithub, FaReact, FaJs, FaCss3, FaHtml5, FaNodeJs, FaJava, FaBootstrap}from'react-icons/fa'
import {DiMongodb, DiPostgresql, } from 'react-icons/di'
import {TbBrandTailwind} from 'react-icons/tb'
import logoGolang from "../../assets/Go-Logo_White.svg"
import golang from "../../assets/Go-Logo_Blue.svg"


const skills = [
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
    id:2,
    icon:<FaReact/>,
    name:"ReactJs"
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
    id:8,
    icon:<FaJava/>, 
    name:"Java"
  },
  {
    id:12,
    icon:<img src={golang} className="w-6 h-6"></img>,
    name:"Go" 

  },
]

const Main = () => {
  return (
    <section className="py-8">
      <div className="flex flex-wrap md:px-4">
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-2xl text-gray-800 font-bold mb-4">Quien soy?</h3>
            <p className="text-sm text-gray-400 leading-6 text-justify mb-3 ">
              Apasionado por la tecnologia, la programacion, el mundo del motor, la fotografia y estar en familia, despues de trabajar mas de 20 años como dragoneante del INPEC, cambie mi rumbo hacia el mundo de la programacion, tecnologo en sistemas, graduado del SENA en el año 2015, con diplomado en desarrollo web FullStack, y diferentes cursos que me han permitido adquirir conocimientos en diferentes ambitos del mundo del desarrollo web.
            </p>
            <h3 className="text-2xl text-gray-800 font-bold mb-4">Skills</h3>
            {/* <p className="text-sm text-gray-400 leading-6 mb-3">
              tecnologias:
               </p> */}

             <ul className="
              
             flex-wrap mb-3">
             {skills.map((skill, id) => (
            <SkillIcons skill={skill} key={id} />
          ))}
             </ul>
            <p className="text-sm text-gray-400 leading-6 mb-3 text-justify">
                Ademas de esto, durante mi tiempo de trabajo en el INPEC, administre la oficina de sistemas de una de sus sedes, lo cual me permitie tener la experiencia en campos como la administracion de sistemas, administracion de personal, redes locales de comunicacion(planificacion, ejecucion, configuracion, puesta en marcha y mantenimiento), administracion de bases de datos de oracle (diplomado certificado con la Universidad Cooperativa de Colombia), entre otros conocimientos relacionados con el mantenimiento de computadores, etc.
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
    <li className="m-2 flex justify-normal ">      
    <a className="w-6 h-6 bg-blue-100 rounded text-blue-800 flex items-center justify-center hover:text-white hover:bg-blue-600">
      {icon}
      </a>
      <p className=" mx-2 text-sm text-gray-400 leading-6 text-justify">{name}</p>
    </li>
  );
};