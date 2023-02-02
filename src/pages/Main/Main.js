import { FifthFrame } from "../../components/FifthFrame/FifthFrame";
import { FirstFrame } from "../../components/FirstFrame/FirstFrame";
import { SecondFrame } from '../../components/SecondFrame/SecondFrame';
import { ThirdFrame } from '../../components/ThirdFrame/ThirdFrame';
import { FourthFrame } from '../../components/FourthFrame/FourthFrame';
import { useRef } from 'react';

window.gsap.registerPlugin(window.ScrollTrigger);

export const Main = () => {
    const main = useRef();
    // console.log(window)

    // const listener = function (event) {
    //     // console.log(window.scrollY)
    //     main.current.style.cssText = `--scrollTop: ${window.scrollY}px`
    // };

    // useEffect(() => {
    //   window.addEventListener('scroll', listener)
        
    //   return () => {
    //     window.removeEventListener('scroll', listener);
    //   };
    // }, []);
    
    

    return (
            <main ref={main}> 
                <div style={{willChange: 'transform'}}>
                    <FirstFrame />
                    <SecondFrame />
                    <ThirdFrame />
                    <FourthFrame />
                    <FifthFrame />
                </div>
            </main> 
    )
}