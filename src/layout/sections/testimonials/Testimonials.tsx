import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionDescription} from "../../../components/SectionDescription";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";

export const Testimonials = () => {
    return (
        <StyledTestimonials>
            <SectionTitle>Testimonials</SectionTitle>
            <SectionDescription>What people say</SectionDescription>
            <SliderArea>
                <FlexWrapper direction={"column"} align={"center"}>
                    <Icon iconId={"quotes"} width={"50"} height={"50"}/>
                    <Slider/>
                </FlexWrapper>
            </SliderArea>

        </StyledTestimonials>
    );
};

const StyledTestimonials = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${theme.colors.lightBg};
`

const SliderArea = styled.div`
    border: 1px solid red;
    
    padding: 20px 80px;

    border-radius: 20px;
    box-shadow: 2px 2px 100px 0px rgba(0, 0, 0, 0.2);
    background: rgb(255, 255, 255);
`
