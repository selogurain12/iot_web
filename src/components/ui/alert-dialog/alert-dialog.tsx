import {
	AlertDialogOverlay,
	AlertDialogPortal,
	Overlay,
	Root,
	Trigger,
} from "@radix-ui/react-alert-dialog";
import {
	forwardRef,
	type ComponentPropsWithoutRef,
	type ElementRef,
} from "react";

import { cn } from "../../../lib/utils";

const alertDialog = Root;

const alertDialogTrigger = Trigger;

const alertDialogOverlay = forwardRef<
	ElementRef<typeof Overlay>,
	ComponentPropsWithoutRef<typeof Overlay>
>(({ className, ...props }, reference) => (
	<Overlay
		className={cn(
			"fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
			className
		)}
		{...props}
		ref={reference}
	/>
));
alertDialogOverlay.displayName = Overlay.displayName;

export {
	alertDialog as AlertDialog,
	AlertDialogPortal,
	AlertDialogOverlay,
	alertDialogTrigger as AlertDialogTrigger,
};
