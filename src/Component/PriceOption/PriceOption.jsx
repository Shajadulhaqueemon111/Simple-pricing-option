import React from 'react';
import PropTypes from 'prop-types';

import Feature from '../Feature/Feature';
const PriceOption = ({option}) => {
    const {name,price,features}=option
    return (
        <div className='bg-blue-300 p-10 rounded-md flex flex-col'>
         <h2 className='text-2xl name mb-4'> {name}</h2>
         <h2 className='text-xl mb-3'>price:{price}</h2>
         
       <div className='flex-grow'> 
       {
            features.map(feature=><Feature key={feature.id} feature={feature}></Feature>)
         }
       </div>
         <button className='mt-12 bg-green-600 w-full p-2 font-bold rounded-md hover:bg-yellow-500'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option:PropTypes.object
};

export default PriceOption;