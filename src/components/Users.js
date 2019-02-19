import React from 'react';
import styled from 'styled-components';
import { Container, Button, Section,
 SmallParagraph } from './shared/shared';
import user from '../assets/imgs/user-adolph-2x.png';
import media from './shared/media';

const Users = () => {
    return (
        <UsersSection>
            <Container id="users">
                <h2>Our cheerful users</h2>
                <h5>Attention! Sorting users by registration date</h5>
                <UsersWrapper>
                    <User>
                        <Photo src={user}/>
                        <Details>
                            <h3>Noah</h3>
                            <SmallParagraph>Leading specialist of the Control Department</SmallParagraph>
                            <SmallParagraph>noah.controldepartment@gmail.com  </SmallParagraph>
                            <SmallParagraph>+38 (050) 678 03 24</SmallParagraph>
                        </Details>
                    </User>
                    <User>
                        <Photo src={user}/>
                        <Details>
                            <h3>Noah</h3>
                            <SmallParagraph>Leading specialist of the Control Department</SmallParagraph>
                            <SmallParagraph>noah.controldepartment@gmail.com  </SmallParagraph>
                            <SmallParagraph>+38 (050) 678 03 24</SmallParagraph>
                        </Details>
                    </User>
                    <User>
                        <Photo src={user}/>
                        <Details>
                            <h3>Noah</h3>
                            <SmallParagraph>Leading specialist of the Control Department</SmallParagraph>
                            <SmallParagraph>noah.controldepartment@gmail.com  </SmallParagraph>
                            <SmallParagraph>+38 (050) 678 03 24</SmallParagraph>
                        </Details>
                    </User>
                    <User>
                        <Photo src={user}/>
                        <Details>
                            <h3>Noah</h3>
                            <SmallParagraph>Leading specialist of the Control Department</SmallParagraph>
                            <SmallParagraph>noah.controldepartment@gmail.com  </SmallParagraph>
                            <SmallParagraph>+38 (050) 678 03 24</SmallParagraph>
                        </Details>
                    </User>
                    <User>
                        <Photo src={user}/>
                        <Details>
                            <h3>Noah</h3>
                            <SmallParagraph>Leading specialist of the Control Department</SmallParagraph>
                            <SmallParagraph>noah.controldepartment@gmail.com  </SmallParagraph>
                            <SmallParagraph>+38 (050) 678 03 24</SmallParagraph>
                        </Details>
                    </User>
                    <User>
                        <Photo src={user}/>
                        <Details>
                            <h3>Noah</h3>
                            <SmallParagraph>Leading specialist of the Control Department</SmallParagraph>
                            <SmallParagraph>noah.controldepartment@gmail.com  </SmallParagraph>
                            <SmallParagraph>+38 (050) 678 03 24</SmallParagraph>
                        </Details>
                    </User>
                </UsersWrapper>
                <Button secondary>Show more</Button>
            </Container>
        </UsersSection>
    );
};

export default Users;

const UsersSection = styled(Section)`
    padding-top: 133px;
    padding-bottom: 153px;
    text-align: center;

    h2 {
        margin-bottom: 10px;
    }

    h5 {
        margin-bottom: 58px;

        ${media.tablet`
            margin-bottom: 35px;
        `}
    }

    ${Button} {
        margin-top: 53px;

        ${media.tablet`
            margin-top: 78px;
        `}
    }
`;

const UsersWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: -80px;
`;

const User = styled.div`
    display: flex;
    flex-basis: 33.3%;
    margin-bottom: 80px;

    ${media.tablet`
        flex-direction: column;
        align-items: center;
        margin-bottom: 47px;
    `}
`;

const Photo = styled.img`
    margin-right: 8px;
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