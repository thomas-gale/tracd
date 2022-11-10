import { useRouter } from "next/router";
import React, { useEffect, useMemo } from "react";

// A two step component that allows the user to first select an IPFS storage provider and then allows them to supply the hash to the webapp.
const SouthernGolddigger = (): JSX.Element => {
  const router = useRouter();
  const { id } = router.query;
  const idn = useMemo(() => Number.parseInt(id as string), [id]);

  if (id === undefined) {
    return <div />;
  }

  return (
    <div className="h-full flex flex-col p-4 space-y-4">
      <div className="flex flex-col h-full p-4 space-y-2 rounded-xl bg-dark">
        {Number.isNaN(idn) || idn < 0 || idn > 24 ? (
          <h2 className="bg-red-400 text-light">Unrecognized bottle</h2>
        ) : (
          <h2 className="text-light">
            Information for bottle: <b>{idn}</b>
          </h2>
        )}
      </div>
    </div>
  );
};

export default SouthernGolddigger;
