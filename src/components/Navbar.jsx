import React from 'react'
import {BiSearchAlt2} from "react-icons/bi"
import {GiConsoleController} from 'react-icons/gi'
import {Link} from 'react-router-dom'
import '../components/navbar.css'


const Navbar = () => {
  return (
    <nav id="navbar">

        <ul>
            <li><Link to='/'>Todos os Jogos</Link></li>
            <li><Link to='/create-game'>Cadastrar Jogo</Link></li>
            <li><Link to='/update-game'>Atualizar Jogo</Link></li>
            <li><Link to='/delete-game'>Deletar Jogo</Link></li>
        </ul>

        {/* <form action="">
            <input type="text" placeholder='nome do jogo...'/>
            <button type="submit"><BiSearchAlt2/></button>
        </form> */}
      </nav>
  )
}

export default Navbar