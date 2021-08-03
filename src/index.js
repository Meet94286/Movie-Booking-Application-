import { GridList, ReleasedMovies } from './screens/home/Home';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './screens/home/Home';

ReactDOM.render(
  <div>
    <Home/>
    <GridList/>
    <div className="flex-container">
      <div className="left">
        <ReleasedMovies/>
      </div>
      <div className="right">
        </div>
    </div>
  </div>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

