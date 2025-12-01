import { PropsWithChildren } from "react";
import { ReactQueryProvider } from "./react-query-provider";
import { NextIntlProvider } from "./next-intl-provider";
import { RadixDirectionProvider } from "./radix-direction-provider";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <NextIntlProvider>
      <ReactQueryProvider>
        <RadixDirectionProvider>{children}</RadixDirectionProvider>
      </ReactQueryProvider>
    </NextIntlProvider>
  );
};
