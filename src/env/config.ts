import { env } from "process";

export const config = {
  name: "tracd",
  description: "Decentralized supply chain management",
  beer_tracd_survey: {
    url: process.env.NEXT_PUBLIC_BEER_TRACD_SURVEY_URL ?? "",
  },
};
