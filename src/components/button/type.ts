export type TButton = {
  type: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  size: 'sm' | 'md' | 'lg';
  name: string|null
  func?: () => void;
  className?: string;
};
