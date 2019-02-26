import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Button, Section, Input } from './shared/shared';
import media from './shared/media';
import { ReactComponent as Upload} from '../assets/icons/upload.svg';
import down from '../assets/icons/caret-down.svg';
import url from '../api';
import { getDimentions } from '../helpers';

class Registration extends Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
        this.state= {
            positions: [],
            positionId: null,
            name: null,
            phone: null,
            email: null,
            image: null,
            errors: {}
        }
    }

    componentDidMount() {
        this.getPositions();
    }
    
    getPositions = async() => {
        const res = await fetch(`${url}/positions`);
        const data = await res.json();

        this.setState({positions: data.positions});
    }

    checkName = name => name.length > 2 && name.length <= 60;

    checkEmail = email => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        .test(email);

    checkPhone = phone => /^[\+]{0,1}380([0-9]{9})$/.test(phone);

    checkImage = async image => {
        const dimens = await getDimentions(image);
          
        if ((image.size > 2000 && image.size < 5000000) &&
            (image.type === 'image/jpeg') &&
            (dimens.every(dim => dim > 70))) {
                console.log('its okay')
                this.setState({image})
            }
        else this.setState({image: false})
    }

    validate = (e) => {
        const { id, value } = e.target;

        const types = {
            'name': () => this.checkName(value),
            'email': () => this.checkEmail(value),
            'phone': () => this.checkPhone(value),
        }
        const isValid = types[id]();
        if (isValid) this.setState({[id]: value});
        else this.setState({[id]: false})
    }

    registerUser = async () => {
        const {
            name,
            phone,
            email,
            image: photo,
            positionId: position_id 
        } = this.state;

        const fields = {name, phone, email, photo, position_id};
        const allFieldsFilled = Object.values(fields).every(field => field);

        if (!allFieldsFilled) return;
        
        const formData = new FormData()
        Object.entries(fields).forEach(([key, val]) => formData.append(`${key}`, val));

        fetch(`${url}/users`, {
            method: 'POST',
            headers: new Headers({'Token': await this.getToken()}),
            body: formData
        })
            .then(this.props.reset())
            .catch(error => console.log(error))
    }

    getToken = async() => {
        const res = await fetch(`${url}/token`);
        const data = await res.json();
        return data.token;
    }

    render() {
        const { name, email, image, phone } = this.state;

        return (
            <RegistrationSection>
                <Container id="sign">
                    <h2>Register to get a work</h2>
                    <h5>Attention! After successful registration and alert, update the list of users in the block from the tope</h5>
                    <FormsWrapper>
                        <Row>
                            <InputWrapper correct={name}>
                                <Input placeholder="Your name" id="name" onKeyUp={this.validate}/>
                                <label htmlFor="name">Your name</label>
                            </InputWrapper>
                            <InputWrapper correct={email}>
                                <Input placeholder="Your email" id="email" onKeyUp={this.validate}/>
                                <label htmlFor="email">Your email</label>
                            </InputWrapper>
                            <InputWrapper correct={phone}>
                                <Input placeholder="+38 (___)  ___ __ __" id="phone" onKeyUp={this.validate}/>
                                <label htmlFor="phone">Phone</label>
                            </InputWrapper>
                        </Row>
                        <Row>
                            <InputWrapper>
                                <Select 
                                    as={'select'} 
                                    defaultValue="placeholder" 
                                    onChange={e => this.setState({positionId: e.target.value})}>
                                <option value="placeholder" disabled hidden>Select your position</option>
                                {this.state.positions.map(({id, name}) => <option key={id} value={id}>{name}</option>)}
                                </Select>
                            </InputWrapper>
                            <InputWrapper correct={image}>
                                <Placeholder>
                                    <span>Upload your photo</span>
                                </Placeholder>
                                <FileInput id="photo" type="file" ref={this.fileInput} 
                                    onChange={e => this.checkImage(e.target.files[0])}/>
                                <label htmlFor="file">File format jpg  up to 5 MB, the minimum size of 70x70px</label>
                                <Button secondary onClick={() => this.fileInput.current.click()}>
                                    <span>Upload</span>
                                    <UploadIcon />
                                </Button>
                            </InputWrapper>
                        </Row>
                    </FormsWrapper>
                    <SignUp onClick={this.registerUser}>Sign Up</SignUp>
                </Container>
            </RegistrationSection>
        );
    }
};

export default Registration;

const RegistrationSection = styled(Section)`
    padding-top: 0;
    padding-bottom: 146px;
    text-align: center;

    h2 {
        margin-bottom: 10px;

        ${media.tablet`
            margin-bottom: 17px;
        `}
    }

    h5 {
        margin-bottom: 63px;

        ${media.tablet`
            max-width: 52%;
            margin: 0 auto 52px;
        `}

        ${media.phone`
            max-width: 100%;
        `}
    }

    ${media.tablet`
        padding-top: 14px;
    `}
`;

const SignUp = styled(Button)`
    margin-top: 62px;
`;

const FormsWrapper = styled.div``;

const Row = styled.div`
    display: flex;
    margin-bottom: 40px;

    ${media.phone`
        flex-direction: column;
    `}
    
    > div {
        flex: 1;
        margin-right: 30px;

        ${media.phone`
            margin: 0 0 35px;
        `}

        &:last-of-type {
            margin-right: 0;

            ${media.phone`
                margin-bottom: 0;
            `}
        }
    }

    :last-of-type {
        margin-bottom: 0;
        
        div:last-of-type {
            display: flex;

            button {
                height: 100%;
            }

            label {
                top: unset;
                bottom: -25px;

                ${media.phone`
                    max-width: 80%;
                    bottom: -44px;
                    text-align: left;
                `}
            }
        }
    }
`;

const InputWrapper = styled.div`
    position: relative;

    ${Input} {
        border-color: ${props => props.correct === false ? '#f44336' : '#b7b7b7' };
    }

    input {
        width: 100%;
    }

    label {
        padding: 0 4px;
        background-color: #ffffff;
        transform: translateY(-50%);
        font-size: 12px;
        color: ${props => props.correct === false ? '#f44336' : '#8d8c8c'};
        position: absolute;
        left: 17px;
        top: 0;
    }

    ${Button} {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        z-index: 10;
        width: 168px;

        svg {
            display: none;
        }

        ${media.tablet`
            width: 206px;
        `}

        ${media.phone`
            height: auto !important;
            width: 70px;
            
            span {
                display: none;
            };

            svg {
                display: flex;
            }
        `}
    }
`;

const UploadIcon = styled(Upload)`
    fill: ${props => props.theme.primary};
    margin: auto;

    ${media.phone`
        display: block;
    `}
`;

const Placeholder = styled.div`
    width: 100%;
    border-radius: 4px;
    border: 1px solid #b7b7b7;
    position: relative;
    left: 2px;
    padding: 18px 17px;
    color: #8d8c8c;
`;

const FileInput = styled(Input)`
    width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
`;

const Select = styled(Input)`
    width: 100%;
    appearance: none;
    position: relative;
    background-image: url(${down});
    background-repeat: no-repeat;
    background-position-y: 50%;
    background-position-x: 97%;
`;