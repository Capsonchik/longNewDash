import {MapWhite} from "@/components/mapWhite/MapWhite";
import {SelectPicker} from "rsuite";
import {MAP_REGIONS} from "@/mocks/regionInfoMock";
import {MockScatter} from "@/components/charts/mockChart/mockScatter";

export default function Page() {
  const data = MAP_REGIONS.map(item => ({label: item, value: item}));

  return (
    <div style={{display: "flex"}}>
      <div style={{width: '50%', display: "flex", flexDirection: "column", rowGap: '1rem'}}>
        <SelectPicker data={data} defaultValue={'Москва'} placeholder={'Выберите регион'}/>
        <MapWhite currentValue={''}/>
      </div>
      <div style={{width: '50%'}}>
        <MockScatter/>
      </div>
    </div>
  )
}