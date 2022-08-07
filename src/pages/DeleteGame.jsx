import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import api from '../services/api'
import './styles/styles.css'

const DeleteGame = () => {

  const [listGames, setListGames] = useState([]);

  useEffect(() => {

    api.get('/game/find').then(res => {
      setListGames(res.data)
    }).catch(() => {
      alert('e.response.data.message');
    })

  }, []);

  function deleteGames(id){
    api.delete(`/game/delete/${id}`).then(res => {
      alert('Jogo excluido com sucesso')
    })
    .catch(e => {
        alert(e.response.data.message);
    })
    }


  return (
    <>
      <div className="list">
      <h2>Lista de Jogos</h2>
      <ul>
      {
            listGames.map((game, i) => {
                return <div className="listGames" key={i}>
                    <li>{`Jogo: ${game.name}, valor: ${game.value}.`}</li>
                    <div className='btn'>
                      <button onClick={e => deleteGames(game._id)}>Deletar</button>
                    </div>
                    
                </div> 
            })
        }
      </ul>
       
      </div>
    </>
  )
}

export default DeleteGame