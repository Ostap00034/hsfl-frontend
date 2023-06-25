import { IServicedObject } from './../../types/serviced-object.interface'
import { TypeDataFilters } from '../sort.types'
import {
	TypeServicedObject,
	TypeUpdateServicedObject,
} from './serviced-object.types'
import { instance } from '../../api/api.interceptor'

export const ObjectService = {
	async getAll(queryData = {} as TypeDataFilters) {
		return instance<TypeServicedObject>({
			url: '/serviced-objects',
			method: 'GET',
			params: queryData,
		})
	},

	async getById(objectId: string | number) {
		return instance<IServicedObject>({
			url: `/serviced-objects/${objectId}`,
			method: 'GET',
		})
	},

	async create(data: TypeServicedObject) {
		return instance<IServicedObject>({
			url: `/serviced-objects/`,
			method: 'POST',
			data,
		})
	},

	async update(objectId: string | number, data: TypeUpdateServicedObject) {
		return instance<IServicedObject>({
			url: `/serviced-objects/${objectId}`,
			method: 'PUT',
			data,
		})
	},

	async delete(objectId: string | number) {
		return instance<IServicedObject>({
			url: `/serviced-objects/${objectId}`,
			method: 'DELETE',
		})
	},
}
