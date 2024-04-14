import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionDescription} from "../../../components/SectionDescription";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";

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
    background-color: #fadcff;
    min-height: 50vh;
`

const SliderArea = styled.div`
    min-width: 600px;
    min-height: 500px;
`
