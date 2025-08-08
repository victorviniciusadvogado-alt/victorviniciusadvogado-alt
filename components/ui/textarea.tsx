import React from 'react';
export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className='', ...props }, ref) => (
    <textarea ref={ref} className={`rounded-2xl bg-black/60 border border-white/10 px-3 py-2 text-sm ${className}`} {...props} />
  )
);
Textarea.displayName = 'Textarea';
export default Textarea;
