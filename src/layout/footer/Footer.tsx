import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Menu} from "../../components/menu/Menu";
import {Logo} from "../../components/logo/Logo";
import {Socials} from "../../components/socials/Socials";

const footerItems = ["Home", "About", "Tech Stack", "Projects", "Contact"]

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper justify={"space-between"}>
                <Logo/>

                <FlexWrapper>
                    <Icon iconId={"phone"} width={"26"} height={"26"}/>
                    <a href={"tel:+375257546084"}>+375257546084</a>
                </FlexWrapper>

                <FlexWrapper>
                    <Icon iconId={"email"} width={"26"} height={"26"}/>
                    <a href={"mailto:dmitiry.kutsilin@gmail.com"}>dmitriy.kutsilin@gmail.com</a>
                </FlexWrapper>

                <Socials/>
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

const Copyright = styled.small`

`

