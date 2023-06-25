import { IAuthResponse, ITokensWithRole } from '../../types/user.interface'
import Cookies from 'js-cookie'

export const getAccessToken = () => {
	const accessToken = Cookies.get('accessToken')
	return accessToken || null
}

export const getRefreshToken = () => {
	const refreshToken = Cookies.get('refreshToken')
	return refreshToken || null
}

export const getRole = () => {
	const role = Cookies.get('role')
	return role || null
}

export const getUserFromStorage = () => {
	return JSON.parse(localStorage.getItem('user') || '{}')
}

export const saveDataInStorage = (data: ITokensWithRole) => {
	Cookies.set('accessToken', data.accessToken)
	Cookies.set('refreshToken', data.refreshToken)
	console.log('ВОТ данные ', data.user)
	Cookies.set('role', data.user.role)
}

export const removeFromStorage = () => {
	Cookies.remove('accessToken')
	Cookies.remove('refreshToken')
	Cookies.remove('role')
	localStorage.removeItem('user')
}

export const saveToStorage = (data: IAuthResponse) => {
	saveDataInStorage(data)
	localStorage.setItem('user', JSON.stringify(data.user))
}
