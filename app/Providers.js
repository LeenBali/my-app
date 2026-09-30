"use client";
import React from "react";
import { StoreProvider } from "./context/StoreContext";

export default function Providers({ children }) {
  return <StoreProvider>{children}</StoreProvider>;
}
