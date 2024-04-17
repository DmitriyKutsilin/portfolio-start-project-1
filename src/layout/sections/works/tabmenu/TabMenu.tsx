import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

export const TabMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return (
                        <ListItem key={index}>
                            <Link href="">{item}</Link>
                        </ListItem>
                    )
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    ul {
        display: flex;
        gap: 30px;
    }
`

const Link = styled.a`
    position: relative;
    text-transform: uppercase;
    font-family: DM Sans, sans-serif;
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
    text-align: center;
    
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

    &:hover {
            transition: all ease-in-out 0.15s;
            color: ${theme.colors.accent};
    }

    &:hover::before {
            transform: scaleX(1);
    }
`

const ListItem = styled.li`
    // &:hover {
    //     ${Link} {
    //         transition: all ease-in-out 0.15s;
    //         color: ${theme.colors.accent};
    //     }
    //
    //     ${Link}::before {
    //         transform: scaleX(1);
    //     }
    // }
`