import { Footer, FooterLink } from './PageFooter.styled';

export const PageFooter = () => {
    return (
        <Footer><p>{`\u00A9`} Сторінку створено <FooterLink href="https://github.com/khodetsky">Олександром Ходецьким</FooterLink> у 2022 році</p></Footer>
    )
}