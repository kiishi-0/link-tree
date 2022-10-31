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
    background: #EAECF0;
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
const Twitter = styled.p`
    font-size: 16px;
`
const Slack = styled(Twitter)`
    // display: none;
    position: relative;
    visibility: hidden;
    // :after{
    //     content: 'Slack - ********';
    //     positon: absolute;
    //     left: 0;top: 0;
    // }
`
export default function ProfileSection() {
  return (
    <ProfileSectionContainer>
        <ProfilePicDiv>
            <ProfileImage src={me} id="profile__img" />
        </ProfilePicDiv>
        <ProfileName>Kiishi Oyewole</ProfileName>
        <Twitter>Twitter - kiishioluwa</Twitter>
        <Slack>Slack - Kiishi</Slack>
    </ProfileSectionContainer>
  )
}
