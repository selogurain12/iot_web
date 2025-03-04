import { forwardRef, type InputHTMLAttributes } from "react";

import { cn } from "../../lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const input = forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, reference) => (
		<input
			className={cn(
				"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:opacity-80",
				className
			)}
			ref={reference}
			type={type}
			{...props}
		/>
	)
);
input.displayName = "Input";

export { input as Input, type InputProps };
