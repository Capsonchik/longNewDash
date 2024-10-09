import 'rsuite/dist/rsuite.min.css';

import {Tabs} from "rsuite";
import {Demography} from "@/components/drawers/socDrawer/socDrawerComponents/demography/Demography";

export const SocNav = () => {
  return (
    <Tabs defaultActiveKey="1" appearance="subtle">
      <Tabs.Tab eventKey="1" title="Демография">
        <Demography/>
      </Tabs.Tab>
      <Tabs.Tab eventKey="2" title="Здоровье">
        <Demography/>
      </Tabs.Tab>
      <Tabs.Tab eventKey="3" title="Занятость">
        <Demography/>
      </Tabs.Tab>
      <Tabs.Tab eventKey="4" title="Мировозрение">
        <Demography/>
      </Tabs.Tab>
    </Tabs>
  );
};