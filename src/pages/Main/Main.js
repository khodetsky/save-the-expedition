import { FifthFrame } from "../../components/FifthFrame/FifthFrame";
import { FirstFrame } from "../../components/FirstFrame/FirstFrame";
import { SecondFrame } from '../../components/SecondFrame/SecondFrame';
import { ThirdFrame } from '../../components/ThirdFrame/ThirdFrame';
import { FourthFrame } from '../../components/FourthFrame/FourthFrame';
import { useLayoutEffect, useRef } from 'react';

import gsap from 'gsap-trial';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export const Main = () => {

    const main = useRef();
    const smoother = useRef();


    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
        smoother.current = ScrollSmoother.create({
            smooth: 2, 
            effects: true, 
          });
        }, main);
        return () => ctx.revert();
    }, []);
    
    return (
            <main id="smooth-wrapper" ref={main}> 
                <div id="smooth-content" style={{willChange: 'transform'}}>
                    <FirstFrame />
                    <SecondFrame />
                    <ThirdFrame />
                    <FourthFrame />
                <FifthFrame />
                </div>
            </main> 
    )
}