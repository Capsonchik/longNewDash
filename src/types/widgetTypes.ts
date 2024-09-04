export type Widget = {
  name: string,
}

export type SmallWidgetType = Widget & {
  value: string;
  statistic: string;
  description: string;
  status: 'danger' | 'success';
}