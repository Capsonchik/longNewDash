import {MAP_REGIONS} from "@/mocks/regionInfoMock";
import {SelectPicker} from "rsuite";

export const RegionPicker = () => {
  const data = MAP_REGIONS.map(item => ({label: item, value: item}));

  return (
    <SelectPicker
      data={data}
      placeholder={'Выберите регион...'}
      style={{marginRight: 10}}
    />
  );
};