import React from 'react'
import styled from 'styled-components'
import share from "../images/share.svg"
import more from "../images/more.svg"


const NavContainer = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 50px 20% 20px;
    @media(max-width: 441px){
        padding: 50px 5% 20px;
    }
`
const NavBtn = styled.div`
    width: 40px;
    height: 40px;
    cursor: pointer;
    background-image: url(${share});
    @media(max-width: 441px){
        background-image: url(${more});
    }
`
// const NavBtnImage = styled.img`
//     width: 100%;
//     object-fit: contain;
// `

export default function Nav() {
  return (
    <NavContainer>
        <NavBtn>
            {/* <img alt="share" src={share} /> */}
        </NavBtn>
    </NavContainer>
  )
}
