export const obtenerDatos = async () => {
    const res = await fetch(import.meta.env.VITE_API + '/users')
    const data = await res.json()
   console.log(data)
}