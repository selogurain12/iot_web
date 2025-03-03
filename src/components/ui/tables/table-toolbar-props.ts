import type { Table } from "@tanstack/react-table";

export interface DataTableToolbarProps<Tdata> {
	table: Table<Tdata>;
	setSearch: (search?: string) => void;
}
