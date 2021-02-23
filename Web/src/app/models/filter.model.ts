export interface Filter {
	order?: number;
	column: string;
	operator: string;
	value: string;
  condition?: string;
}
