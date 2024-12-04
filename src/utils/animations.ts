import { clsx } from 'clsx';

export const fadeInUp = (delay: number = 0) =>
  clsx(
    'opacity-0 translate-y-4',
    'animate-[fadeInUp_0.6s_ease-out_forwards]',
    delay && `animation-delay-${delay}`
  );

export const fadeIn = (delay: number = 0) =>
  clsx(
    'opacity-0',
    'animate-[fadeIn_0.6s_ease-out_forwards]',
    delay && `animation-delay-${delay}`
  );