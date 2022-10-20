import React from 'react'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Layout from './pages/Layout';
import MusicCharts from './pages/MusicCharts';
import MusicCollection from './pages/MusicCollection';

function App() {
  return (
    <BrowserRouter>
    
    <Layout/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/chart' element={<MusicCharts/>}/>
        <Route path='/collection' element={<MusicCollection/>}/>


      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
