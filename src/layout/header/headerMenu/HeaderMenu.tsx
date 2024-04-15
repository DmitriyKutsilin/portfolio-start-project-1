import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

export const HeaderMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return (
                        <ListItem key={index}>
                            <Link href="">{item}</Link>
                        </ListItem>
                    )
                })}
            </ul>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
    display: flex;
    align-items: center;
    ul {
        display: flex;
        gap: 30px;
    }
`
const Link = styled.a`
    color: ${theme.colors.font};
    font-family: "DM Sans", sans-serif;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    white-space: nowrap;
`

const ListItem = styled.li`
    &:hover {
        ${Link} {
            transition: all ease-in-out 0.15s;
            color: ${theme.colors.accent};
            text-shadow: 0 1px 4px rgba(179, 147, 211, 0.1),
            0 2px 4px rgba(179, 147, 211, 0.15),
            0 3px 4px rgba(179, 147, 211, 0.2)
        }
        transition: all ease-in-out 0.15s;
        transform: scale(1);
    }
`

