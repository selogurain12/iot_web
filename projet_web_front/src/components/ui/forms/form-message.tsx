import { forwardRef } from "react";

import { cn } from "../../../lib/utils";

import { useFormField } from "./form";

const formMessage = forwardRef<
	HTMLParagraphElement,
	// eslint-disable-next-line react/require-default-props
	React.HTMLAttributes<HTMLParagraphElement> & { message?: string }
>(({ className, children, message, ...props }, reference) => {
	const { error, formMessageId } = useFormField();
	const body: React.ReactNode = error
		? (message !== undefined && message) || String(error.message)
		: children;

	return (
		<p
			className={cn("text-xs text-red-700 italic mt-0", className)}
			id={formMessageId}
			ref={reference}
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...props}
		>
			{body}
		</p>
	);
});
formMessage.displayName = "FormMessage";

export { formMessage as FormMessage };
