import React from 'react';
import ReactDOM from 'react-dom';
import CalendarApp from './CalendarApp';
import './styles.css'
require('dotenv').config();


ReactDOM.render(
  <React.Fragment>
    <CalendarApp/>
  </React.Fragment>,
  document.getElementById('root')
);
