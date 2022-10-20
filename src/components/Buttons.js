import styled from "styled-components"

const Button = styled.button`
width: 120px;
height: 37px;
background: #FACD66;
border-radius: 27px;
cursor:pointer;
border:none;
font-family: 'Quicksand';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 120%;
color:#1D2123;
margin-right:10px;

`

const SmallButton =styled.button`
width: 84px;
height: 37px;
opacity: 0.25;
background-color:#1A1E1F;
color:#EFEEE0 ;
border: 1px solid #EFEEE0;
border-radius: 27px;
font-family: 'Quicksand';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 120%;
cursor:pointer;


`

export const BigBtn =(props)=>{
    return(
        <>
    <Button>{props.btnName}</Button>
        </>
       
    )
}

export const SmallBtn =(props)=>{
    return(
        <>
 <SmallButton>{props.buttonDesc}</SmallButton>
        </>
       
    )
}