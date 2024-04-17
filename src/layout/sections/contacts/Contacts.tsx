import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";
import {Container} from "../../../components/Container";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>For any questions please mail me:</SectionTitle>
                <FlexWrapper gap={"80px"} wrap={"wrap"} justify={"center"}>
                    <Map>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d75233.34813646851!2d27.547781609841945!3d53.8954551330555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sby!4v1712141436927!5m2!1sru!2sby"
                            width="500" height="400px" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </Map>
                    <StyledForm>
                        <Field placeholder={"Name"}/>
                        <Field placeholder={"Subject"}/>
                        <Field placeholder={"Message"} as={"textarea"}/>
                        <Button type={"submit"}>Send Message</Button>
                    </StyledForm>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    background-color: ${theme.colors.lightBg};
    
    ${SectionTitle} {
        margin-bottom: 110px;
    }
`

const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    
    ${Button} {
        margin: 0 auto;
        font-weight: bold;
        
        &::before {
            width: 100%;
            height: 3px;
            bottom: 0;
            transform: scaleX(0);
        }
        
        &:hover::before {
            transform: scaleX(1);
        }
    }
`

const Field = styled.input`
   border: none;
    padding: 10px 16px;
    //border: 1px solid red;
    border-radius: 5px;
    height: 50px;
    //box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
    //box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    
    color: ${theme.colors.font};
    font-family: "DM Sans", sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    text-align: left;
    
    :focus {
        outline: 0;
    }

    &:nth-child(3) {
        max-height: 200px;
        height: 100%;
        resize: none;
    }
    
    &::placeholder {
        opacity: 0.6;
        color: ${theme.colors.workDetailsFont};
        font-family: "DM Sans", sans-serif;
        font-size: 18px;
        font-weight: 300;
        line-height: 26px;
        text-align: left;
    }
`

const Map = styled.div`
    iframe {
        border: none;
        border-radius: 20px;
        box-shadow: 2px 2px 100px 0px rgba(0, 0, 0, 0.2);
    }
`
