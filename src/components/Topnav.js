import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Icons, { Logo, MenuIcon, Serachicon } from '../assets/Icons'
import SideBar from './Sidebar'

const Wrapper = styled.div`
position:fixed;
top: 0;
margin-bottom:80px;
z-index: 1000;
width:100vw;
padding: 25px 10px 0 10px;
background: #1D2123;

@media screen and (max-width:468px){
    display: flex;
    flex-direction:row;
   
    
  }

.logo{
height: 60px;
padding-left:20px;
margin-bottom:20px;
@media screen and (max-width:468px){
  margin-left: 35px;
  padding:0;
  
}
}


.search_container{  
position: absolute;
width: auto;
height: 60px;
left: 96px;
top: 0px;
background: #1D2123;
padding-top: 20px;
padding-left:15px;
outline:none;


.search_box{
  width: 200px;
  /* height: 50px; */
  display: flex;
  flex-direction:row;
  background: #1D2123;
  padding:10px;
  @media screen and (max-width:468px){
  float:right;
  
}


  .search_input{

    width: 100%;
  background: #1D2123;;
  padding-left:8px;
  border:none;
  
  @media screen and (max-width:468px) {

    /* display:none; */

    
  }
  
}

.search_input:focus{
  border:none;
  color:#fff;

    outline: none;

}
.search_input::placeholder{
  font-weight:600;
  font-size:14px;
  line-height: 18px;
  color: #FFFFFF40;

  @media screen and (max-width:468px){
  color: #1D2123
   
      
    }
    
  }
  
}

}

`


const Topnav =(props)=> { 
  return (
    <Wrapper>
     {/* <div className='menu_icon' onClick={props.onClick}>

      <MenuIcon/>

    </div> */}
    
    <div className='logo'>
    <Link to='/'><Logo/></Link>
    </div>
    
    <div className= 'search_container' >
    <div className='search_box'>
    <Serachicon  className="search_icon"/>
      <input type='text' placeholder='Search artist' className='search_input'/>
    </div>
    </div>
   
    </Wrapper>
  )
}

export default Topnav;