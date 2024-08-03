import { TRPCReactProvider } from "@/trpc/react";
import { NextUIProvider } from "@nextui-org/react";
import { Fingerprint } from "./fingerprint";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TRPCReactProvider>
      {/* <Fingerprint /> */}
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </TRPCReactProvider>
  )
}