import { Link } from 'react-router-dom'
import { logout } from '../../../store/user/user.actions'
import { useDispatch } from 'react-redux'
import { useAuth } from '../../../hooks/useAuth'
import { getRole } from '../../../services/auth/auth.helper'
import Button from '../button'

const Header = () => {
	const { user } = useAuth()
	if (!user) return

	const role = getRole()

	const dispatch: any = useDispatch()

	return (
		<div className='flex h-[100px] w-full flex-row items-center justify-between px-[52px]'>
			<Link to='/'>
				<div className='flex cursor-pointer flex-row items-center justify-center gap-[24px]'>
					<span className='font-manrope text-[24px] font-semibold'>
						Рейтинговая система
					</span>
				</div>
			</Link>
			<div className='flex flex-row gap-[20px]'>
				<Button
					onClick={() => {
						dispatch(logout())
					}}
					color='white'>
					Выйти
				</Button>
				{role! === 'MASTER' ? (
					<Button url='/create-post' width='auto' color='white'>
						Создать публикацию
					</Button>
				) : (
					<div className='flex flex-row gap-[10px]'>
						<Button url='/create-criterie' type='button' color='white'>
							Создать критерий
						</Button>
						<Button url='/create-category' type='button' color='white'>
							Создать категорию
						</Button>
					</div>
				)}
				<Button url='/profile' color='white'>
					Профиль
				</Button>
			</div>
		</div>
	)
}

export default Header
