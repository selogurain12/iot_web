import { Item } from "@radix-ui/react-accordion";
import {
	forwardRef,
	type ElementRef,
	type ComponentPropsWithoutRef,
} from "react";

import { cn } from "../../../lib/utils";

const accordionItem = forwardRef<
	ElementRef<typeof Item>,
	ComponentPropsWithoutRef<typeof Item>
>(({ className, ...props }, reference) => (
	<Item
		className={cn("border-b", className)}
		ref={reference}
		{...props}
	/>
));
accordionItem.displayName = "AccordionItem";

export { accordionItem as AccordionItem };
