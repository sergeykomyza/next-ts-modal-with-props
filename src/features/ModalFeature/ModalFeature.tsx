
import styles from './modalFeature.module.scss';
import { ModalClientWrapper } from './ModalClientWrapper';
import { ModalContent } from './ModalContent';

export const ModalFeature = () => {

  
  return(
    <div className={styles.modalWrap}>
      <ModalClientWrapper>
        <ModalContent />
      </ModalClientWrapper>
    </div>
  )
}