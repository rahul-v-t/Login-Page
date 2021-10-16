import React from 'react';
import styled from "styled-components";
import Dot from "../assets/images/Group 2608.svg";
import Phone from "../assets/images/Layer 3.svg";
import Eye from "../assets/images/eye.svg";
import {Link} from "react-router-dom";

export default function Login() {
    return (
        <>
        <Div>
             <Round>
                    <Dotted src={Dot} alt="image" />
             </Round>
             <H2>
                Create a Password for your account
             </H2>
             <Form>
                 <Input type="password"  placeholder="Enter New Password" required />
                 <Dial><Call src={Phone} alt="Icon" /></Dial>
                 <Hide><Hidden src={Eye} alt="Icon" /></Hide>
                 <Inputt type="password"  placeholder="Confirm New Password" required />
                 <Lock><Locked src={Phone} alt="Icon" /></Lock>
                 <Conf><Confirm src={Eye} alt="Icon" /></Conf>
                 <Link to={`/name`} > <Button type="submit" value="Continue" /> </Link>
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
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 50px;
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
    margin-bottom: 60px;
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
    top: 0;
    width: 9%;
    padding: 10px;   
`;
const Inputt = styled.input `
    padding: 14px 45px;
    border:1px solid #707070;
    width:100%;
    border-radius:4px;
    margin-bottom: 60px;
`;
const Lock = styled.div `
    position:absolute;
    top: 109px;
    width: 9%;
    padding: 10px;   
`;
const Locked = styled.img `
    width:100%;
    display:block;
`;
const Hide = styled.div `
    position:absolute;
    top: 11px;
    right: 4px;
`;
const Hidden = styled.img `
     width:100%;
     display: block;
`;
const Conf = styled.div `
    position:absolute;
    top: 121px;
    right: 4px;
`;
const Confirm = styled.img `
     width:100%;
     display: block;
`;