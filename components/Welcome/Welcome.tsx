import { Anchor, Text, Title } from '@mantine/core';
import type { ReactNode } from 'react';

export const Welcome = (): ReactNode => {
  return (
    <>
      <Title className={'text-red'} mt={100} ta={'center'}>
        Welcome to Mantine
        <Text
          component={'span'}
          gradient={{ from: 'pink', to: 'yellow' }}
          inherit
          variant={'gradient'}
        >
          Mantine
        </Text>
      </Title>

      <Text
        c={'dimmed'}
        className={'bg-primary'}
        maw={580}
        mt={'xl'}
        mx={'auto'}
        size={'lg'}
        ta={'center'}
      >
        This starter Next.js project includes a minimal setup for server side rendering, if you want
        to learn more on Mantine + Next.js integration follow
        <Anchor href={'https://mantine.dev/guides/next/'} size={'lg'}>
          this guide
        </Anchor>
        . To get started edit page.tsx file.
      </Text>
    </>
  );
};
