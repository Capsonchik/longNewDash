'use client'

import styles from './styles.module.scss';
import {Progress, Table} from "rsuite";
import {Cell, Column, HeaderCell} from "rsuite-table";
import {TABLE_DATA_FOR_WIDGET} from "@/mocks/widgetTableData";

type Props = {};

export const WidgetTable = (props: Props) => {
  return (
    <Table
      className={styles.table}
      autoHeight
      data={TABLE_DATA_FOR_WIDGET}
      onRowClick={rowData => {
        console.log(rowData);
      }}
    >
      <Column width={90} align="center" fixed>
        <HeaderCell className={styles.headerCell}>Язык</HeaderCell>
        <Cell className={styles.cell} dataKey="language"/>
      </Column>

      <Column width={100} align="center" fixed>
        <HeaderCell className={styles.headerCell}>Носителей</HeaderCell>
        <Cell className={styles.cell} dataKey="currentUsers"/>
      </Column>

      <Column width={120}>
        <HeaderCell className={styles.headerCell}>% Носителей</HeaderCell>
        <Cell className={styles.cell} style={{padding: '10px 0'}}>
          {rowData => <Progress percent={rowData.usersPercent} showInfo={false}/>}
        </Cell>
      </Column>
    </Table>
  );
};