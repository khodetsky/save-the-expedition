import { Wrapper, BaseImage, TextContainer, Text } from './FifthFrame.styled';
import { PageFooter } from '../../components/PageFooter/PageFooter';
import { NavigationButton } from '../../components/NavigationButton/NavigationButton';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import gsap from 'gsap-trial';
import { useEffect, useRef } from 'react';

export const FifthFrame = () => {
    const text = useRef();
    const base = useRef();

    useEffect(() => {
        ScrollTrigger.create({
            trigger: base.current,
            start: 'top 90%',
            end: 'bottom bottom',
            onUpdate: self => {
                gsap.to(text.current, { y: -(self.progress * 833) / 5 });
            },
        })
    }, [])

    return (
        <Wrapper>
            <BaseImage ref={base}>
                <div style={{height: 741}}></div>
                <PageFooter/>
            </BaseImage>
            <TextContainer ref={text}>
                <Text>Частина роботів також зазнала ушкоджень, а в командувача експедицією вийшов з ладу модуль пам'яті і він забув про свою місію. Зараз йому необхідно все згадати та врятувати експедицію. Але чи вийде це у нього...</Text> 
                <NavigationButton way={"/help"}>Як допомогти роботу?</NavigationButton>
            </TextContainer>
        </Wrapper>
    )
}