import React from 'react';
import ReactDOM from 'react-dom';
import CalendarApp from './CalendarApp';
import './styles.css';
require('dotenv').config();

console.log(process.env.REACT_APP_API_URL)

ReactDOM.render(
  <React.Fragment>
    <CalendarApp/>
  </React.Fragment>,
  document.getElementById('root')
);
