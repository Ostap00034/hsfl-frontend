import { InputHTMLAttributes } from 'react'

export interface IField extends InputHTMLAttributes<HTMLInputElement> {
	placeholder: string
	type?: 'password' | 'text'
	error?: string
	label?: string
}
