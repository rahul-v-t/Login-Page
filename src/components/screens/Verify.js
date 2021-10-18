import React from 'react';
import styled from "styled-components";
import Dot from "../assets/images/Group 2608.svg";
import Phone from "../assets/images/9180212681582004495.svg";
import {Link} from "react-router-dom";

export default function Login() {
    const [counter, setCounter] = React.useState(29);
    React.useEffect(() => {
        const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);
    const resendOtp = () =>{
        setCounter(29);
    }
    return (
        <>
        <Div>
             <Round>
                    <Dotted src={Dot} alt="image" />
             </Round>
             <H2>
             Password reset setup (2/3)
             </H2>
             <P>Recovery code was sent to your phone number. Please enter the code</P>
             <Form>
                 <Input type="number"  placeholder="Enter OTP" inputmode="numeric" required />
                 <Dial><Call src={Phone} alt="Icon" /></Dial>
                 <P1 onClick={counter==0 ? resendOtp : "" } counter={counter} > Resend OTP  <Resent style={{fontWeight:"bold"}} counter={counter} > in 00:{counter}</Resent> </P1>
                    <Link to="/newpass"><Button type="submit" value="Verify " /></Link>
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
    width: 85%;
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
    cursor:pointer;
    margin-bottom:30px;
    font-size: 18px;
    font-weight: 600;
    padding:10px;
    color: ${({counter})=>(counter==0 ? 'red' :'#707070')};
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
    top: 2px;
    width: 9%;
    padding: 10px;   
`;
const Resent = styled.span `
    display: ${({counter})=>(counter==0 ? 'none' :'inline-block')};  
`;