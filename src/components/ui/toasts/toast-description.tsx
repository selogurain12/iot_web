import { Description } from "@radix-ui/react-toast";
import { forwardRef } from "react";

import { cn } from "../../../lib/utils";

const toastDescription = forwardRef<
	React.ElementRef<typeof Description>,
	React.ComponentPropsWithoutRef<typeof Description>
>(({ className, ...props }, reference) => (
	<Description
		className={cn("text-sm opacity-90", className)}
		ref={reference}

		{...props}
	/>
));
toastDescription.displayName = Description.displayName;

export { toastDescription as ToastDescription };
