import React from 'react';

import clsx from 'clsx';

import { WhiteBlock } from '../../WhiteBlock';
import { Button } from '../../Button';
import { StepInfo } from '../../StepInfo';
import { Avatar } from '../../Avatar';

import { useMainContext } from '../../../hooks/useMainContext';

import styles from './ChooseAvatarStep.module.scss';

const startAvatarUrl =
  'https://sun2-3.userapi.com/s/v1/if1/CAR1Aao3yIica7xq77xIIMMTn29CME-cE5JSJBc8OTNVt29JQjnhR0ZsX_9IO-AzgwVbfgB6.jpg?size=200x0&quality=96&crop=138,44,1048,1048&ava=1';

export const ChooseAvatarStep: React.FC = () => {
  const [avatarUrl, setAvatarUrl] = React.useState<string>(startAvatarUrl);

  const inputRef = React.useRef<HTMLInputElement>(null);

  const { onNextStep } = useMainContext();

  const handleChangeInput = (event: Event) => {
    const files = (event.target as HTMLInputElement).files[0];

    if (files) {
      const imageUrl = URL.createObjectURL(files);
      setAvatarUrl(imageUrl);
    }
  };

  React.useEffect(() => {
    inputRef.current?.addEventListener('change', handleChangeInput);
    return () => inputRef.current?.removeEventListener('change', handleChangeInput);
  }, []);

  return (
    <div className={styles.block}>
      <StepInfo
        icon="/static/celebration.png"
        title="Okay, Archakov Dennis!"
        description="How’s this photo?"
      />
      <WhiteBlock className={clsx('m-auto mt-40', styles.whiteBlock)}>
        <div className={styles.avatar}>
          <Avatar width="120px" height="120px" src={avatarUrl} />
        </div>
        <div className="mb-30">
          <label htmlFor="image" className="link cup">
            Choose a different photo
          </label>
        </div>
        <input ref={inputRef} id="image" type="file" hidden />
        <Button onClick={onNextStep}>
          Next
          <img className="d-ib ml-10" src="/static/arrow.svg" />
        </Button>
      </WhiteBlock>
    </div>
  );
};
