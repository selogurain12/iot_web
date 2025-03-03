import { Cancel } from "@radix-ui/react-alert-dialog";
import {
	forwardRef,
	type ElementRef,
	type ComponentPropsWithoutRef,
} from "react";
import { motion } from "motion/react";

import { cn } from "../../../lib/utils";
import { buttonVariants } from "../button";

const alertDialogCancel = forwardRef<
	ElementRef<typeof Cancel>,
	ComponentPropsWithoutRef<typeof Cancel>
>(({ className, ...props }, reference) => (
	<Cancel
		className={cn(
			buttonVariants({ variant: "third" }),
			"mt-2 sm:mt-0",
			className
		)}
		ref={reference}
		{...props}
	/>
));
alertDialogCancel.displayName = Cancel.displayName;

const motionAlertDialogCancel = motion(alertDialogCancel);

export {
	alertDialogCancel as AlertDialogCancel,
	motionAlertDialogCancel as MotionAlertDialogCancel,
};
