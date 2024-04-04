import React, { useState } from 'react'
import './loading.css'

const Loading = () => {
  const [esperar,setEsperar]=useState(false)

  setTimeout(function(){
    setEsperar(true)      
  }, 2500)
    

  return (
    <div className='content-center' >
      <div className='contentSpiner'>
        <div className='spinner'>      
        </div>    
      </div>
        <div>
          <h3 className='border-2 px-4 py-2 mb-2 text-gray-500'>recuperando archivos del servidor</h3>
            {esperar&&
            <h3 className='border-2 px-4 py-2 text-gray-500'>si,  esta tardando mas de lo esperado, pero es debido a que el servicio del backend esta alojado en otro servidor y este debe ser activado, tenga paciencia</h3>        
            }  
        </div>   
    </div>

  )
}

export default Loading

