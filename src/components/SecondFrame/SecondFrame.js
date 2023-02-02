import { Wrapper, BaseImage, SecondLayer, ThirdLayer, FirstLayer, Shedow, ShedowBox, TextContainer, Text } from './SecondFrame.styled';
// import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
// import gsap from 'gsap-trial';
import { useEffect, useRef } from 'react';

export const SecondFrame = () => {
    const first = useRef();
    const second = useRef();
    const third = useRef();
    const base = useRef();
    const text = useRef();

    useEffect(() => {
        window.ScrollTrigger.create({
            trigger: first.current,
            start: 'top top',
            end: 'bottom top',
            onUpdate: self => window.gsap.to(first.current, { y: (self.progress * 1048) / 9 }),
        });
        window.ScrollTrigger.create({
            trigger: second.current,
            start: 'top top',
            end: 'bottom top',
            onUpdate: self => {
                window.gsap.to(second.current, { y: (self.progress * 1048) / 2.5 });
                window.gsap.to(text.current, { y: (self.progress * 1042) / 2 });
            },
        });
        window.ScrollTrigger.create({
            trigger: third.current,
            start: 'top top',
            end: 'bottom top',
            onUpdate: self => window.gsap.to(third.current, { y: (self.progress * 1048) / 2 }),
        });
        window.ScrollTrigger.create({
            trigger: base.current,
            start: 'top top',
            end: 'bottom top',
            onUpdate: self => window.gsap.to(base.current, { y: (self.progress * 1048) / 1.6 }),
        });
    }, [])

    return (
        <>
            <Wrapper>
                <BaseImage ref={base}></BaseImage>
                <TextContainer ref={text}>
                    <Text>Настали часи, коли людям стало тісно на рідній планеті та вони вирішили колонізувати інші. Для цього масово почали виготовляти роботів, які могли спокійно працювати у непридатних для людини умовах</Text>    
                </TextContainer>
                <ThirdLayer ref={third}></ThirdLayer>
                <SecondLayer ref={second}></SecondLayer>
                <FirstLayer ref={first}></FirstLayer>
            </Wrapper>
            <ShedowBox>
                <Shedow></Shedow>
            </ShedowBox>
        </>
    )
}