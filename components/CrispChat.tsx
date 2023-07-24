"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("a3b578a4-cfa0-47b5-adae-0e0511934632");
  }, []);

  return null;
};