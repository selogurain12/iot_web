import {
	forwardRef,
	type ElementRef,
	type ComponentPropsWithoutRef,
} from "react";
import { Overlay } from "@radix-ui/react-dialog";

import { cn } from "../../../lib/utils";

const dialogOverlay = forwardRef<
	ElementRef<typeof Overlay>,
	ComponentPropsWithoutRef<typeof Overlay>
>(({ className, ...props }, reference) => (
	<Overlay
		className={cn(
			"fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
			className
		)}
		ref={reference}
		{...props}
	/>
));
dialogOverlay.displayName = Overlay.displayName;

export { dialogOverlay as DialogOverlay };
