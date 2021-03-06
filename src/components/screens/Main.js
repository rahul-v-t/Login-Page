import React from 'react';
import styled from "styled-components";
import Logo from "../assets/images/steyp-logo.svg";
import Mask from "../assets/images/mask.png";
import Login from './Login';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Singup from './Singup';
import Name from './Name';
import Referal from './Referal';
import Pass from './Pass';
import Create from './Create';
import Otp from './Otp';
import Forget from './Forget';
import Verify from './Verify';
import Newpass from './Newpass';

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
                        <Route path="/pass" component={Pass} /> 
                        <Route path="/singup" component={Singup} /> 
                        <Route path="/login" component={Login} />
                        <Route path="/name" component={Name} />
                        <Route path="/referal" component={Referal} />
                        <Route path="/create" component={Create} /> 
                        <Route path="/otp" component={Otp} /> 
                        <Route path="/forget" component={Forget} /> 
                        <Route path="/verify" component={Verify} /> 
                        <Route path="/newpass" component={Newpass} /> 
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

