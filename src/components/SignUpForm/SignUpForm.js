import { Formik } from 'formik';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
    SignInFormStyled, InputContainer, InputStyled, LabelStyled,
    ErrorMessage, FormHeader,  SignUpBtn, SignInContainer, EnterBtn, FormText
} from './SignUpForm.styled';
import { auth, writeUserDataInDB } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';;

export const SignUpForm = ({ toggleTypeOfForm, closeModal }) => {

    const initialValues = {
        name: '',
        email: '',
        password: '',
    };

    const initNotifixParams = {
        position: 'center-top',
        distance: '40px',
        timeout: 3000,
        fontSize: '15px',
        width: '320px',
        pauseOnHover: true,
    };

    const registrationUser = ({name, email, password}, { resetForm }) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(credentials => {
                writeUserDataInDB(credentials.user.uid, name, email);
                Notify.success(`Ви успішно зареєструвалися! Вашого робота звуть ${name}`, initNotifixParams);
                closeModal();
                resetForm();
            })
            .catch(e => {
                if (e.message === 'Firebase: Error (auth/email-already-exists).') {
                  Notify.failure('Використайте іншу адресу електронної пошти! Користувач з такою вже існує.', initNotifixParams);
                }
            });
      
    };

    function validateName(value) {
        let error;
        if (!value) {
         error = 'Обов\'язкове поле*';
        } else if (value.length < 4) {
            error = 'Має містити не менше ніж 4 символи';
        } else if (value.length > 15) {
            error = 'Має містити не більше ніж 15 символів'
        }
        return error;
    };

    function validateEmail(value) {
       let error;
       if (!value) {
         error = 'Обов\'язкове поле*';
       } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
         error = 'Невірна адреса електронної пошти*';
       }
       return error;
    };
    
    function validatePassword(value) {
       let error;
       if (!value) {
         error = 'Обов\'язкове поле*';
       } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(value)) {
         error = 'Має містити принаймні одну цифру, одну велику та малу літеру та принаймні 8 або більше символів*';
       }
       return error;
    };

    return (
        <>
            <Formik initialValues={initialValues} onSubmit={registrationUser}>
                {({ errors, touched }) => (
                    <>
                        <FormHeader>Реєстрація нового <br />користувача</FormHeader>
                        <FormText>Вигадайте ім'я для вашого робота</FormText>
                        <SignInFormStyled>
                            <InputContainer>
                                <InputStyled
                                  id="name"
                                  type="name"
                                  name="name"
                                  autoComplete="off"
                                  placeholder=" "
                                  validate={validateName}
                                />
                                <LabelStyled htmlFor="name">Ім'я робота</LabelStyled>
                                {errors.name && touched.name && <ErrorMessage>{errors.name}</ErrorMessage>}
                            </InputContainer>

                            <InputContainer>
                                <InputStyled
                                  id="email"
                                  type="email"
                                  name="email"
                                  autoComplete="off"
                                  placeholder=" "
                                  validate={validateEmail}
                                />
                                <LabelStyled htmlFor="email">Електронна пошта</LabelStyled>
                                {errors.email && touched.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                            </InputContainer>
                            
                            <InputContainer>
                                <InputStyled
                                  id="password"
                                  type="password"
                                  name="password"
                                  autoComplete="off"
                                  placeholder=" "
                                  validate={validatePassword}
                                />
                                <LabelStyled htmlFor="password">Пароль</LabelStyled>
                                {errors.password && touched.password && <ErrorMessage>{errors.password}</ErrorMessage>}
                            </InputContainer>
                            
                            <SignUpBtn type="submit">Реєстрація</SignUpBtn>
                            <SignInContainer>
                                <p>Уже зареєстровані?</p>
                                <EnterBtn type="button" onClick={toggleTypeOfForm}>Увійдіть до аккаунту</EnterBtn>
                            </SignInContainer>
                        </SignInFormStyled>
                    </>
                )}
            </Formik>
        </>
    )
}