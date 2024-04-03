import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";

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
            <Image src={props.src} alt=""/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Stack>{props.stack}</Stack>
            <FlexWrapper justify={"space-between"} wrap={"wrap"}>
                <Link href={props.previewLink}>Live Preview</Link>
                <Link href={props.codeLink}>View Code</Link>
            </FlexWrapper>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    background-color: pink;
    max-width: 375px;
    width: 100%;
`

const Image = styled.img`
    height: 260px;
    width: 100%;
    object-fit: cover;
`

const Title = styled.h3`

`

const Text = styled.p`

`

const Stack = styled.p`

`

const Link = styled.a`

`