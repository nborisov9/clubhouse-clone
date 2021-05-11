import React from 'react';

import { Header } from '../../components/Header';
import { BackButton } from '../../components/BackButton';
import { Room } from '../../components/Room';

import Axios from '../../core/axios';

const avatarUrl =
  'https://sun2-3.userapi.com/s/v1/if1/CAR1Aao3yIica7xq77xIIMMTn29CME-cE5JSJBc8OTNVt29JQjnhR0ZsX_9IO-AzgwVbfgB6.jpg?size=200x0&quality=96&crop=138,44,1048,1048&ava=1';

export default function RoomPage({ room }) {
  return (
    <>
      <Header />
      <div className="container mt-40 d-flex align-items-center justify-content-between">
        <BackButton title="All rooms" href="/rooms" />
      </div>
      {room && <Room title={room.title} />}
    </>
  );
}

export const getServerSideProps = async ctx => {
  try {
    const { data } = await Axios.get('/rooms.json');
    const roomId = ctx.query.id;
    const room = data?.find(item => item.id === roomId);

    return {
      props: {
        room: !room ? null : room,
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
};
