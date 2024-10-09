import 'rsuite/dist/rsuite.min.css';

import {Placeholder, Tabs} from "rsuite";
import {Demography} from "@/components/drawers/socDrawer/socDrawerComponents/demography/Demography";

export const SocNav = () => {
  return (
    <Tabs defaultActiveKey="1" appearance="subtle">
      <Tabs.Tab eventKey="1" title="Демография">
        <Demography/>
      </Tabs.Tab>
      <Tabs.Tab eventKey="2" title="Здоровье">
        <Placeholder.Paragraph graph="square"/>
      </Tabs.Tab>
      <Tabs.Tab eventKey="3" title="Занятость">
        <Placeholder.Paragraph graph="circle"/>
      </Tabs.Tab>
      <Tabs.Tab eventKey="4" title="Мировозрение">
        <Placeholder.Paragraph graph="circle"/>
      </Tabs.Tab>
    </Tabs>
  );
};