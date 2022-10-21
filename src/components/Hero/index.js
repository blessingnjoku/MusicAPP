import React from "react";
import Playlist from "./Playlist";
import TopChart from "./TopChart.js";
import styled from "styled-components";

import NewMusicCard from "../MusicCard";
import LargeRow from "../LargeRow";
import { primaryColor } from "../Colors";

// styled component

const Wrapper = styled.div`
  background: #1d2123;
  width: 100%;
  height: 100%;
  padding: 20px;
  overflow-y: auto;

  .container {
    display: flex;
    justify-content: space-evenly;
    align-content: space-between;
    flex-wrap: wrap;
    margin-top: 90px;
    padding-left: 20px;
    padding-bottom: 20px;
    width: 100%;

    @media screen and (max-width: 468px) {
      display: flex;
      flex-direction: column;
    }
  }
  .cards {
    overflow-y: scroll;
    overflow-x: hidden;
    height: 300px;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

const Hero = () => {
  return (
    <Wrapper>
      <div className="container">
        <Playlist />
        <TopChart />
      </div>
      <div className="cards">
        <NewMusicCard title="New Release" />
        <NewMusicCard caption="Recently played" />
        <NewMusicCard radio="Radio" />
        <NewMusicCard videos="Music Videos" />
      </div>

      <LargeRow />
    </Wrapper>
  );
};

export default Hero;
