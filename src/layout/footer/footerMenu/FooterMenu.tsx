import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

export const FooterMenu = (props: {menuItems: Array<string>}) => {
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
    position: relative;
    color: ${theme.colors.font};
    font-family: "DM Sans", sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    text-align: center;
    white-space: nowrap;

    &:before {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: 3px;
        bottom: -2px;
        left: 0;
        border-radius: 5px;
        background-color: ${theme.colors.accent};
        transform: scaleX(0);
        transition: transform 0.3s ease;
    }
`

const ListItem = styled.li`
    &:hover {
        ${Link} {
            transition: all ease-in-out 0.15s;
            color: ${theme.colors.accent};
        }

        ${Link}::before {
            transform: scaleX(1);
        }
    }
`

// const ListItem = styled.li`
//     &:hover {
//         ${Link} {
//             transition: all ease-in-out 0.15s;
//             color: ${theme.colors.accent};
//             text-shadow: 0 1px 4px rgba(179, 147, 211, 0.1),
//             0 2px 4px rgba(179, 147, 211, 0.15),
//             0 3px 4px rgba(179, 147, 211, 0.2)
//         }
//         transition: all ease-in-out 0.15s;
//         transform: scale(1);
//     }
// `