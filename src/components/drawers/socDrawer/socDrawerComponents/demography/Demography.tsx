import styles from './styles.module.scss'
import {Checkbox, CheckboxGroup, Heading, SelectPicker} from "rsuite";
import {useState} from "react";
import {MAP_REGIONS} from "@/mocks/regionInfoMock";
import {MonthPiker} from "@/components/rangePickers/monthPicker/MonthPiker";

export const Demography = () => {
  const [value, setValue] = useState<string[]>(['C'])
  const [nextValue, setNextValue] = useState<string[]>(['A'])

  const data = MAP_REGIONS.map(item => ({label: item, value: item}));

  return (
    <div className={styles.container}>
      <div className={styles.containerLeft}>
        <Heading level={4}>Репродуктивные планы</Heading>
        <CheckboxGroup
          name="checkbox-group"
          value={value}
          onChange={(value) => {
            const selectedValues = value.map(item => String(item)) as string[];
            setValue(selectedValues);
          }}
        >
          <Checkbox value="A">Сколько хотели бы иметь детей</Checkbox>
          <Checkbox value="B">Планируют детей в ближайший год</Checkbox>
          <Checkbox value="C">Планируют детей в ближайшие 2 года</Checkbox>
        </CheckboxGroup>
        <Heading level={4}>Влияние внешних факторов</Heading>
        <CheckboxGroup
          name="checkbox-group"
          value={nextValue}
          onChange={(value) => {
            const selectedValues = value.map(item => String(item)) as string[];
            setNextValue(selectedValues);
          }}
        >
          <Checkbox value="A">Среднесуточная температура</Checkbox>
          <Checkbox value="B">Средевзвешенный курс рубля к долл. США</Checkbox>
        </CheckboxGroup>
      </div>
      <div className={styles.containerRight}>
        <div className={styles.filters}>
          <SelectPicker data={data} placeholder={'Выберите регион'}/>
          <MonthPiker/>
        </div>

      </div>
    </div>
  );
};