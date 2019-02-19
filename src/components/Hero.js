import React from 'react';
import styled from 'styled-components';
import { Container, LargeParagraph, Button, Section } from './shared/shared';
import media from './shared/media';
import bg from '../assets/imgs/bg-1.jpg';

const Hero = () => {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <h1>Test assignment for Frontend Developer position</h1>
                    <LargeParagraph>We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck!</LargeParagraph>
                    <Button primary>Sign Up</Button>
                </Content>
            </Container>
        </Wrapper>
    );
};

export default Hero;

const Wrapper = styled(Section)`
    background-image: url(${bg});
    background-size: 134%;
    background-position: center 30%;
    background-repeat: no-repeat;
    color: #ffffff;

    ${Container} {
        height: inherit;
    }
`;

const Content = styled.div`
    max-width: 47%;

    ${media.tablet`
        max-width: 53%;
    `}

    h1 {
        position: relative;
        top: -11px;
        line-height: 61px;
        margin-bottom: 9px;

        ${media.tablet`
            line-height: 1.2;
        `}
    }

    ${LargeParagraph} {
        margin-bottom: 32px;

        ${media.tablet`
            font-size: 18px;
        `}
    }
`;