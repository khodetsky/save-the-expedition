import { Wrapper, BaseImage, MidLayer, FirstLayer, Shedow, ShedowBox, TextContainer, Title, Text } from './FirstFrame.styled';
import { useEffect, useRef } from 'react';

export const FirstFrame = () => {
    const first = useRef();
    const mid = useRef();
    const base = useRef();
    const text = useRef();

    useEffect(() => {
        window.ScrollTrigger.create({
            trigger: first.current,
            start: 'top top',
            // start: 'tobottomp bottom',
            end: 'bottom top',
            onUpdate: self => window.gsap.to(first.current, { y: (self.progress * 1042) / 11 }),
        });
        window.ScrollTrigger.create({
            trigger: mid.current,
            start: 'top top',
            // start: 'bottom bottom',
            end: 'bottom top',
            onUpdate: self => {
                window.gsap.to(mid.current, { y: (self.progress * 1042) / 3 });
                window.gsap.to(text.current, { y: (self.progress * 1042) / 1.4 });
            },
        });
        window.ScrollTrigger.create({
            trigger: base.current,
            start: 'top top',
            // start: 'bottom bottom',
            end: 'bottom top',
            onUpdate: self => window.gsap.to(base.current, { y: (self.progress * 1042) / 1.6 }),
        });
    }, [])


    return (
        <>
        <Wrapper >
            <BaseImage ref={base}></BaseImage>
            <TextContainer ref={text}>
                <Title>Врятувати експедицію</Title>
                <Text>Це історія чудового робота, якому випав шанс стати гордістю людства: розпочати епоху заселення інших планет.</Text>    
            </TextContainer>
            <MidLayer ref={mid}></MidLayer>
            <FirstLayer ref={first} ></FirstLayer>
            </Wrapper>
            <ShedowBox>
                <Shedow></Shedow>
            </ShedowBox>
        
        </>
    )
}