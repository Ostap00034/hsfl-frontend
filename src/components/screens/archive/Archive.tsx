import { FC } from 'react'
import { useProfile } from '../../../hooks/useProfile'
import { useAuthRedirect } from '../auth/useAuthRedirect'

const Archive: FC = () => {
	useAuthRedirect()

	const { profile } = useProfile()

	return (
		<div className='container mx-auto'>
			<table className='min-w-full'>
				<thead>
					<tr>
						<th className='bg-gray-200 px-6 py-3 text-gray-700'>Номер</th>
						<th className='bg-gray-200 px-6 py-3 text-gray-700'>Адрес</th>
						<th className='bg-gray-200 px-6 py-3 text-gray-700'>Статус</th>
						<th className='bg-gray-200 px-6 py-3 text-gray-700'>Описание</th>
					</tr>
				</thead>
				<tbody>
					{profile.servicedObjects
						? profile.servicedObjects.map((object, index) => (
								<tr
									key={index}
									className={index % 2 === 0 ? 'bg-gray-100' : ''}>
									<td className='px-6 py-4'>{object.id}</td>
									<td className='px-6 py-4'>{object.object.title}</td>
									<td className='px-6 py-4'>{object.object.description}</td>
									<td className='px-6 py-4'>{object.description}</td>
								</tr>
						  ))
						: null}
				</tbody>
			</table>
		</div>
	)
}

export default Archive
