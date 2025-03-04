import type { FC, ReactNode } from "react";

import { cn } from "../../../lib/utils";

interface TimelineContentProps {
	children: ReactNode;
}

const timelineContent: FC<TimelineContentProps> = ({ children }) => (
	<div className={cn("ml-4")}>{children}</div>
);
timelineContent.displayName = "TimelineContent";

export { timelineContent as TimelineContent };
