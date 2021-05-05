import React from 'react';

import clsx from 'clsx';

import { Avatar } from '../../components/Avatar';
import { Button } from '../../components/Button';
import { BackButton } from '../BackButton';

import styles from './Profile.module.scss';

interface ProfileProps {
  fullname: string;
  userName: string;
  avatarUrl: string;
  about: string;
}

export const Profile: React.FC<ProfileProps> = ({ fullname, userName, avatarUrl, about }) => (
  <div className="container">
    <BackButton title="Back" href="/rooms" />
    <div className="d-flex align-items-center mt-15">
      <Avatar width="100px" height="100px" src={avatarUrl} />
      <div className="d-flex flex-column justify-content-center ml-30">
        <h2 className="mt-0 mb-0">{fullname}</h2>
        <h3 className={clsx('mt-0 mb-0', styles.userName)}>@{userName}</h3>
      </div>
      <Button className={clsx('ml-20', styles.followButton)} color="blue">
        Follow
      </Button>
    </div>
    <div className={clsx('mt-30', styles.about)}>{about}</div>
  </div>
);
