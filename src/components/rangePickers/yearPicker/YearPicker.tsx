'use client'

import {RangeSlider} from "rsuite";

export const YearPicker = () => {
  return (
    <RangeSlider
      renderMark={(mark) => mark}
      graduated
      defaultValue={[2021, 2022]}
      min={2020}
      max={2024}
    />
  );
};