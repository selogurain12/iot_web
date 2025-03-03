import { Title } from "@radix-ui/react-alert-dialog";
import {
	forwardRef,
	type ComponentPropsWithoutRef,
	type ElementRef,
} from "react";

import { cn } from "../../../lib/utils";

const alertDialogTitle = forwardRef<
	ElementRef<typeof Title>,
	ComponentPropsWithoutRef<typeof Title>
>(({ className, ...props }, reference) => (
	<Title
		className={cn("text-lg font-semibold", className)}
		ref={reference}
		{...props}
	/>
));
alertDialogTitle.displayName = Title.displayName;

export { alertDialogTitle as AlertDialogTitle };
