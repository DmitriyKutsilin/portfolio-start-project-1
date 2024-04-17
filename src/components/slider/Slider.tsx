import React from 'react';
import styled from "styled-components";
import testimony1 from "../../assets/images/testimony1.jpg"
import {FlexWrapper} from "../FlexWrapper";
import {theme} from "../../styles/Theme";

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
                <span className={"active"}> </span>
                <span> </span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    padding: 20px 0;
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
    font-size: 18px;
    font-weight: 300;
    line-height: 26px;
    text-align: center;
`

const Image = styled.img`
    height: 100px;
    width: 100px;
    border-radius: 15px;
    margin: 50px 0 30px 0;
`

const Name = styled.span`
    display: block;
    color: #000;
    font-size: 24px;
    font-weight: 500;
    line-height: 26px;
    text-align: center;
`

const Position = styled.span`
    display: block;
    color: #000;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    text-align: center;
    margin: 5px 0 45px 0;
`

const Pagination = styled.div`
    span {
        display: inline-block;
        width: 7px;
        height: 7px;
        background-color: ${theme.colors.workDetailsFont};
        border-radius: 20px;
        
        
        & + span {
            margin-left: 5px;
        }    
        
        &.active {
            width: 20px;
            background-color: ${theme.colors.accent};
        }
    }
`
