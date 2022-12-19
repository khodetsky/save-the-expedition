import { Formik } from 'formik';
import {
    SignInFormStyled, InputContainer, InputStyled, LabelStyled,
    ErrorMessage, SignInBtn, FormHeader, FormText, RegistrationBtn, RegistrationContainer
} from './SignInForm.styled';

export const SignInForm = ({toggleTypeOfForm}) => {
    const initialValues = {
        email: '',
        password: '',
    };

    const enterUser = (values, { resetForm }) => {
        console.log(values)
      resetForm();
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
            <Formik initialValues={initialValues} onSubmit={enterUser}>
                {({ errors, touched }) => (
                    <>
                        <FormHeader>Увійдіть до аккаунту</FormHeader>
                        <FormText>Ласкаво просимо назад! Введіть свої дані</FormText>
                        <SignInFormStyled>
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

                            <SignInBtn type="submit">Увійти</SignInBtn>
                            <RegistrationContainer>
                                <p>Вперше на сайті?</p>
                                <RegistrationBtn type="button" onClick={toggleTypeOfForm}>Зареєструйтесь</RegistrationBtn>
                            </RegistrationContainer>
                        </SignInFormStyled>
                    </>
                )}
            </Formik>
        </>
    )
}