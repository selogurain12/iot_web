import { Description } from "@radix-ui/react-dialog";
import { forwardRef } from "react";

import { cn } from "../../../lib/utils";

const dialogDescription = forwardRef<
	React.ElementRef<typeof Description>,
	React.ComponentPropsWithoutRef<typeof Description>
>(({ className, ...props }, reference) => (
	<Description
		className={cn("text-sm text-muted-foreground", className)}
		ref={reference}
		{...props}
	/>
));
dialogDescription.displayName = Description.displayName;

export { dialogDescription as DialogDescription };
