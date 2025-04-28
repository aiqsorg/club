export interface ShapeProps {
  className?: string;
  number: number;
  title: string;
  description: string;
}

export interface ButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}