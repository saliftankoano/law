"use client";

import { useEffect } from "react";

export function PreventFlash() {
  useEffect(() => {
    // Remove the js-loading class after component mounts
    document.documentElement.classList.remove("js-loading");
  }, []);

  return null;
}
