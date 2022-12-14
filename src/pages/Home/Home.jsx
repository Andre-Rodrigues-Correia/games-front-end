import { useState,  useEffect } from 'react'
import api from '../../services/api'
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
      textAlign: 'start',
      width: '300px',
    },
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
    

  }

  function closeModal() {
    setIsOpen(false);
  }



  return (
      <>

      <div className="list">
        <h2>Lista de Jogos</h2>
        <div>
        {
              listGames.map((game, i) => {
                  return <div className="listGames" key={i}>
                    <div>
                      <img src={game.frontCover ? game.frontCover : '../../public/imagem-indisponível.jpg'} alt="" />
                    </div>
                    <div>
                    <h3>{`Jogo: ${game.name}`}</h3>
                    <h3>{`Valor: R$${game.value}`}</h3>
                      <div className='btn'>
                        <button onClick={() => {
                          setGame(listGames[i]);
                          openModal()
                        }}>Ver informações</button>
                      </div>
                    </div>
                     
                      
                  </div> 
              })
          }
      </div>
       
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

          <button onClick={closeModal}>Fechar</button>
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
