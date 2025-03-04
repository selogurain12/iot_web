import { List } from "@radix-ui/react-tabs";
import {
	forwardRef,
	type ElementRef,
	type ComponentPropsWithoutRef,
} from "react";

import { cn } from "../../../lib/utils";

const tabsList = forwardRef<
	ElementRef<typeof List>,
	ComponentPropsWithoutRef<typeof List>
>(({ className, ...props }, reference) => (
	<List
		className={cn(
			"inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
			className
		)}
		ref={reference}
		{...props}
	/>
));
tabsList.displayName = List.displayName;

export { tabsList as TabsList };
