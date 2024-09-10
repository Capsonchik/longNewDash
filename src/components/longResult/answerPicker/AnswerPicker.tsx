'use client'

import styles from './styles.module.scss';
import {Button, CheckPicker} from "rsuite";
import {useDispatch, useSelector} from "react-redux";
import {selectFirstAnswers, selectSecondAnswers} from "@/store/answersSlice/answers.selectors";
import {setFirstAnswerData, setSecondAnswerData} from "@/store/dataSendSlice/dataToSend.slice";
import {
  selectDataToSend,
  selectDataToSendFirstAnswers,
  selectDataToSendSecondAnswer
} from "@/store/dataSendSlice/dataToSend.selectors";
import {AppDispatch} from "@/store/store";
import {fetchPostGraphData} from "@/store/answersSlice/answers.actions";

interface AnswerItem {
  response: string;
}

export const AnswerPicker = () => {
  const firstAnswer = useSelector(selectFirstAnswers);
  const secondAnswer = useSelector(selectSecondAnswers);
  const answers1 = useSelector(selectDataToSendFirstAnswers);
  const answers2 = useSelector(selectDataToSendSecondAnswer);
  const dataToSend = useSelector(selectDataToSend);

  const dispatch = useDispatch<AppDispatch>();

  const firstData = firstAnswer.map((item: AnswerItem) => ({
    label: item.response,
    value: item.response,
  }))

  const secondData = secondAnswer.map((item: AnswerItem) => ({
    label: item.response,
    value: item.response,
  }))

  const handleFirstChange = (value: string[]) => {
    dispatch(setFirstAnswerData(value))
  }

  const handleSecondChange = (value: string[]) => {
    dispatch(setSecondAnswerData(value))
  }

  const handlePostAnswer = () => {
    console.log('dataToSend', dataToSend)
    dispatch(fetchPostGraphData(dataToSend))
  }

  return (
    <div className={styles.container}>
      <CheckPicker
        className={styles.picker}
        data={firstData}
        placeholder={'Выберите вариант'}
        onChange={handleFirstChange}
        onClean={() => dispatch(setFirstAnswerData(null))}
      />
      <CheckPicker
        className={styles.picker}
        data={secondData}
        placeholder={'Выберите вариант'}
        onChange={handleSecondChange}
        onClean={() => dispatch(setSecondAnswerData(null))}
      />
      <Button
        className={styles.btn}
        appearance={'primary'}
        color={'blue'}
        disabled={(answers1 === null || answers1.length === 0) || (answers2 === null || answers2.length === 0)}
        onClick={handlePostAnswer}
      >
        Отпарвить
      </Button>
    </div>
  );
};