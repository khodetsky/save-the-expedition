import { AutorBackdrop, AutorModalStyled, AutorModalCloseBtn, AutorModalCloseBtnIcon, AutorModalCloseBtnSymbol } from './AutorizationModal.styled';
import { SignInForm } from '../SignInForm/SignInForm';
import { SignUpForm } from '../SignUpForm/SignUpForm';
import exitIcon from '../../images/sprite.svg'

export const AutorizationModal = ({ modalPosition, setModalType, closeModal, modalType }) => {

    function toggleTypeOfForm() {
        if (modalType === 'signIn') {
            setModalType('signUp')
        } else if (modalType === 'signUp') {
            setModalType('signIn')
        }
    }

    return (
        <div style={{position: 'relative'}}>
            <AutorBackdrop onClick={closeModal}>
            </AutorBackdrop>
            <AutorModalStyled modalPosition={modalPosition}>
                {modalType === 'signIn' && <SignInForm toggleTypeOfForm={toggleTypeOfForm} closeModal={closeModal} />}
                {modalType === 'signUp' && <SignUpForm toggleTypeOfForm={toggleTypeOfForm} closeModal={closeModal} />}
                <AutorModalCloseBtn type="button" onClick={closeModal}>
                  <AutorModalCloseBtnIcon>
                    <AutorModalCloseBtnSymbol href={exitIcon + '#cross'}></AutorModalCloseBtnSymbol>
                  </AutorModalCloseBtnIcon>
                </AutorModalCloseBtn>
            </AutorModalStyled>
        </div>
        
    )
}