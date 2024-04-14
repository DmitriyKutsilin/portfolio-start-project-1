import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import {Detail} from "./detail/Detail";

export const About = () => {
    return (
        <StyledAbout>
            <FlexWrapper direction={"column"}>
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
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
    background-color: #cee7f1;
`

const ArticleTitle = styled.h4`

`

const ArticleDescription = styled.p`

`