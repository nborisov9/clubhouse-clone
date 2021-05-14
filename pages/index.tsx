import React from 'react';

import { ChooseAvatarStep } from '../components/stepts/ChooseAvatarStep';
import { EnterNameStep } from '../components/stepts/EnterNameStep';
import { EnterCodeStep } from '../components/stepts/EnterCodeStep';
import { EnterPhoneStep } from '../components/stepts/EnterPhoneStep';
import { TwitterStep } from '../components/stepts/TwitterStep';
import { WelcomeStep } from '../components/stepts/WelcomeStep';

const stepsComponents = {
  0: WelcomeStep,
  1: TwitterStep,
  2: EnterNameStep,
  3: ChooseAvatarStep,
  4: EnterPhoneStep,
  5: EnterCodeStep,
};

type MainContextProps = {
  step: number;
  onNextStep: () => void;
};

export const MainContext = React.createContext<MainContextProps>({} as MainContextProps);

export default function Home() {
  const [step, setStep] = React.useState<number>(0);

  const Step = stepsComponents[step];
  const onNextStep = () => setStep(prev => prev + 1);

  return (
    <MainContext.Provider value={{ step, onNextStep }}>
      <Step />
    </MainContext.Provider>
  );
}
