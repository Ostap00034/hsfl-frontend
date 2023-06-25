import { FC, ButtonHTMLAttributes, PropsWithChildren } from 'react'

import cn from 'clsx'
import { Link } from 'react-router-dom'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	color?: string
	bg?: string
	width?: number | string
	height?: string
	weight?: string
	url?: string
}

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	color = 'black',
	bg = '#0050B3',
	width = 'auto',
	height = '50px',
	weight = '600',
	url = '',
	...rest
}) => {
	if (url)
		return (
			<Link to={url}>
				<button
					style={{
						color: color,
						backgroundColor: bg,
						width: url ? '100%' : width,
						height: height,
						fontWeight: weight,
					}}
					className={cn(
						`font-manrope flex cursor-pointer items-center justify-center whitespace-nowrap rounded-[12px] px-[24px] text-[16px] leading-[24px] xl:text-[20px]`,
						className
					)}
					{...rest}>
					{children}
				</button>
			</Link>
		)
	return (
		<button
			style={{
				color: color,
				backgroundColor: bg,
				width: width,
				height: height,
				fontWeight: weight,
			}}
			className={cn(
				`font-manrope flex cursor-pointer items-center justify-center rounded-[12px] px-[24px] text-[16px] leading-[24px] xl:text-[20px]`,
				className
			)}
			{...rest}>
			{children}
		</button>
	)
}

export default Button
