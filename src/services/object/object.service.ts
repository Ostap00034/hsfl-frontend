import { TypeDataFilters } from '../sort.types'
import { TypeUpdateObject } from './object.types'
import { IObject, TypeObjects } from '../../types/object.interface'
import { instance } from '../../api/api.interceptor'

export const ObjectService = {
	async getAll(queryData = {} as TypeDataFilters) {
		return instance<TypeObjects>({
			url: '/objects',
			method: 'GET',
			params: queryData,
		})
	},

	async getAllServicedObjects() {
		return instance<IObject[]>({
			url: '/objects/servicedobjects',
			method: 'GET',
		})
	},

	async getById(objectId: string | number) {
		return instance<IObject>({
			url: `/objects/${objectId}`,
			method: 'GET',
		})
	},

	async create(data: IObject) {
		return instance<IObject>({
			url: `/objects/`,
			method: 'POST',
			data,
		})
	},

	async update(objectId: string | number, data: TypeUpdateObject) {
		return instance<IObject>({
			url: `/objects/${objectId}`,
			method: 'PUT',
			data,
		})
	},

	async takeObject(objectId: number) {
		return instance({
			url: `/users/takeObject/${objectId}`,
			method: 'PATCH',
		})
	},

	async delete(objectId: string | number) {
		return instance<IObject>({
			url: `/objects/${objectId}`,
			method: 'DELETE',
		})
	},
}
