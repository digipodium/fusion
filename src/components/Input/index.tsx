import React from 'react'
import { colorClasses, tailwindThemeClasses, variantClass } from '../../themes/themes';
import clsx from 'clsx'

interface InputProps {
  color?: 'primary' | 'light' | 'dark' | 'info' | 'danger' | 'warning' | 'success' | 'secondary'
  variant?: 'default' | 'filled' | 'outlined'
  padding?: 'xs' | 'sm'
  radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'search'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  disabled?: boolean
  id?: string
  label?: string
  placeholder?: string
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  placeholder,
  disabled = false,
  variant = 'outlined',
  size = 'md',
  radius = 'md',
  type = 'text'
}) => {
  return (
    <div>
      <label htmlFor={id} className={clsx(tailwindThemeClasses.textSizes[size], "block text-gray-700 dark:text-gray-300")}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder ? placeholder : label}
        disabled={disabled}
        className={clsx(variantClass(
          variant,
          'slate-800'
        ), tailwindThemeClasses.paddings[size], tailwindThemeClasses.radius[radius], tailwindThemeClasses.textSizes[size], "block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500")} />
    </div>
  )
}

export default Input
