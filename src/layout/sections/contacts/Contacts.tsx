import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle>For any questions please mail me:</SectionTitle>
            <FlexWrapper justify={"space-between"}>
                <Map>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d75233.34813646851!2d27.547781609841945!3d53.8954551330555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sby!4v1712141436927!5m2!1sru!2sby"
                        width="500" height="400px" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </Map>
                <StyledForm>
                    <Field placeholder={"name"}/>
                    <Field placeholder={"subject"}/>
                    <Field placeholder={"message"} as={"textarea"}/>
                    <Button type={"submit"}>Send Message</Button>
                </StyledForm>
            </FlexWrapper>

        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    min-height: 50vh;
    background-color: beige;
`

const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const Field = styled.input`

`

const Map = styled.div`
    
`
