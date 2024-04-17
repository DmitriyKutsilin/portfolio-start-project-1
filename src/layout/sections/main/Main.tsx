import React from 'react';
import photo from '../../../assets/images/photoBW.jpg'
import bg from '../../../assets/images/svg-icons/abstractPhotoBg.svg'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"}>
                    <div>
                        <IntroText>Hi &#128075;,</IntroText>
                        <IntroText>My name is</IntroText>
                        <Name>Dmitriy Kutsilin</Name>
                        <MainTitle>I am Web Developer</MainTitle>
                    </div>

                    <PhotoContainer>
                        <Photo src={photo} alt=""/>
                    </PhotoContainer>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    display: flex;
    min-height: 100vh;
    background-color: #fff;
    overflow: hidden;
`

const PhotoContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 350px;
    max-height: 350px;
    
    &::before {
        z-index: 1;
        position: absolute;
        top: -60%;
        left: -60%;
        content: url(${bg});
        
    }
    // background-image: url(${bg});
    // background-size: 769px 769px;
    // overflow: ;
`

const Photo = styled.img`
    z-index: 2;
    width: 350px;
    height: 350px;
    object-fit: cover;
    border-radius: 50%;
    border: 9px solid transparent; /*2*/
    background: linear-gradient(to bottom, rgba(231, 15, 170, 1.00), rgba(0, 192, 253, 1.00)) border-box; /*3*/
    
`

const IntroText = styled.p`
    color: ${theme.colors.titleFont};
    font-size: 58px;
    font-weight: 700;
    text-align: left;
`

const MainTitle = styled.h1`
    font-size: 58px;
    font-weight: 700;
    text-align: left;
    color: ${theme.colors.titleFont};
`

const Name = styled.h2`
    font-size: 58px;
    font-weight: 700;
    text-align: left;
    background: linear-gradient(to right, rgba(19, 176, 245, 1.00), rgba(231, 15, 170, 1.00));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: ${theme.colors.titleFont};
`
