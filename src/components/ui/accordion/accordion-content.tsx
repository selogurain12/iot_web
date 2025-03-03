import { Content } from "@radix-ui/react-accordion";
import {
	forwardRef,
	type ElementRef,
	type ComponentPropsWithoutRef,
} from "react";

import { cn } from "../../../lib/utils";

const accordionContent = forwardRef<
	ElementRef<typeof Content>,
	ComponentPropsWithoutRef<typeof Content>
>(({ className, children, ...props }, reference) => (
	<Content
		className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
		ref={reference}

		{...props}
	>
		<div className={cn("pb-4 pt-0", className)}>{children}</div>
	</Content>
));

accordionContent.displayName = Content.displayName;

export { accordionContent as AccordionContent };
