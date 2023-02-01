import { ButtonNavLink, Button } from './NavigationButton.styled';

export const NavigationButton = ({children, way}) => {
    return (
        <Button type="button">
            <ButtonNavLink to={way}>{children}</ButtonNavLink>
        </Button>
    )
}