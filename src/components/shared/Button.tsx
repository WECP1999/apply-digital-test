import classNames from 'classnames';
import { ButtonHTMLAttributes, ForwardedRef, forwardRef, useMemo } from 'react';

import DefaultSpinner from './DefaultSpinner';

const variantStyles = {
  primary:
    'bg-primary-400 hover:bg-primary-300 focus:bg-primary-500 text-white',
  text: 'border border-primary-500 bg-transparent text-primary-500 hover:text-primary-400 focus:text-primary-400',
  danger:
    'bg-alert-error-500 hover:bg-alert-error-600 focus:bg-alert-error-700 text-white',
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonType?: keyof typeof variantStyles;
  isLoading?: boolean;
};

const ButtonComponent = (
  props: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  const {
    children,
    className,
    buttonType = 'primary',
    disabled,
    isLoading = false,
    ...rest
  } = props;

  const inputClasses = useMemo(
    () =>
      classNames(
        'min-h-[32px] w-fit min-w-[112px] cursor-pointer flex-row items-center justify-center rounded-md px-4 py-2 sm:min-w-[122px]',
        'flex gap-2 text-xs transition-colors duration-300 ease-in-out',
        {
          'pointer-events-none cursor-not-allowed opacity-60 brightness-110':
            disabled || isLoading,
        },
        variantStyles[buttonType],
        className
      ),
    [className, buttonType, disabled, isLoading]
  );

  return (
    <button
      {...rest}
      className={inputClasses}
      ref={ref}
      disabled={disabled || isLoading}
    >
      <DefaultSpinner
        show={isLoading}
        type="alternative"
        className="border-3 size-4"
      />
      {!isLoading && children}
    </button>
  );
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(ButtonComponent);
export default Button;
export type { ButtonProps };
