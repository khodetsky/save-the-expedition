import styled from "styled-components";
import { Form, Field } from 'formik';

export const FormHeader = styled.h2`
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    line-height: 1.25;
    text-align: center;
`

export const FormText = styled.p`
    font-family: 'Raleway', sans-serif;
    font-size: 14px;
    line-height: 1.25;
    margin-top: 5px;
    color: #475467;
`

export const SignInFormStyled = styled(Form)`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const InputContainer = styled.div`
    position: relative;
    display: block;
`

export const InputStyled = styled(Field)`
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    line-height: 1.25;  
    box-sizing: border-box;
    width: 300px;
    color: #475467;
    border: 1px solid #475467;
    background-color: #FFFFFF;
    border-radius: 8px;
    margin-top: 35px;
    padding: 10px 6px;
    outline: none;
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);    
    &:focus {
      border-color: #7B61FF;
    }
`

export const LabelStyled = styled.label`
    position: absolute;
    left: 16px;
    top: 73%;
    transform: translateY(-50%);

    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    line-height: 1.25;
    color: #475467;

    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
      color 250ms cubic-bezier(0.4, 0, 0.2, 1); 
    ${InputStyled}:focus + & {
      transform: translateY(-42px);
      color: #7B61FF;
    }   
    ${InputStyled}:not(:placeholder-shown) + & {
      transform: translateY(-42px);
    }
`

export const ErrorMessage = styled.div`
    font-family: 'Raleway', sans-serif;
    font-size: 12px;
    line-height: 1.25;
    color: red; 
    position: absolute;
    margin-top: 3px;
`

export const SignUpBtn = styled.button`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 10px 18px;
    margin-top: 50px;
    width: 300px;
    height: 44px;

    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #FFFFFF;
    letter-spacing: 1px;
    background-color: #7B61FF;
    cursor: pointer;

    border: none;
    border-radius: 8px;

    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);

    :hover, :focus {
        background-color: #7F56D9;
    };
`

export const EnterBtn = styled.button`
    padding: 0;
    margin-left: 5px;

    border: none;
    color: rgb(85, 26, 139);
    text-decoration: underline;
    cursor: pointer;

    :hover, :focus {
        color: rgb(67 28 102);
    }
`

export const SignInContainer = styled.div`
    display: flex;
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    line-height: 1.25;
    margin-top: 15px;
    color: #475467;
`