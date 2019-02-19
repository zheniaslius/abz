import React from 'react';
import styled from 'styled-components';
import { Container, Nav, Link, Logo } from './shared/shared';
import media from './shared/media';
import logo from '../assets/logo/logo.svg';
import avatar from '../assets/imgs/user-superstar-2x.jpg';
import out from '../assets/icons/sign-out.svg';

const Header = () => {
    return (
        <Wrapper>
            <Content>
                <Logo src={logo} alt="logo"/>
                <Nav>
                    <Link><a href="#about">About me</a></Link>
                    <Link><a href="#relationships">Relationships</a></Link>
                    <Link><a href="#requirements">Requirements</a></Link>
                    <Link><a href="#users">Users</a></Link>
                    <Link><a href="#sign">Sign Up</a></Link>
                </Nav>
                <Profile>
                    <Details>
                        <Name>Superstar</Name>
                        <br/>
                        <Email>Superstar@gmail.com</Email>
                    </Details>
                    <Avatar src={avatar} />
                    <img src={out} alt="sign-out"/>
                </Profile>
            </Content>
        </Wrapper>
    );
};

export default Header;

const Wrapper = styled.header`
    height: 64px;
    position: sticky;
    top: 0;
    background-color: white;
`;

const Profile = styled.div`
    display: flex;
`;

const Content = styled(Container)`
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${media.tablet`
        ${Nav}, ${Profile} {
            display: none;
        }
    `}
`;

const Details = styled.div`
    text-align: right;
`;

const Name = styled.span`
    font-size: 14px;
`;

const Email = styled.span`
    font-size: 12px;
    color: #8d8c8c;
`;

const Avatar = styled.img`
    padding: 0 16px;
    height: 40px;
    border-radius: 50%;
`;
