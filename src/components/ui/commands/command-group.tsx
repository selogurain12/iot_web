import {
	forwardRef,
	type ElementRef,
	type ComponentPropsWithoutRef,
} from "react";
import { CommandGroup } from "cmdk";

import { cn } from "../../../lib/utils";

const commandGroup = forwardRef<
	ElementRef<typeof CommandGroup>,
	ComponentPropsWithoutRef<typeof CommandGroup>
>(({ className, ...props }, reference) => (
	<CommandGroup
		className={cn(
			"overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
			className
		)}
		ref={reference}
		{...props}
	/>
));

commandGroup.displayName = CommandGroup.displayName;

export { commandGroup as CommandGroup };
