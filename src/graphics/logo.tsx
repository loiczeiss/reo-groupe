import React, { ReactNode } from 'react';
import Image from 'next/image';

const Logo = (): ReactNode => (
  <div
    style={{
      position: 'relative',
      height: '10rem',       // h-8 = 2rem
      width: '50rem',        // w-16 = 4rem
      // For responsiveness (sm:h-16 sm:w-32), you'd need media queries,
      // but inline styles do not support media queries directly.
      // You can use CSS or a style library for responsive styles.
    }}
  >
    <Image
      src="/logo.png"
      alt="logo"
      fill
      style={{ objectFit: 'contain' }}
    />
  </div>
);

export default Logo;
