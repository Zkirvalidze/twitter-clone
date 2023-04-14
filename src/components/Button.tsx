import React, { ButtonHTMLAttributes } from 'react';
import { cn } from '@/app/libs/utils';

import { cva, type VariantProps } from 'class-variance-authority';

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  label: string;
}

const buttonVariants = cva(
  'disabled:opacity-70 disabled:cursor-not-allowed rounded-full font-semibold hover:opacity-80 transition border-2',
  {
    variants: {
      variant: {
        default: 'bg-sky-500 text-white border-sky-500',
        secondary: 'bg-white text-black border-black',
        outline: ' bg-transparant border-white text-white',
      },
      size: {
        default: 'text-md px-4 py-2',
        large: 'text-xl px-5 py-3',
      },
      width: {
        default: 'w-fit',
        fullWidth: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ label, className, children, variant, size, width, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, width, className }))}
        ref={ref}
        {...props}
      >
        {label}
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
