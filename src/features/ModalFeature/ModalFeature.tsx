'use client'

import { useState } from "react";
import { Modal } from "@/features/ModalFeature/Modals/Modal";
import {Button} from "@/features/ModalFeature/Buttons/Button";
import styles from './modalFeature.module.scss';

export const ModalFeature = () => {
  const [isOpen, setIsOpen] = useState(false)
  const closeModal = () => setIsOpen(false)
  return(
    <div className={styles.modalWrap}>
      <Button variant={styles.whiteBtn} onClick={() => setIsOpen(!isOpen)}>
        {!isOpen ? 'OPEN MODAL' : 'CLOSE MODAL'}
      </Button>
      { isOpen && (
        <Modal num={2} onClick={closeModal}>CLOSE</Modal>
      )}
    </div>
  )
}