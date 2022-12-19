import { Formik } from 'formik';
import {
    SignInFormStyled, InputContainer, InputStyled, LabelStyled,
    ErrorMessage, FormHeader,  SignUpBtn, SignInContainer, EnterBtn
} from './SignUpForm.styled';

export const SignUpForm = ({ toggleTypeOfForm }) => {

    const initialValues = {
        name: '',
        email: '',
        password: '',
    };

    const registrationUser = (values, { resetForm }) => {
        console.log(values)
      resetForm();
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
                                <LabelStyled htmlFor="name">Ім'я</LabelStyled>
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