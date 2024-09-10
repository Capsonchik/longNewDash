'use client'

import {Button} from "rsuite";
import {useRouter} from "next/navigation";
import {useDispatch} from "react-redux";
import {setActiveKey} from "@/store/store.slice";

export const LongBtn = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const onPress = () => {
    router.push('long//longresult');
    dispatch(setActiveKey('4-3'))
  }

  return (
    <Button
      style={{width: '70%',}}
      appearance={'primary'}
      onClick={onPress}

    >
      Перейти к результатам
    </Button>
  );
};