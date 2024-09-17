'use client'

import {RangeSlider} from "rsuite";

export const YearPicker = () => {
  return (
    <RangeSlider
      renderMark={(mark) => mark}
      graduated
      defaultValue={[2019, 2022]}
      min={2018}
      max={2024}
    />
  );
};