import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Button, Section } from './shared/shared';
import media from './shared/media';
import User from '../components/User';
import url from '../api';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            page: 1
        }
        this.totalPages = 0;
    }

    componentDidMount() {
        this.getUsers();
    }

    componentDidUpdate() {
        if (this.props.resetUsers) {
            this.getUsers({reset: true});
        }
    }
    
    isLastPage = () => this.state.page === this.totalPages

    getUsers = async({reset = false} = {}) => { 
        const page = reset ? 1 : this.state.page;
        const res = await fetch(`${url}/users?page=${page}&count=6`);
        const data = await res.json();
        this.totalPages = data.total_pages;

        if (this.isLastPage()) return;
        
        if (reset) this.setState({users: data.users, page: 2})
        else this.updateUsers(data.users);
    }
    
    updateUsers = newUsers => {
        const { users, page } = this.state;
        this.setState({
            users: [...users, ...newUsers],
            page: page + 1 
        });
    }

    render() {
        const { users } = this.state;
        const lastPage = this.isLastPage();
        
        return (
            <UsersSection>
                <Container id="users">
                    <h2>Our cheerful users</h2>
                    <h5>Attention! Sorting users by registration date</h5>
                    <UsersWrapper>
                        {
                            users.map(user => <User key={user.id} {...user} />)
                        }
                    </UsersWrapper>
                    {!lastPage && <Button secondary onClick={this.getUsers}>Show more</Button>}
                </Container>
            </UsersSection>
        );
    }
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

        ${media.phone`
            max-width: 67%;
            margin: 0 auto 35px;
        `}
    }

    ${Button} {
        margin-top: 53px;

        ${media.tablet`
            margin-top: 78px;
        `}

        ${media.phone`
            margin-top: 0;
        `}
    }
`;

const UsersWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 60px 50px;

    ${media.phone`
        grid-row-gap: 30px;
    `}
`;