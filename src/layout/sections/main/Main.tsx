import React from 'react';
import photo from '../../../assets/images/photo.jpg'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-between"}>
                <div>
                    <span>Hi 👋,</span>
                    <span>My name is</span>
                    <Name>Dmitriy Kutsilin</Name>
                    <MainTitle>I am Web Developer</MainTitle>
                </div>

                <Photo src={photo} alt=""/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    min-height: 630px;
    background-color: #fff;
`

const Photo = styled.img`
    width: 350px;
    height: 350px;
    object-fit: cover;
`

const MainTitle = styled.h1`

`

const Name = styled.h2`

`
