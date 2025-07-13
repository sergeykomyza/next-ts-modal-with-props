'use client'

import {useState} from 'react'
import { Button } from "./Buttons/Button"
import { Modal } from "./Modals/Modal"
import { IModalProps } from '@/types/Modal'

export const ModalClientWrapper: React.FC<IModalProps> = ({children}) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleModal = () => setIsOpen(!isOpen)
  
  return(
    <>
      <Button onClickToggle={toggleModal} isOpen={isOpen}/>
      <Modal isOpen={isOpen} onClickToggle={toggleModal}>{children}</Modal>
    </>
  )
}