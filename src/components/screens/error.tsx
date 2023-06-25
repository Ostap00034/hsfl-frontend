import { Link } from 'react-router-dom'

const Error = () => {
	return (
		<div className='h-[calc(100vh-100px) flex items-center justify-center'>
			<h1 className='font-manrope text-[32px] font-semibold'>
				Страницы с таким адресом не существует, проверьте правильность адреса.
			</h1>
			<Link to='/'>Назад на главную.</Link>
		</div>
	)
}

export default Error
