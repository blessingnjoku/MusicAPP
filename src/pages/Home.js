import React from 'react'
import styled from 'styled-components'
import Hero from '../components/Hero'
import Layout from './Layout'

const Wrapper = styled.div`
width: 100vw;
height: 100vh;
background: #1D2123;
overflow-x:hidden;
display:flex;
justify-content:center;
align-content:center;


`



function Home() {
  return (
    <Wrapper>
       <Hero/>


    </Wrapper>
  )
    
}

export default Home