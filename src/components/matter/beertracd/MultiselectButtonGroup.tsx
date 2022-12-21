import { useState } from "react";

export interface MultiSelectButtonGroupProps {
  options: { id: string; displayName: string }[];
  submitText: string;
  onSubmit: (selectedIds: string[]) => void;
}

export const MultiSelectButtonGroup = ({
  options,
  submitText,
  onSubmit,
}: MultiSelectButtonGroupProps) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  return (
    <>
      <div className="btn-group btn-group-vertical lg:btn-group-horizontal justify-center">
        {options.map(({ id, displayName }) => (
          <button
            className={`btn${
              !!selectedIds.find((cid) => cid === id) ? " btn-primary" : ""
            }`}
            key={id}
            onClick={() =>
              setSelectedIds(
                !!selectedIds.find((cid) => cid === id)
                  ? selectedIds.filter((cid) => cid !== id)
                  : [id, ...selectedIds]
              )
            }
          >
            {displayName}
          </button>
        ))}
      </div>
      <button className="btn btn-primary" onClick={() => onSubmit(selectedIds)}>
        {submitText}
      </button>
    </>
  );
};
