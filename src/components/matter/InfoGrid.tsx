import { DetailedHTMLProps, HTMLAttributes } from "react";
import { InfoGridRow, InfoGridRowProps } from "./InfoGridRow";

export interface InfoGridProps {
  rows: InfoGridRowProps[];
}

export const InfoGrid = (props: InfoGridProps & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  const { rows, ...rest } = props;
  return (
    <div className={`grid grid-cols-1 ${rest.className}`} {...rest}>
      {rows.map(({ label, info }) => {
        return <InfoGridRow key={`${label}-${info}`} label={label} info={info} />;
      })}
    </div>
  );
};
