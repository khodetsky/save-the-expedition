import { FifthFrame } from "../../components/FifthFrame/FifthFrame";
import { FirstFrame } from "../../components/FirstFrame/FirstFrame";
import { SecondFrame } from '../../components/SecondFrame/SecondFrame';
import { ThirdFrame } from '../../components/ThirdFrame/ThirdFrame';
import { FourthFrame } from '../../components/FourthFrame/FourthFrame';

window.gsap.registerPlugin(window.ScrollTrigger);

export const Main = () => {

  return (
      
    <main >
      <FirstFrame />
      <SecondFrame />
      <ThirdFrame />
      <FourthFrame />
      <FifthFrame />
    </main> 
  )
}