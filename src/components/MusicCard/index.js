import React from "react";
import styled from "styled-components";
import { MusicData } from "./MusicData";

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

const NewMusicCard = (props) => {
  return (
    <Wrapper>
      <h1 className="title">
        {props.title} {props.caption}
        {props.Radio}
        {props.videos}
      </h1>
      <div className="contain">
        {MusicData.map((items) => (
          <div className="M_card">
            <img src={items.image} alt="artist" />
            <h5 className="music_desc">{items.title}</h5>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default NewMusicCard;
