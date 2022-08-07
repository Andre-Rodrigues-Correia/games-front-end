import { useState,  useEffect } from 'react'
import api from '../../services/api'
import List from '../../components/List/List';
import '../Home/styles.css'
import { render } from 'react-dom';
import Modal from 'react-modal';

Modal.setAppElement('body');

const Home = () => {
  
 
  const [listGames, setListGames] = useState([]);
  const [game, setGame] = useState({})

  const  customStyles  =  { 
    content : {
      position: 'relative',
      margin: 'auto',
      marginTop: '20px',
      backgroundColor: '#F2A71B',
      width: '300px',
    } ,
    game: {
      padding: '10px',
      backgroundColor: "DodgerBlue",
    }
  }; 

  useEffect(() => {

    api.get('/game/find').then(res => {
      setListGames(res.data)
    }).catch(() => {
      alert('e.response.data.message');
    })

  }, []);

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.

  }

  function closeModal() {
    setIsOpen(false);
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
                        <button onClick={() => {
                          setGame(listGames[i]);
                          openModal()
                        }}>Ver informações</button>
                      </div>
                      
                  </div> 
              })
          }
      </ul>
       
      </div>


      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={customStyles}
      >
        

        <div className='game'>
          <h2>Nome:{game.name}</h2>
          <p>
            Descrição: {game.description}
          </p>
          <h4>Gênero: {game.genre}</h4>
          <h4>Produtora: {game.producer}</h4>
          <h4>Lançamento: {game.releaseYear}</h4>
          <h4>Vendas: {game.sales}</h4>
          <h4>Preço: {game.value}</h4>

          <button onClick={closeModal}>close</button>
        </div>
       
      </Modal>

      
      </>
  )
}

export default Home


// genre: String,
//     producer: String,
//     releaseYear: String,
//     sales: Number,
//     value: Number,
/*const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    console.log(topRatedUrl);
    getTopRatedMovies(topRatedUrl);
  }, []);*/ 
