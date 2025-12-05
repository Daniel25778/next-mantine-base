/* eslint-disable @typescript-eslint/no-restricted-imports */
import type { ReactNode } from 'react';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';

const HomePage = (): ReactNode => {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
};

export default HomePage;
