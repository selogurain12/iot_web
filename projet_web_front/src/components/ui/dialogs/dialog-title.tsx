import { Title } from "@radix-ui/react-dialog";
import {
	forwardRef,
	type ElementRef,
	type ComponentPropsWithoutRef,
} from "react";

import { cn } from "../../../lib/utils";

const dialogTitle = forwardRef<
	ElementRef<typeof Title>,
	ComponentPropsWithoutRef<typeof Title>
>(({ className, ...props }, reference) => (
	<Title
		className={cn(
			"text-lg font-semibold leading-none tracking-tight",
			className
		)}
		ref={reference}
		{...props}
	/>
));
dialogTitle.displayName = Title.displayName;

export { dialogTitle as DialogTitle };
