import React, {useParams}from 'react'
import styled from 'styled-components';
import { TopChartData } from '../components/Hero/TopChart.js/TopChartData';
import {Leadimage} from '../assets/images/index'
import { OpenHeart } from '../components/Hero/Svgs';
import { Link } from 'react-router-dom';


const Wrapper = styled.div`

.box_view{
    width:100vw;
    height: 100vh;
    /* background-color:#1A1E1F!important; */
  background:url('https://unsplash.com/photos/sq71uYpQjTs/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY2OTc0ODI1&force=true');

  background-size:cover;
  background-repeat:no-repeat;
    /* position: relative; */
    img{
    width: 100%;
    height:100%;
    object-fit:cover;
    /* z-index:-1; */
    

}
.inner_box{
  display:flex;
  justify-content:space-between;
  flex-wrap:wrap;
  
  width:80%;
  min-width: 400px;
  height:300px;
  padding:20px;
  margin-top:80px;
  margin-left: 90px;
  position:absolute;
 
  .inner_image{
  width: 284px;
  height: 288.97px;
  border-radius: 35.1703px;

  }

}
.inner_content{
  width:50%;
  padding: 20px;
  padding-top:150px;
  display:flex;
  flex-direction: column;
  align-content:space-between;
  background-color:red;


  h3{
    font-family: 'Quicksand';
font-style: normal;
font-weight: 700;
font-size: 35px;
line-height: 120%;
color: #A4C7C6;
line-height:2;
  }
  p{
  padding:0 20px 0 0;
  font-family: 'Quicksand';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 120%;
color: #EFEEE0;
line-height:2;

  }

  .play{
    display: flex;
flex-direction: row;
align-items: center;
padding: 10px;
gap: 10px;
width: 87px;
height: 36px;
background: rgba(255, 255, 255, 0.07);
backdrop-filter: blur(5px);
border-radius: 32px;
margin-right:10px;
border:0;



  }
  .all_collection{
    display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px;
gap: 10px;
border:0;
width: 151px;
height: 36px;
margin-right:10px;
background: rgba(255, 255, 255, 0.07);
backdrop-filter: blur(5px);
border-radius: 32px;

  }
  .play_box{
    display:flex;
  
    
    .love_icon{
      padding: 10px ;
     width: 36px;
    height: 36px;
    background: rgba(255, 255, 255, 0.07);
   backdrop-filter: blur(5px);
   border-radius: 32px;
   
    }
  }
}

.overlay{
    position:absolute;
    width: 100%;
    min-height: 100%;
    background-color:#1A1E1F;
    opacity:0.75;

    /* background-color:red; */
    z-index:-0.1;
   
}
}
.album_cart{
  position:absolute;
  bottom: 0;
  left:80px;

}


`



const MusicCharts =({image, headings, desc})=> {

    // let {id} = useParams();
  return (
    <Wrapper>
    <div className='box_view'>
    {/* <img src={Leadimage} alt='imageBackground'/> */}
    
    <div className='overlay'></div>
    <div className='inner_box'>
      <div className='innner_image'><img src={Leadimage} style={{borderRadius:'35.1703px'}} alt="album-card"/></div>
      <div className='inner_content'>
        <h3>Tomorrow’s tunes</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
        <div className='play_box'>
        <button className='play'>play</button> <button className='all_collection'>collection</button>
       <Link className='love_icon'> <span ><OpenHeart /></span></Link>

        </div>
       
      </div>
      
    </div>

    <div className='album_cart'>
    <div>1
    <div><img src=''/><span className='likes'></span></div>
    <p className='album_title'>Let me love you ~ Krisx</p>
    <p className='album_category'>Single</p>
    <p className='time'>4:17</p>
    <div>
      <span>1</span>
      <span>2</span>
      <span>3</span>

    </div>
    


    
    </div>
    <div>1</div>
    <div>1</div>
    <div>1</div>


    </div>
    
    </div>
   

     </Wrapper>
  )
}

export default MusicCharts