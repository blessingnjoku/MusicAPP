import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Homeicon, LogoutIcon, MenuIcon, MusiclibaryIcon, ProfileIcon, Radio, VideoIcon } from '../../assets/Icons'
import {AiOutlineClose,AiIcons}from 'react-icons/ai'
import { FaGrHomeRounded} from "react-icons/fa";


const Wrapper = styled.div`


position:fixed;

top: 100px;
left:0;
.menu_icon {
  display:none;
  @media screen and (max-width:468px){
    display:inline;
  position:absolute;
  top:30px;
  left:20px;
  
    
  }
 
  
}

.container{
  height:100vh;
  width: 100px;
  background: #1D2123;
 text-align:center;
padding-left:20px;
@media screen and (max-width: 468px) {
  height: 100%;
  width: 340px;
  position: fixed;
  z-index: 1;
  left: -100%;
  background-color: #1D2123;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  

}
a{
  text-decoration:none;

}
.menu_icon_items{
display:flex;
align-items:center;
height: 60px;
margin-bottom:20px;


}
.close{
  display:none;
  @media screen and (max-width: 468px) {
    display:block;
    color:#fff;
    
  }
}



.icon_box1{
  background: #1A1E1F;
border-radius: 32px;
width: 52px;
height: 230px;
display: flex;
justify-content:space-around;
flex-direction:column;
align-items:center;
text-align:center;
background: #1A1E1F;
border-radius: 32px;

@media screen and (max-width:468px){
  width:200px;
  height:350px;
  padding: 0 20px ;
  background: none;
  display: flex;
justify-content:space-around;
flex-direction:column; 
align-items:flex-start;
 
  
}






}

.icon_box2{
display: flex;
justify-content:space-around;
flex-direction:column;
align-items:center;
text-align:center;
width: 52px;
height: 127px;
background: #1A1E1F;
border-radius: 32px;
margin-top:20px;
@media screen and (max-width:468px){
  width:200px;
  margin-top:0px;
  padding: 20px;
  background: none;
  display: flex;
justify-content:space-around;
flex-direction:column; 
align-items:flex-start;
 
  
}

 
}

.menu_text{
  display:none;
  font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 20px;
color: rgba(239, 238, 224, 0.25);

  @media screen  and (max-width:468px){
    text-align:center;
    display: block;
    margin-left:20px;

 }
  
}

  
}

.container.active{
  height: 100%;
  /* width: 0; */
  position: fixed;
  z-index: 1;
  top: 0;
  background-color: #1D2123;
  overflow-x: hidden;
  transition: 350ms;
  padding-top: 60px;
  left:0;
  
}


`

function SideBar() {

//  function to toggle the sidebar
  const [openNav, setOpenNav]= useState(false);

  const ShowMenu=()=>{ setOpenNav(!openNav)}
 



  return (

    <Wrapper >

    <div className='menu_icon' onClick={ShowMenu}>
    <MenuIcon/>
    

    </div>
   
   <div className= {openNav ? 'container active': 'container'} >
   <span className='close'><AiOutlineClose /></span>
  <div className='icon_box1'>
  <Link to='/' className='menu_icon_items'><Homeicon/><span className='menu_text'>Home</span></Link>
   <Link to='/collection' className='menu_icon_items'> <MusiclibaryIcon/><span className='menu_text'>My collection</span></Link>
   <Link to='/' className='menu_icon_items'> <Radio/><span className='menu_text'>Radio</span></Link>
   <Link to='/' className='menu_icon_items'>  <VideoIcon/><span className='menu_text'>Music Video</span></Link>
  </div>
   
   <div className='icon_box2'>
   <Link to='/' className='menu_icon_items'> <ProfileIcon/><span className='menu_text'>Profile</span></Link>
   <Link to='/' className='menu_icon_items'> <LogoutIcon/><span className='menu_text'>Logout</span></Link>
   </div>
   

    </div>


    </Wrapper>
  )
}

export default SideBar;