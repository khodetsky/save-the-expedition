import styled, {css} from "styled-components";

export const ProgressContainer = styled.div`
    width: 240px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Progress = styled.progress`
    opacity: 0;
`

export const ProgressValueContainer = styled.div`
    position: relative;
    display: inline-block;
    background: #eee;
    height: 20px;
    width: 200px;
    border-radius: 10px;
    overflow: hidden;

    ::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: ${props => props.progress}%;
        background-image:
	        linear-gradient(-45deg, 
	                                transparent 33%, rgba(0, 0, 0, .1) 33%, 
	                                rgba(0,0, 0, .1) 66%, transparent 66%),
	        linear-gradient(to top, 
	                                rgba(255, 255, 255, .25), 
	                                rgba(0, 0, 0, .25)),
	        linear-gradient(to left, #09c, #f44);

        background-size: 40px 20px, 100% 100%, 100% 100%;
    }
`

export const ProgressDataContainer = styled.div`
${({content}) => {
    return css`
          justify-content: ${content};
        `;
}}
    width: 230px;
    display: flex;
    // justify-content: space-between;
    color: #7a7a87;

    font-family: 'Raleway', sans-serif;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
`