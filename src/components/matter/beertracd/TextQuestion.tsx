import { useState } from "react";

export interface TextQuestionProps {
  submitText: string;
  onSubmit: (feedback: string) => void;
}

export const TextQuestion = ({ submitText, onSubmit }: TextQuestionProps) => {
  const [customFeedback, setCustomFeedback] = useState("");
  return (
    <>
      <input
        className="input"
        type={"text"}
        value={customFeedback}
        onChange={(e) => setCustomFeedback(e.target.value)}
      />
      <button
        className="btn btn-primary"
        onClick={() => onSubmit(customFeedback)}
      >
        {submitText}
      </button>
    </>
  );
};
