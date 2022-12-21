import { useMutation } from "@tanstack/react-query";
import PocketBase from "pocketbase";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { config } from "../../env/config";
import {
  BeerTracdSurveyCols,
  BeerTracdSurveyData,
} from "../../types/tracd/matter/BeerTracdSurveyData";

export interface BeerTracdSurveyProps {
  bottleId: number;
}

export const BeerTracdSurvey = ({ bottleId }: BeerTracdSurveyProps) => {
  // PocketBase reference
  const [pb, setPb] = useState<undefined | PocketBase>();
  useEffect(() => {
    setPb(new PocketBase(config.beer_tracd_survey.url));
  }, []);

  // Survey state
  const maxQuestionIndex = 9; // Questions are 0-indexed (and there is a final thank you message)
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  // Submit survey data
  const { isLoading, mutateAsync: submitSurveyDataAsync } = useMutation({
    mutationFn: async (data: BeerTracdSurveyData) => {
      if (!pb) return;
      const feedbackData: BeerTracdSurveyCols = {
        bottle_number: bottleId,
        ...data,
      };
      await pb.collection("feedback").create(feedbackData);
    },
  });

  // Prev question / Next question
  const isPrevQuestion = useMemo(() => currentQuestion > 0, [currentQuestion]);
  const isNextQuestion = useMemo(
    () => currentQuestion < maxQuestionIndex,
    [currentQuestion]
  );
  const prevQuestion = useCallback(() => {
    if (isPrevQuestion) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }, [currentQuestion, isPrevQuestion]);
  const nextQuestion = useCallback(() => {
    if (isNextQuestion) {
      setCurrentQuestion(currentQuestion + 1);
    }
  }, [currentQuestion, isNextQuestion]);

  return (
    <>
      {!pb || isLoading ? (
        <div className="loading" />
      ) : (
        <>
          <div className="flex flex-col space-y-4 justify-center">
            <div className="flex flex-col">
              {
                [
                  <div key={currentQuestion} className="flex flex-col">
                    <p>Is this information interesting?</p>
                    <div className="btn-group justify-center">
                      <button
                        className="btn"
                        onClick={() => {
                          submitSurveyDataAsync({
                            information_interesting: "yes",
                          });
                          nextQuestion();
                        }}
                      >
                        Yes
                      </button>
                      <button
                        className="btn"
                        onClick={() => {
                          submitSurveyDataAsync({
                            information_interesting: "no",
                          });
                          nextQuestion();
                        }}
                      >
                        No
                      </button>
                    </div>
                  </div>,
                  <div key={currentQuestion} className="flex flex-col">
                    <p>
                      Are you more likely to buy a product if it publishes its
                      CO2 footprint?
                    </p>
                    <div className="btn-group justify-center">
                      <button
                        className="btn"
                        onClick={() => {
                          submitSurveyDataAsync({ more_likely_to_buy: "yes" });
                          nextQuestion();
                        }}
                      >
                        Yes
                      </button>
                      <button
                        className="btn"
                        onClick={() => {
                          submitSurveyDataAsync({ more_likely_to_buy: "no" });
                          nextQuestion();
                        }}
                      >
                        No
                      </button>
                    </div>
                  </div>,
                  <div key={currentQuestion} className="flex flex-col">
                    <p>{"Thank you very much :)"}</p>
                  </div>,
                ][currentQuestion]
              }
            </div>
            <div className="flex flow-row justify-between">
              <button
                className={`btn btn-xs btn-info${
                  !isPrevQuestion ? " btn-disabled" : ""
                }`}
                onClick={prevQuestion}
              >
                prev
              </button>
              <button
                className={`btn btn-xs btn-info${
                  !isNextQuestion ? " btn-disabled" : ""
                }`}
                onClick={nextQuestion}
              >
                skip
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};
