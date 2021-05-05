import React from 'react';

import { ChooseAvatarStep } from '../components/stepts/ChooseAvatarStep';
import { EnterNameStep } from '../components/stepts/EnterNameStep';
import { EnterCodeStep } from '../components/stepts/EnterCodeStep';
import { EnterPhoneStep } from '../components/stepts/EnterPhoneStep';
import { TwitterStep } from '../components/stepts/TwitterStep';
import { WelcomeStep } from '../components/stepts/WelcomeStep';

const stepsComponents = {
  0: WelcomeStep,
  1: EnterNameStep,
  2: TwitterStep,
  3: ChooseAvatarStep,
  4: EnterPhoneStep,
  5: EnterCodeStep,
};

export default function Home() {
  const [step, setStep] = React.useState<number>(5);

  const Step = stepsComponents[step];

  return (
    <div>
      <Step />
    </div>
  );
}
