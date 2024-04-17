import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {theme} from "../../../../styles/Theme";

type DetailPropsType = {
    position: string
    employment: string
    company: string
    location: string
    dates: string
}
export const Detail = (props: DetailPropsType) => {
    return (
        <StyledDetail>
            <FlexWrapper justify={"space-between"} align={"center"}>
                <Position>{props.position}</Position>
                <Employment>{props.employment}</Employment>
            </FlexWrapper>

            <FlexWrapper justify={"space-between"}>
                <FlexWrapper gap={"25px"}>
                    <FlexWrapper gap={"5px"} align={"center"}>
                        <Icon iconId={"office"} width={"16"} height={"12"}></Icon>
                        <WhereText>{props.company}</WhereText>
                    </FlexWrapper>
                    <FlexWrapper gap={"5px"} align={"center"}>
                        <Icon iconId={"location"} width={"16"} height={"12"}></Icon>
                        <WhereText>{props.location}</WhereText>
                    </FlexWrapper>
                </FlexWrapper>

                <FlexWrapper gap={"5px"} align={"center"}>
                    <Icon iconId={"calendar"} width={"16"} height={"12"}></Icon>
                    <WhereText>{props.dates}</WhereText>
                </FlexWrapper>
            </FlexWrapper>
        </StyledDetail>
    );
};

const StyledDetail = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    
    &+& {
        margin-top: 35px;
    }
    
    &::after {
        content: "";
        display: block;
        height: 2px;
        width: 100%;
        background-color: #EBEAED;
        margin-top: 10px;
    }
`

const Position = styled.span`
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 1px;
    text-align: left;
`

const Employment = styled.span`
    display: flex;
    height: 24px;
    align-items: center;
    padding: 0 20px;
    background-color: #25DAC5;
    border-radius: 100px;
    font-size: 9px;
    font-weight: 600;
    line-height: 24px;
    text-align: center;
    color: #018C0F;
`

const WhereText = styled.span`
    color: ${theme.colors.workDetailsFont};
    font-size: 12px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 1px;
    text-align: left;
`