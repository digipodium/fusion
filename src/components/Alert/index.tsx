import clsx from 'clsx';
import React from 'react';
import { tailwindThemeClasses } from '../../themes/themes';

interface AlertProps {
  variant?: 'filled' | 'outlined' | 'text';
  color?: 'primary' | 'secondary' | 'warning' | 'danger' | 'success' | 'info' | 'light' | 'dark' | undefined;
  title: string;
  description: string;
  icon?: React.ReactNode;

}

const Alert: React.FC<AlertProps> = ({ title, description, variant = 'filled', color = 'primary', icon = undefined }) => {
  return (
    <div className={clsx(tailwindThemeClasses.backgroundColors[color], "flex gap-x-3 items-start p-4 mb-4 text-sm text-white rounded-lg dark:bg-gray-800 dark:text-blue-400")} role="alert">
      <svg className="flex-shrink-0 inline size-5 mt-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        {icon === undefined ?
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          :
          icon
        }
      </svg>
      <span className="sr-only">Info</span>
      <div>
        <h4 className="text-xl font-medium">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Alert
