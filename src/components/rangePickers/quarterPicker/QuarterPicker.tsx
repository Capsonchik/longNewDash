'use client'

import {RangeSlider} from "rsuite";

export const QuarterPicker = () => {
  const generateMarks = () => {
    const startYear = 2022; // Год начала
    const quartersPerYear = 4; // Количество кварталов в году
    const totalQuarters = 12; // Сколько кварталов отобразить (например, 2 года = 8 кварталов)

    const marks: Record<number, string> = {};

    for (let i = 0; i < totalQuarters; i++) {
      const year = startYear + Math.floor(i / quartersPerYear);
      const quarter = i % quartersPerYear + 1;
      marks[i] = `Q${quarter}'${year.toString().slice(-2)}`;
    }

    return marks;
  };

  const marks = generateMarks();

  const renderMark = (mark: number) => {
    return marks[mark] || mark.toString(); // Если нет метки, выводим просто число
  };

  return (
    <RangeSlider
      renderMark={renderMark}
      graduated
      defaultValue={[2, 6]} // Индексы для диапазона
      min={0}
      max={11} // 10 полугодий (20 кварталов)
      step={1} // Шаг по кварталам
    />
  );
};