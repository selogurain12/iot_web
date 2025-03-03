import {
	forwardRef,
	type ElementRef,
	type ComponentPropsWithoutRef,
} from "react";
import { CommandEmpty } from "cmdk";

const commandEmpty = forwardRef<
	ElementRef<typeof CommandEmpty>,
	ComponentPropsWithoutRef<typeof CommandEmpty>
>((props, reference) => (
	<CommandEmpty
		className="text-center text-sm"
		ref={reference}
		{...props}
	/>
));

commandEmpty.displayName = CommandEmpty.displayName;
export { commandEmpty as CommandEmpty };
