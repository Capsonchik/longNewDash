'use client'

import styles from "@/components/baseStatistic/widgets/nationalityWidget/widgetTable/styles.module.scss";
import {Cell, Column, HeaderCell} from "rsuite-table";
import {Table} from "rsuite";
import {TRAFFIC_MOCK} from "@/mocks/trafficMock";

type Props = {};

export const TrafficTable = (props: Props) => {
  return (
    <Table
      className={styles.table}
      autoHeight
      data={TRAFFIC_MOCK}
      onRowClick={rowData => {
        console.log(rowData);
      }}
    >
      <Column width={100} align="left" fixed>
        <HeaderCell className={styles.headerCell}>ID</HeaderCell>
        <Cell className={styles.cell} dataKey="source"/>
      </Column>

      <Column width={120} align="center" fixed>
        <HeaderCell className={styles.headerCell}>Пол</HeaderCell>
        <Cell className={styles.cell} dataKey="users"/>
      </Column>

      <Column width={90} align='center' fixed>
        <HeaderCell className={styles.headerCell}>Возраст</HeaderCell>
        <Cell className={styles.cell} dataKey='sessions'/>
      </Column>

      <Column width={140} align="center" fixed>
        <HeaderCell className={styles.headerCell}>Регион</HeaderCell>
        <Cell className={styles.cell} dataKey='bounce'/>
      </Column>

      <Column width={200} align="center">
        <HeaderCell className={styles.headerCell}>Количество анкет</HeaderCell>
        <Cell className={styles.cell} dataKey='duration'/>
      </Column>
    </Table>
  );
};