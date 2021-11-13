import React from 'react';
import './styles.css';

const Location = ({weatherData}) => (
  <div className="container">   
      <div className="location">
        <h3>{weatherData.name}</h3>
      </div>
  </div>
)

export default Location;