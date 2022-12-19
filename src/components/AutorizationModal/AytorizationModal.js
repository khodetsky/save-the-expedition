import { AutorBackdrop, AutorModalStyled, AutorModalCloseBtn, AutorModalCloseBtnIcon, AutorModalCloseBtnSymbol } from './AutorizationModal.styled';
import { useState } from 'react';
import { SignInForm } from '../SignInForm/SignInForm';
import { SignUpForm } from '../SignUpForm/SignUpForm';
import exitIcon from '../../images/sprite.svg'

export const AutorizationModal = ({ closeModal }) => {
    const [typeOfForm, setTypeOfForm] = useState('signIn'); 

    function toggleTypeOfForm() {
        if (typeOfForm === 'signIn') {
            setTypeOfForm('signUp')
        } else if (typeOfForm === 'signUp') {
            setTypeOfForm('signIn')
        }
    }

    return (
        <div>
            <AutorBackdrop onClick={closeModal}>
            </AutorBackdrop>
            <AutorModalStyled>
                {typeOfForm === 'signIn' && <SignInForm toggleTypeOfForm={toggleTypeOfForm}/>}
                {typeOfForm === 'signUp' && <SignUpForm toggleTypeOfForm={toggleTypeOfForm}/>}
                <AutorModalCloseBtn type="button" onClick={closeModal}>
                  <AutorModalCloseBtnIcon>
                    <AutorModalCloseBtnSymbol href={exitIcon + '#cross'}></AutorModalCloseBtnSymbol>
                  </AutorModalCloseBtnIcon>
                </AutorModalCloseBtn>
            </AutorModalStyled>
        </div>
        
    )
}