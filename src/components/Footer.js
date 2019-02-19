import React from 'react';
import styled from 'styled-components';
import { Container, Nav, Link } from './shared/shared';
import { ReactComponent as logo} from '../assets/logo/logo.svg';
import { ReactComponent as Facebook} from '../assets/icons/facebook.svg';
import { ReactComponent as Linkedin} from '../assets/icons/linkedin.svg';
import { ReactComponent as Instagram} from '../assets/icons/instagram.svg';
import { ReactComponent as Twitter} from '../assets/icons/twitter.svg';
import { ReactComponent as Pinterest} from '../assets/icons/pinterest.svg';
import mail from '../assets/icons/mail.svg';
import phone from '../assets/icons/phone.svg';
import cellphone from '../assets/icons/cellphone.svg';
import media from './shared/media';

const Footer = () => {
    return (
        <FooterContainer>
            <Container>
                <NavWrapper>
                    <Logo />
                    <Nav>
                        <Link white><a href="#about">About me</a></Link>
                        <Link white><a href="#relationships">Relationships </a></Link>
                        <Link white><a href="#requirements">Requirements</a></Link>
                        <Link white><a href="#users">Users</a></Link>
                        <Link white><a href="#sign">Sign Up</a></Link>
                    </Nav>
                </NavWrapper>
                <Line />
                <FooterMain>
                    <Contacts>
                        <ContactBy>
                            <img src={mail} alt="mail"/>
                            <span>work.of.future@gmail.com</span>
                        </ContactBy>
                        <ContactBy>
                            <img src={phone} alt=""/>
                            <span>+38 (050) 789 24 98</span>
                        </ContactBy>
                        <ContactBy>
                            <img src={cellphone} alt=""/>
                            <span> +38 (095) 556 08 45 </span>
                        </ContactBy>
                    </Contacts>
                    <Links>
                        <ul>
                            <Link white><a href="#">News</a></Link>
                            <Link white><a href="#">Blog</a></Link>
                            <Link white><a href="#">Partners</a></Link>
                            <Link white><a href="#">Shop</a></Link>
                        </ul>
                        <ul>
                            <Link white><a href="#">Overview</a></Link>
                            <Link white><a href="#">Design</a></Link>
                            <Link white><a href="#">Code</a></Link>
                            <Link white><a href="#">Collaborate</a></Link>
                        </ul>
                        <ul>
                            <Link white><a href="#">Tutorials</a></Link>
                            <Link white><a href="#">Resources</a></Link>
                            <Link white><a href="#">Guides</a></Link>
                            <Link white><a href="#">Examples</a></Link>
                        </ul>
                        <ul>
                            <Link white><a href="#">FAQ</a></Link>
                            <Link white><a href="#">Terms</a></Link>
                            <Link white><a href="#">Conditions</a></Link>
                            <Link white><a href="#">Help</a></Link>
                        </ul>
                    </Links>
                </FooterMain>
                <FooterEnd>
                    <span>© abz.agency specially for the test task</span>
                    <Social>
                        <Icon><Facebook /></Icon>
                        <Icon><Linkedin /></Icon>
                        <Icon><Instagram /></Icon>
                        <Icon><Twitter /></Icon>
                        <Icon><Pinterest /></Icon>
                    </Social>
                </FooterEnd>
            </Container>
        </FooterContainer>
    );
};

export default Footer;

const FooterContainer = styled.footer`
    background-color: ${props => props.theme.secondary};
    color: #ffffff;
`;

const NavWrapper = styled.nav`
    padding: 30px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled(logo)`
    width: 134px;
    fill: #ffffff !important;
`;

const Line = styled.hr`
    background-color: #5674b9;
    border: none;
    height: 1px;
`;

const FooterMain = styled.div`
    margin: 30px 0 11px;
    display: flex;
    justify-content: space-between;
`;

const Contacts = styled.div``;

const ContactBy = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 14px;

    ${media.tablet`
        margin-bottom: 23px;
    `}

    img {
        margin-right: 9px;
        width: 24px;
        object-fit: scale-down;

        ${media.tablet`
            display: none;
        `}
    }
    
    span {
        font-size: 20px;

        ${media.tablet`
            font-size: 18px;
        `}
    }
`;

const Links = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    justify-content: space-between;
    padding-left: 67px;

    ${media.tablet`
        padding-left: 90px;
    `}

    ul {
        list-style: none;
    }

    li {
        text-align: right;
        margin-bottom: 11px;
        :last-child {
            margin-bottom: 0;
        }
    }
`;

const FooterEnd = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 32px;

    span {
        font-size: 12px;
    }
`; 

const Social = styled.div`
    display: flex;
`; 

const Icon = styled.div`
    margin-left: 20px;
`; 