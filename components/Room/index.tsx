import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import clsx from 'clsx';

import { Button } from '../Button';

import styles from './Room.module.scss';

interface RoomProps {
  title: string;
}

export const Room: React.FC<RoomProps> = ({ title }) => {
  const router = useRouter();

  return (
    <div className={clsx(styles.wrapper, 'container')}>
      <div className="d-flex align-items-center justify-content-between">
        <h2>{title}</h2>
        <div className={clsx('d-flex align-items-center', styles.actionButtons)}>
          <Link href="/rooms">
            <div>
              <Button color="gray" className={styles.leaveButton}>
                <img width={18} height={18} src="/static/peace.png" alt="Hand black" />
              </Button>
            </div>
          </Link>
        </div>
      </div>

      <div className="users">
        {/* {isLoading && <div className="loader"></div>}
        {users.map(obj => (
          <Speaker key={obj.fullname} {...obj} />
        ))} */}
      </div>
    </div>
  );
};
