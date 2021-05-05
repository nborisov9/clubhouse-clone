import React from 'react';

import { useRouter } from 'next/router';

import clsx from 'clsx';

import { WhiteBlock } from '../../WhiteBlock';
import { Button } from '../../Button';
import { StepInfo } from '../../StepInfo';
import Axios from '../../../core/axios';

import styles from './EnterPhoneStep.module.scss';

const attributeId = 'id';
const alertErrorMessage = 'Ошибка при активации!';

export const EnterCodeStep = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [codes, setCodes] = React.useState(['', '', '', '']);

  const router = useRouter();
  const nextDisabled = codes.some(v => !v);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = Number(event.target.getAttribute(attributeId));

    const value = event.target.value;

    setCodes(prev => {
      const newArr = [...prev];
      newArr[index] = value;
      return newArr;
    });

    const nextInput = event.target.nextSibling as HTMLInputElement;
    nextInput?.focus(); // event.target.nextSibling - next input
  };

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      await Axios.get('/todos');
      router.push('/rooms');
    } catch (error) {
      alert(alertErrorMessage);
    }

    setIsLoading(false);
  };

  return (
    <div className={styles.block}>
      {!isLoading ? (
        <>
          <StepInfo icon="/static/numbers.png" title="Enter your activate code" />
          <WhiteBlock className={clsx('m-auto mt-30', styles.whiteBlock)}>
            <div className={clsx('mb-30', styles.codeInput)}>
              {codes.map((code, index) => (
                <input
                  key={index}
                  type="tel"
                  placeholder="X"
                  maxLength={1}
                  id={String(index)}
                  onChange={handleChangeInput}
                  value={code}
                />
              ))}
            </div>
            <Button onClick={onSubmit} disabled={nextDisabled}>
              Next
              <img className="d-ib ml-10" src="/static/arrow.svg" />
            </Button>
          </WhiteBlock>
        </>
      ) : (
        <div className="text-center">
          <div className="loader"></div>
          <h3 className="mt-5">Activation in progress ...</h3>
        </div>
      )}
    </div>
  );
};
