import styled from "styled-components";
import {theme} from "../styles/Theme";

export const Button = styled.button`
    z-index: 0;
    position: relative;
    width: fit-content;
    font-size: 18px;
    line-height: 26px;
    padding: 5px 15px;
    text-transform: uppercase;

    &::before {
        z-index: -1;
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        bottom: 0px;
        left: 0;
        border-radius: 10px;
        //background: linear-gradient(to right, rgba(19, 176, 245, 1.00), rgba(231, 15, 170, 1.00));
        background-color: ${theme.colors.accent};
        transform: scaleY(0) scaleX(0);
        
        transition: transform 0.3s ease;
    }

    &:hover::before {
        transform: scaleY(1) scaleX(1);
    }
`