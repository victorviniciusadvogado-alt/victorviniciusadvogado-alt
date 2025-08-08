import React from 'react';
export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className='', ...props }, ref) => (
    <input ref={ref} className={`rounded-2xl bg-black/60 border border-white/10 px-3 py-2 text-sm ${className}`} {...props} />
  )
);
Input.displayName = 'Input';
export default Input;
