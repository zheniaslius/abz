import React from 'react';
import styled from 'styled-components';
import {Container, Section, MediumParagraph} from './shared/shared';
import bg from '../assets/imgs/bg-2.jpg';
import man from '../assets/imgs/man-laptop-v1.svg';
import media from './shared/media';

const Requirements = () => {
    return (
        <RequirementsSection id="requirements">
            <Container>
                <h2>General requirements for the test task</h2>
                <Wrapper>
                    <MediumParagraph>
                        Users want to find answers to their questions quickly and data shows that people really care about how quickly their pages load. The Search team announced speed would be a ranking signal for desktop searches in 2010 and as of this month (July 2018), page speed will be a ranking factor for mobile searches too.
                        <br/><br/>
                        If you're a developer working on a site, now is a good time to evaluate your performance using our speed tools. Think about how performance affects the user experience of your pages and consider measuring a variety of real-world user-centric performance metrics.
                        <br/><br/>
                        Are you shipping too much JavaScript? Too many images? Images and JavaScript are the most significant contributors to the page weight that affect page load time based on data from HTTP Archive and the Chrome User Experience Report - our public dataset for key UX metrics as experienced by Chrome users under real-world conditions.
                    </MediumParagraph>
                    <ImageContainer>
                        <img src={man} alt="man"/>
                    </ImageContainer>
                </Wrapper>
            </Container>
        </RequirementsSection>
    );
};

export default Requirements;

const RequirementsSection = styled(Section)`
    padding-bottom: 107px;
    background-image: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: 46%;
    color: white;

    ${media.tablet`
        padding-top: 105px;
    `}

    h2 {
        margin-bottom: 36px;
        text-align: center;

        ${media.tablet`
            max-width: 58%;
            margin: 0 auto 35px;
        `}
    }
`;

const Wrapper = styled.div`
    display: flex;

    ${media.tablet`
        align-items: flex-start;
    `}

    > * {
        flex: 1;
    }

    ${MediumParagraph} {
        ${media.tablet`
            padding-right: 30px;
        `}
    }
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;

    img {
        padding-left: 19px;
        width: 100%;

        ${media.tablet`
            height: 100%;
            padding-left: 0;
        `}
    }
`;