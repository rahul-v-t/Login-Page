import React from 'react';
import styled from "styled-components";
import Logo from "../assets/images/steyp-logo.svg";
import Mask from "../assets/images/mask.png";
import Login from './Login';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Otp from './Otp';


export default function Main() {
    return (
        <> 
        <Router>
            <Home>
                <Left>
                    <Logocontainer>
                        <Logoimg src={Logo} alt="Logo" />
                    </Logocontainer>
                </Left>
                <Right>
                    <>
                    <Switch>
                        <Route path="/" exact component={Login} />
                        <Route path="/otp" component={Otp} /> 
                    </Switch>
                    </>
                </Right>
            </Home>
        </Router>
        </>
    );
}

const Home = styled.section `
    display:flex;
    background: #faf8fd;

`;
const Left = styled.div `
    background: url(${Mask});
    background-size: cover;
    width:50%;
    height:100vh;
`;
const Right = styled.div `
    width:50%;
    background:#fff;
`;
const Logocontainer = styled.div `
    width: 20%;
    margin-top: 70px;
    margin-left: 85px;
`;
const Logoimg = styled.img `
    width:100%;
    display: block;
`;

