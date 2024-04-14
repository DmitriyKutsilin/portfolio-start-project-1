import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";

type DetailPropsType = {
    position: string
    employment: string
    company: string
    location: string
    dates: string
}
export const Detail = (props: DetailPropsType) => {
    return (
        <FlexWrapper direction={"column"}>
            <FlexWrapper>
                <Position>{props.position}</Position>
                <Employment>{props.employment}</Employment>
            </FlexWrapper>

            <FlexWrapper>
                <FlexWrapper>
                    <Icon iconId={"office"} width={"16"} height={"12"}></Icon>
                    <WhereText>{props.company}</WhereText>
                </FlexWrapper>
                <FlexWrapper>
                    <Icon iconId={"location"} width={"16"} height={"12"}></Icon>
                    <WhereText>{props.location}</WhereText>
                </FlexWrapper>
                <FlexWrapper>
                    <Icon iconId={"calendar"} width={"16"} height={"12"}></Icon>
                    <WhereText>{props.dates}</WhereText>
                </FlexWrapper>
            </FlexWrapper>
        </FlexWrapper>
    );
};

const Position = styled.span`

`

const Employment = styled.span`
    display: inline-block;
`

const WhereText = styled.span`

`