import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { TracdTitle } from "../tracd/TracdTitle";

export const BeerTracd = () => {
  const router = useRouter();
  const [bottleNumber, setBottleNumber] = useState(-1);
  return (
    <div className="flex flex-row items-center justify-center h-full w-full">
      <div className="flex flex-col items-center justify-center h-full w-full">
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="flex justify-center">
            <TracdTitle />
          </h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              router.push(`/matter/southern-golddigger/?id=${bottleNumber}`);
            }}
          >
            <input
              className="input"
              type="number"
              placeholder="enter bottle #"
              onChange={(e) => setBottleNumber(parseInt(e.target.value))}
            />
          </form>
        </div>
      </div>
    </div>
  );
};
