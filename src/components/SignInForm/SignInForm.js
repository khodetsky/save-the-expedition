import { Formik } from 'formik';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
    SignInFormStyled, InputContainer, InputStyled, LabelStyled,
    ErrorMessage, SignInBtn, FormHeader, FormText, RegistrationBtn, RegistrationContainer
} from './SignInForm.styled';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

// =============================
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// Notify.success('Sol lucet omnibus');
// Notify.failure('Qui timide rogat docet negare');
// Notify.warning('Memento te hominem esse');
// Notify.info('Cogito ergo sum');

// Notiflix.Notify.init({
// width: '280px',
// position: 'right-top',  right-top right-bottom left-top left-bottom center-top center-bottom center-center
// distance: '10px',
// opacity: 1,
// borderRadius: '5px',
// rtl: false,
// timeout: 3000,
// messageMaxLength: 110,
// backOverlay: false,
// backOverlayColor: 'rgba(0,0,0,0.5)',
// plainText: true,
// showOnlyTheLastOne: false,
// clickToClose: false,
// pauseOnHover: true,
// ID: 'NotiflixNotify',
// className: 'notiflix-notify',
// zindex: 4001,
// fontFamily: 'Quicksand',
// fontSize: '13px',
// cssAnimation: true,
// cssAnimationDuration: 400,
// cssAnimationStyle: 'fade',
// closeButton: false,
// useIcon: true,
// useFontAwesome: false,
// fontAwesomeIconStyle: 'basic',
//  fontAwesomeIconSize: '34px',
// })
// ============================

export const SignInForm = ({ toggleTypeOfForm, closeModal }) => {

  const initialValues = {
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

  const enterUser = ({ email, password }, { resetForm }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(credentials => {
        // додати переадресацію на сторінку профілю
        Notify.success('Ласкаво просимо назад! Щоб переглянути свій профіль натисніть на сповіщення.', initNotifixParams);
        closeModal();
        resetForm();
      })
      .catch(e => {
        if (e.message === 'Firebase: Error (auth/user-not-found).') {
          Notify.failure('Неправильно введені логін або пароль. Перевірте введені дані!', initNotifixParams);
        }
      });
  }

    function validateEmail(value) {
       let error;
       if (!value) {
         error = 'Обов\'язкове поле*';
       }
      //  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      //    error = 'Невірна адреса електронної пошти*';
      //  }
       return error;
    };
    
    function validatePassword(value) {
       let error;
       if (!value) {
         error = 'Обов\'язкове поле*';
       }
      //  else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(value)) {
      //    error = 'Має містити принаймні одну цифру, одну велику та малу літеру та принаймні 8 або більше символів*';
      //  }
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