import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { InputHTMLAttributes } from 'react';
import React from 'react';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}
const inputVariants = cva(
  'w-full p-4  text-lg  bg-black  border-2 border-neutral-800  rounded-md outline-none text-white focus:border-sky-500 focus:border-2 transition disabled:bg-neutral-900 disabled:opacity-70 disabled:cursor-not-allowed',
  {
    variants: {},
  }
);
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', label, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <p className="text-xl text-white font-semibold mb-2">{label}</p>
        )}
        <input
          ref={ref}
          type={type}
          className={cn(inputVariants({ className }))}
        />
      </div>
    );
  }
);
Input.displayName = 'Input';

export default Input;
