import { useRouter } from "next/router";
import React, { useMemo } from "react";
import { InfoGrid } from "../../components/matter/beertracd/InfoGrid";
import { TracdTitle } from "../../components/tracd/TracdTitle";
import { BeerTracdSurvey } from "../../components/matter/beertracd/BeerTracdSurvey";
import { Carousel } from "../../components/matter/beertracd/Carousel";

// A two step component that allows the user to first select an IPFS storage provider and then allows them to supply the hash to the webapp.
const SouthernGolddigger = (): JSX.Element => {
  const router = useRouter();
  const { id } = router.query;
  const idn = useMemo(() => Number.parseInt(id as string), [id]);

  if (id === undefined) {
    return <div />;
  }

  return (
    <div className="flex flex-col bg-primary text-primary-content">
      {Number.isNaN(idn) || idn < 0 || idn > 47 ? (
        <h2 className="bg-error">Unrecognized bottle</h2>
      ) : (
        <>
          <div className="absolute w-3/4 p-8">
            <h2>
              <b>bottle #{idn}</b>
            </h2>
            <h3>
              <span>your unique beer: </span>
              <b>
                <span className="text-secondary">southern </span>
                <span className="text-accent">gold </span>
                <span className="text-secondary">digger lager</span>
              </b>
            </h3>
            <h3>
              <b>
                <TracdTitle subTitle="beer" />
              </b>
            </h3>
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
          <div className="p-8 text-sm">
            <div className="flex flex-col p-2 bg-secondary rounded-md text-primary">
              <div className="flex flex-row">
                <p className="w-full">
                  <b>energy mix for production</b>
                </p>
                <p className="w-full text-neutral">100% electric from grid</p>
              </div>
              <div className="flex flex-row pt-4">
                <p className="w-full">
                  <b>CO2 footprint of this beer</b>
                </p>
                <p className="w-full text-neutral">
                  0.25kgCO2e<sup>*</sup>
                </p>
              </div>
              <p className="text-xs pt-8">
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
          <div className="flex flex-row space-x-4 w-full p-8">
            <div className="flex flex-col justify-center items-center w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="golddigger punny image" src="/matter/golddigger.png" />
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <h4 className="w-full text-secondary">
                <b>
                  <span>southern </span>
                  <span className="text-accent">gold </span>
                  <span>digger lager</span>
                </b>
              </h4>
              <h2 className="w-full">
                <TracdTitle subTitle="beer" />
              </h2>
              <div>
                <p className="text-xs">brewed by Tom F</p>
                <p className="text-xs">techy stuff by Tom G</p>
              </div>
            </div>
          </div>
          <div className="bg-base-300 text-primary p-8">
            <h1 className="text-primary">
              <b>
                <TracdTitle />
              </b>
            </h1>
            <div className="pt-4 text-secondary">
              Did you know that only 9% of companies measure their total
              emissions comprehensively, while 81% confess to omitting some of
              their internal (Scopes 1 and 2) emissions. Meanwhile, 66% of
              organisations do not report any of their external (Scope 3)
              emissions<sup>[1]</sup>
            </div>
            <div className="text-secondary">
              <div className="pt-4">
                We believe that products that are &quot;sustainable&quot; should
                be able to prove it beyond any doubt.
              </div>
              <div className="pt-4">
                Our mission is to create truly net zero products with 100%
                traceability. That means tracing every step of the process, the
                raw materials, and the energy consumption from start to finish.​
              </div>
              <div className="pt-4">
                Every beer and its history will be recorded on the blockchain,
                unable to be changed, forever, for anyone to interrogate.​
              </div>
              <h3 className="pt-4">5% alcohol</h3>
              <h2>
                <b>
                  <span>100% proof</span>
                  <span className="text-accent">.</span>
                </b>
              </h2>
            </div>
            <div className="pt-8 text-secondary">
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
          <BeerTracdSurvey bottleId={idn} />
          <div className="flex flex-col p-8 space-y-2">
            <h2>
              <b>
                <span>Bonus Content</span>
                <span className="text-accent">.</span>
              </b>
            </h2>
            <Carousel
              uniqueId="bonus-content"
              images={[
                "/matter/beer/beers1.png",
                "/matter/beer/beers2.png",
                "/matter/beer/beers3.png",
                "/matter/beer/beers4.png",
                "/matter/beer/beers5.png",
                "/matter/beer/beers6.png",
                "/matter/beer/beers7.png",
                "/matter/beer/beers8.png",
              ]}
            />
          </div>
          <div className="bg-base-100 text-secondary flex flex-col p-8 space-y-2">
            <h2 className="text-primary">
              <b>
                <TracdTitle subTitle="beer" />
              </b>
            </h2>
            <p className="text-sm">by Tom French and Tom Gale</p>
            <p className="text-sm py-8">
              <i>{`Dedicated to our dear friend Ben “Crouton” Houghton who passed away four years ago. He loved a pint and brewed his own once too. We finished this page on the 4 year anniversary of his passing. Forever in our hearts <3.” 21/12/18`}</i>
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="mask mask-squircle" src="/matter/beer/ben.png" />
          </div>
        </>
      )}
    </div>
  );
};

export default SouthernGolddigger;
