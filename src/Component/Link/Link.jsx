import React from 'react';
import PropTypes from 'prop-types';

const Link = ({route})=> {
    return (
        <div className='mr-6 hover:bg-yellow-500 px-6'>
        <a href={route.path}>{route.name}</a>
        </div>
    );
};

Link.propTypes = {
    
};

export default Link;