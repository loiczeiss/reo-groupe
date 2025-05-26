import React, { ReactNode } from 'react';
import Image from 'next/image';

const Icon = (): ReactNode => (
  <div
    style={{
      position: 'relative',
      height: '2rem', // small size
      width: '2rem',
    }}
  >
    <Image
      src="/logo.png"
      alt="logo"
      fill
      style={{
        objectFit: 'contain',
        objectPosition: 'center',
      }}
    />
  </div>
);

export default Icon;
