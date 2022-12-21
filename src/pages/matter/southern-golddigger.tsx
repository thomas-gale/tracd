import { useRouter } from "next/router";
import Image from "next/image";
import React, { useMemo } from "react";
import { InfoGrid } from "../../components/matter/InfoGrid";
import { TracdTitle } from "../../components/tracd/TracdTitle";
import { BeerTracdSurvey } from "../../components/matter/BeerTracdSurvey";

// A two step component that allows the user to first select an IPFS storage provider and then allows them to supply the hash to the webapp.
const SouthernGolddigger = (): JSX.Element => {
  const router = useRouter();
  const { id } = router.query;
  const idn = useMemo(() => Number.parseInt(id as string), [id]);

  if (id === undefined) {
    return <div />;
  }

  return (
    <div className="flex flex-col bg-primary text-primary-content space-y-2">
      {Number.isNaN(idn) || idn < 0 || idn > 47 ? (
        <h2 className="bg-error">Unrecognized bottle</h2>
      ) : (
        <>
          <div className="absolute w-3/4 p-8">
            <h2>
              <b>bottle #{idn}</b>
            </h2>
            <h3>
              <b>
                <TracdTitle subTitle="beer" />
              </b>
            </h3>
            <h3>southern gold digger lager</h3>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="image of beer bottle" src="/matter/beer-bottle.png" />
          <InfoGrid
            className="bg-primary p-4 px-8"
            rows={[
              {
                start: "07/11/22 20:49",
                label: "malt",
                info: <p className="text-sm">southern gold digger 3L</p>,
              },
              {
                start: "07/11/22 20:56",
                end: "07/11/22 21:03",
                label: "water added",
                info: <p className="text-sm">23l 23.5c</p>,
              },
              {
                start: "07/11/22 21:07",
                label: "hydrometer reading",
                info: <p className="text-sm">10:4</p>,
              },
              {
                start: "07/11/22 21:15",
                label: "yeast added",
              },
              {
                start: "07/11/22 21:31",
                end: "19/11/22 11:50",
                label: "fermentation 1",
                info: <p className="text-sm">ambient 20c</p>,
              },
              {
                start: "19/11/22 11:52",
                label: "hops added",
                info: <p className="text-sm">perle hops 50g</p>,
              },
              {
                start: "19/11/22 11:54",
                end: "28/11/22 19:14",
                label: "fermentation 2",
                info: <p className="text-sm">ambient 22c</p>,
              },
              {
                start: "28/11/22 19:10",
                label: "hydrometer reading",
                info: <p className="text-sm">alcohol content 5%</p>,
              },
              {
                start: `28/11/22 19:${10 + idn}`,
                label: "bottled",
                info: (
                  <p className="text-sm">
                    {"bottle "}
                    <b>{`#${idn} `}</b>
                    {"330ml >PET< ​20ml priming sugar"}
                  </p>
                ),
              },
              {
                start: "28/11/22 20:22",
                end: "04/12/22 18:12",
                label: "fermentation 3",
                info: <p className="text-sm">ambient 21c</p>,
              },
              {
                start: "04/12/22",
                label: "ready to drink",
              },
            ]}
          />
          <div className="px-8 text-sm">
            <div className="flex flex-col p-2 bg-secondary rounded-md text-primary">
              <div className="flex flex-row">
                <p className="w-full">energy mix for production</p>
                <p className="w-full text-neutral">100% electric from grid</p>
              </div>
              <div className="flex flex-row pt-4">
                <p className="w-full">CO2 footprint of this beer</p>
                <p className="w-full text-neutral">
                  0.25kgCO2e<sup>*</sup>
                </p>
              </div>
              <p className="text-xs pt-4">
                *based on existing beers produced today, this is an estimate for
                illustration purposes only​
                <a
                  className="underline"
                  href="https://www.co2everything.com/co2e-of/beer"
                >
                  https://www.co2everything.com/co2e-of/beer
                </a>
              </p>
            </div>
          </div>
          <div className="flex flex-row space-x-4 w-full pt-8 px-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-1/2"
              alt="golddigger punny image"
              src="/matter/golddigger.png"
            />
            <div className="flex flex-col space-y-2 w-full">
              <h3 className="w-full">southern gold digger lager</h3>
              <h2 className="w-full">
                <TracdTitle subTitle="beer" />
              </h2>
            </div>
          </div>
          <div className="bg-base-300 text-primary p-4 px-8">
            <h1 className="text-neutral">
              <TracdTitle />
            </h1>
            <div className="pt-4">
              Did you know that only 9% of companies measure their total
              emissions comprehensively, while 81% confess to omitting some of
              their internal (Scopes 1 and 2) emissions. Meanwhile, 66% of
              organisations do not report any of their external (Scope 3)
              emissions<sup>[1]</sup>
            </div>
            <div className="text-primary">
              <div className="pt-4">
                We believe that products that are &quot;sustainable&quot; should
                be able to prove it beyond any doubt.
              </div>
              <div className="pt-4">
                Our mission it to create truly net zero products with 100%
                traceability. That means tracing every step of the process, the
                raw materials, and the energy consumption from start to finish.​
              </div>
              <div className="pt-4">
                Every beer and its history will be recorded on the blockchain,
                unable to be changed, forever, for anyone to interrogate.​
              </div>
              <h3 className="pt-4">5% alcohol</h3>
              <h2 className="pt-4">
                <span>100% proof</span>
                <span className="text-accent">.</span>
              </h2>
            </div>
            <div className="pt-4">
              <p className="break-words text-xs">
                {"[1] BCG Survey 21 "}
                <a
                  className="underline"
                  href="https://www.bcg.com/publications/2021/measuring-emissions-accurately"
                >
                  https://www.bcg.com/publications/2021/measuring-emissions-accurately
                </a>
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-2 bg-secondary text-base-300 p-4 px-8">
            <h2 className="text-neutral">before you go ...</h2>
            <BeerTracdSurvey bottleId={idn} />
          </div>
        </>
      )}
    </div>
  );
};

export default SouthernGolddigger;
