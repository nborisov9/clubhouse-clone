import React from 'react';

import Link from 'next/link';

interface BackButtonProps {
  title: string;
  href: string;
}

export const BackButton: React.FC<BackButtonProps> = ({ title, href }) => {
  return (
    <Link href={href}>
      <div className="d-i-flex cup">
        <img className="mr-10" src="/static/back-arrow.svg" alt="back" />
        <h3>{title}</h3>
      </div>
    </Link>
  );
};
