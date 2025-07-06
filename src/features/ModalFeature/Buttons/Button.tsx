

interface ButtonProps{
  variant?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}
export const Button = ({variant, onClick, children}: ButtonProps) => {
  return(
    <button className={variant} onClick={onClick}>{children}</button>
  )
}