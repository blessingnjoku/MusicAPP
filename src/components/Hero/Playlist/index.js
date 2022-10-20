import React from 'react'
import styled, { keyframes } from 'styled-components';
import { HeartSvg, HeroSvg } from '../Svgs';
import heroimg from '../../../assets/images/heroimg.png'
import { circle1, circle2, circle3, circle4, circle5, Vector1 } from '../../../assets/images';

import { fadeIn } from 'react-animations'



const Wrapper = styled.div`
    /* @media screen and (max-width: 468px){
        width:100%;
        
       } */

.playList_card{
    width: 100%;
max-width: 686px;
height: 373px;
left: 0px;
top: 0px;
background: #609EAF;
border-radius: 40px;
overflow:hidden;
display:flex;
justify-content: space-between;
    align-content:space-between;
    /* position:relative; */
    @media screen and (max-width: 468px){
        width: max-content;
        
        
    }

.hero_text_box{
   
    padding:0 25px 25px 25px;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-content:space-around;



    
    h6{
    font-family: 'Quicksand';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;

color: #FFFFFF;
    }
h3{
    font-family: 'Quicksand';
font-style: normal;
font-weight: 700;
font-size: 35px;
line-height: 40px;
color: #FFFFFF;
margin-bottom:10px;

}
p{
    
    font-family: 'Quicksand';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;

color: #FFFFFF;
}

.user_image_box{
    width:auto;

    position:relative;

  
    .user_image{
        width:50px;
        height: 50px;
        border-radius:50%;
        position:absolute;
      
    }
}
   
}

.image_box{
  
   background-color:transparent;
   z-index: 100;
    position:relative;
    width:100%;
.herosvg{
    position:absolute;
    top: 0;
 right: -0;
 z-index: -1;
}

}
.heroimg{
    z-index: 1000;
    @media screen and (max-width: 468px){
        display:none;
        
    }
}
img{
    width: 100%;
    height: 100%;
    object-fit: cover;

}
}
.user_likes{
 width: 100px;
    /* background-color:pink; */
        position:absolute;
        /* right:0px; */
         left:90px;
         top:15px;
      span{
    font-family: 'Quicksand';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;

color: #FFFFFF;
         }

    }


`

const Playlist =()=> {
  return (
    <Wrapper>
      <div className='playList_card'>
      <div className='hero_text_box'>
      <h6>Currated Playlist</h6>
      <div style={{width:'300px'}}>
      <h3>R&B Hits</h3>
      <p>All mine, Lie again, Petty call me everyday,
       Out of time, No love, Bad habit,
       and so much more</p>
      </div>
  
       <div style={{display:'flex'}} >
       <div className='user_image_box'>
       <img src={circle1}  alt="User" className='user_image' />
       <img src={circle2}  alt="User" className='user_image' />
       <img src={circle3}  alt="User" className='user_image' style={{marginLeft:'15px'}}/>
       <img src={circle4}  alt="User" className='user_image'  style={{marginLeft:'20px'}}/>
       <img src={circle5} alt="User" className='user_image' style={{marginLeft:'30px'}}/>
       <div style={{}} className="user_likes"><span><HeartSvg/><span style={{marginLeft:'10px'}}>350k Likes</span></span></div>
       </div>
      
       </div> 
      </div>

      <div className='image_box'>
      <HeroSvg herosvg="herosvg"/>
      <img src={heroimg} alt='artist' className='heroimg'/>
      
      </div>
      
      
      
    


      </div>

    </Wrapper>
  )
}

export default Playlist;