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
                <Skill iconId={"html"} title={"html5"} width={"120"} height={"120"} viewBox={"0 0 120 120"}/>
                <Skill iconId={"css"} title={"css3"} width={"120"} height={"119"} viewBox={"0 0 120 119"}/>
                <Skill iconId={"js"} title={"js"} width={"120"} height={"120"} viewBox={"0 0 120 120"}/>
                <Skill iconId={"react"} title={"react"} width={"113"} height={"101"} viewBox={"0 0 113 101"}/>
                <Skill iconId={"redux"} title={"redux"} width={"105"} height={"100"} viewBox={"0 0 105 100"}/>
                <Skill iconId={"bootstrap"} title={"bootstrap"} width={"88"} height={"87"} viewBox={"0 0 88 87"}/>
                <Skill iconId={"tailwind"} title={"tailwind"} width={"131"} height={"131"} viewBox={"0 0 131 131"}/>
                <Skill iconId={"sass"} title={"sass"} width={"117"} height={"87"} viewBox={"0 0 117 87"}/>
                <Skill iconId={"git"} title={"git"} width={"105"} height={"105"} viewBox={"0 0 105 105"}/>
                <Skill iconId={"greensock"} title={"greensock"} width={"120"} height={"120"} viewBox={"0 0 120 120"}/>
                <Skill iconId={"vscode"} title={"vscode"} width={"112"} height={"112"} viewBox={"0 0 112 112"}/>
                <Skill iconId={"github"} title={"github"} width={"88"} height={"88"} viewBox={"0 0 88 88"}/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: #FAFAFA;
    min-height: 730px;
`