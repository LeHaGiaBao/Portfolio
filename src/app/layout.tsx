import React from 'react';
import type {Metadata} from 'next';
import {SFProDisplay} from '@/styles/fonts';
import '@/styles/globals.css';
import StyledComponentsRegistry from '../../themes/hocs/registry/StyledComponentsRegistry';
import StyledJsxRegistry from '../../themes/hocs/registry/StyledJsxRegistry';
import {QueryProvider} from '@/services/query';
import StoreProvider from '@/services/store/StoreProvider';

export const metadata: Metadata = {
  title: 'Le Ha Gia Bao',
  description: 'Hi! welcome to my personal website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${SFProDisplay.className} antialiased`}>
        <StyledComponentsRegistry>
          <StyledJsxRegistry>
            <QueryProvider>
              <StoreProvider>{children}</StoreProvider>
            </QueryProvider>
          </StyledJsxRegistry>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
