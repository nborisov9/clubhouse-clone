import React from 'react';

import Link from 'next/link';

import { Button } from '../components/Button';
import { Header } from '../components/Header';
import { ConversationCard } from '../components/ConversationCard';

import Axios from '../core/axios';

export default function RoomsPage({ rooms }) {
  return (
    <>
      <Header />
      <div className="container">
        <div className="mt-40 d-flex align-items-center justify-content-between">
          <h1>All conversations</h1>
          <Button color="green">+Start room</Button>
        </div>
        <div className="mt-30 grid">
          {rooms?.map(({ id, guests, speakersCount, title, avatars }) => (
            <Link href={`/rooms/${id}`} key={id}>
              <div>
                <ConversationCard
                  title={title}
                  avatars={avatars}
                  speakers={guests}
                  listenersCount={speakersCount}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  try {
    const { data } = await Axios.get('/rooms.json');

    return {
      props: {
        rooms: data,
      },
    };
  } catch (error) {
    return {
      props: {
        rooms: [],
      },
    };
  }
};
