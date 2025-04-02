import './Card.css';

export interface CardProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export interface CardHeaderProps {
  children: React.ReactNode;
}

export interface CardContentProps {
  children: React.ReactNode;
}

export interface CardFooterProps {
  children: React.ReactNode;
}

export function CardHeader({ children }: CardHeaderProps) {
  return <div className="card-header">{children}</div>;
}

export function CardContent({ children }: CardContentProps) {
  return <div className="card-content">{children}</div>;
}

export function CardFooter({ children }: CardFooterProps) {
  return <div className="card-footer">{children}</div>;
}

export function Card({ children, onClick, className }: CardProps) {
  return (
    <div 
      className={`card ${className || ''}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
    >
      {children}
    </div>
  );
}

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card; 