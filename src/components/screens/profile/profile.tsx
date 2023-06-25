import { useProfile } from '../../../hooks/useProfile'
import { useAuthRedirect } from '../auth/useAuthRedirect'

const Profile = () => {
	useAuthRedirect()

	const { profile } = useProfile()

	return (
		<div className='flex flex-col justify-center gap-[20px] items-center w-full h-[calc(100vh-100px)]'>
			<div className='h-[40px] w-[400px] px-[20px] rounded-[12px] flex justify-center items-center border-black border-[1px]'>
				Email: {profile.email}
			</div>
			<div className='h-[40px] w-[400px] px-[20px] rounded-[12px] flex justify-center items-center border-black border-[1px]'>
				ФИО: {profile.fio}
			</div>
			<div className='h-[40px] w-[400px] px-[20px] rounded-[12px] flex justify-center items-center border-black border-[1px]'>
				Баллы: {profile.point}
			</div>
		</div>
	)
}

export default Profile
