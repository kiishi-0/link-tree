import React from 'react'
import styled from 'styled-components'
import zuri from '../images/zuri.jpg'
import I4G from '../images/I4G.jpg'


const FooterContainer = styled.footer`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin: 100px 0 0;
    padding: 80px 10% 50px;
    @media(max-width: 441px){
        flex-direction: column;
        align-items: flex-start;
    }
`
const Btn = styled.a`
    text-decoration: none;
    color: #667085;
    font-size: 16px;
    width: auto;
    @media(max-width: 850px){
        margin: 20px 0;
        width: 20%;
    }
`
const BtnImage = styled.img`
    width: 200px;
    @media(max-width: 850px){
        width: 100%;
    }
`

export default function Footer() {
  return (
    <FooterContainer>
        
        <Btn>
            <BtnImage src={zuri} alt="Footer Link" />
        </Btn>
        <Btn>HNG Internship 9 Frontend Task</Btn>
        <Btn>
            <BtnImage src={I4G} alt="Footer Link" />
        </Btn>
    </FooterContainer>
  )
}
