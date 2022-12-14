import { MainImg, MainTitle, MainText, MainButtonLink, MainButton, PageFooter, FooterLink } from './Main.styled';

export const Main = () => {
    return (
        <>
            <MainImg>
                <MainTitle>Зустрітися зі своїм творцем</MainTitle>
                <MainText>У маленького робота-механіка є мрія -  зустрітися зі своїм творцем. Проте сам чоловік, який створив його, зараз знаходиться на космічній станції на Місяці. Щоб вони могли зустріти один одного, роботу потрібно підвищити свій рівень майсерності.</MainText>
                <MainButton type="button"><MainButtonLink to="/help">Як допомогти роботу?</MainButtonLink></MainButton>
                <PageFooter><p>Сторінку створено <FooterLink href="https://github.com/khodetsky">Олександром Ходецьким</FooterLink> у 2022 році</p></PageFooter>
            </MainImg>
        </>
    )
}