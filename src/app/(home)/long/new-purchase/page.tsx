import {MapWhite} from "@/components/mapWhite/MapWhite";
import {Panel, SelectPicker} from "rsuite";
import {MAP_REGIONS} from "@/mocks/regionInfoMock";
import {MockScatter} from "@/components/charts/mockChart/mockScatter";

export default function Page() {
  const data = MAP_REGIONS.map(item => ({label: item, value: item}));

  return (
    <div style={{display: "flex", justifyContent: "space-between"}}>
      <Panel bordered style={{width: '49%'}}>
        <div style={{display: "flex", flexDirection: "column", rowGap: '1rem'}}>
          <SelectPicker data={data} defaultValue={'Москва'} placeholder={'Выберите регион'}/>
          <MapWhite currentValue={''}/>
        </div>
      </Panel>
      <Panel bordered style={{width: '49%'}}>
        <div style={{width: '100%'}}>
          <MockScatter/>
        </div>
      </Panel>
    </div>
  )
}