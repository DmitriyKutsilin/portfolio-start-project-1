import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {SectionDescription} from "../../../components/SectionDescription";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Tech Stack</SectionTitle>
            <SectionDescription>Technologies I’ve been working with recently</SectionDescription>

            <FlexWrapper wrap={"wrap"} justify={"space-between"} align={"center"}>
                <Skill iconId={"htmlSvg"} title={"html5"}/>
                <Skill iconId={"cssSvg"} title={"css3"}/>
                <Skill iconId={"jsSvg"} title={"js"}/>
                <Skill iconId={"tsSvg"} title={"ts"}/>
                <Skill iconId={"reactSvg"} title={"react"}/>
                <Skill iconId={"scSvg"} title={"styled components"}/>
                <Skill iconId={"reduxSvg"} title={"redux"}/>
                <Skill iconId={"gitSvg"} title={"git"}/>
                <Skill iconId={"greensock"} title={"greensock"}/>
                <Skill iconId={"dockerSvg"} title={"docker"}/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: #FAFAFA;
    min-height: 730px;
`