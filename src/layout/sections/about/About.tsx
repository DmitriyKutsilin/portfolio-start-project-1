import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import {Detail} from "./detail/Detail";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import drawing from "../../../assets/images/svg-icons/drawingAbout.svg"

export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <FlexWrapper direction={"column"} maxwidth={"610px"}>
                    <FlexWrapper direction={"column"}>
                        <ArticleTitle>About Me</ArticleTitle>
                        <ArticleDescription>I'm front-end engineer from Minsk.
                            I'm interested in web development and everything connected with it.

                            I'm studying at courses "Front-end development" at IT-Incubator.

                            Ready to implement excellent projects
                            with wonderful people.</ArticleDescription>
                    </FlexWrapper>

                    <FlexWrapper direction={"column"}>
                        <ArticleTitle>Work Experience</ArticleTitle>
                        <Detail position={"Deliveryman"}
                                employment={"Full Time"}
                                company={"Light Dinner"}
                                location={"Minsk"}
                                dates={"Feb 21 - June 21"}></Detail>
                        <Detail position={"Manager"}
                                employment={"Full Time"}
                                company={"Wildberries"}
                                location={"Minsk"}
                                dates={"June 21 - June 23"}></Detail>
                    </FlexWrapper>

                    <FlexWrapper direction={"column"}>
                        <ArticleTitle>Education</ArticleTitle>
                        <Detail position={"Bachelor in Logistics"}
                                employment={"Full Time"}
                                company={"International University \"MITSO\""}
                                location={"Minsk"}
                                dates={"Sep 16 - June 20"}></Detail>
                    </FlexWrapper>
                </FlexWrapper>
                <StyledBg></StyledBg>
            </Container>

        </StyledAbout>
    );
};
const StyledBg = styled.img`
    position: relative;
    &::before {
        content: url(${drawing});
        position: absolute;
        left: 100px;
    }
`

const StyledAbout = styled.section`
    position: relative;
    &::before {
        content: url(${drawing});
        position: absolute;
        right: -90px;
        top: -20px;
    }
    /*background-color: ${theme.colors.lightBg};
    background-image: url(${drawing});
    background-repeat: no-repeat;
    
    background-position-x: 110%;
    background-position-y: 50%;*/
`

const ArticleTitle = styled.h4`
    color: ${theme.colors.titleFont};
    font-size: 42px;
    font-weight: 700;
    text-align: left;
    margin: 38px 0;
`

const ArticleDescription = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    text-align: left;
`