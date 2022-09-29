import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Youtube from './service/youtube';

const root = ReactDOM.createRoot(document.getElementById('root'));
const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);
root.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>
);
