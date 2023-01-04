import { Background, LinkList, CategoryImg, LinkStyled, CategoryText, ListLinkItem } from './Play.styled';
import natureImg from '../../images/nature.webp';
import animalsImg from '../../images/animals.webp';
import toolsImg from '../../images/tools.webp';

export const Play = () => {
    return (
        <Background>
            <LinkList>
                <ListLinkItem>
                    <LinkStyled to='animals'>
                        <CategoryImg src={animalsImg} alt='animals' />
                        <CategoryText>Тварини</CategoryText>
                    </LinkStyled>
                </ListLinkItem>
                <ListLinkItem>
                    <LinkStyled to='geography'>
                        <CategoryImg src={natureImg} alt='geography' />
                        <CategoryText>Географія</CategoryText>
                    </LinkStyled>
                </ListLinkItem>
                <ListLinkItem>
                    <LinkStyled to='tools'>
                        <CategoryImg src={toolsImg} alt='tools' />
                        <CategoryText>Інструменти та пристрої</CategoryText>
                    </LinkStyled>
                </ListLinkItem>
            </LinkList>
        </Background>
    )
}