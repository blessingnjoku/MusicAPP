import React from 'react'
import SideBar from '../components/Sidebar/'
import Topnav from '../components/Topnav'
import styled from 'styled-components'

const Wrapper =styled.div`
background: #1D2123;


`



function Home() {
  return (
    <Wrapper>
     <Topnav/>
     <SideBar/>
        home page
    </Wrapper>
  )
}

export default Home