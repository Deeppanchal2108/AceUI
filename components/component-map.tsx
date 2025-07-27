import React from "react";
import { TextScramble } from "./ace-ui/TextScramble";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const componentMap: Record<string, React.ComponentType<any>> = {
     "text-scramble": TextScramble,
};