import React from 'react';
import styled from "styled-components";
import Dot from "../assets/images/Group 2608.svg";
import Phone from "../assets/images/Layer 3.svg";
import {Link} from "react-router-dom";

export default function Login() {
    return (
        <>
        <Div>
             <Round>
                    <Dotted src={Dot} alt="image" />
             </Round>
             <H2>
                Enter Password
             </H2>
             <P>Enter your password to login</P>
             <Form>
                 <Input type="password"  placeholder="Enter Password" inputmode="numeric" required />
                 <Dial><Call src={Phone} alt="Icon" /></Dial>
                 <P1>Login with otp</P1>
                 <Link to={`/otp`}>
                    <Button type="submit" value="Submit" />
                 </Link>
             </Form>
        </Div>
        </>
    )
}

const Div = styled.div `
    padding: 200px 150px;
`;
const Round = styled.div `
    width:7%;
`;
const Dotted = styled.img `
    width:100%;
    display:block;
`;
const H2 = styled.h2 `
    width: 80%;
    font-size: 28px;
    font-weight: 600;
`;
const P = styled.p `
    color:#707070;
    font-size: 20px;
    padding: 10px 0;
`;
const Form = styled.form `
    position:relative;
`;
const Input = styled.input `
    padding: 14px 45px;
    border:1px solid;
    width:100%;
    border-radius:4px;
    &::-webkit-inner-spin-button, &::-webkit-outer-spin-button{
        -webkit-appearance:none;
        -moz-appearance:textfield;
    }
`;
const P1 = styled.p `
    text-align: end;
    color: blue;
    cursor:pointer;
    margin-bottom:30px;
    font-size: 18px;
    font-weight: 600;
    padding:10px;
`;
const Button = styled.input `
    width: 100%;
    padding: 15px 0px;
    font-size: 20px;
    cursor:pointer;
    background:#2bc871;
    border:none;
    color:#fff;
    border-radius:4px;
`;
const Call = styled.img `
    width:100%;
    display:block;
`;
const Dial = styled.div `
    position:absolute;
    top: 0;
    width: 9%;
    padding: 10px;   
`;
