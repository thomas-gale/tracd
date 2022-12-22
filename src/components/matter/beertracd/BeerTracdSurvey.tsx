import { useMutation } from "@tanstack/react-query";
import PocketBase from "pocketbase";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { config } from "../../../env/config";
import {
  BeerTracdSurveyCols,
  BeerTracdSurveyData,
} from "../../../types/tracd/matter/BeerTracdSurveyData";
import { ButtonGroupWithCustomField } from "./ButtonGroupWithCustom";
import { TextQuestion } from "./TextQuestion";
import { MultiSelectButtonGroup } from "./MultiselectButtonGroup";

export interface BeerTracdSurveyProps {
  bottleId: number;
}

export const BeerTracdSurvey = ({ bottleId }: BeerTracdSurveyProps) => {
  // PocketBase reference
  const [pb, setPb] = useState<undefined | PocketBase>();
  useEffect(() => {
    setPb(new PocketBase(config.beer_tracd_survey.url));
  }, []);

  // Survey scrolling behavior
  const surveyRef = useRef<HTMLDivElement>(null);

  // Survey state
  const maxQuestionIndex = 8; // Questions are 0-indexed (and there is a final thank you message)
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
    <div
      ref={surveyRef}
      className="flex flex-col space-y-2 bg-secondary text-base-300 p-4 px-8"
      onClick={(e) => surveyRef.current?.scrollIntoView({ behavior: "smooth" })}
    >
      <h2 className="text-neutral">
        <span>before you go</span>
        <span className="text-accent">...</span>
      </h2>
      <p className="text-neutral">
        this little bottle of homemade beer is our proof of concept, so it would
        be really awesome if you could give us feedback by answering a couple of
        easy questions :D
      </p>

      {!pb || isLoading ? (
        <div className="flex flex-row items-center justify-center h-20 w-full">
          <div className="flex flex-col items-center justify-center h-20 w-full">
            <div className="btn btn-secondary loading" />
          </div>
        </div>
      ) : (
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
                    Are you more likely to buy a product if it publishes its CO2
                    footprint?
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
                <div key={currentQuestion} className="flex flex-col space-y-2">
                  <p>What information is worth showing?</p>
                  <MultiSelectButtonGroup
                    options={[
                      { id: "co2e", displayName: "CO2e" },
                      {
                        id: "recycled",
                        displayName: "recycled / recycling info",
                      },
                      {
                        id: "blockchain",
                        displayName: "blockchain feed of data",
                      },
                      {
                        id: "process_steps",
                        displayName: "process steps / energy consumed",
                      },
                    ]}
                    submitText="Done"
                    onSubmit={(selectedOptions) => {
                      submitSurveyDataAsync({
                        what_information_worth_showing: selectedOptions as
                          | "co2e"
                          | "recycled"
                          | "blockchain"
                          | "process_steps"[],
                      });
                      nextQuestion();
                    }}
                  />
                </div>,
                <div key={currentQuestion} className="flex flex-col space-y-2">
                  <p>
                    Does having a ”story” behind an individual product mean
                    anything to you?
                  </p>
                  <ButtonGroupWithCustomField
                    options={[
                      { id: "yes", displayName: "Yes" },
                      {
                        id: "no",
                        displayName: "No",
                      },
                      {
                        id: "only_premium",
                        displayName: "Only in premium products",
                      },
                      {
                        id: "custom",
                        displayName: "...",
                      },
                    ]}
                    submitText="Done"
                    customFieldId="custom"
                    onSubmit={(selectedId, customField) => {
                      submitSurveyDataAsync({
                        having_a_story: selectedId as
                          | "yes"
                          | "no"
                          | "only_premium",
                        having_a_story_custom: customField,
                      });
                      nextQuestion();
                    }}
                  />
                </div>,
                <div key={currentQuestion} className="flex flex-col">
                  <p>How was the beer?</p>
                  <div className="btn-group btn-group-vertical justify-center">
                    <button
                      className="btn"
                      onClick={() => {
                        submitSurveyDataAsync({ how_was_beer: "great" });
                        nextQuestion();
                      }}
                    >
                      Great
                    </button>
                    <button
                      className="btn"
                      onClick={() => {
                        submitSurveyDataAsync({ how_was_beer: "passable" });
                        nextQuestion();
                      }}
                    >
                      Passable
                    </button>
                    <button
                      className="btn"
                      onClick={() => {
                        submitSurveyDataAsync({
                          how_was_beer: "stick_to_day_job",
                        });
                        nextQuestion();
                      }}
                    >
                      Stick to your day job
                    </button>
                    <button
                      className="btn"
                      onClick={() => {
                        submitSurveyDataAsync({
                          how_was_beer: "can_i_have_refund",
                        });
                        nextQuestion();
                      }}
                    >
                      Can I have a refund even though it&apos;s free, it&apos;s
                      that bad
                    </button>
                  </div>
                </div>,
                <div key={currentQuestion} className="flex flex-col space-y-2">
                  <p>Name</p>
                  <TextQuestion
                    submitText="Done"
                    onSubmit={(name) => {
                      submitSurveyDataAsync({
                        name,
                      });
                      nextQuestion();
                    }}
                  />
                </div>,
                <div key={currentQuestion} className="flex flex-col space-y-2">
                  <p>Do you have any other feedback?</p>
                  <TextQuestion
                    submitText="Done"
                    onSubmit={(feedback) => {
                      submitSurveyDataAsync({
                        feedback,
                      });
                      nextQuestion();
                    }}
                  />
                </div>,
                <div key={currentQuestion} className="flex flex-col space-y-2">
                  <p>What is you favorite christmas film?</p>
                  <TextQuestion
                    submitText="Done"
                    onSubmit={(favorite_christmas_film) => {
                      submitSurveyDataAsync({
                        favorite_christmas_film,
                      });
                      nextQuestion();
                    }}
                  />
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
      )}
    </div>
  );
};
