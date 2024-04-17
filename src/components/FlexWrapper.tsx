import styled from "styled-components";

type FlexWrapperPropsType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    gap?: string
    maxwidth?: string
    height?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    height: 100%;
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.align || "stretch"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    gap: ${props => props.gap || "normal"};
    max-width: ${props => props.maxwidth || "auto"};
    z-index: 100;
`