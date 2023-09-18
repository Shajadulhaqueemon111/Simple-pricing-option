import React from 'react';
import PropTypes from 'prop-types';
import { AiFillCheckCircle } from 'react-icons/ai';
const Feature = ({feature}) => {
    return (
        <div className='text-center mt-3'>
           <h2 className='flex items-center '>< AiFillCheckCircle className='text-green-500'></AiFillCheckCircle>{feature}</h2>
       </div>
    );
};

Feature.propTypes = {
    feature:PropTypes.string
};

export default Feature;