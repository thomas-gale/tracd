import { useRouter } from "next/router";
import Image from "next/image";
import React, { useMemo } from "react";
import { InfoGrid } from "../../components/matter/InfoGrid";
import { TracdTitle } from "../../components/tracd/TracdTitle";

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
              bottle #<b>{idn}</b>
            </h2>
            <h3>
              <b>
                <TracdTitle />
              </b>{" "}
              southern gold digger lager
            </h3>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="image of beer bottle" src="/matter/beer-bottle.png" />
          <InfoGrid
            className="bg-primary p-4 px-4"
            rows={[
              {
                start: "07/11/22 20:49",
                label: "malt",
                info: (
                  <div className="flex flex-wrap">
                    {/* <span className="badge"></span> */}
                    <div className="badge badge-accent">
                      <p>southern gold digger 3L</p>
                    </div>
                  </div>
                ),
              },
              {
                start: "07/11/22 20:56",
                end: "07/11/22 21:03",
                label: "water added",
                info: (
                  <>
                    {/* <span className="badge">start: </span> */}
                    {/* <span className="badge">end: </span> */}
                    <span className="badge badge-accent">23l 23.5c</span>
                  </>
                ),
              },
              // {
              //   label: "hydrometer reading",
              //   info: <>07/11/22 21:07 10:4</>,
              // },
              // {
              //   label: "yeast added",
              //   info: "07/11/22 21:15",
              // },
              // {
              //   label: "fermentation 1",
              //   info: "07/11/22 21:31 - 19/11/22 11:50 ambient 20c",
              // },
              // {
              //   label: "hops added",
              //   info: "19/11/22 11:52 perle hops 50g",
              // },
              // {
              //   label: "fermentation 2",
              //   info: "19/11/22 11:54 - 28/11/22 19:14 ambient 22c",
              // },
              // {
              //   label: "hydrometer reading",
              //   info: "28/11/22 19:19 10:05 alcohol content 5%",
              // },
              // {
              //   label: "bottled",
              //   info: (
              //     <>
              //       <p>
              //         {"28/11/22 "}
              //         <b>{`19:${10 + idn} `}</b>
              //         {"bottle "}
              //         <b>{`#${idn} `}</b>
              //         {"330ml >PET< ​20ml priming sugar"}
              //       </p>
              //     </>
              //   ),
              // },
              // {
              //   label: "fermentation 3",
              //   info: "28/11/22 20:22 - 04/12/22 18:12 ambient 21c",
              // },
              // {
              //   label: "ready to drink",
              //   info: "04/12/22",
              // },
            ]}
          />
          <div className="flex flex-row space-x-4 w-full px-8">
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
          <div className="bg-base-100 text-neutral p-4 px-8">
            <h1>
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
                <span>
                  100% <TracdTitle subTitle="proof" />
                </span>
              </h2>
            </div>
            <div className="pt-4">
              <p className="break-words">
                [1]{" "}
                <a
                  className="underline"
                  href="https://www.bcg.com/publications/2021/measuring-emissions-accurately"
                >
                  BCG Survey 21
                </a>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SouthernGolddigger;
