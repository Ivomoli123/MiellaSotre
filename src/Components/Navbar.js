import React, { useState } from 'react';
import Logo from '../assets/miellalogo.jpg';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';

function Navbar() {
  const [openLinks, setOpenLinks] = useState(true);

  const toggleBar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="Miella Logo" />
       
      </div>
      <div className="rightSide">
        <Link to="/home">Page d'accueil</Link>
        <Link to="/products">Produits</Link>
        <Link to="/Contact">Contact</Link>
        <button onClick={toggleBar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;

