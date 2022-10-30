import React from 'react'
import styled from 'styled-components'
import me from '../images/me.jpg'

const ProfileSectionContainer = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 55px 0;
    // height: 30vh;
    // background: green;
    font-size: 700;
    font-weight: 20px; 
    overflow: hidden;
`
const ProfilePicDiv = styled.div`
    width: 90px;
    background: red;
    border-radius: 100%;
    height: 90px;
    overflow: hidden;
`
const ProfileName = styled.h3`
    font-weight: 700;
    font-size: 20px;
    margin: 20px 0;
    text-align: center;
    width: 100%;
    // background: red;
`
const ProfileImage = styled.img`
    width: 100%;
    object-fit: fill;
`

export default function ProfileSection() {
  return (
    <ProfileSectionContainer>
        <ProfilePicDiv>
            <ProfileImage src={me} />
        </ProfilePicDiv>
        <ProfileName>Kiishi</ProfileName>
    </ProfileSectionContainer>
  )
}
