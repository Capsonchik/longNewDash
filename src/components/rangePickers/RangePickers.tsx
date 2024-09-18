import {YearPicker} from "@/components/rangePickers/yearPicker/YearPicker";
import {QuarterPicker} from "@/components/rangePickers/quarterPicker/QuarterPicker";
import {MonthPiker} from "@/components/rangePickers/monthPicker/MonthPiker";
import {DayPicker} from "@/components/rangePickers/dayPicker/DayPicker";

type Props = {
  periodType: string
}

export const RangePickers = ({periodType}: Props) => {
  const rangeSwitcher = () => {
    switch (periodType) {
      case 'Год':
        return <YearPicker/>
      case 'Квартал':
        return <QuarterPicker/>
      case 'Месяц':
        return <MonthPiker/>
      case 'Неделя':
        return <span>Неделя</span>
      case 'День':
        return <DayPicker/>
      default:
        return <span>Выберите период</span>
    }
  }

  return (
    <div>
      {rangeSwitcher()}
    </div>
  );
};