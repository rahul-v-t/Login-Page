import React from 'react';
import styled from "styled-components";
import Dot from "../assets/images/Group 2608.svg";
import Phone from "../assets/images/9180212681582004495.svg";
import {Link} from "react-router-dom";

export default function Login() {
    return (
        <>
        <Div>
             <Round>
                    <Dotted src={Dot} alt="image" />
             </Round>
             <H2>
                Let's root togrther and watch others grow
             </H2>
             <P>An inventive collaboration for smart dawn incling kids to match their vision</P>
             <Form>
                 <Input type="number"  placeholder="Enter Phone Number" inputmode="numeric" required />
                 <Dial><Call src={Phone} alt="Icon" /></Dial>
                 <P1>Forget Password?</P1>
                 <Link to={`/pass`}>
                    <Button type="submit" value="Continue" />
                 </Link>
             </Form>
             <P2>New to steyp? <Link to={`/singup`} > <Span>Create Account</Span> </Link></P2>
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
    padding: 26px 0;
`;
const Form = styled.form `
    position:relative;
`;
const Input = styled.input `
    padding: 14px 45px;
    border:1px solid #707070;
    width:100%;
    border-radius:4px;
    font-size:20px;
    &::-webkit-inner-spin-button, &::-webkit-outer-spin-button{
        -webkit-appearance:none;
        -moz-appearance: textfield;
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
}
`;
const P2 = styled.p `
    text-align:center;
    font-size: 18px;
    font-weight: 600;
    padding:10px;
    color:#707070;
`;
const Span = styled.span `
    color:blue;
    cursor:pointer;
`;
const Call = styled.img `
    width:100%;
    display:block;
`;
const Dial = styled.div `
    position:absolute;
    top: 2px;
    width: 9%;
    padding: 10px;   
`;