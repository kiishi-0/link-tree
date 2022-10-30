import React from 'react'
import styled from 'styled-components'
import github from '../images/github.jpg'
import slack from "../images/slack.jpg"


const BottomLinkDivContainer = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 25px 0;
`
const Button = styled.a`
    text-decoration: none;
    width: 25px;
    margin: 0 25px;
`
const ButtonImage = styled.img`
    width: 100%;
`

export default function BottomLinkDiv() {
  return (
    <BottomLinkDivContainer>
        <Button href="#">
            <ButtonImage src={github} />
        </Button>
        <Button href="#">
            <ButtonImage src={slack} />
        </Button>
    </BottomLinkDivContainer>
  )
}
