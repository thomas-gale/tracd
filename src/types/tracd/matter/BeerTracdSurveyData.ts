export interface BeerTracdSurveyData {
  information_interesting?: "yes" | "no";
  more_likely_to_buy?: "yes" | "no";
  what_information_worth_showing?:
    | "co2e"
    | "recycled"
    | "blockchain"
    | "process_steps"[];
  any_other_information_worth_showing?: string;
  having_a_story?: "yes" | "no" | "only_premium" | "custom";
  having_a_story_custom?: string;
  how_was_beer?:
    | "great"
    | "passable"
    | "stick_to_day_job"
    | "can_i_have_refund";
  name?: string;
  feedback?: string;
  favorite_christmas_film?: string;
}

export interface BeerTracdSurveyCols extends BeerTracdSurveyData {
  bottle_number: number;
}
