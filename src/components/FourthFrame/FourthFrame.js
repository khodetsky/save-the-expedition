import { Wrapper, BaseImage, SecondLayer, FirstLayer, Shedow, ShedowBox, TextContainer, Text } from './FourthFrame.styled';
import { useEffect, useRef } from 'react';

export const FourthFrame = () => {
    const first = useRef();
    const mid = useRef();
    const base = useRef();
    const text = useRef();

    useEffect(() => {
        window.ScrollTrigger.create({
            trigger: first.current,
            start: 'top top',
            end: 'bottom top',
            onUpdate: self => window.gsap.to(first.current, { y: (self.progress * 789) / 9 }),
        });
        window.ScrollTrigger.create({
            trigger: mid.current,
            start: 'top top',
            end: 'bottom top',
            onUpdate: self => {
                window.gsap.to(mid.current, { y: (self.progress * 789) / 3 });
                window.gsap.to(text.current, { y: (self.progress * 789) / 2.5 });
            },
        });
        window.ScrollTrigger.create({
            trigger: base.current,
            start: 'top top',
            end: 'bottom top',
            onUpdate: self => window.gsap.to(base.current, { y: (self.progress * 789) / 1.6 }),
        });
    }, [])

    return (
        <>
            <Wrapper>
                <BaseImage ref={base}></BaseImage>
                <SecondLayer ref={mid}></SecondLayer>
                <TextContainer ref={text}>
                    <Text>Під час приземлення на кораблі сталася аварія, оскільки один з двигунів вибухнув. В результаті цього постраждав блок зв'язку з Землею, тому там вирішили, що весь корабель зруйновано. Роботи також не могли подати зворотного зв'язку.</Text>    
                </TextContainer>
                <FirstLayer ref={first}></FirstLayer>
            </Wrapper>
            <ShedowBox>
                <Shedow></Shedow>
            </ShedowBox>
        </>
    )
}