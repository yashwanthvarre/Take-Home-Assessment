"use client"; // ✅ Client component for Chakra UI

import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
