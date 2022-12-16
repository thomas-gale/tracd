import { DetailedHTMLProps, HTMLAttributes } from "react";
import { InfoGridRow, InfoGridRowProps } from "./InfoGridRow";

export interface InfoGridProps {
  rows: InfoGridRowProps[];
}

export const InfoGrid = (
  props: InfoGridProps &
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
) => {
  const { rows, ...rest } = props;
  return (
    <div className={`${rest.className}`} {...rest}>
      {rows.map(({ start, end, label, info }) => {
        return (
          <InfoGridRow
            key={`${label}-${info}`}
            start={start}
            end={end}
            label={label}
            info={info}
          />
        );
      })}
    </div>
  );
};
