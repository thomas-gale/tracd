import { useState } from "react";

export interface ButtonGroupWithCustomFieldProps {
  options: { id: string; displayName: string }[];
  submitText: string;
  customFieldId: string;
  onSubmit: (selectedId: string, customField?: string) => void;
}

export const ButtonGroupWithCustomField = ({
  options,
  submitText,
  customFieldId,
  onSubmit,
}: ButtonGroupWithCustomFieldProps) => {
  const [isCustom, setIsCustom] = useState(false);
  const [customField, setCustomField] = useState("");
  return (
    <>
      <div className="btn-group btn-group-vertical lg:btn-group-horizontal justify-center">
        {options.map(({ id, displayName }) => (
          <button
            className={`btn${isCustom ? " btn-primary" : ""}`}
            key={id}
            onClick={() => {
              if (id === customFieldId) {
                setIsCustom(true);
              } else {
                onSubmit(id, undefined);
              }
            }}
          >
            {displayName}
          </button>
        ))}
      </div>
      {isCustom && (
        <>
          <input
            className="input"
            type={"text"}
            value={customField}
            onChange={(e) => setCustomField(e.target.value)}
          />
          <button
            className="btn btn-primary"
            onClick={() => onSubmit(customFieldId, customField)}
          >
            {submitText}
          </button>
        </>
      )}
    </>
  );
};
