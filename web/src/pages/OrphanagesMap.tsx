import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowLeft } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import '../styles/pages/orphanages-map.css';

import mapMarkerImg from '../images/map-marker.svg';

function OrphanagesMap(){
    return (
        <div id="page-map">
            <aside>
                <header>
                    <Link to='/' className='back-prevpage-button'>
                        <FiArrowLeft size={26} color='#000' />
                    </Link>

                    <img src={mapMarkerImg} alt="Happy"/>
                
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Mossoró</strong>
                    <span>Rio Grande do Norte</span>
                </footer>
            </aside>

            <Map
                center={[-5.1880467,-37.3475527]}
                zoom={14}
                style={{ width: '100%', height: '100%' }}
            >
                {/* <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png' /> */}

                <TileLayer 
                    url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
            </Map> 

            <Link to='' className='create-orphanages'>
                <FiPlus size={36} color='#FFF' />
            </Link>
        </div>
    );
}

export default OrphanagesMap;