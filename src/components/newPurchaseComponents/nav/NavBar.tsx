'use client'

import 'rsuite/dist/rsuite.min.css';
import {Placeholder, Tabs} from "rsuite";
import {Content} from "@/components/newPurchaseComponents/content/Content";
import ShareRoundIcon from '@rsuite/icons/ShareRound';

export const NavBar = () => {
  return (
    <div style={{overflow: 'auto'}}>
      <Tabs style={{marginTop: '1rem', marginBottom: '1rem'}} defaultActiveKey="1"
            appearance={'subtle'}>
        <Tabs.Tab eventKey="1" title="ДOХОДЫ" icon={<ShareRoundIcon/>}>
          <Content/>
        </Tabs.Tab>
        <Tabs.Tab eventKey="2" title="ЗДОРОВЬЕ">
          <Placeholder.Paragraph graph="square"/>
        </Tabs.Tab>
        <Tabs.Tab eventKey="3" title="ДЕМОГРАФИЯ">
          <Placeholder.Paragraph graph="circle"/>
        </Tabs.Tab>
        <Tabs.Tab eventKey="4" title="МИГРАЦИЯ">
          <Placeholder.Paragraph graph="circle"/>
        </Tabs.Tab>
      </Tabs>
    </div>
  );
};