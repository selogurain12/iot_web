import { Root } from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";
import {
	forwardRef,
	type ElementRef,
	type ComponentPropsWithoutRef,
} from "react";

import { cn } from "../../lib/utils";

const labelVariants = cva(
	"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

const label = forwardRef<
	ElementRef<typeof Root>,
	ComponentPropsWithoutRef<typeof Root> & VariantProps<typeof labelVariants>
>(({ className, ...props }, reference) => (
	<Root
		className={cn(labelVariants(), className)}
		ref={reference}
		{...props}
	/>
));
label.displayName = Root.displayName;

export { label as Label };
