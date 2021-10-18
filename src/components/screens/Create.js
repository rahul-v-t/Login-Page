import React, {useState,useEffect} from 'react';
import styled from "styled-components";
import Dot from "../assets/images/Group 2608.svg";
import Tick from "../assets/images/Group 2645.svg";
import Cross from "../assets/images/Group 2938.svg";
import Phone from "../assets/images/Layer 3.svg";
import Eye from "../assets/images/eye.svg";
import Noteye from "../assets/images/hide.svg";
import {Link} from "react-router-dom";

export default function Login() {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
      };
    const [image,setImage] = useState(false);
    const toggle = ()=>{
        setImage(!image);
    }   

    const usePasswordValidation = ({ firstPassword = "", secondPassword = "" }) => {
        const [validLength, setValidLength] = useState(null);
        const [hasNumber, setHasNumber] = useState(null);
        const [upperCase, setUpperCase] = useState(null);
        const [lowerCase, setLowerCase] = useState(null);
        const [specialChar, setSpecialChar] = useState(null);
        const [match, setMatch] = useState(null);
        
          useEffect(() => {
            setValidLength(firstPassword.length >= 8 ? true : false);
            setUpperCase(firstPassword.toLowerCase() !== firstPassword);
            setLowerCase(firstPassword.toUpperCase() !== firstPassword);
            setMatch(firstPassword && firstPassword === secondPassword);
            setSpecialChar(/[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(firstPassword));
            setHasNumber(/\d/.test(firstPassword));
          }, [firstPassword, secondPassword]);
          return [validLength, hasNumber, upperCase, lowerCase, match, specialChar];
        }

        const [password, setPassword] = useState({
            firstPassword: "",
            secondPassword: "",
           });
        
      const [
      validLength,
      hasNumber,
      upperCase,
      lowerCase,
      match,
      specialChar,
      ] = usePasswordValidation({
      firstPassword: password.firstPassword,
      secondPassword: password.secondPassword,
      });
      
      
      const setFirst = (event) => {
        setPassword({ ...password, firstPassword: event.target.value });
      };
      const setSecond = (event) => {
        setPassword({ ...password, secondPassword: event.target.value });
      };

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
                 <Input  type={passwordShown ? "text" : "password"}  placeholder="Enter New Password" onChange={setFirst} required />
                 <Dial><Call src={Phone} alt="Icon" /></Dial>
                 <CloseImage src={Eye} alt ="Open" onClick={() => (toggle(),togglePasswordVisiblity())} image={image}/>
                 <OpenImage src={Noteye} alt="CLose" onClick={() => (toggle(),togglePasswordVisiblity())} image={image} />
                 <Inputt type={passwordShown ? "text" : "password"}  placeholder="Confirm New Password" onChange={setSecond} required />
                 <Lock><Locked src={Phone} alt="Icon" /></Lock>
                 <Confirm src={Eye} alt="Icon" onClick={() => (toggle(),togglePasswordVisiblity())} image={image} />
                 <Confirmeye src={Noteye} alt="Icon" onClick={() => (toggle(),togglePasswordVisiblity())} image={image} />
                 <Not>{match ? <span></span> : <Miss>Password mismatch</Miss>}</Not>
                 <List>
                        <Lists className="validLength" validLength={validLength} >
                            <Image   src = {validLength ? Tick : Cross} /> Contains atleast 8 character
                        </Lists>
                        <Lists className="lowerCase"lowerCase={lowerCase} >
                        <Image   src =  {lowerCase ? Tick : Cross} /> Contains a small letter (a-z)
                        </Lists>
                        <Lists className="upperCase" upperCase={upperCase} >
                        <Image   src = {upperCase ? Tick : Cross} /> Contains a capital letter (A-z)
                        </Lists>
                        <Lists className="hasNumber" hasNumber={hasNumber} >
                        <Image   src =  {hasNumber ? Tick : Cross} /> Contains atleast a number
                        </Lists>
                        <Lists className="specialChar" specialChar={specialChar} >
                        <Image   src ={specialChar ? Tick : ''} /> Special Character {"*,&,%,$,# "}
                        </Lists>
                </List>
                 <Link to={`/login`} > <Button type="submit" value="Continue" /> </Link>
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
    font-size:20px;
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
    top: 4px;
    width: 9%;
    padding: 10px;   
`;
const Inputt = styled.input `
    padding: 14px 45px;
    border:1px solid #707070;
    width:100%;
    border-radius:4px;
    margin-bottom: 60px;
    font-size:20px;
`;
const Lock = styled.div `
    position:absolute;
    top: 122px;
    width: 9%;
    padding: 10px;   
`;
const Locked = styled.img `
    width:100%;
    display:block;
`;
const OpenImage = styled.img`
     display: ${({image})=>(image ? 'block' :'none')}; 
     width: 35px;
     position:absolute;
     top: 18px;
     right: 4px;
     cursor:pointer;
`;
const CloseImage = styled.img `
    position:absolute;
    top: 18px;
    right: 4px;
    width: 35px;
    cursor:pointer;
    display: ${({image})=>(image ? 'none' :'block')};
`;
const Confirm = styled.img `
    position:absolute;
    top: 137px;
    right: 4px;
    cursor:pointer;
    display: ${({image})=>(image ? 'none' :'block')};
    width: 35px;
`;
const Confirmeye = styled.img `
    position:absolute;
    top: 137px;
    right: 4px;
    cursor:pointer;
    display: ${({image})=>(image ? 'block' :'none')};
    width: 35px;
`;
const List = styled.ul `
    margin-top: 40px;
    margin-bottom: 40px;
}
`;
const Lists = styled.li `
    display:flex;
    align-items:center;
    font-size:20px;
    &.validLength{
        color: ${({validLength})=>(validLength ? 'green' :'red')};
    }
    &.lowerCase{
        color: ${({lowerCase})=>(lowerCase ? 'green' :'red')};
    }
    &.upperCase{
        color: ${({upperCase})=>(upperCase ? 'green' :'red')};
    }
    &.hasNumber{
        color: ${({hasNumber})=>(hasNumber ? 'green' :'red')};
    }
    &.specialChar{
        color: ${({specialChar})=>(specialChar ? 'green' :'')};
    }
`;
const Miss = styled.span `
    color:red;
`;
const Not = styled.p `
    margin-top: -52px;
`;
const Image = styled.img `
    margin-right:10px;
`;