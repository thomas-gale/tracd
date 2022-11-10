import { useRouter } from "next/router";
import React, { useEffect } from "react";

// A two step component that allows the user to first select an IPFS storage provider and then allows them to supply the hash to the webapp.
const SouthernGolddigger = (): JSX.Element => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const id_num = id as unknown as number;
    if (id_num < 0 || id_num > 24) {
      router.push("/404");
    }
  }, [id, router]);

  return (
    <div className="h-full flex flex-col p-4 space-y-4">
      <div className="flex flex-col h-full p-4 space-y-2 rounded-xl bg-dark">
        <h2 className="text-light">
          Information for bottle: <b>{id}</b>
        </h2>
      </div>
    </div>
  );
};

export default SouthernGolddigger;
