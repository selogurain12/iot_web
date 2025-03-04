import { forwardRef } from "react";
import { Item } from "@radix-ui/react-dropdown-menu";

import { cn } from "../../../lib/utils";

const dropdownMenuItem = forwardRef<
	React.ElementRef<typeof Item>,
	React.ComponentPropsWithoutRef<typeof Item> & {
		inset?: boolean;
	}
>(({ className, inset, ...props }, reference) => (
	<Item
		className={cn(
			"relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
			(inset ?? false) && "pl-8",
			className
		)}
		ref={reference}
		{...props}
	/>
));
dropdownMenuItem.displayName = Item.displayName;
dropdownMenuItem.defaultProps = {
	inset: false,
};

export { dropdownMenuItem as DropdownMenuItem };
