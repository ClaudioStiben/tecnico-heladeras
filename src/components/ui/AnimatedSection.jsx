import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function AnimatedSection({ children, className = '', tag: Tag = 'div', delay = 0 }) {
  const ref = useScrollAnimation();

  return (
    <Tag
      ref={ref}
      className={`animate-on-scroll ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
