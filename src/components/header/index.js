import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { resources, defaultLng } from '../../i18n';
import './style.css';
import {Menu} from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const useViewport = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return { width };
};
export default function Header() {
  
  const viewPort = useViewport();
  const isMobile = viewPort.width <= 1024;
  const { i18n } = useTranslation();
  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  }
  const checkIfActivePage = (path) => {
    return window.location.pathname === path;
  };
  return (
    <div className="container-fluid d-flex justify-content-center">
    <div id="header" style={{
      width:isMobile?"100%":"80%"
    }} class="d-flex navbar navbar-expand-lg">
    <div class="logo navbar-brand">
      <img alt="logo" src="images/Logo 1.png" />
    </div>
    
    
     {
      isMobile==true?
      <div className="col d-flex justify-content-end">
      <button className="btn mobile" >
      <img src="images/codepen.png"/>
    </button>
    <button class="btn navbar-toggler mobile ml-2" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <Menu style={{
      color:"#FEB705"
    }}/>
      </button>
     </div>:null
  
      }
    
   
   
      <div class="collapse navbar-collapse " id="navbarNavDropdown">
  
   
    <ul class="navbar-nav mr-auto d-flex justify-content-center" id="menu-list">
    <li class="nav-item ">
      <a className={'nav-link ' + (checkIfActivePage('/') ? 'active' : '')}  href="/">Home 
        
      </a>
    </li>
    <li class="nav-item">
      <a class={'nav-link ' + (checkIfActivePage('/about') ? 'active' : '')} href="/about" style={{marginLeft:20}}>About
         <ExpandMoreIcon/>
      </a>
    </li>
    <li class="nav-item">
      <a class={'nav-link ' + (checkIfActivePage('/team') ? 'active' : '')} href="/team">Team</a>
    </li>
    <li class="nav-item">
      <a class={'nav-link ' + (checkIfActivePage('/staking') ? 'active' : '')} href="/staking">Staking  
      <div className="soon">Soon</div>
      </a>
    </li>
    <li class="nav-item">
      <a class={'nav-link ' + (checkIfActivePage('/market-place') ? 'active' : '')} >Marketplace 
      <div className="soon">Soon</div> 
      </a>
    </li>
    <li class="nav-item">
      <a class={'nav-link ' + (checkIfActivePage('/token') ? 'active' : '')} >Token  
      <div className="soon">Soon</div>
      </a>
    </li>
    <li>
      <a class="nav-link" href="https://rise-of-immortals.gitbook.io/rise-of-immortals/rise-of-immortals/what-is-rise-of-immortals">Whitepaper</a>
    </li>
  </ul>

  
    </div>
    {
    isMobile==false?  <button className="btn btn-warning" style={{color:'#000000', fontWeight:500}} id="wallet_btn">Connect to Wallet</button>:null
   }
  </div >
 
    </div>
  );
}
