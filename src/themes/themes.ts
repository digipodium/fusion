const tailwindThemeClasses = {
    radius: {
        none: 'rounded-none',
        xs: 'rounded',
        sm: 'rounded',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-full',
    },

    sizes: {
        xs: 'size-2',
        sm: 'size-2.5',
        md: 'size-3',
        lg: 'size-4',
        xl: 'size-24',
    },
    checkboxsizes: {
        xs: 'h-4 w-4',
        sm: 'h-5 w-5',
        md: 'h-6 w-6',
        lg: 'h-7 w-7',
        xl: 'h-8 w-8',
    },
    imageSizes: {
        xs: 'h-8 w-8',
        sm: 'h-12 w-12',
        md: 'h-16 w-16',
        lg: 'h-24 w-24',
        xl: 'h-32 w-32',
    },
    textSizes: {
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-md',
        lg: 'text-lg',
        xl: 'text-xl',
    },
    containerSizes: {
        xs: 'max-w-xs',
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        '2xl': 'max-w-2xl',
        '3xl': 'max-w-3xl',
        '4xl': 'max-w-4xl',
        '5xl': 'max-w-5xl'
    },
    paddings: {
        xs: 'p-1',
        sm: 'p-2',
        md: 'p-3',
        lg: 'p-4',
        xl: 'p-6',
    },

    buttonPaddings: {
        xs: 'px-2 py-1',
        sm: 'px-3 py-2',
        md: 'px-4 py-3',
        lg: 'px-5 py-4',
        xl: 'px-6 py-5',
    },

    textcolor: {
        primary: 'text-blue-600',
        secondary: 'text-purple-600',
        success: 'text-green-600',
        danger: 'text-red-600',
        warning: 'text-yellow-600',
        info: 'text-blue-600',
        light: 'text-slate-300',
        dark: 'text-gray-800'
    },

    backgroundColors: {
        primary: 'bg-blue-600',
        secondary: 'bg-purple-600',
        success: 'bg-green-600',
        danger: 'bg-red-600',
        warning: 'bg-yellow-600',
        info: 'bg-blue-600',
        light: 'bg-slate-300',
        dark: 'bg-gray-800'
    },

    accentcolors: {
        primary: 'blue-600',
        secondary: 'purple-600',
        success: 'green-600',
        danger: 'red-600',
        warning: 'yellow-600',
        info: 'blue-600',
        light: 'slate-300',
        dark: 'gray-800'
    },

    ringColors: {
        primary: 'ring-blue-300',
        secondary: 'ring-purple-300',
        success: 'ring-green-300',
        danger: 'ring-red-300',
        warning: 'ring-yellow-300',
        info: 'ring-blue-300',
        light: 'ring-slate-300',
        dark: 'ring-gray-800'
    },
    borderColors: {
        primary: 'border-blue-600',
        secondary: 'border-purple-600',
        success: 'border-green-600',
        danger: 'border-red-600',
        warning: 'border-yellow-600',
        info: 'border-blue-600',
        light: 'border-slate-300',
        dark: 'border-gray-800'
    }

}

const cssColors = {
    colors: {
        primary: '#1E3A8A',
        light: '#E5E7EB',
        dark: '#4B5563',
        info: '#3B82F6',
        danger: '#B91C1C',
        warning: '#F59E0B',
        success: '#047857',
        secondary: '#F59E0B',
    },
}

const colorClasses = {
    primary: 'blue-600',
    secondary: 'purple-600',
    success: 'green-600',
    danger: 'red-600',
    warning: 'yellow-600',
    info: 'blue-600',
    light: 'slate-300'
}
const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'

}
interface VariantClass {
    filled: string;
    outlined: string;
    default: string;
}

const variantClass = (variant: keyof VariantClass, colorClass: string): string => {
    let classValue = '';
    switch (variant) {
        case 'filled':
            classValue = `bg-${colorClass} text-white`;
            break;
        case 'outlined':
            classValue = `border-2 border-${colorClass} text-${colorClass}`;
            break;
        case 'default':
            classValue = `bg-${colorClass} text-black`;
            break;
        default:
            break;
    }
    // console.log(classValue);

    return classValue;
}

export { tailwindThemeClasses, alignmentClasses, cssColors, variantClass, colorClasses };