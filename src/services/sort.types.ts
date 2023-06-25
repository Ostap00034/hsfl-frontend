export type TypeDataFilters = {
	sort?: EnumObjectSort
	searchTerm?: string
	page?: string | number
	perPage?: string | number
}

export enum EnumObjectSort {
	NEWEST = 'сначала новые',
	OLDEST = 'сначала старые',
}
