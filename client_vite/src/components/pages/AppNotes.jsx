import { useEffect, useState } from 'react'
import {FaTrash, FaEdit} from "react-icons/fa";
import Formulario from '../sections/Formulario';
import Loading from '../sections/Loading';

function AppNotes() {
    
    const [edit, setEdit] = useState(false);
    const [dataForm, SetDataForm] = useState({ name: "", email: ""})
    const [users, setUsers] = useState([])
    const [status, setStatus] = useState(false)

    const obtenerDatos = async () => {
        const res = await fetch(import.meta.env.VITE_API + '/users')
        const data = await res.json()
        //console.log(data)
        data.ok!=false? (setStatus(true),setUsers(data.users)):setStatus(false)
        
    }

    const handleSubmit = async () => {
        try {
            console.log(dataForm)
            const response = await fetch(
                (import.meta.env.VITE_API + '/users'), {
                method: 'POST',
                body: JSON.stringify(dataForm),
                headers: {
                    "Content-Type": "application/json"
                }
            },
            )
            cleanDataForm()
            const data = await response.json()
            if (data.ok===true){
                obtenerDatos()
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async (id)=>{
        try {
            const response = await fetch(
                (import.meta.env.VITE_API + '/users/'+id), {
                method: 'DELETE',
            })
            const data = await response.json()
            console.log(data)
            if (data.ok===true){
                obtenerDatos()
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleUpdate = async (id)=>{
        try {
            
            const id = localStorage.getItem('id')
            const response = await fetch(
                (import.meta.env.VITE_API + '/users/'+id), {
                method: 'PUT',
                body: JSON.stringify( dataForm ),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await response.json()
            if (data.ok===true){
                obtenerDatos()
                setEdit(false)
                cleanDataForm()
            }
        } catch (error) {
            console.log(error)
        }
    }

    const cleanDataForm = ()=>{
        SetDataForm({name:"", email:""})
        setEdit(false)
    }

    const action =(e)=>{
        e.preventDefault();
        edit ? handleUpdate() : handleSubmit();
    }

    const completeDataFields = (item) => {
        setEdit(true)
        SetDataForm({
            name: item.name,
            email: item.email,
        });
        localStorage.setItem('id', item.id);
    }

    useEffect(() => {
        obtenerDatos()
    }, [])

    return (
        <section className="App py-8">
            <h1 className='text-2xl text-gray-800 font-bold mb-4 '>APLICACION DE REGISTRO DE USUARIOS</h1>
            <p className='text-gray-500 md:text-left m-2 text-justify'>Pequeña aplicacion CRUD de registro de usuarios.</p>
            <p className='text-gray-500 md:text-left m-2 text-justify'>Descripcion: Aplicacion conectada a un Backend es desarrollado en GO con Fiber como framework, la cual se conecta a una base de datos desarrollada en Mongo-DB.</p>
            <p className='text-gray-500 md:text-left m-2 text-justify'>Tecnologias: GO, ReactJs, Javascript, TailwindCSS, MongoDB.</p>
            <h2 className='text-2xl text-gray-800 font-bold mb-4' >Registro</h2>
            <section className='form-crud sm:w-auto mt-2'>
                <form className='w-full max-w-sm mb-2' onSubmit={action} >
                    <div className='md:flex md:items-center mb-6'>
                        <div className='md:w-1/3'>
                            <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' htmlFor="name">Nombre
                            </label>
                        </div>
                        <div className='md:w-2/3'>
                            <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500' type="name" placeholder='nombre' 
                               value={dataForm.name} 
                               onChange={e => SetDataForm({ ...dataForm, name: e.target.value })}
                             id="name" required></input>
                        </div>
                    </div>
                    <div className='md:flex md:items-center mb-6'>
                        <div className='md:w-1/3'>
                            <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' htmlFor="name">Email
                            </label>
                        </div>
                        <div className='md:w-2/3'>
                            <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500' type="email" placeholder='email' 
                              value={dataForm.email} 
                              onChange={e => SetDataForm({ ...dataForm, email: e.target.value })}
                            required></input>
                        </div>
                    </div>
                    <div className='md:flex md:items-center'>
                        <div className='md:w-1/3'></div>
                        <div className='md:w-2/3'>
                            <button className='shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded' type="submit">Guardar</button>
                        </div>
                    </div>
                    <br />
                </form>
            </section>

            {/* <Formulario
            
                /> */}
            <h2 className='text-2xl text-gray-800 font-bold mb-4 ' >Tabla de Usuarios Registrados</h2>
            <section className=' md:w-auto'>
                {
                    !status? <Loading/>:
                    <table className='sm:table-auto md:table-fixed text-gray-700 shadow md:w-auto'>
                    <thead>
                        <tr>
                            <th className='border-2 w-1/4 px-4 py-2'>Nombre</th>
                            <th className='border-2 w-1/4 px-4 py-2'>Email</th>
                            <th className='border-2 w-1/4 px-4 py-2'>Fecha Creacion</th>
                            <th className='border-2 w-1/4 px-4 py-2'>Accion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {                         
                        users.map(user => (

                            <tr key={user.id}>

                                <td className='border-2 px-4 py-2 text-gray-500'>{user.name}</td>
                                <td className='border-2 px-4 py-2 text-gray-500'>{user.email}</td>
                                <td className='border-2 px-4 py-2 text-gray-500'>{user.created_at}</td>
                                <td className='border-2 px-4 py-2'>
                                    
                                    <button 
                                     onClick={()=>completeDataFields(user)}
                                    className='m-1 w-auto shadow bg-yellow-300 hover:bg-yellow-200 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'>
                                    <FaEdit /></button>
                                    
                                    <button 
                                    onClick={()=>handleDelete(user.id)}
                                    className='m-1 w-auto shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'><FaTrash/></button>                                   
                                </td>
                            </tr>
                        )
                        )}
                    </tbody>
                </table>
                }

            </section>
        </section>
    )
}

export default AppNotes
