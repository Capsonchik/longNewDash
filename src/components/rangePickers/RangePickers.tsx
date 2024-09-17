import {YearPicker} from "@/components/rangePickers/yearPicker/YearPicker";

type Props = {
  periodType: string
}

export const RangePickers = ({periodType}: Props) => {
  const rangeSwitcher = () => {
    switch (periodType) {
      case 'Год':
        return <YearPicker/>
      case 'Квартал':
        return <span>Квартал</span>
      case 'Месяц':
        return <span>Месяц</span>
      case 'Неделя':
        return <span>Неделя</span>
      case 'День':
        return <span>День</span>
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