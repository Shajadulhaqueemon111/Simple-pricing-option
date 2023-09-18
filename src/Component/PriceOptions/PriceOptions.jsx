import React from 'react';
import PropTypes from 'prop-types';
import PriceOption from '../../Component/PriceOption/PriceOption'
const PriceOptions = () => {
    // Define the PriceOption array
    const PriceOptionsData = [
      {
        "id": 1,
        "name": "Basic Membership",
        "price": "$29.99 per month",
        "features": [
          "Access to basic gym facilities",
          "Unlimited use of cardio equipment",
          "Locker room access"
        ]
      },
      {
        "id": 2,
        "name": "Silver Membership",
        "price": "$49.99 per month",
        "features": [
          "Access to basic and advanced gym facilities",
          "Unlimited use of cardio equipment",
          "Locker room access",
          "Group fitness classes (limited)"
        ]
      },
      {
        "id": 3,
        "name": "Gold Membership",
        "price": "$79.99 per month",
        "features": [
          "Access to all gym facilities",
          "Unlimited use of cardio equipment",
          "Locker room access",
          "Unlimited group fitness classes",
          "Personal trainer consultation (monthly)"
        ]
      },
      {
        "id": 4,
        "name": "Platinum Membership",
        "price": "$99.99 per month",
        "features": [
          "Access to all gym facilities",
          "Unlimited use of cardio equipment",
          "Locker room access",
          "Unlimited group fitness classes",
          "Personal trainer consultation (weekly)",
          "Sauna and spa access"
        ]
      }
    ];
  
    return (
      <div className='mr-12'>
        <h2 className="text-5xl mb-6">Best prices in town</h2>
       <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
       {
          PriceOptionsData.map(option => (
            <PriceOption key={option.id} option={option}></PriceOption>
          ))
        }
       </div>
      </div>
    );
  };
  
  PriceOptions.propTypes = {};
  
  export default PriceOptions;