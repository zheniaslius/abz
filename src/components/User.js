import React from 'react';
import styled from 'styled-components';
import media from './shared/media';
import { SmallParagraph } from './shared/shared';

const User = props => {
    const {
        name,
        email,
        position,
        photo,
        phone
    } = props;

    return (
        <UserWrapper>
            <Photo src={photo}/>
            <Details>
                <h3>{name}</h3>
                <SmallParagraph>{position}</SmallParagraph>
                <SmallParagraph>{email}</SmallParagraph>
                <SmallParagraph>{phone}</SmallParagraph>
            </Details>
        </UserWrapper>
    );
};

export default User;

const UserWrapper = styled.div`
    display: flex;
    flex-basis: 33.3%;

    ${media.tablet`
        flex-direction: column;
        align-items: center;
        margin-bottom: 47px;
    `}

    ${media.phone`
        margin-bottom: 30px;
    `}
`;

const Photo = styled.img`
    margin-right: 8px;
    object-fit: cover;
    height: 70px;
    width: 70px;
    border-radius: 50%;

    ${media.tablet`
        margin-right: 0;
    `}
`;

const Details = styled.div`
    margin-top: 27px;
    display: flex;
    flex-direction: column;
    text-align: left;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    h3 {
        font-weight: 700;

        ${media.tablet`
            font-size: 22px;
        `}
    }

    ${media.tablet`
        text-align: center;
        margin-top: 11px;
    `}
`;