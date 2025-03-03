import type { Root } from "@radix-ui/react-label";
import { forwardRef } from "react";

import { cn } from "../../../lib/utils";
import { Label } from "../label";

import { useFormField } from "./form";

const formLabel = forwardRef<
	React.ElementRef<typeof Root>,
	React.ComponentPropsWithoutRef<typeof Root>
>(({ className, ...props }, reference) => {
	const { formItemId } = useFormField();

	return (
		<Label
			className={cn("", className)}
			htmlFor={formItemId}
			ref={reference}
			{...props}
		/>
	);
});
formLabel.displayName = "FormLabel";

export { formLabel as FormLabel };
