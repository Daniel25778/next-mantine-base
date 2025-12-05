import { theme } from '@/theme';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import type { ReactElement } from 'react';
import './globals.css';

export const metadata = {
  description: 'I am using Mantine with Next.js!',
  title: 'Mantine Next.js template'
};

const RootLayout = ({ children }: { children: ReactElement }): ReactElement => {
  return (
    <html lang={'en'} {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link href={'/favicon.svg'} rel={'shortcut icon'} />

        <meta
          content={'minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no'}
          name={'viewport'}
        />
      </head>

      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
};

export default RootLayout;
