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
    const [gameFrontCover, setGameFrontCover] = useState('')

  function onSubmit(e){
    e.preventDefault();

    const data = {
      name: gameName,
      description: gameDescription,
      frontCover: gameFrontCover,
      genre: gameGenre,
      producer: gameProducer,
      releaseYear: gameRelaseYear,
      sales: gameSales,
      value: gameValue,
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
      <h2>Cadastrar Jogo</h2>
        <form onSubmit={e => onSubmit(e)}>
          <label htmlFor="gameName">Nome</label>
          <br/>
          <input type="text" name="name" id="nameGame" value={gameName} onChange={e => setGameName(e.target.value)}/>
          <br/>
          <label htmlFor="gameDescription">Descrição</label>
          <br/>
          <textarea name="description" id="gameDescription" cols="30" rows="5" value={gameDescription} onChange={e => setGameDescription(e.target.value)}></textarea>
          <br/>
          <label htmlFor="gameFrontCover">Capa</label>
          <br/>
          <input type="text" name="gameFrontCover" id="gameFrontCover" value={gameFrontCover} onChange={e => setGameFrontCover(e.target.value)} placeholder='URL da imagem'/>
          <br />
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
          <br />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </>
  )
}

export default CreateGame