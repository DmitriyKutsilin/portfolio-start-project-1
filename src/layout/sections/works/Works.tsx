import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionDescription} from "../../../components/SectionDescription";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import projImg1 from "./../../../assets/images/projects/proj-1.jpg"
import projImg2 from "./../../../assets/images/projects/proj-2.jpg"
import projImg3 from "./../../../assets/images/projects/proj-3.jpg"
import projImg4 from "./../../../assets/images/projects/proj-4.jpg"
import projImg5 from "./../../../assets/images/projects/proj-5.jpg"
import projImg6 from "./../../../assets/images/projects/proj-6.jpg"
import {Container} from "../../../components/Container";
import {TabMenu} from "./tabmenu/TabMenu";

const workItems = ["all", "landing page", "react", "spa"]
export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <SectionDescription>Things I’ve built so far</SectionDescription>
                <TabMenu menuItems={workItems}/>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    <Work src={projImg1}
                          title={"Project Tile goes here"}
                          text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                          stack={"HTML, JavaScript, SASS, React"}
                          previewLink={"#"}
                          codeLink={"#"}/>
                    <Work src={projImg2}
                          title={"Project Tile goes here"}
                          text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                          stack={"HTML, JavaScript, SASS, React"}
                          previewLink={"#"}
                          codeLink={"#"}/>
                    <Work src={projImg3}
                          title={"Project Tile goes here"}
                          text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                          stack={"HTML, JavaScript, SASS, React"}
                          previewLink={"#"}
                          codeLink={"#"}/>
                    <Work src={projImg4}
                          title={"Project Tile goes here"}
                          text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                          stack={"HTML, JavaScript, SASS, React"}
                          previewLink={"#"}
                          codeLink={"#"}/>
                    <Work src={projImg5}
                          title={"Project Tile goes here"}
                          text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                          stack={"HTML, JavaScript, SASS, React"}
                          previewLink={"#"}
                          codeLink={"#"}/>
                    <Work src={projImg6}
                          title={"Project Tile goes here"}
                          text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                          stack={"HTML, JavaScript, SASS, React"}
                          previewLink={"#"}
                          codeLink={"#"}/>
                </FlexWrapper>
            </Container>

        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: #fff;
`