import React from 'react'
import {topimg1} from '../../../assets/images/index'

// styled component
import styled from 'styled-components';
import { OpenHeart } from '../Svgs';

const Wrapper = styled.div`
.heading{
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 700;
   font-size: 24px;
  line-height: 120%;
  color: #EFEEE0;
  margin-bottom:20px;
}

.contain{
    display: flex;
    flex-direction:column;
   
    
    
    .Top_chart_card{
        width: 417px;
       height: 96px;
       background: #1A1E1F;
       border-radius: 20px;
       padding:10px 20px;
       display: flex;
       justify-content: space-between;
       margin-bottom:20px;

    h6{
        width: 144px;
        height: 20px;
       font-family: 'Quicksand';
       font-style: normal;
      font-weight: 400;
      font-size: 17px;
     line-height: 20px;
      color: #FFFFFF
       }
       p{
        font-weight: 400;
       font-size: 12px;
       line-height: 14px;
    color: rgba(255, 255, 255, 0.5)
       }

    .img_box{
        width: 63px;
        height: 63px;
       border-radius: 10px;
       img{
        width: 100%;
        height: 100%;
        border-radius:10px;
       }
    
    }

    .open_heart_svg{
        width: 37px;
        height: 37px;
       border: 1px solid rgba(255, 255, 255, 0.11);
       border-radius:50%;
       text-align:center;
       padding:10px;
     
     
       .openHeart{
        
        

        
       }
    }
    } 
}
`


const TopChart =()=> {
  return (
    <Wrapper> 
    {/* title */}
    <h1 className='heading'>Top Chart</h1>
    {/* cards */}
    <div className='contain'>
    <div className='Top_chart_card'>
    <div className='img_box'>
        <img src={topimg1} alt='music card'/>
    </div>
    <div style={{flex:'1', marginLeft:'10px'}}>
        <h6 className='music_genre'>Golden age of 80s</h6>
        <p className='sub_title'>Sean swadder</p>
        <p className='duration' style={{color:'#ffff', marginTop:'5px'}}>2:34:45</p>
    </div>
    <span className='open_heart_svg'><OpenHeart/></span>

    </div>
    <div className='Top_chart_card'>
    <div className='img_box'>
        <img src={topimg1} alt='music card'/>
    </div>
    <div style={{flex:'1', marginLeft:'10px'}}>
        <h6 className='music_genre'>Golden age of 80s</h6>
        <p className='sub_title'>Sean swadder</p>
        <p className='duration' style={{color:'#ffff', marginTop:'5px'}}>2:34:45</p>
    </div>
    <span className='open_heart_svg'><OpenHeart/></span>

    </div>
    <div className='Top_chart_card'>
    <div className='img_box'>
        <img src={topimg1} alt='music card'/>
    </div>
    <div style={{flex:'1', marginLeft:'10px'}}>
        <h6 className='music_genre'>Golden age of 80s</h6>
        <p className='sub_title'>Sean swadder</p>
        <p className='duration' style={{color:'#ffff', marginTop:'5px'}}>2:34:45</p>
    </div>
    <span className='open_heart_svg'><OpenHeart openHeart='openHeart'/></span>

    </div>

    </div>

    </Wrapper>
  )
}

export default TopChart;