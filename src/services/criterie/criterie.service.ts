import { TypeDataFilters } from '../sort.types'
import { instance } from '../../api/api.interceptor'
import { ICriterie } from '../../types/criterie.interface'
import { TypeUpdateCriterie } from './criterie.types'

export const CriterieService = {
	async getAll(queryData = {} as TypeDataFilters) {
		return instance<ICriterie[]>({
			url: '/criteries',
			method: 'GET',
			params: queryData,
		})
	},

	async getByCategory(categoryId: string | number) {
		return instance<ICriterie[]>({
			url: `/criteries/category/${+categoryId}`,
			method: 'GET',
		})
	},

	async getById(criterieId: string | number) {
		return instance<ICriterie>({
			url: `/criteries/${criterieId}`,
			method: 'GET',
		})
	},

	async create(data: ICriterie) {
		return instance<ICriterie>({
			url: `/criteries/`,
			method: 'POST',
			data,
		})
	},

	async update(criterieId: string | number, data: TypeUpdateCriterie) {
		return instance<ICriterie>({
			url: `/criteries/${criterieId}`,
			method: 'PUT',
			data,
		})
	},

	async delete(criterieId: string | number) {
		return instance<ICriterie>({
			url: `/categories/${criterieId}`,
			method: 'DELETE',
		})
	},
}
