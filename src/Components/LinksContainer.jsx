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
        <LinkBtn text="Twitter Link" id="twitter" btnLink="https://twitter.com/kiishioluwa"></LinkBtn>
        <LinkBtn text="Zuri Team" id="btn_zuri" btnLink="https://training.zuri.team/"></LinkBtn>
        <LinkBtn text="Zuri Books" id="books" btnLink="http://books.zuri.team"></LinkBtn>
        <LinkBtn text="Python Books" id="book__python" btnLink="https://books.zuri.team/python-for-beginners?ref_id=Kiishi"></LinkBtn>
        <LinkBtn text="Background Check for Coders" id="pitch" btnLink="https://background.zuri.team"></LinkBtn>
        <LinkBtn text="Design Book" btnLink="https://books.zuri.team/design-rules" id="book_design"></LinkBtn>
    </Container>
  )
}
