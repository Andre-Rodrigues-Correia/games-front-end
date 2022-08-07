import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import api from '../services/api'
import './styles/styles.css'

const UpdateGame = () => {

  const [game, setGame] = useState(-1);
  const [listGames, setListGames] = useState([]);
  const [gameName, setGameName] = useState('')
  const [gameDescription, setGameDescription] = useState('')
  const [gameProducer, setGameProducer] = useState('')
  const [gameGenre, setGameGenre] = useState('')
  const [gameRelaseYear, setGameRelaseYear] = useState('')
  const [gameSales, setGameSales] = useState(0)
  const [gameValue, setGameValue] = useState(0)
  const [gameFrontCover, setGameFrontCover] = useState('')


  useEffect(() => {

    api.get('/game/find').then(res => {
      setListGames(res.data)
    }).catch(() => {
      alert('e.response.data.message');
    })

  }, []);

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
      value: gameValue
    }

    api.put(`/game/update/${game}`, data).then(res => {
      alert('Jogo atualizado com sucesso')
    })
    .catch(e => {
        alert(e.response.data.message);
    })
    }



  return (
    <>
       <form className='form' onSubmit={e => onSubmit(e)}>
                <h2>Atualizar Jogo</h2>

                <select name="games" id="idgame" value={game} onChange={game => setGame(game.target.value)}>
                    <option value={-1}>Selecione um Jogo</option>
                    {listGames.map((game, i) => {
                        return <option value={game._id} key={Number(i)}>{`${game.name}`}</option>
                    })}
                </select>
                <br/>
                <label htmlFor="gameName">Nome</label>
                <br/>
                <input type="text" name="name" id="nameGame" value={gameName} onChange={e => setGameName(e.target.value)}/>
                <br/>
                <label htmlFor="gameDescription">Descrição</label>
                <br/>
                <textarea name="description" id="gameDescription" cols="30" rows="5" onChange={e => setGameDescription(e.target.value)}></textarea>
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
                <label htmlFor="gameSales">Qauntidade de vendas</label>
                <br/>
                <input type="number" name="value" id="gameSales" value={gameSales} onChange={e => setGameSales(e.target.value)}/>
                <br/>
                <label htmlFor="gameValue">Preço</label>
                <br/>
                <input type="number" name="value" id="gameValue" value={gameValue} onChange={e => setGameValue(e.target.value)}/>
                <br/>
                <br />
                <button type="submit">Atualizar</button>
                </form>          
    </>
  )
}

export default UpdateGame