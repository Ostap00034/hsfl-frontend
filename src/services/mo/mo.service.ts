import { TypeDataFilters } from '../sort.types'
import { TypeUpdateMo } from './mo.types'
import { instance } from '../../api/api.interceptor'
import { IMo } from '../../types/mo.inteface'

export const MoService = {
	async getAll(queryData = {} as TypeDataFilters) {
		return instance<IMo[]>({
			url: '/mo',
			method: 'GET',
			params: queryData,
		})
	},

	async getById(moId: string | number) {
		return instance<IMo>({
			url: `/mo/${moId}`,
			method: 'GET',
		})
	},

	async create(data: IMo) {
		return instance<IMo>({
			url: `/mo/`,
			method: 'POST',
			data,
		})
	},

	async update(moId: string | number, data: TypeUpdateMo) {
		return instance<IMo>({
			url: `/mo/${moId}`,
			method: 'PUT',
			data,
		})
	},

	async delete(moId: string | number) {
		return instance<IMo>({
			url: `/mo/${moId}`,
			method: 'DELETE',
		})
	},
}
