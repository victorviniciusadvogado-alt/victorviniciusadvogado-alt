import React from 'react';
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'outline'|'solid' };
export const Button: React.FC<Props> = ({ className='', variant='solid', children, ...props }) => {
  const base = 'inline-flex items-center justify-center py-2 px-4 rounded-2xl text-sm transition';
  const solid = 'bg-[var(--prim)] text-white hover:opacity-90';
  const outline = 'border border-[var(--gold)] text-[var(--gold)] hover:opacity-90 bg-transparent';
  const styles = variant==='outline' ? outline : solid;
  return <button className={base+' '+styles+' '+className} {...props}>{children}</button>;
};
export default Button;
