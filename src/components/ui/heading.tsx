import { PropsWithChildren, FC } from 'react'

import cn from 'clsx'

interface IHeading {
	className?: string
	color?: string
}

const Heading: FC<PropsWithChildren<IHeading>> = ({
	children,
	className = '',
	color = '#0F172A',
}) => {
	return (
		<h1
			style={{
				color: color,
			}}
			className={cn(
				'font-manrope self-start text-[22px] font-semibold leading-[28.6px]',
				className
			)}>
			{children}
		</h1>
	)
}

export default Heading
