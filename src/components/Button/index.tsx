import clsx from 'clsx';
import { FC } from 'react';
import React from 'react';
import tailwindClasses from '../../themes/themes';

interface ButtonProps {
  children: React.ReactNode;
  color: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'light' | 'dark' | undefined;
  variant: 'filled' | 'outlined' | 'default' | 'light' | undefined;
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined;
  padding: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined;
  radius: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined;
  type: 'button' | 'submit' | 'reset' | undefined;
  disabled: boolean;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'filled',
  color = 'primary',
  size = 'md',
  type = "submit",
  disabled = false,
  radius = 'md',
  onClick = () => { }
}) => {

  return (
    <button
      className={clsx('mt-5 mx-5 py-2 px-4 rounded-md focus:ring-2 focus:outline-none',
        ['filled', 'outlined'].includes(variant) ? tailwindClasses.borderClass[color] : '',
        color === 'light' ? 'text-black' : 'text-white',
        onClick = onClick,
        type = type,
        disabled = disabled,
        variant === 'outlined' ? 'bg-white' : tailwindClasses.backgroundClass[color],
        tailwindClasses.sizeClass[size],
        tailwindClasses.paddingClass[size],
        tailwindClasses.textClass[size],
        tailwindClasses.radiusClass[radius],
      

      )}
    >{children}</button>
  )
}

export default Button
