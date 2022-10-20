import React from 'react'
import {topimg1} from '../../../assets/images/index'
import { TopChartData } from './TopChartData';
// styled component
import styled from 'styled-components';
import { OpenHeart } from '../Svgs';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  background-color: #1D2123;
  a{
    text-decoration:none;
    
  }

.heading{
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 700;
   font-size: 24px;
  line-height: 120%;
  color: #EFEEE0;
  margin-top:20px;
  margin-bottom:20px;
}

.contain{
    display: flex;
    flex-direction:column;
    height: 300px;
    overflow-y:scroll;
    overflow-x:hidden;

    @media screen and (max-width: 468px) {
        width:390px;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        row-gap:2;
        overflow-y:hidden;
        overflow-x:scroll;
      
        
        
       }
   
    
    
    .Top_chart_card{
        width: 417px;
       height: 96px;
       background: #1A1E1F;
       border-radius: 20px;
       padding:10px 20px;
       display: flex;
       justify-content: space-between;
       margin-bottom:20px;
       @media screen and (max-width: 468px) {
        display: flex;
        flex-direction:column;
        margin-right:10px;
        padding:20px;
      
        height: 200px;
      
     
        
        
       }
 
       
   
    

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
       margin-top:20px;
      
     
     
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
    <h1 className='heading'>Top Charts</h1>
    {/* cards */}
    <div className='contain'>
    {
        TopChartData.map((data)=>(
        <div className='Top_chart_card' key={data.id}>
        <Link>
        <div className='img_box'>
        <img src={data.image} alt='music card'/>
    </div>
        </Link>
     
    
    <div style={{flex:'1', marginLeft:'10px'}}>

       <Link>
       <h6 className='music_genre'>{data.heading}</h6>
        <p className='sub_title'>{data.desc}</p>
        <p className='duration' style={{color:'#ffff', marginTop:'5px'}}>{data.time}</p>
       </Link>
    </div>
  
    <span className='open_heart_svg'><OpenHeart/></span>

    </div>


    ))}
   

    </div>

    </Wrapper>
  )
}

export default TopChart;