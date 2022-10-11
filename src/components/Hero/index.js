import React from 'react'
import Playlist from './Playlist';
import TopChart from './TopChart.js';
import styled from 'styled-components';
import Topnav from '../Topnav';
import Rows from '../MusicCard';

// styled component

const Wrapper =styled.div`
  background: #1D2123;
  padding-left:20px;
width:100vmax;
height: 100vh;
position:absolute;
top:0;
z-index:-1000;
.container{
    display:flex;
    justify-content:space-evenly;
    align-content:space-between;
    flex-wrap:wrap;
    margin-top:100px;
    


}

`




const Hero = ()=> {
  return (
    <Wrapper >
    <div className="container">
    <Playlist/>
    <TopChart/>
    </div>
    <Rows/>
    Hero
    </Wrapper>
  )
}

export default Hero;