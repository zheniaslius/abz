import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Nav, Link, Logo,
Fade } from './shared/shared';
import logo from '../assets/logo/logo.svg';
import { ReactComponent as Out } from '../assets/icons/sign-out.svg';
import { ReactComponent as Menu} from '../assets/icons/line-menu.svg';
import url from '../api';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mobileMenu: false,
            user: {}
        }
    }

    componentDidMount() {
        this.getFirstuser();
    }

    getFirstuser = async () => {
        const res = await fetch(`${url}/users/1`);
        const data = await res.json();

        this.setState({user: data.user });
    }

    toggleMenu = () => this.setState(prev => ({menuMobile: !prev.menuMobile}))

    render() {
        const {
            name,
            photo,
            email
        } = this.state.user;

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
                            <Name>{name}</Name>
                            <br/>
                            <Email>{email}</Email>
                        </Details>
                        <Avatar src={photo} />
                        <OutIcon />
                    </Profile>
                    <MenuIcon onClick={this.toggleMenu}/>
                    <Fade
                        onClick={this.toggleMenu}
                        show={this.state.menuMobile}
                    />
                    <MobileMenu show={this.state.menuMobile}>
                        <Details>
                            <Avatar src={photo} />
                            <Name>{name}</Name>
                            <Email>{email}</Email>
                        </Details>
                        <Nav>
                            <Link><a href="#about">About me</a></Link>
                            <Link><a href="#relationships">Relationships</a></Link>
                            <Link><a href="#requirements">Requirements</a></Link>
                            <Link><a href="#users">Users</a></Link>
                            <Link><a href="#sign">Sign Up</a></Link>
                            <Link><a href="#sign">Sign Out</a></Link>
                        </Nav>
                    </MobileMenu>
                </Content>
            </Wrapper>
        );
    }
};

export default Header;

const Wrapper = styled.header`
    height: 64px;
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 100;
`;

const Profile = styled.div`
    display: flex;
    align-items: center;
`;

const Content = styled(Container)`
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 992px) {
        ${Nav}, ${Profile} {
            display: none;
        }
    }
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

const OutIcon = styled(Out)`
    cursor: pointer;

    &:hover g {
        fill: #2638bb;
    }
`;

const MenuIcon = styled(Menu)`
    height: 100%;

    @media (min-width: 992px) {
        display: none;
    }
`;

const MobileMenu = styled.div`
    display: flex;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(-100%)'};
    background-color: #ffffff;
    width: 260px;
    flex-direction: column;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    transition: all .3s ease;

    ${Details} {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 30px 0 20px 25px;
        border-bottom: 1px solid #e1e1e1;
    }

    ${Avatar} {
        height: 66px;
        padding: 0;
    }

    ${Name} {
        font-size: 20px;
        margin-top: 16px;
    }

    ${Email} {
        margin-top: 6px;
        font-size: 13px;
    }

    ${Nav} {
        display: flex;
        padding: 37px 0 0 25px;
        flex-direction: column;
    }
    
    ${Link} {
        margin: 0 0 25px;
    }
`;
