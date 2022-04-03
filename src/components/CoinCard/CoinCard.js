import React from 'react';
import { Link } from 'react-router-dom';

const CoinCard = ({ coin }) => {
    return (
        <div className='shadow-lg rounded-2xl w-[250px] p-4 bg-white'>
            <Link to={`/coin-details/${coin.id}`}>
                <div className='flex justify-between items-center gap-4'>
                    <div className='flex-shrink-0'>
                        <div>
                            <img className='mx-auto object-cover h-16 w-16 rounded-full' src={coin.image} alt="" />
                        </div>
                    </div>
                    <div className='flex flex-col justify-end'>
                        <span className='text-gray-600 font-medium'>{coin.name}</span>
                        <span className='text-gray-400 text-xs'>{coin.symbol}</span>
                    </div>
                </div>

            </Link>
        </div>
    );
};

export default CoinCard;