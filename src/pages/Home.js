import React from 'react'
import SideBar from '../components/Sidebar/'
import Topnav from '../components/Topnav'
import styled from 'styled-components'
import Hero from '../components/Hero'

const Wrapper =styled.div`
/* background: #1D2123; */
.box{
    display:flex;
}


`



function Home() {
  return (
    <Wrapper>
     <Topnav/>
     <div className='box'>
     <SideBar/>
       <Hero/>
     </div>
     
    </Wrapper>
  )
}

export default Home