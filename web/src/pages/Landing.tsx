import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import '../styles/pages/landing.css';

import logoImg from '../images/logo.svg';

function Landing() {
    return (
      <div id="page-landing">
          <div className="content-wrapper">
              <img src={logoImg} alt="HappyLogo"/>
  
              <main>
                <h1>Leve felicidade para o mundo</h1>
                <p>Visite orfanatos e mude o dia de muitas crianças</p>
              </main>
  
              <div className='location'>
                <strong>Mossoró</strong>
                <span>Rio Grande do Norte</span>
              </div>
              
              <Link to='/app' className="enter-app">
                <FiArrowRight size={30} color={'rgba(0,0,0)'}/>
              </Link>
          </div>
      </div>
    );
  }

export default Landing;