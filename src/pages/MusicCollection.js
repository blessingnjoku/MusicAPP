import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { BigBtn, SmallBtn } from '../components/Buttons'
import LargeRow from '../components/LargeRow'
import NewMusicCard from '../components/MusicCard'


const Wrapper =styled.div`
  background: #1D2123;
  width:100%;
  height: 100vh;
  padding:20px;
.btns{
    margin-top:80px;
    padding-left:75px;

}
.container{
  padding:20px;
  /* margin-left:50px; */
  

/* margin-left:50px; */
background: #1D2123;

}


`




function MusicCollection() {
  return (
    <Wrapper >
        <div className='container'>
        <div className='btns'>
      
         <Link className=''><BigBtn btnName='My collection'/></Link> 
        <Link><SmallBtn buttonDesc="likes"/></Link>
  
   
        </div>
        <NewMusicCard/>
        <LargeRow/>

        </div>
    </Wrapper>
  )
}

export default MusicCollection