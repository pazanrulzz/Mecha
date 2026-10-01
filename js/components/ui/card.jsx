// card.jsx - shadcn/ui Card
import * as React from 'react';
import { cn } from '../../lib/utils.js';

export const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('rounded-xl border bg-card text-card-foreground shadow', className)} {...props} />
));
Card.displayName = 'Card';

export const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-3', className)} {...props} />
));
CardContent.displayName = 'CardContent';
