
import { ModalFeature } from "@/features/ModalFeature/ModalFeature";
import styles from "./page.module.css";
export default function Home() {
 
  return (
    <div className={styles.page}>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta deserunt expedita distinctio, ipsum natus labore reprehenderit optio maiores veritatis repellat inventore explicabo voluptatum nesciunt iste odio quod ullam nisi sunt.
      </div>
      <ModalFeature />
      
    </div>
  );
}
