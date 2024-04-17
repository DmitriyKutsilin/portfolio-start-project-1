import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Menu} from "../../components/menu/Menu";
import {Logo} from "../../components/logo/Logo";
import {Socials} from "../../components/socials/Socials";
import {Container} from "../../components/Container";
import {theme} from "../../styles/Theme";
import {HeaderMenu} from "../header/headerMenu/HeaderMenu";
import {FooterMenu} from "./footerMenu/FooterMenu";

const footerItems = ["Home", "About", "Tech Stack", "Projects", "Testimonials", "Contact"]

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <UpperFooter>
                    <Logo/>

                    <PhoneMailWrapper>
                        <FlexWrapper>
                            <Icon iconId={"phone"} width={"26"} height={"26"}/>
                            <ContactLink href={"tel:+375257546084"}>+375257546084</ContactLink>
                        </FlexWrapper>

                        <FlexWrapper>
                            <Icon iconId={"email"} width={"26"} height={"26"}/>
                            <ContactLink href={"mailto:dmitiry.kutsilin@gmail.com"}>dmitriy.kutsilin@gmail.com</ContactLink>
                        </FlexWrapper>

                        <Socials/>
                    </PhoneMailWrapper>
                </UpperFooter>

                <Line></Line>

                <DownFooter>
                    <FooterMenu menuItems={footerItems}/>
                    <Copyright>© <span>Dmitriy Kutsilin</span>. All Rights Reserved.</Copyright>
                </DownFooter>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    ${Container} > ${FlexWrapper} {
        position: relative;
    }
`

const UpperFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const PhoneMailWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`

const ContactLink = styled.a`
    align-self: center;
    margin-left: 5px;
    color: ${theme.colors.accent};
    font-family: "DM Sans", sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    text-align: left;
`

const Line = styled.div`
    position: relative;
    padding-top: 20px;
    padding-bottom: 40px;
    &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: ${theme.colors.font};
        opacity: 30%;
    }
`

const DownFooter = styled.div`
    
    display: flex;
    justify-content: space-between;]
    align-items: center;
    padding-bottom: 40px;
`

const Copyright = styled.small`
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    text-align: center;
    
    span {
        background: linear-gradient(to right, rgba(19, 176, 245, 1.00), rgba(231, 15, 170, 1.00));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`

