import { useRouter } from "next/router";
import Image from "next/image";
import React, { useMemo } from "react";

// A two step component that allows the user to first select an IPFS storage provider and then allows them to supply the hash to the webapp.
const SouthernGolddigger = (): JSX.Element => {
  const router = useRouter();
  const { id } = router.query;
  const idn = useMemo(() => Number.parseInt(id as string), [id]);

  if (id === undefined) {
    return <div />;
  }

  return (
    <div className="flex flex-col bg-primary text-neutral h-full p-4 space-y-2 bg-dark">
      {Number.isNaN(idn) || idn < 0 || idn > 24 ? (
        <h2 className="bg-error">Unrecognized bottle</h2>
      ) : (
        <h2>
          Information for bottle: <b>{idn}</b>
        </h2>
      )}
      <picture>
        <img alt="image of beer bottle" src="/matter/beer-bottle.png" />
      </picture>
    </div>
  );
};

export default SouthernGolddigger;
