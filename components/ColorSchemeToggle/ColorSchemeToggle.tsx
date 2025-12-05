'use client';

import type { MantineColorScheme } from '@mantine/core';
import { Button, Group, useMantineColorScheme } from '@mantine/core';
import type { ReactNode } from 'react';

export const ColorSchemeToggle = (): ReactNode => {
  const { setColorScheme } = useMantineColorScheme();

  const handleColorScheme = (color: MantineColorScheme): void => {
    setColorScheme(color);
  };

  return (
    <Group justify={'center'} mt={'xl'}>
      <Button
        onClick={() => {
          setColorScheme('light');
        }}
      >
        Light
      </Button>

      <Button
        onClick={() => {
          handleColorScheme('dark');
        }}
      >
        Dark
      </Button>

      <Button onClick={() => handleColorScheme('auto')}>Auto</Button>
    </Group>
  );
};
