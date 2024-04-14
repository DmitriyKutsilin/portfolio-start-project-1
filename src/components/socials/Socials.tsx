import React from 'react';
import {Icon} from "../icon/Icon";
import {FlexWrapper} from "../FlexWrapper";
import styled from "styled-components";

export const Socials = () => {
    return (
        <FlexWrapper>
            <SocialIconsList>
                <SocialIconLink href={"#"}>
                    <Icon iconId={"githubContact"} width={"30"} height={"30"}/>
                </SocialIconLink>
                <SocialIconLink href={"#"}>
                    <Icon iconId={"twitterContact"} width={"30"} height={"30"}/>
                </SocialIconLink>
                <SocialIconLink href={"#"}>
                    <Icon iconId={"linkedinContact"} width={"30"} height={"30"}/>
                </SocialIconLink>
            </SocialIconsList>
        </FlexWrapper>
    );
};

const SocialIconsList = styled.ul`
    
`

const SocialIconLink = styled.a`

`