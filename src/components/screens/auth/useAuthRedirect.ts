import { useAuth } from '../../../hooks/useAuth'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { getRole } from '../../../services/auth/auth.helper'

export const useAuthRedirect = ({ requiredRole = '' } = {}) => {
	const navigate = useNavigate()

	const { user } = useAuth()

	const { pathname } = useLocation()

	useEffect(() => {
		if (user) {
			if (pathname === '/auth' || pathname === '/register') navigate('/')

			const role = getRole()

			if (requiredRole !== '' && role !== requiredRole && role !== 'ADMIN')
				navigate('/accessdenied')
		} else if (pathname !== '/auth' && pathname !== '/register')
			navigate('/auth')
	}, [user, pathname])
}
