export async function getPeople(page){
    try {
        const response=await fetch('https://rickandmortyapi.com/api/character/?page='+page)        
        if (!response.ok){
            throw new NetworkError()
        }
        const data=await response.json()
       // console.log(data)
        return data
    } catch (error) {
        throw error
        
    }
}

export async function getCharacter(id){
    const response = await fetch('https://rickandmortyapi.com/api/character/'+id)
    const data = await response.json()
    return data
}

export async function searchCharacter(name){
    const response = await fetch('https://rickandmortyapi.com/api/character/?name='+name)
    const data = await response.json()
    return data
}

class NetworkError extends Error{
    constructor(){
        super ('Network error')
    }
}
