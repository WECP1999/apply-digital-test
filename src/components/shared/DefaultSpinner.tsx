import classNames from 'classnames';
import { useMemo } from 'react';

type DefaultSpinnerProps = Readonly<{
  className?: string;
  show?: boolean;
  type?: 'default' | 'alternative';
}>;

const DefaultSpinner = (props: DefaultSpinnerProps): JSX.Element => {
  const { className, show, type = 'default' } = props;

  const spinnerClass = useMemo(
    () =>
      classNames(
        'aspect-square size-5 animate-spin rounded-full border-4',
        {
          'border-primary-400 border-l-white': type === 'default',
          'border-r-primary-300': type === 'alternative',
        },
        className
      ),
    [className, type]
  );

  return show ? <div className={spinnerClass} /> : <></>;
};

export default DefaultSpinner;
