import { MessageBox, MessageTriangleBox } from './RobotMessageContainer.styled';

export const RobotMessageContainer = ({message}) => {
    return (
        <>
            <MessageBox>
                <MessageTriangleBox width="30" height="30">
                    <polygon points="0,10 10,30 30,5" fill="#FFFFFF" stroke="none" />
                </MessageTriangleBox>
                <p>{message}</p>
            </MessageBox>        
        </>
    )
}