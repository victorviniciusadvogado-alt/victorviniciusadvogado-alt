import React from 'react';
export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className='', children, ...props }) => (
  <div className={`rounded-2xl border border-white/10 bg-black/40 ${className}`} {...props}>{children}</div>
);
export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className='', children, ...props }) => (
  <div className={`p-4 ${className}`} {...props}>{children}</div>
);
export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ className='', children, ...props }) => (
  <h3 className={`font-semibold ${className}`} {...props}>{children}</h3>
);
export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className='', children, ...props }) => (
  <div className={`p-4 pt-0 ${className}`} {...props}>{children}</div>
);
export default Card;
