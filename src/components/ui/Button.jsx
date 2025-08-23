import { forwardRef } from 'react';
import { Loader2 } from 'lucide-react';

const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  icon,
  iconPosition = 'left',
  iconOnly = false,
  as = 'button',
  className = '',
  ...props
}, ref) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0';
  
  const variants = {
    primary: 'bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-500 dark:hover:bg-yellow-600 text-white hover:text-white dark:text-white dark:hover:text-white focus:ring-yellow-500 shadow-md hover:shadow-lg',
    secondary: 'bg-gray-500 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-700 text-white hover:text-white dark:text-white dark:hover:text-white focus:ring-gray-500 shadow-md hover:shadow-lg',
    outline: 'border-2 border-yellow-500 dark:border-yellow-400 text-yellow-600 dark:text-yellow-400 hover:bg-yellow-500 hover:text-white dark:hover:bg-yellow-500 dark:hover:text-white focus:ring-yellow-500',
    ghost: 'text-yellow-600 dark:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-950 focus:ring-yellow-500',
    danger: 'bg-red-500 hover:bg-red-600 dark:bg-red-500 dark:hover:bg-red-600 text-white hover:text-white dark:text-white dark:hover:text-white focus:ring-red-500 shadow-md hover:shadow-lg',
    success: 'bg-green-500 hover:bg-green-600 dark:bg-green-500 dark:hover:bg-green-600 text-white hover:text-white dark:text-white dark:hover:text-white focus:ring-green-500 shadow-md hover:shadow-lg',
    icon: 'bg-gray-100 dark:bg-gray-700 text-yellow-600 dark:text-yellow-400 hover:bg-yellow-100 dark:hover:bg-gray-600 focus:ring-yellow-500 rounded-full shadow-sm'
  };
  
  const sizes = {
    sm: iconOnly ? 'p-2' : 'px-3 py-2 text-sm',
    md: iconOnly ? 'p-2.5' : 'px-4 py-2.5 text-base',
    lg: iconOnly ? 'p-3' : 'px-6 py-3 text-lg'
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };
  
  const variantClasses = variants[variant] || variants.primary;
  const sizeClasses = sizes[size] || sizes.md;
  const iconSizeClasses = iconSizes[size] || iconSizes.md;
  
  const isDisabled = disabled || loading;
  
  const renderIcon = (iconElement, position) => {
    if (!iconElement) return null;
    
    const spacing = iconOnly ? '' : position === 'left' ? 'mr-2' : 'ml-2';
    const iconClasses = `${iconSizeClasses} ${spacing}`;
    
    if (typeof iconElement === 'string') {
      return <span className={iconClasses}>{iconElement}</span>;
    }
    
    // Clone the icon element with proper classes
    return iconElement && typeof iconElement === 'object' 
      ? { ...iconElement, props: { ...iconElement.props, className: iconClasses } }
      : iconElement;
  };
  
  const Component = as;
  
  return (
    <Component
      ref={ref}
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
      disabled={as === 'button' ? isDisabled : undefined}
      {...props}
    >
      {loading && (
        <Loader2 className={`${iconSizeClasses} ${!iconOnly && children ? 'mr-2' : ''} animate-spin`} />
      )}
      
      {!loading && icon && iconPosition === 'left' && renderIcon(icon, 'left')}
      
      {!iconOnly && children}
      
      {!loading && icon && iconPosition === 'right' && renderIcon(icon, 'right')}
    </Component>
  );
});

Button.displayName = 'Button';

export default Button;