import React from "react";
import { TextScramble } from "./ace-ui/TextScramble";
import {ImageText} from "./ace-ui/ImageText";
import { DropdownMenu } from "./ace-ui/DropdownMenu";
import { FeedbackWidget } from "./ace-ui/FeedbackWidget";
import { UserCard } from "./ace-ui/UserCard";
import { SpotLight } from "./ace-ui/SpotLight";
import { Tooltip } from "./ace-ui/ToolTip";
import { Kbd } from "./ace-ui/Kbd";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const componentMap: Record<string, React.ComponentType<any>> = {
     "text-scramble": TextScramble,
     "image-text": ImageText,
     "dropdown-menu": DropdownMenu,
     "feedback-widget": FeedbackWidget,
     "user-card": UserCard,
     "spot-light": SpotLight,
     "tool-tip": Tooltip,
     "kbd": Kbd
};