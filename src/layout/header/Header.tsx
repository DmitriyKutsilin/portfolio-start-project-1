import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Socials} from "../../components/socials/Socials";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";
import {HeaderMenu} from "./headerMenu/HeaderMenu";

const headerItems = ["Home", "About", "Tech Stack", "Projects", "Testimonials", "Contact"]
export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <FlexWrapper gap={"50px"}>
                        <HeaderMenu menuItems={headerItems}/>
                        <Socials/>
                    </FlexWrapper>

                </FlexWrapper>

            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: ${theme.colors.lightBg};
    padding: 20px 0;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 9999;
`
