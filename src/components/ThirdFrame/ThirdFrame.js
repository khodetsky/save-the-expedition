import { Wrapper, BaseImage, FirstLayer, Shedow, ShedowBox, TextContainer, Text } from './ThirdFrame.styled';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import gsap from 'gsap-trial';
import { useEffect, useRef } from 'react';

export const ThirdFrame = () => {
    const first = useRef();
    const base = useRef();
    const text = useRef();

    useEffect(() => {
        ScrollTrigger.create({
            trigger: first.current,
            start: 'top top',
            end: 'bottom top',
            onUpdate: self => {
                gsap.to(first.current, { y: (self.progress * 1042) / 9 });
                gsap.to(text.current, { y: (self.progress * 1042) / 2 });
            },
        });
        ScrollTrigger.create({
            trigger: base.current,
            start: 'top top',
            end: 'bottom top',
            onUpdate: self => gsap.to(base.current, { y: (self.progress * 1042) / 3 }),
        });
    }, [])

    return (
        <>
        <Wrapper>
            <BaseImage ref={base}></BaseImage>
            <TextContainer ref={text}>
                    <Text>Вершиною людської праці став робот, який очолив першу експедицію на іншу планету.
                        Її ціллю було зведення людського поселення та облаштування там придатних для людини умов існування</Text>    
            </TextContainer>
            <FirstLayer ref={first}></FirstLayer>
        </Wrapper>
        <ShedowBox>
            <Shedow></Shedow>
        </ShedowBox>
        </>
    )
}