import {
    Background, Main, SectionContainer, TextContainer, Text, SectionTitle, ListItem,
    SectionSubtitle, NavBtnList, RegistrationBtn
} from './Help.styled';
import { useState } from 'react';
import { PageFooter } from '../../components/PageFooter/PageFooter';
import { NavigationButton } from '../../components/NavigationButton/NavigationButton';

import img1 from '../../images/helpPage/help1.webp';
import img2 from '../../images/helpPage/help2.webp';
import img3 from '../../images/helpPage/help3.webp';
import img4 from '../../images/helpPage/help4.webp';
import img5 from '../../images/helpPage/help5.webp';
import img6 from '../../images/helpPage/help6.webp';
import img7 from '../../images/helpPage/help7.webp';

export const Help = ({ setModalPosition, setModalType, openAutorizationModal }) => {

    function openAuthModal() {
        setModalPosition(window.scrollY);
        setModalType('signUp');
        openAutorizationModal();
    }

    return (
        <Background >
            <Main >
                <SectionContainer style={{ paddingTop: 130 }}>
                    <SectionTitle>Вхід та реєстрація</SectionTitle>
                    <Text>У кожного зареєстрованого користувача є свій робот з власним іменем, якому він допомагає. Гру можна грати не авторизованим, проте ваші набрані очки та прогрес не зберігатимуться.</Text>
                    <TextContainer>
                        <Text>Щоб увійти натисніть відповідну кнопку на панелі справа та введіть свої дані у форму.</Text>
                        <img src={img1} alt='фото кнопки для входу'/>
                    </TextContainer>
                    <TextContainer>
                        <Text>Якщо ви вперше на сторінці, натисніть кнопку реєстрації знизу форми входу.</Text>
                        <img src={img2} alt='фото кнопки реєстрації'/>
                    </TextContainer>
                    <TextContainer>
                        <Text>Після успішного входу або реєстрації вам відкриється доступ до профілю, в якому ви зможете відслідковувати власний прогрес.</Text>
                        <img src={img3} alt='фото кнопки переходу до профілю'/>
                    </TextContainer>
                </SectionContainer>
                <SectionContainer>
                    <SectionTitle style={{marginTop: 50}}>Процес гри</SectionTitle>
                    <TextContainer>
                        <Text>У вкладці "Грати" оберіть категорію слів, які ви хочете відгадувати.</Text>
                        <img src={img4} alt='фото категорії слів'/>
                    </TextContainer>
                    <TextContainer>
                        <SectionSubtitle>Правила гри</SectionSubtitle>
                        <ul>
                            <ListItem>
                                <p>У вас є 2 хвилини, за які вам потрібно відгадати слово. Чим швидше ви це зробите, ти більше очків отримаєте. У разі, якщо ви не встигнете, гру буде закінчено. Таймер розміщено під номером 1 на зображенні знизу.</p>
                            </ListItem>
                            <ListItem>
                                <p>Подивіться на заряд батареї під номером 2. Якщо ви обираєте літеру, якої немає у загаданому слові, заряд батареї знижується на одну поділку. Всього вона має 5 зарядів. Після закінчення їх всіх гру буде закінчено.</p>
                            </ListItem>
                            <ListItem>
                                <p>У полі під номером 3 описана підказка, яка допоможе вам відгадати слово.</p>
                            </ListItem>
                            <ListItem>
                                <p>У полі під номером 4 робот залишатиме коментарі до вашого вибору. Наприклад те, що у загаданому слові немає вибраної літери або їх є навіть декілька.</p>
                            </ListItem>
                            <ListItem>
                                <p>Під номером 5 на зображенні розміщені карточки з літерами загаданого слова. Скільки карточок - стільки і літер у слові. Коли ви оберете літеру, яка присутня у слові, вона з'явиться у відповідній карточці.</p>
                            </ListItem>
                        </ul>
                        <img src={img5} alt='фото часу' />
                    </TextContainer>
                    <TextContainer>
                        <Text>На зображенні знизу зображено набір кнопок із літерами. Натискаючи на них, ви перевіряєте, чи є відповідна літера в загаданому слові. Одну літеру можна обрати всього один раз, а якщо у слові є кілька таких літер, то вони відкриються всі.</Text>
                        <img src={img6} alt='фото набору букв'/>
                    </TextContainer>
                    <TextContainer>
                        <Text>Після закінчення гри ви отримаєте повідомлення про виграш або поразку та набрані вами очки у разі успіху. Також ви можете обрати: повернутися на головну сторінку або зіграти ще раз і відгадувати слова у тій же категорії.</Text>
                        <img src={img7} alt='фото з модалкою кінця гри'/>
                    </TextContainer>
                    <NavBtnList>
                        <li>
                            <NavigationButton way={"/play"}>Грати</NavigationButton>
                        </li>
                        <li>
                            <RegistrationBtn type="button" onClick={openAuthModal}>Зареєструватися</RegistrationBtn>
                        </li>
                    </NavBtnList>
                </SectionContainer>
            </Main>
            <PageFooter />
        </Background>
    )
}