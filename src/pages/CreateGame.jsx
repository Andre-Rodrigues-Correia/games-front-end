import React, { useState } from 'react'
import api from '../services/api'

function CreateGame() {

    const [gameName, setGameName] = useState('')
    const [gameDescription, setGameDescription] = useState('')
    const [gameProducer, setGameProducer] = useState('')
    const [gameGenre, setGameGenre] = useState('')
    const [gameRelaseYear, setGameRelaseYear] = useState('')
    const [gameSales, setGameSales] = useState(0)
    const [gameValue, setGameValue] = useState(0)

  function onSubmit(e){
    e.preventDefault();

    const data = {
      name: gameName,
      description: gameDescription,
      genre: gameGenre,
      producer: gameProducer,
      releaseYear: gameRelaseYear,
      sales: gameSales,
      value: gameValue
    }

    console.log(data)
    api.post('/game/insert', data).then(res => {
      console.log(data)
      alert('Jogo inserido com sucesso')
    })
    .catch(e => {
        alert(e.response.data.message);
    })
    }

  return (
    <>
      <div className='form'>
        <form onSubmit={e => onSubmit(e)}>
          <label htmlFor="gameName">Nome</label>
          <br/>
          <input type="text" name="name" id="nameGame" value={gameName} onChange={e => setGameName(e.target.value)}/>
          <br/>
          <label htmlFor="gameDescription">Descrição</label>
          <br/>
          <input type="text" name="description" id="gameDescription" value={gameDescription} onChange={e => setGameDescription(e.target.value)}/>
          <br/>
          <label htmlFor="gameProducer">Produtora</label>
          <br/>
          <input type="text" name="producer" id="gameProducer" value={gameProducer} onChange={e => setGameProducer(e.target.value)}/>
          <br/>
          <label htmlFor="gameGenre">Gênero</label>
          <br/>
          <input type="text" name="genre" id="gameGenre" value={gameGenre} onChange={e => setGameGenre(e.target.value)}/>
          <br/>
          <label htmlFor="gameRelaseYear">Ano de Lançamento</label>
          <br/>
          <input type="text" name="relase" id="gameRelaseYear" value={gameRelaseYear} onChange={e => setGameRelaseYear(e.target.value)}/>
          <br/>
          <label htmlFor="gameValue">Quantidade de vendas</label>
          <br/>
          <input type="number" name="value" id="gameSales" value={gameSales} onChange={e => setGameSales(e.target.value)}/>
          <br/>
          <label htmlFor="gameValue">Preço</label>
          <br/>
          <input type="number" name="value" id="gameValue" value={gameValue} onChange={e => setGameValue(e.target.value)}/>
          <br/>
          <input type="submit"/>
        </form>
      </div>
    </>
  )
}

export default CreateGame