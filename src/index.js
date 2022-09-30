import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Youtube from './service/youtube';

const root = ReactDOM.createRoot(document.getElementById('root'));
const httpClient = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: process.env.REACT_APP_YOUTUBE_API_KEY
  }
})
const youtube = new Youtube(httpClient);
root.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>
);
