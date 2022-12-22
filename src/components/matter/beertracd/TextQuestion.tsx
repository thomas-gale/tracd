import { useState } from "react";

export interface TextQuestionProps {
  submitText: string;
  onSubmit: (feedback: string) => void;
}

export const TextQuestion = ({ submitText, onSubmit }: TextQuestionProps) => {
  const [customFeedback, setCustomFeedback] = useState("");
  return (
    <>
      <textarea
        className="textarea bg-primary"
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
