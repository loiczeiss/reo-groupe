import React, { ReactNode } from 'react';
import Image from 'next/image';

const Logo = (): ReactNode => (
  <div className="h-4 w-4 sm:h-8 sm:w-8 relative">
    <Image src="/logo.png" alt="logo" fill />
  </div>
);

export default Logo;
