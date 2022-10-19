import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`

position: absolute;
width: 100vw;
height: 100px;
left: 0px;
bottom: 10px;
overflow-x: scroll;
background:gray;
opacity:0.2;

`

const LargeRow =( )=> {
  return (
    <Wrapper>
        <div>
            the player
        </div>
    </Wrapper>
  )
}

export default LargeRow