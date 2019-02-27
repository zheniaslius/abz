import styled from 'styled-components';
import media from './media';

export const Container = styled.div`
    max-width: 1170px;
    padding: 0 15px;
    margin: 0 auto;
    width: 100%;

    @media (max-width: 1200px) {
        max-width: 960px;
    }

    @media (max-width: 992px) {
        max-width: 720px;
    }

    ${media.tablet`
        padding: 0 25px;
    `}

    ${media.phone`
        padding: 0 15px;
    `}
`;

export const Section = styled.section`
    padding: 140px 0;

    ${media.tablet`
        padding: 118px 0;
    `}

    ${media.phone`
        padding: 75px 0 70px 0;
    `}
`;

export const LargeParagraph = styled.p`
    font-size: 20px;
`;

export const MediumParagraph = styled.p`
    font-size: 16px;
    line-height: 1.4;
`;

export const SmallParagraph = styled.p`
    font-size: 14px;
    line-height: 18px;
`;

export const Button = styled.button`
    cursor: pointer;
    border: ${props => props.primary || props.disabled ? 'none' : `2px solid ${props.theme.primary}`};
    border-radius: 4px;
    width: 290px;
    height: 40px;
    font-size: 20px;
    font-weight: 700;
    background-color: ${props => props.primary ? props.theme.primary :
    props.disabled ? '#d7d7d7' : '#ffffff'};
    color: ${props => props.primary ? '#ffffff' :
    props.disabled ? '#8d8c8c' : props.theme.primary};

    &:hover {
        background-color: ${props => props.primary ? '#fc831f' : props.secondary ? '#fee6d2' : '#d7d7d7'};
    }

    ${media.phone`
        width: 270px;
    `}
`;

export const TextButton = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: none;
    font-size: 22px;
    font-weight: 700;
    color: ${props => props.theme.primary};

    &:hover {
        color: #fc831f;
    }
`;

export const Input = styled.input`
    padding: 18px 17px;
    border-radius: 4px;
    border: 1px solid #b7b7b7;
    outline: none;

    :focus {
        border-width: 2px;
    }

    ::placeholder {
        color: #8d8c8c;
        font-size: 16px;
    }
`;  

export const Fade = styled.div`
    display: ${props => props.show ? 'block' : 'none'};
    position: fixed;
    height: 100%;
    width: 100%;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,.2);
`;

export const Logo = styled.img`
    width: 134px;
`;

export const Nav = styled.ul`
    list-style: none;
    display: flex;

    > li {
        margin-right: 30px;
        :last-child {
            margin-right: 0;
        }
    }
`;

export const Link = styled.li`
    a {
        text-decoration: none;
        color: ${props => props.white ? '#ffffff' : 'black'};

        :hover {
            color: ${props => props.theme.primary};
            transition: color .2s;
        }
    }

    
`;