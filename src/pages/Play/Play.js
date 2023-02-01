import { Background, LinkList, CategoryImg, LinkStyled, CategoryText, LinkListItem, Main } from './Play.styled';
import natureImg from '../../images/playPage/nature.webp';
import animalsImg from '../../images/playPage/animals.webp';
import toolsImg from '../../images/playPage/tools.webp';
import historyImg from '../../images/playPage/history.webp';
import { PageFooter } from '../../components/PageFooter/PageFooter';

export const Play = () => {
    return (
        <Background>
            <Main>
                <LinkList>
                    <LinkListItem>
                        <LinkStyled to='animals'>
                            <CategoryImg src={animalsImg} alt='animals' />
                            <CategoryText>Тварини</CategoryText>
                        </LinkStyled>
                    </LinkListItem>
                    <LinkListItem>
                        <LinkStyled to='geography'>
                            <CategoryImg src={natureImg} alt='geography' />
                            <CategoryText>Географія</CategoryText>
                        </LinkStyled>
                    </LinkListItem>
                    <LinkListItem>
                        <LinkStyled to='tools'>
                            <CategoryImg src={toolsImg} alt='tools' />
                            <CategoryText>Інструменти та пристрої</CategoryText>
                        </LinkStyled>
                    </LinkListItem>
                    <LinkListItem>
                        <LinkStyled to='history'>
                            <CategoryImg src={historyImg} alt='history' />
                            <CategoryText>Історія та давні цивілізації</CategoryText>
                        </LinkStyled>
                    </LinkListItem>
                </LinkList>
            </Main>
            <PageFooter />
        </Background>
            
    )
}