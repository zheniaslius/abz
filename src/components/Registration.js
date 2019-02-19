import React from 'react';
import styled from 'styled-components';
import { Container, Button, Section, Input } from './shared/shared';
import media from './shared/media';

const Registration = () => {
    return (
        <RegistrationSection>
            <Container id="sign">
                <h2>Register to get a work</h2>
                <h5>Attention! After successful registration and alert, update the list of users in the block from the tope</h5>
                <FormsWrapper>
                    <Row>
                        <InputWrapper>
                            <Input placeholder="Your name" id="name"/>
                            <label htmlFor="name">Your name</label>
                        </InputWrapper>
                        <InputWrapper>
                            <Input placeholder="Your email" id="email"/>
                            <label htmlFor="email">Your email</label>
                        </InputWrapper>
                        <InputWrapper>
                            <Input placeholder="+38 (___)  ___ __ __" id="phone"/>
                            <label htmlFor="phone">Phone</label>
                        </InputWrapper>
                    </Row>
                    <Row>
                        <InputWrapper>
                            <Input id="position"/>
                        </InputWrapper>
                        <InputWrapper>
                            <Input placeholder="Upload your photo" id="file"/>
                            <label htmlFor="file">File format jpg  up to 5 MB, the minimum size of 70x70px</label>
                            <Button secondary>Upload</Button>
                        </InputWrapper>
                    </Row>
                </FormsWrapper>
                <SignUp disabled>Sign Up</SignUp>
            </Container>
        </RegistrationSection>
    );
};

export default Registration;

const RegistrationSection = styled(Section)`
    padding-top: 0;
    padding-bottom: 146px;
    text-align: center;

    h2 {
        margin-bottom: 10px;

        ${media.tablet`
            margin-bottom: 17px;
        `}
    }

    h5 {
        margin-bottom: 63px;

        ${media.tablet`
            max-width: 52%;
            margin: 0 auto 52px;
        `}
    }

    ${media.tablet`
        padding-top: 14px;
    `}
`;

const SignUp = styled(Button)`
    margin-top: 62px;
`;

const FormsWrapper = styled.div``;

const Row = styled.div`
    display: flex;
    margin-bottom: 40px;
    
    > div {
        flex: 1;
        margin-right: 30px;

        :last-of-type {
            margin-right: 0;
        }
    }

    :last-of-type {
        margin-bottom: 0;
        
        div:last-of-type {
            display: flex;

            button {
                height: 100%;
            }

            label {
                top: unset;
                bottom: -25px;
            }
        }
    }
`;

const InputWrapper = styled.div`
    position: relative;

    input {
        width: 100%;
    }

    label {
        padding: 0 4px;
        background-color: #ffffff;
        transform: translateY(-50%);
        font-size: 12px;
        color: #8d8c8c;
        position: absolute;
        left: 17px;
        top: 0;
    }

    ${Button} {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        z-index: 10;
        width: 168px;

        ${media.tablet`
            width: 206px;
        `}
    }

    :last-of-type input {
        position: relative;
        left: 2px;
    }
`;

