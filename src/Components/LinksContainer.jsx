import React from 'react'
import styled from 'styled-components'
import LinkBtn from './LinkBtn'

const Container = styled.div`
    display: flex;
    width: 100%;
    padding: 0 10%;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    @media(max-width: 441px){
        padding: 0 5%;
    }
`


export default function LinksContainer() {
  return (
    <Container>
        <LinkBtn text="Twitter Link"></LinkBtn>
        <LinkBtn text="Twitter Link"></LinkBtn>
        <LinkBtn text="Twitter Link"></LinkBtn>
        <LinkBtn text="Twitter Link"></LinkBtn>
        <LinkBtn text="Twitter Link"></LinkBtn>
    </Container>
  )
}
