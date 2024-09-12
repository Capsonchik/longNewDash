'use client'

import styles from './styles.module.scss';
import {Button, CheckPicker} from "rsuite";
import {useDispatch, useSelector} from "react-redux";
import {selectAnswersResponse, selectFirstAnswers, selectSecondAnswers} from "@/store/answersSlice/answers.selectors";
import {setFirstAnswerData, setSecondAnswerData} from "@/store/dataSendSlice/dataToSend.slice";
import {
  selectDataToSend,
  selectDataToSendFirstAnswers,
  selectDataToSendSecondAnswer
} from "@/store/dataSendSlice/dataToSend.selectors";
import {AppDispatch} from "@/store/store";
import {fetchPostGraphData} from "@/store/answersSlice/answers.actions";
import {LongResultBarChart} from "@/components/charts/longResultBarChart";
import {resetResponse} from "@/store/answersSlice/answersSlice";

interface AnswerItem {
  response: string;
}

export const AnswerPicker = () => {
  const firstAnswer = useSelector(selectFirstAnswers);
  const secondAnswer = useSelector(selectSecondAnswers);
  const answers1 = useSelector(selectDataToSendFirstAnswers);
  const answers2 = useSelector(selectDataToSendSecondAnswer);
  const dataToSend = useSelector(selectDataToSend);
  const currentData = useSelector(selectAnswersResponse);

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
    dispatch(resetResponse())
    dispatch(fetchPostGraphData(dataToSend))
  }

  return (
    <div className={styles.container}>
      <div className={styles.pickers}>
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
          style={{background: '#FF8200'}}
          appearance={'primary'}
          color={'blue'}
          disabled={(answers1 === null || answers1.length === 0) || (answers2 === null || answers2.length === 0)}
          onClick={handlePostAnswer}
        >
          Отпарвить
        </Button>
      </div>
      <div style={{height: '100%', marginTop: '1.5rem'}}>
        {currentData ? <LongResultBarChart/> : null}
        {/*<LongResultBarChart/>*/}
      </div>
    </div>
  );
};