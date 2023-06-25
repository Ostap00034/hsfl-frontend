import { FC, PropsWithChildren, useEffect } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { useActions } from '../../hooks/useActions'
import {
	getAccessToken,
	getRefreshToken,
	getRole,
} from '../../services/auth/auth.helper'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const { user } = useAuth()
	const { checkAuth, logout } = useActions()

	const dispatch: any = useDispatch()
	const navigate = useNavigate()

	const { pathname } = useLocation()

	useEffect(() => {
		const accessToken = getAccessToken()
		if (accessToken) checkAuth()
	}, [])

	useEffect(() => {
		const refreshToken = getRefreshToken()
		if (!refreshToken && user) dispatch(logout())
	}, [pathname])

	return <>{children}</>
}

export default AuthProvider
