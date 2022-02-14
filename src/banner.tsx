import react from 'react';
import logo from './logo.svg';
import './App.css';
import image from './bg.jpg';
import nft from './nft.gif';

function Banner() {
    return (
        <div className="Banner">
            <img src={image} alt="" />
            <div className='nft'>
                <img src={nft} alt="" />
            </div>
            <div className='button'>
                <button>Connect wallet</button>
            </div>
        </div>
    )
}

export default Banner