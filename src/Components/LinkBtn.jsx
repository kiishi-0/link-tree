import React from 'react'
import styled from 'styled-components'

const LinkBtnContainer = styled.a`
  width: 100%;
  height: 20vh;
  padding: 24px 32px;
  background: #EAECF0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  fle-direction: column;
  text-decoration: none;
  color: #101828;
  font-weight: 500;
  font-size: 18px;
  margin: 0 0 25px;
  
`

export default function LinkBtn(props) {
  return (
    <LinkBtnContainer href={props.btnLink}>
      {props.text}
    </LinkBtnContainer>
  )
}
