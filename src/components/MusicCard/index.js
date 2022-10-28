import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MusicData } from "./MusicData";
import axios from "axios";

const Wrapper = styled.div`
  margin: 30px;
  padding-left: 20px;

  .title {
    margin-left: 40px;
    font-family: "Quicksand";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
    color: #efeee0;
}
 
  .contain {
    display: flex;
    justify-content: space-between;
    overflow-y: hidden;
    overflow-x: auto;
    padding: 30px;
    margin-top: 0;
    ::-webkit-scrollbar {
      display: none;
    }
}

  .M_card {
min-width: 153px;
height: 153px;
border-radius: 25px;
    background-color: gray;
    margin-right: 20px;
    transition: transform 2s;
    :hover {
      transform: scale(1.1);
}
}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 25px;
}
  .music_desc {
    font-family: "Quicksand";
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;
    color: #fff;
}
`;

 const base_Url='https://deezerdevs-deezer.p.rapidapi.com/radio/%7Bid%7D';

const NewMusicCard = (props) => {
    const [music, setMusic] = useState([]);



    const FetchMusic =async ()=>{
            const response = await fetch('https://deezerdevs-deezer.p.rapidapi.com/radio/%7Bid%7D');
            const music = await response.json()
            console.log(music);
            setMusic(response.data.result );
            return response;
         
            
            
        }


     useEffect(()=>{
        FetchMusic();
        console.log('this is a music api')


    },[]);




  return (
    <Wrapper>
      <h1 className="title">
        {props.title} {props.caption}
        {props.Radio}
        {props.videos}
      </h1>
      <div className="contain">
        {MusicData.map((items) => (
            <Link>
            <div className="M_card">
            <img src={items.image} alt="artist" />
            <h5 className="music_desc">{items.title}</h5>
      </div>
            </Link>
  
        ))}
    </div>    
    </Wrapper>
  );
};

export default NewMusicCard;
