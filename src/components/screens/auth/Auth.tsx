import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useAuthRedirect } from './useAuthRedirect'
import { useAuth } from '../../../hooks/useAuth'
import { useActions } from '../../../hooks/useActions'
import { IEmailPassword } from '../../../types/user.interface'
import Heading from '../../ui/heading'
import Loader from '../../ui/loader'
import Field from '../../ui/input/field'
import Button from '../../ui/button'
import { useNavigate } from 'react-router-dom'

const Auth: FC = () => {
	useAuthRedirect()

	const navigate = useNavigate()

	const { isLoading } = useAuth()

	const { login } = useActions()

	const {
		register: formRegister,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IEmailPassword>({
		mode: 'onChange',
	})

	const onSubmit: SubmitHandler<IEmailPassword> = data => {
		login(data)
		reset()
		navigate('/')
	}

	return (
		<div className='flex h-auto min-h-screen w-full flex-col items-center justify-center bg-gray-400 p-[16px]'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				action='POST'
				className='flex w-[calc(100vw-32px)] flex-col gap-[32px] rounded-[12px] bg-white p-[24px] transition-all md:max-w-[500px] md:p-[32px]'>
				<Heading>Вход в систему</Heading>
				{isLoading ? (
					<Loader />
				) : (
					<>
						<div className='flex flex-col gap-[24px]'>
							<Field
								{...formRegister('email', {
									required: 'Введите почту',
								})}
								placeholder='Email'
								label='Введите электронную почту'
								type='text'
								error={errors.email?.message}
							/>
							<Field
								{...formRegister('password', {
									required: 'Введите пароль',
									minLength: {
										value: 6,
										message: 'Минимальная длина пароля 6 символов',
									},
								})}
								placeholder='Пароль'
								label='Введите пароль'
								type='password'
								error={errors.password?.message}
							/>
						</div>
						<div className='flex w-full flex-col gap-[12px]'>
							<Button type='submit' color='white'>
								Войти
							</Button>
							<Button
								url='/register'
								type='button'
								color='#0050B3'
								bg='#D9EAFF'>
								Зарегистрироваться
							</Button>
						</div>
					</>
				)}
			</form>
		</div>
	)
}

export default Auth
