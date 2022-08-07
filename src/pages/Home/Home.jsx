import { useState,  useEffect } from 'react'
import api from '../../services/api'
import List from '../../components/List/List';
import '../Home/styles.css'

const Home = () => {

  const [games, setGames] = useState([]);

  useEffect(() => {
    api.get('/game/find').then(res => {
      setGames(res.data)
    }).catch(() => {
      alert('e.response.data.message');
    })
  },[])


  return (
      <>

        <div className='destaque'>

          <h3>Mais Populares</h3>

          <List data={games}/>

        </div> 
      
      </>

      

      
     

  )
}

export default Home



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
