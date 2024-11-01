export type HiType = {
  chi2: number;
  p: number;
  dof: number;
  labels: string[];
  data: HiTypeItem[];
}

export type HiTypeItem = {
  label: string;
  stat: number[];
}