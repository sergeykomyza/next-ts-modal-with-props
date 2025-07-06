
import style from './modal.module.scss'

interface ModalProps {
  children?: React.ReactNode;
  num: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Modal = ({num, onClick}: ModalProps) => {
  return(
    <div className={style.modal}>
      <span>{num}</span>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nulla sapiente veritatis quibusdam obcaecati aliquid ipsam nisi asperiores vel. Nihil ab tempora tempore fugit enim? Enim voluptatem temporibus magni illo.
      <button onClick={onClick}>CLOSE MODAL</button>
    </div>
  )
}