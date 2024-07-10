import clsx from 'clsx';
import React from 'react';
import { tailwindThemeClasses } from '../../themes/themes';

interface AvatarProps {
  image: string
  alt?: string
  children?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined
  radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined
}

interface StyledInitialsProps {
  initials: string
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined
  radius: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined
}

const StyledInitials = ({ initials, size = 'md', radius = 'xl' }: StyledInitialsProps) => {
  return (
    <div className={clsx( tailwindThemeClasses.paddings[size], tailwindThemeClasses.textSizes[size], tailwindThemeClasses.radius[radius], `w-fit font-bold bg-slate-300 text-slate-600`)}>
      {initials.toUpperCase()}
    </div>
  )

}

const Avatar : React.FC<AvatarProps> = ({ image, alt="", children="", size = "md", radius = "xl" }) => {

  return (
    <>
      {
        image ?
          <img className={clsx(tailwindThemeClasses.imageSizes[size],  tailwindThemeClasses.radius[radius], 'bg-slate-300')} src={image} alt={alt} />
          :
          <StyledInitials initials={children} size={size} radius={radius} />
      }
    </>
  )
}

export default Avatar
