import React from 'react';
import styled from 'styled-components';
import { Container, Section, MediumParagraph,
TextButton } from './shared/shared';
import man from '../assets/imgs/man-mobile.svg';
import html from '../assets/imgs/html.svg';
import css from '../assets/imgs/css.svg';
import js from '../assets/imgs/javascript.svg';
import media from './shared/media';

const About = () => {
    return (
        <AboutSection>
            <Container id="about">
                <h2>Let's get acquainted</h2>
                <Description>
                    <img src={man} alt="man"/>
                    <Info>
                        <h3>I am cool frontend developer</h3>
                        <MediumParagraph>When real users have a slow experience on mobile, they're much less likely to find what they are looking for or purchase from you in the future. For many sites this equates to a huge missed opportunity, especially when more than half of visits are abandoned if a mobile page takes over 3 seconds to load. <br/><br/> Last week, Google Search and Ads teams announced two new speed initiatives to help improve user-experience on the web. </MediumParagraph>
                        <TextButton>Sign Up</TextButton>
                    </Info>
                </Description>
                <Skills id="relationships">
                    <h2>About my relationships with web-development</h2>
                    <SkillsWrapper>
                        <Skill>
                            <img src={html} alt="html"/>
                            <SkillDesc>
                                <h3>I'm in love with HTML</h3>
                                <MediumParagraph>Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications.</MediumParagraph>
                            </SkillDesc>
                        </Skill>
                        <Skill>
                            <img src={css} alt="css"/>
                            <SkillDesc>
                                <h3>CSS is my best friend</h3>
                                <MediumParagraph>Cascading Style Sheets (CSS) is a  style sheet language used for describing the presentation of a document written in a markup language like HTML.</MediumParagraph>
                            </SkillDesc>
                        </Skill>
                        <Skill>
                            <img src={js} alt="js"/>
                            <SkillDesc>
                                <h3>JavaScript is my passion</h3>
                                <MediumParagraph>JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.</MediumParagraph>
                            </SkillDesc>
                        </Skill>
                    </SkillsWrapper>
                </Skills>
            </Container>
        </AboutSection>
    );
};

export default About;

const AboutSection = styled(Section)`
    h2 {
        text-align: center;
        max-width: 532px;
        margin: 0 auto 37px;
    }

    ${media.phone`
        text-align: center;
    `};
`;

const Description = styled.div`
    display: flex;
    margin: 0 0 75px 36px;

    ${media.tablet`
        margin: 0 0 141px 0;
        align-items: flex-start;
    `}

    ${media.phone`
        flex-direction: column;
        align-items: center;
        margin-bottom: 70px;
    `}

    img {
        margin-right: 65px;

        ${media.tablet`
            width: 216px;
            margin-right: 35px;
        `}

        ${media.phone`
            margin: 0 0 30px;
        `}
    }

    h3 {
        ${media.phone`
            margin-bottom: 20px;
        `}
    }

    ${MediumParagraph} {
        margin-bottom: 15px;
    }
`;

const Info = styled.div`
    ${media.phone`
        h3 {
            max-width: 70%;
            margin: 0 auto 20px;
        }`
    }
`;

const Skills = styled.div``;

const SkillsWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    ${media.tablet`
        flex-direction: column;
        padding: 0 9%;
    `}

    ${media.phone`
        padding: 0;
    `}
`;

const SkillDesc = styled.div``;

const Skill = styled.div`  
    ${media.tablet`
        display: flex;
        margin-bottom: 36px;

        &:last-child {
            margin-bottom: 0;
        }
    `}

    ${media.phone`
        flex-direction: column;
        align-items: center;
    `}

    img {
        margin-bottom: 25px;
        width: 98px;

        ${media.tablet`
            margin: 0 29px 0 0;
        `}

        ${media.phone`
            margin: 0 0 15px;
        `}
    }

    h3 {
        margin-bottom: 4px;
    }

    ${MediumParagraph} {
        max-width: 349px;

        ${media.tablet`
            max-width: unset;
        `}
    }
`;