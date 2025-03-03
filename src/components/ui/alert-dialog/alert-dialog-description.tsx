import { Description } from "@radix-ui/react-alert-dialog";
import {
	forwardRef,
	type ElementRef,
	type ComponentPropsWithoutRef,
} from "react";

import { cn } from "../../../lib/utils";

const alertDialogDescription = forwardRef<
	ElementRef<typeof Description>,
	ComponentPropsWithoutRef<typeof Description>
>(({ className, ...props }, reference) => (
	<Description
		className={cn("text-sm text-muted-foreground", className)}
		ref={reference}
		{...props}
	/>
));
alertDialogDescription.displayName = Description.displayName;

export { alertDialogDescription as AlertDialogDescription };
