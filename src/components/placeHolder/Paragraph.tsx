'use client'


import {Placeholder} from "rsuite";

type Props = {
  rowNumber: number
}

export const Paragraph = ({rowNumber}: Props) => {
  return (
    <Placeholder.Paragraph rows={rowNumber}/>
  );
};