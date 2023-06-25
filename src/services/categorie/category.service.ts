import { TypeDataFilters } from '../sort.types'
import { TypeUpdateCategory } from './category.types'
import { instance } from '../../api/api.interceptor'
import { ICategory } from '../../types/category.interface'

export const CategoryService = {
	async getAll(queryData = {} as TypeDataFilters) {
		return instance<ICategory[]>({
			url: '/categories',
			method: 'GET',
			params: queryData,
		})
	},

	async getById(categoryId: string | number) {
		return instance<ICategory>({
			url: `/categories/${categoryId}`,
			method: 'GET',
		})
	},

	async create(data: ICategory) {
		return instance<ICategory>({
			url: `/categories/`,
			method: 'POST',
			data,
		})
	},

	async update(categoryId: string | number, data: TypeUpdateCategory) {
		return instance<ICategory>({
			url: `/categories/${categoryId}`,
			method: 'PUT',
			data,
		})
	},

	async delete(categoryId: string | number) {
		return instance<ICategory>({
			url: `/categories/${categoryId}`,
			method: 'DELETE',
		})
	},
}
