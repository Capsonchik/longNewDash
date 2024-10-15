'use client'

import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "@/store/store";
import {Checkbox, CheckboxGroup} from "rsuite";
import {useState} from "react";
import {selectIndexes} from "@/store/store.selectors";
import {setIndexes} from "@/store/store.slice";

export const IndexesCheckBoxGroup = () => {
  const [value, setValue] = useState<string[]>()

  const indexes = useSelector(selectIndexes)

  const dispatch = useDispatch<AppDispatch>()

  return (
    <CheckboxGroup
      name="first-indexes"
      value={indexes}
      onChange={(value) => {
        const selectedValues = value.map(item => String(item)) as string[];
        setValue(selectedValues);
        dispatch(setIndexes(selectedValues));
      }}
    >
      <Checkbox value="Сколько хотели бы иметь детей">Сколько хотели бы иметь детей</Checkbox>
      <Checkbox value="Планируют детей в ближайший год">Планируют детей в ближайший год</Checkbox>
      <Checkbox value="Планируют детей в ближайшие 2 года">Планируют детей в ближайшие 2 года</Checkbox>
    </CheckboxGroup>
  );
};