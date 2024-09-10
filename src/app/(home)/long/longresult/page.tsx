import styles from './styles.module.scss';
import {AnswerPicker} from "@/components/longResult/answerPicker/AnswerPicker";

export default function Page() {
  return (
    <div className={styles.container}>
      <AnswerPicker/>
    </div>
  )
}