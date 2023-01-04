import { MainImg, MainTitle, MainText, MainButtonLink, MainButton, } from './Main.styled';
import { PageFooter } from '../../components/PageFooter/PageFooter';

export const Main = () => {
    return (
        <>
            <MainImg>
                <MainTitle>Зустрітися зі своїм творцем</MainTitle>
                <MainText>У маленького робота-механіка є мрія -  зустрітися зі своїм творцем. Проте сам чоловік, який створив його, зараз знаходиться на космічній станції на Місяці. Щоб вони могли зустріти один одного, роботу потрібно підвищити свій рівень майсерності.</MainText>
                <MainButton type="button"><MainButtonLink to="/help">Як допомогти роботу?</MainButtonLink></MainButton>
                <PageFooter/>
            </MainImg>
        </>
    )
}