'use client'

import {BsCalendar2MonthFill} from "react-icons/bs";
import {CustomProvider, DateRangePicker} from "rsuite";
import {ruRU} from "rsuite/locales";

export const MonthPiker = () => {

  return (
    <CustomProvider locale={ruRU}>
      <DateRangePicker
        placement={'bottomEnd'}
        placeholder={'Выберите период'}
        format="MMM yyyy"
        caretAs={BsCalendar2MonthFill}
        shouldDisableDate={date => date.getFullYear() < 2022} // Отключение дат до 2022г.
      />
    </CustomProvider>
  );
};