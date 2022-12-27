import { DescriptionBox, DescriptionTriangleBox } from './DescriptionContainer.styled';

export const DescriptionContainer = ({children}) => {
    return (
        <>
            <DescriptionBox>
                <DescriptionTriangleBox width="30" height="30">
                    <polygon points="0,20 10,0 30,25" fill="#FFFFFF" stroke="none" />
                </DescriptionTriangleBox>
                <p>{children}</p>
            </DescriptionBox>        
        </>
    )
}