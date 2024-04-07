import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Menu} from "../../components/menu/Menu";
import {Logo} from "../../components/logo/Logo";

const footerItems = ["Home", "About", "Tech Stack", "Projects", "Contact"]

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper justify={"space-between"}>
                <Logo/>

                <a href={"tel:+375257546084"}>+375257546084</a>
                <a href={"mailto:dmitiry.kutsilin@gmail.com"}>dmitriy.kutsilin@gmail.com</a>

                <SocialIconsList>
                    <SocialIconLink href={"#"}>
                        <Icon iconId={"githubSvg"}/>
                    </SocialIconLink>
                    <SocialIconLink href={"#"}>
                        <Icon iconId={"githubSvg"}/>
                    </SocialIconLink>
                    <SocialIconLink href={"#"}>
                        <Icon iconId={"githubSvg"}/>
                    </SocialIconLink>
                </SocialIconsList>
            </FlexWrapper>

            <FlexWrapper justify={"space-between"}>
                <Menu menuItems={footerItems}/>
                <Copyright>© Dmitriy Kutsilin, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    
`

const SocialIconsList = styled.ul`
    
`

const SocialIconLink = styled.a`

`

const Copyright = styled.small`

`

