import React from 'react';
import {Icon} from "../icon/Icon";
import {FlexWrapper} from "../FlexWrapper";
import styled from "styled-components";

export const Socials = () => {
    return (
        <StyledSocials>
                <SocialIconsList>
                    <SocialIconsItem>
                        <SocialIconLink href={"#"}>
                            <Icon iconId={"githubContact"} width={"30"} height={"30"}/>
                        </SocialIconLink>
                    </SocialIconsItem>
                    <SocialIconsItem>
                        <SocialIconLink href={"#"}>
                            <Icon iconId={"twitterContact"} width={"30"} height={"30"}/>
                        </SocialIconLink>
                    </SocialIconsItem>
                    <SocialIconsItem>
                        <SocialIconLink href={"#"}>
                            <Icon iconId={"linkedinContact"} width={"30"} height={"30"}/>
                        </SocialIconLink>
                    </SocialIconsItem>
                </SocialIconsList>
        </StyledSocials>

    );
};

const StyledSocials = styled.div`
    
`

const SocialIconsList = styled.ul`
    display: flex;
    gap: 20px;
`

const SocialIconsItem = styled.li`
    max-height: 30px;
    max-width: 30px;
`

const SocialIconLink = styled.a`
`