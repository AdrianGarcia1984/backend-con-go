import React, { useState, useEffect, useRef } from 'react';
import { getCharacter, getPeople, searchCharacter } from '../../services/apiRickAndMorty';

const RickAndMortyApp = () => {
  const inputRef = useRef(null)
  const [people, setPeople] = useState([])
  const [errorState, setErrorState] = useState({ hassError: false })
  const [currentChar, setCurrentChar] = useState(1)
  const [detail, setDetail] = useState({})
  const [textSearch, setTextSearch] = useState('')
  const [page, setPage] = useState(1)


  useEffect(() => {
    getPeople(page).then(setPeople).catch(handleError)
  }, [page])

  useEffect(() => {
    getCharacter(currentChar).then(setDetail).catch(handleError)
  }, [currentChar])

  const handleError = (error) => {
    setErrorState({ hassError: true, message: error.message })
  }

  const showDetail = (character) => {
    const id = Number(character.url.split('/').pop())
    setCurrentChar(id)
  }

  const onChangeTextSearch = (e) => {
    e.preventDefault()
    const text = inputRef.current.value
    setTextSearch(text)
  }

  const onSearchSubmit = (e) => {
    if (e.key !== 'Enter') return
    inputRef.current.value = ''
    setDetail({})
    searchCharacter(textSearch).then(setPeople).catch(handleError)

  }

  const onChangePage = (next) => {
    if (!people.previous && page + next <= 0) return
    if (!people.next && page + next >= 43) return
    if(next==="first"){
      setPage(1)
      return
    }
    if(next==="last"){
      setPage(42)
      return
    }
    setPage(page + next)
  }
 
  //console.log(detail)
  return (
    <>
    <h1 className='text-2xl text-gray-800 font-bold mb-4 '>APLICACION DE RICK AND MORTY</h1>
            <p className='text-gray-500 md:text-left m-2'>Busca tu personaje favorito en la API de Rick and Morty</p>
            <p className='text-gray-500 md:text-left m-2'>En esta parte se consume la API de RICK and MORTY y se renderiza en una pequeña Card.</p>
            <p className='text-gray-500 md:text-left m-2'>Tecnologias: TailwindCSS, reactJS, JavaScript</p>
    <div className='py-8 mx-8 flex flex-col md:max-w-xl md:flex-row '>
      <div className="md:w-1/3 mr-3">
        <input
        className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-4 hover:bg-blue-200 hover:text-white-100'
        type='text' ref={inputRef}
          onChange={onChangeTextSearch}
          onKeyDown={onSearchSubmit}
          placeholder="busca un personaje"></input>
        <ul>
          {errorState.hassError && <div>{errorState.message}</div>}
          {people?.results?.map(character => (
            <li 
            className='text-gray-500 p-1 md:text-left sm:m-0.5 md:m-1 xl:m-2  hover:text-gray-800 hover:bg-gray-200 hover:rounded'
            key={character.id} onClick={() => showDetail(character)}>{character.name} </li>
          ))}
        </ul>
        
      </div>
      <div className="md:w-2/3">
        <section className='flex justify-center'>
          {!detail?
            <h1>no hay personaje seleccionado</h1> :
            <div className='flex flex-col rounded-lg bg-white shadow-lg my-2  md:max-w-xl md:flex-row'>
              <img src={detail.image} alt={detail.name} className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" />
              <div className='flex flex-col justify-start p-6'>
                <h1 className='text-2xl font-medium '>{detail.name}</h1>
                <ul className='mb-4 text-base text-neutral-600 '>
                  <li className='text-gray-600 md:text-left m-1'>status: {detail.status}</li>
                  <li className='text-gray-600 md:text-left m-1'>species: {detail.species}</li>
                  
                </ul>
              </div>
            </div>
          }
        </section>
      </div>      
    </div>
    <div className='flex justify-center'>
          <button className='relative block rounded bg-transparent py-1.5 pl-2 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 ' onClick={() => onChangePage("first")}>first</button>
          <button className='relative block rounded bg-transparent py-1.5 px-2 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 ' onClick={() => onChangePage(-1)}>prev</button>
          <a className='relative block rounded bg-primary-100 py-1.5 px-3 text-sm font-medium text-primary-700 transition-all duration-300'>{page}
          <span
            className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]"
            >(current)</span></a>
          <button className='relative block rounded bg-transparent py-1.5 px-2 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 ' onClick={() => onChangePage(+1)}>next</button>
          <button className='relative block rounded bg-transparent py-1.5 pr-2 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 ' onClick={() => onChangePage("last")}>last</button>

        </div>
    </>
  );

}
export default RickAndMortyApp