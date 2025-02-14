import classNames from 'classnames';
import React, { HTMLAttributes } from 'react';

type CardProps = HTMLAttributes<HTMLDivElement> & { children: React.ReactNode };

const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div
      className={classNames(
        'border-[0.5px] w-full border-primary-300 p-6 rounded-2xl md:max-w-[380px] max-w-[327px] bg-white',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
