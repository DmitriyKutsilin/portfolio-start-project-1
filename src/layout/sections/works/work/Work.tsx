import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Icon} from "../../../../components/icon/Icon";
import {theme} from "../../../../styles/Theme";
import {Button} from "../../../../components/Button";

type WorkPropsType = {
    title: string
    text: string
    src: string
    stack: string
    previewLink: string
    codeLink: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <ImageWrapper>
                <a href={"#"}>
                    <Image src={props.src} alt=""/>
                    <Button>View Project</Button>
                </a>
            </ImageWrapper>

            <Description>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <Stack>
                    <StackTitle>Tech stack : </StackTitle>
                    {props.stack}
                </Stack>
                <FlexWrapper justify={"space-between"} wrap={"wrap"}>
                    <Link href={props.previewLink}>
                        <Icon iconId={"livePreview"} width={"20"} height={"20"}/>
                        <span>Live Preview</span>
                    </Link>
                    <Link href={props.codeLink}>
                        <Icon iconId={"viewCode"} width={"20"} height={"20"}/>
                        <span>View Code</span>
                    </Link>
                </FlexWrapper>
            </Description>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    margin-bottom: 60px;
    overflow: hidden;
    background-color: ${theme.colors.lightBg};
    border-radius: 20px;
    box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);
    
    max-width: 375px;
    width: 100%;
`

const Description = styled.div`
    padding: 25px 30px;
`

const ImageWrapper = styled.div`
    position: relative;
    height: 260px;
    
    a {
        display: block;
    }
    
    &:hover {
        
        &::before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(20px);
        }
        
        ${Button} {
            opacity: 1;
        }
    }

    ${Button} {
        font-family: "DM Sans", sans-serif;
        color: ${theme.colors.accent};
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        
        &::before {
            opacity: 0.9;
            background-color: #fff;
            transform: scaleY(1) scaleX(1);
        }
    }
`

const Image = styled.img`
    height: 260px;
    width: 100%;
    object-fit: cover;
`

const Title = styled.h3`
    color: ${theme.colors.projectTitleFont};
    font-size: 28px;
    font-weight: 500;
    line-height: 26px;
`

const Text = styled.p`
    margin: 17px 0 12px 0;
    font-size: 18px;
    font-weight: 300;
    line-height: 26px;
    text-align: left;
`

const StackTitle = styled.span`
    color: ${theme.colors.accent};
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    text-align: left;
`

const Stack = styled.p`
    margin-bottom: 20px;
    color: ${theme.colors.accent};
    font-size: 14px;
    font-weight: 300;
    line-height: 26px;
    text-align: left;
`

const Link = styled.a`
    display: flex;
    align-items: center;
    gap: 10px;

    color: #000;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    text-align: left;

    span {
        position: relative;
    }
    
    span:before {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: 2px;
        bottom: 3px;
        left: 0;
        border-radius: 5px;
        background-color: #000;
        transform: scaleX(0);
        transition: transform 0.3s ease;
    }

    &:hover {
        span::before {
            transform: scaleX(1);
        } 
    }
    
    
`