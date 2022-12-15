import { useRouter } from "next/router";
import Image from "next/image";
import React, { useMemo } from "react";
import { InfoGrid } from "../../components/matter/InfoGrid";

// A two step component that allows the user to first select an IPFS storage provider and then allows them to supply the hash to the webapp.
const SouthernGolddigger = (): JSX.Element => {
  const router = useRouter();
  const { id } = router.query;
  const idn = useMemo(() => Number.parseInt(id as string), [id]);

  if (id === undefined) {
    return <div />;
  }

  return (
    <div className="flex flex-col bg-primary text-primary-content space-y-2 bg-dark">
      {Number.isNaN(idn) || idn < 0 || idn > 24 ? (
        <h2 className="bg-error">Unrecognized bottle</h2>
      ) : (
        <>
          <div className="absolute w-1/2 p-8">
            <h2>
              bottle #<b>{idn}</b>
            </h2>
            <h3>
              <b>beer.tracd</b> southern gold digger lager​
            </h3>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="image of beer bottle" src="/matter/beer-bottle.png" />
          <InfoGrid
            className="bg-primary p-4 px-8"
            rows={[
              {
                label: "malt",
                info: "07/11/22 20:49 southern gold digger 3L",
              },
              {
                label: "water added",
                info: "07/11 20:56 - 21:03 23l 23.5c",
              },
              {
                label: "hydrometer reading",
                info: "07/11/22 21:07 10:4",
              },
              {
                label: "yeast added",
                info: "07/11/22 21:15",
              },
              {
                label: "fermentation 1",
                info: "07/11/22 21:31 - 17/11/22 21:42 ambient 20c",
              },
              {
                label: "hops added",
                info: "17/11/22 21.11 perle hops 50g",
              },
              {
                label: "fermentation 2",
                info: "17/11/22 21.14 - 22/11/22 20.05 ambient 20c",
              },
              {
                label: "hydrometer reading",
                info: "23/11/22 21:33 10:04 alcohol content 5%",
              },
              {
                label: "bottled",
                info: (
                  <>
                    <p>
                      {"24/11/22 "}
                      <b>{`15:${12 + idn} `}</b>
                      {"bottle "}
                      <b>{`#${idn} `}</b>
                      {"330ml >PET< ​20ml priming sugar"}
                    </p>
                  </>
                ),
              },
              {
                label: "fermentation 3",
                info: "17/11/22 21.14 - 22/11/22 20.05 ambient 21c​",
              },
            ]}
          />
          <div className="bg-neutral text-neutral-content p-4 px-8">
            <h1>
              <span>tracd</span>
              <span className="text-accent">.</span>
            </h1>
            <div className="pt-2">
              Did you know that only 9% of companies measure their total
              emissions comprehensively, while 81% confess to omitting some of
              their internal (Scopes 1 and 2) emissions. Meanwhile, 66% of
              organisations do not report any of their external (Scope 3)
              emissions[1]
            </div>
            <div className="text-primary">
              <div className="pt-2">
                We believe that products that are &quot;sustainable&quot; should
                be able to prove it beyond any doubt.
              </div>
              <div className="pt-2">
                Our mission it to create truly net zero products with 100%
                traceability. That means tracing every step of the process, the
                raw materials, and the energy consumption from start to finish.​
              </div>
              <div className="pt-2">
                Every beer and its history will be recorded on the blockchain,
                unable to be changed, forever, for anyone to interrogate.​
              </div>
              <h3 className="pt-2">5% alcohol</h3>
              <h2 className="pt-2">
                <span>100% proof</span>
                <span className="text-accent">.</span>
              </h2>
            </div>
            <div className="pt-2">
              <p className="break-words">
                [1] BCG Survey 21
                https://www.bcg.com/publications/2021/measuring-emissions-accurately
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SouthernGolddigger;
