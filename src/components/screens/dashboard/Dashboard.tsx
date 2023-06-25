import { FC, useEffect, useState } from 'react'
import Line from '../../ui/line'
import { io } from 'socket.io-client'
import { ObjectService } from '../../../services/object/object.service'
import { IObject } from '../../../types/object.interface'
import { useAuthRedirect } from '../auth/useAuthRedirect'

const Dashboard: FC = () => {
	useAuthRedirect({ requiredRole: 'ADMIN' })
	const [objects, setObjects] = useState<IObject[]>([])

	useEffect(() => {
		const socket = io('http://localhost:4201')

		const fetchObjects = async () => {
			try {
				const data = await ObjectService.getAll()
				setObjects(data.data.objects)
			} catch (error) {
				console.error('Ошибка при получении объектов:', error)
			}
		}

		// Загрузите начальные объекты при монтировании компонента
		fetchObjects()

		socket.on('newObject', object => {
			console.log(object)
			setObjects(prev => [...prev, object])
		})

		return () => {
			console.log('lkdfj')
			socket.off('newObject')
		}
	}, [])

	return (
		<div>
			{objects.length ? (
				objects.map((object, index) => <Line key={index} object={object} />)
			) : (
				<div>Обслуживаемых объектов нет</div>
			)}
		</div>
	)
}

export default Dashboard
