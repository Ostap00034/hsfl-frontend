import Cookies from 'js-cookie'
import axios from 'axios'

import { saveToStorage } from './auth.helper'

import { TypeAuth } from './auth.types'
import { IAuthResponse, IEmailPassword } from '../../types/user.interface'
import { instance } from '../../api/api.interceptor'
import { getContentType } from '../../api/api.helper'

export const AuthService = {
	async main(type: TypeAuth, data: IEmailPassword) {
		const response = await instance<IAuthResponse>({
			url: `/auth/${type}`,
			method: 'POST',
			data,
		})

		if (response.data.accessToken) saveToStorage(response.data)

		return response.data
	},

	async getNewTokens() {
		const refreshToken = Cookies.get('refreshToken')

		const response = await axios.post<string, { data: IAuthResponse }>(
			process.env.SERVER_URL + 'auth/login/access-token',
			{ refreshToken },
			{
				headers: getContentType(),
			}
		)

		if (response.data.accessToken) saveToStorage(response.data)

		return response
	},
}

export default AuthService
