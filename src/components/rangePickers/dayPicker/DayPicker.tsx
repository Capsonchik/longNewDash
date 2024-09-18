'use client'

import {ruRU} from "rsuite/locales";
import {CustomProvider, DateRangePicker} from "rsuite";

export const DayPicker = () => {

  return (
    <CustomProvider locale={ruRU}>
      <DateRangePicker
        shouldDisableDate={date => date.getFullYear() < 2022}
      />
    </CustomProvider>
  );
};