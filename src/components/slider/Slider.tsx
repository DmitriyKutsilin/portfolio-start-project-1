import React from 'react';
import styled from "styled-components";
import testimony1 from "../../assets/images/testimony1.jpg"
import {FlexWrapper} from "../FlexWrapper";

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide>
                    <Text>Quote testimonials demonstrate support for your product or feature from a user who has experience with it.
                        This can be significantly more effective than traditional advertising methods as most consumers will trust.</Text>
                    <Image src={testimony1} alt={""}/>
                    <Name>James Gouse</Name>
                    <Position>Graphic Designer</Position>
                </Slide>
            </FlexWrapper>
            <Pagination>
                <span> </span>
                <span> </span>
                <span> </span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    border: 1px solid black;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Slide = styled.div`
    text-align: center;
`

const Text = styled.p`

`

const Image = styled.img`
    
`

const Name = styled.span`

`

const Position = styled.span`

`

const Pagination = styled.div`
    span {
        display: inline-block;
        width: 10px;
        height: 10px;
        margin: 5px;
        background-color: blueviolet;
    }
`
