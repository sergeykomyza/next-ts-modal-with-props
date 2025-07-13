import { ReactNode } from "react";

export interface IModalProps{
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onClickToggle?: React.MouseEventHandler<HTMLButtonElement>;
  isOpen?: boolean;
  children?: ReactNode;
}